from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class EnergyData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False)
    consumption = db.Column(db.Float, nullable=False)
    prediction = db.Column(db.Float)