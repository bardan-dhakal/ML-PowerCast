from flask import jsonify, request
from models import db, EnergyData, Prediction
from utils.database import DatabaseService
from datetime import datetime, timedelta


def register_routes(app):
    @app.route('/api/forecast', methods=['GET'])
    def get_forecast():
        return jsonify({
            'timestamps': ['2025-02-24T00:00:00', '2025-02-24T01:00:00'],
            'actual': [100, 120],
            'predicted': [98, 115]
        })
    
    @app.route('/api/health', methods=['GET'])
    def health_check():
        """Verify Database connectivity"""
        try:
            db.session.execute('SELECT 1')
            return jsonify({
                'status':'healthy',
                'database': 'connected',
                'timestamp': datetime.utcnow().isoformat()
            })
        except Exception as e:
            return jsonify({
                'status': 'unhealthy',
                'database': 'disconnected',
                'error': str(e),
                'timestamp': datetime.utcnow().isoformat()
            }), 500
        
    @app.route('/api/data/count', methods=['GET'])
    def get_data_count():
        """Get count of energy data records"""
        try:
            energy_count = EnergyData.query.count()
            prediction_count = Prediction.query.count()
            return jsonify({
                'energy_data_count': energy_count,
                'prediction_count': prediction_count,
                'total_records': energy_count + prediction_count
            })
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/data/sample', methods=['GET'])
    def get_data_sample():
        """Get sample energy data from database"""
        try:
            limit = request.args.get('limit', 10, type=int)
            data = EnergyData.query.order_by(EnergyData.timestamp.desc()).limit(limit).all()
            return jsonify({
                'data': [record.to_dict() for record in data],
                'count': len(data)
            })
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/status', methods=['GET'])
    def get_api_status():
        """Get API status and version information"""
        return jsonify({
            'status': 'running',
            'version': '1.0.0',
            'timestamp': datetime.utcnow().isoformat(),
            'endpoints': [
                '/api/forecast',
                '/api/health', 
                '/api/data/count',
                '/api/data/sample',
                '/api/status'
            ]
        })