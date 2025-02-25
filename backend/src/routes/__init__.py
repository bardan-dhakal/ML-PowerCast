from flask import jsonify
from models import db, EnergyData

def register_routes(app):
    @app.route('/api/forecast', methods=['GET'])
    def get_forecast():
        return jsonify({
            'timestamps': ['2025-02-24T00:00:00', '2025-02-24T01:00:00'],
            'actual': [100, 120],
            'predicted': [98, 115]
        })
    
    with app.app_context():
        db.init_app(app)
        db.create_all()