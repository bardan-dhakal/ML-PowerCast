from flask import Flask
from flask_cors import CORS
from config import Config
from routes import register_routes
from utils.database import DatabaseService
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)
    
    # Initialize database
    try:
        DatabaseService.init_database(app)
        logger.info("Database initialized successfully")
    except Exception as e:
        logger.error(f"Database initialization failed: {e}")
        raise
    
    # Register routes
    register_routes(app)
    
    print("ENV config value:", app.config.get('ENV'))

    # Load sample data (only in development)
    if app.config.get('ENV') == 'development':
        print("Sample data block is running!")  # Add this line    
        try:
            DatabaseService.load_sample_data()
            logger.info("Sample data loaded successfully")
        except Exception as e:
            logger.warning(f"Could not load sample data: {e}")
    
    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)