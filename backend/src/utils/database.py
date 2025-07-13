from models import db, EnergyData, Prediction
import pandas as pd
from datetime import datetime, timedelta
import logging

logger = logging.getLogger(__name__)

class DatabaseService:
    @staticmethod
    def init_database(app):
        """Initialize database tables"""
        # Initialize SQLAlchemy with the Flask app
        db.init_app(app)
        
        with app.app_context():
            try:
                db.create_all()
                logger.info("Database tables created successfully")
            except Exception as e:
                logger.error(f"Error creating database tables: {e}")
                raise
    
    @staticmethod
    def load_sample_data():
        """Load sample energy consumption data"""
        try:
            # Check if data already exists
            if EnergyData.query.first():
                logger.info("Sample data already exists")
                return
            
            # Create sample data (you can replace this with real data loading)
            sample_data = []
            base_time = datetime.now() - timedelta(days=30)
            
            for i in range(720):  # 30 days * 24 hours
                timestamp = base_time + timedelta(hours=i)
                consumption = 100 + (i % 24) * 5 + (timestamp.weekday() * 10)
                
                data = EnergyData(
                    timestamp=timestamp,
                    consumption_mw=consumption,
                    region="PJM",  # You can change this to match your data
                    created_at=datetime.utcnow()
                )
                sample_data.append(data)
            
            db.session.add_all(sample_data)
            db.session.commit()
            logger.info(f"Loaded {len(sample_data)} sample records")
            
        except Exception as e:
            logger.error(f"Error loading sample data: {e}")
            db.session.rollback()
            raise
    
    @staticmethod
    def get_energy_data(start_date=None, end_date=None, limit=100):
        """Retrieve energy consumption data"""
        query = EnergyData.query
        
        if start_date:
            query = query.filter(EnergyData.timestamp >= start_date)
        if end_date:
            query = query.filter(EnergyData.timestamp <= end_date)
        
        return query.order_by(EnergyData.timestamp.desc()).limit(limit).all()
    
    @staticmethod
    def save_prediction(timestamp, predicted_consumption, region, model_version="v1.0"):
        """Save a new prediction"""
        try:
            prediction = Prediction(
                timestamp=timestamp,
                predicted_consumption=predicted_consumption,
                region=region,
                model_version=model_version
            )
            db.session.add(prediction)
            db.session.commit()
            return prediction
        except Exception as e:
            logger.error(f"Error saving prediction: {e}")
            db.session.rollback()
            raise