from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class EnergyData(db.Model):
    __tablename__ = 'energy_data'
    
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False, index=True)
    consumption_mw = db.Column(db.Float, nullable=False)
    region = db.Column(db.String(100), nullable=False, index=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'timestamp': self.timestamp.isoformat(),
            'consumption_mw': self.consumption_mw,
            'region': self.region,
            'created_at': self.created_at.isoformat()
        }

class Prediction(db.Model):
    __tablename__ = 'predictions'
    
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False, index=True)
    predicted_consumption = db.Column(db.Float, nullable=False)
    region = db.Column(db.String(100), nullable=False, index=True)
    model_version = db.Column(db.String(50), default="v1.0")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'timestamp': self.timestamp.isoformat(),
            'predicted_consumption': self.predicted_consumption,
            'region': self.region,
            'model_version': self.model_version,
            'created_at': self.created_at.isoformat()
        }