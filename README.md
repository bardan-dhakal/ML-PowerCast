# Energy Consumption Forecasting Project

## Overview
This project combines machine learning and software engineering to create an interactive web application for energy consumption forecasting. The system uses historical energy consumption data to predict future usage patterns using advanced time series forecasting techniques.

## Project Structure
```
energy-forecast-app
├── backend
│   ├── src
│   ├── requirements.txt
│   └── README.md
└── frontend
    ├── src
    ├── package.json
    └── README.md
```

## Technical Components

### Machine Learning Pipeline
- **Model Architecture**: LSTM (Long Short-Term Memory) neural network
- **Input Features**: 
  - Historical energy consumption patterns
  - Time-based features (hour, day, month, weekday)
  - Weather data (temperature, humidity)
- **Performance Metrics**: 
  - RMSE (Root Mean Square Error)
  - MAE (Mean Absolute Error)
  - Forecasting accuracy: 85%

### Data Processing Pipeline
1. **Preprocessing**
   - Time series resampling
   - Missing value handling
   - Feature engineering
   - Normalization using StandardScaler

2. **Model Training**
   ```python
   model = Sequential([
       LSTM(50, activation='relu', input_shape=(sequence_length, n_features)),
       Dense(1)
   ])
   ```
   - Sequence length: 24 hours
   - Training/Validation split: 80/20
   - Optimizer: Adam
   - Loss function: Mean Squared Error

### Software Stack
- **Frontend**: React.js with Chart.js for visualization
- **Backend**: Flask REST API
- **Database**: MySQL for historical and predicted data storage

## Setup Instructions

### Backend Setup
1. Navigate to the `backend` directory
2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
3. Activate the virtual environment:
   ```bash
   venv\Scripts\activate  # Windows
   source venv/bin/activate  # macOS/Linux
   ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Run Flask application:
   ```bash
   python src/app.py
   ```

### Frontend Setup
1. Navigate to the `frontend` directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start React application:
   ```bash
   npm start
   ```

### Database Configuration
The application uses MySQL. Configure database settings in `backend/src/config.py`.

## Future Improvements
1. **Machine Learning**
   - Implement ensemble methods
   - Add external features (weather forecasts)
   - Experiment with transformer architectures

2. **Software Engineering**
   - Real-time model updates
   - A/B testing infrastructure
   - Model versioning

## Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues for improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.