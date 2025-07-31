# ML-PowerCast: Energy Consumption Forecasting Platform

## Overview

ML-PowerCast is a comprehensive energy consumption forecasting platform that combines machine learning with modern web technologies to provide accurate energy demand predictions. The system features an interactive web application with real-time data visualization, supporting multiple energy market regions across the United States.

## 🏗️ Architecture

The project follows a modern full-stack architecture with clear separation of concerns:

```
ML-PowerCast/
├── backend/                 # Flask REST API
│   ├── src/
│   │   ├── app.py          # Main Flask application
│   │   ├── config.py       # Configuration management
│   │   ├── models/         # Database models
│   │   ├── routes/         # API endpoints
│   │   └── utils/          # Database utilities
│   ├── requirements.txt    # Python dependencies
│   └── venv/              # Virtual environment
├── frontend/               # React + Vite application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API integration
│   │   └── App.jsx         # Main application
│   └── package.json        # Node.js dependencies
├── energy_consumption_model.pkl  # Trained ML model
├── energy-consumption-forecasting-main.ipynb  # Model development
└── requirements.txt        # Global dependencies
```

## 🚀 Features

### Core Functionality
- **Energy Consumption Forecasting**: ML-powered predictions using XGBoost
- **Multi-Region Support**: Coverage of major US energy markets (CAISO, ERCOT, PJM, MISO, SPP, NYISO, ISO-NE)
- **Interactive Visualization**: Real-time charts and maps using Chart.js and React
- **RESTful API**: Comprehensive backend with health checks and data management
- **Database Integration**: MySQL database with SQLAlchemy ORM

### Technical Highlights
- **Machine Learning**: XGBoost regression model with feature engineering
- **Time Series Analysis**: Advanced forecasting with temporal features
- **Real-time Data**: Live energy consumption data processing
- **Responsive Design**: Modern UI with Tailwind CSS
- **API Documentation**: Built-in endpoint discovery and health monitoring

## 🛠️ Technology Stack

### Backend
- **Framework**: Flask 3.1.0
- **Database**: MySQL with SQLAlchemy ORM
- **CORS**: Flask-CORS for cross-origin requests
- **Environment**: Python virtual environment

### Frontend
- **Framework**: React 18.2.0 with Vite
- **Styling**: Tailwind CSS 4.1.11
- **Charts**: Chart.js 4.4.8 with react-chartjs-2
- **Maps**: react-simple-maps for geographic visualization
- **HTTP Client**: Axios for API communication

### Machine Learning
- **Model**: XGBoost 2.1.3
- **Data Processing**: Pandas 2.2.3, NumPy 2.2.1
- **Visualization**: Matplotlib 3.10.0, Seaborn 0.13.2
- **Metrics**: RMSE (Root Mean Square Error) evaluation

## 📊 Data Model

### Energy Data Schema
```sql
energy_data:
- id (Primary Key)
- timestamp (DateTime, indexed)
- consumption_mw (Float)
- region (String, indexed)
- created_at (DateTime)

predictions:
- id (Primary Key)
- timestamp (DateTime, indexed)
- predicted_consumption (Float)
- region (String, indexed)
- model_version (String)
- created_at (DateTime)
```

### Supported Energy Regions
- **CAISO**: California Independent System Operator
- **ERCOT**: Electric Reliability Council of Texas
- **PJM**: PJM Interconnection
- **MISO**: Midcontinent Independent System Operator
- **SPP**: Southwest Power Pool
- **NYISO**: New York Independent System Operator
- **ISO-NE**: ISO New England

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- MySQL 8.0+
- Git

### Backend Setup

1. **Clone and navigate to backend:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure database:**
   Create a `.env` file in the backend directory:
   ```env
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=energy_forecast
   SECRET_KEY=your_secret_key
   ```

5. **Run the application:**
   ```bash
   python src/app.py
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

### Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 📡 API Endpoints

### Core Endpoints
- `GET /api/health` - System health check
- `GET /api/status` - API status and version info
- `GET /api/forecast` - Energy consumption forecasts
- `GET /api/data/count` - Database record counts
- `GET /api/data/sample` - Sample energy data

### Response Format
```json
{
  "status": "success",
  "data": [...],
  "timestamp": "2025-01-27T10:30:00Z"
}
```

## 🤖 Machine Learning Model

### Model Details
- **Algorithm**: XGBoost Regressor
- **Features**: Temporal features (hour, day, month, year, dayofweek)
- **Target**: Energy consumption in MW
- **Performance**: RMSE of 3721.75 on test set
- **Training Data**: PJM hourly energy consumption data

### Feature Engineering
```python
def create_features(df):
    df['hour'] = df.index.hour
    df['dayofweek'] = df.index.dayofweek
    df['quarter'] = df.index.quarter
    df['month'] = df.index.month
    df['year'] = df.index.year
    df['dayofyear'] = df.index.dayofyear
    df['dayofmonth'] = df.index.day
    df['weekofyear'] = df.index.isocalendar().week
    return df
```

## 🔧 Development

### Project Structure
- **Modular Design**: Clear separation between frontend, backend, and ML components
- **Environment Management**: Virtual environments for Python dependencies
- **Configuration**: Environment-based configuration with dotenv
- **Logging**: Comprehensive logging throughout the application

### Code Quality
- **ESLint**: Frontend code linting
- **TypeScript**: Type definitions for React components
- **SQLAlchemy**: Database abstraction and migration support
- **Error Handling**: Comprehensive error handling and logging

## 🚀 Deployment

### Production Considerations
- Set `ENV = 'production'` in config.py
- Configure production database credentials
- Set up proper CORS policies
- Implement authentication and authorization
- Use production-grade WSGI server (Gunicorn)
- Set up reverse proxy (Nginx)

### Environment Variables
```env
# Database
DB_USER=production_user
DB_PASSWORD=secure_password
DB_HOST=production_host
DB_PORT=3306
DB_NAME=energy_forecast_prod

# Security
SECRET_KEY=your_production_secret_key
ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow PEP 8 for Python code
- Use ESLint for JavaScript/React code
- Write comprehensive tests
- Update documentation for new features
- Ensure backward compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- PJM Interconnection for energy consumption data
- XGBoost community for the machine learning framework
- React and Flask communities for excellent documentation
- Chart.js for powerful visualization capabilities

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the API documentation at `/api/status`
- Review the backend logs for debugging information

---

**ML-PowerCast** - Empowering energy forecasting with machine learning and modern web technologies.
