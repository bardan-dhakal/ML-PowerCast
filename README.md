# README.md for the energy-forecast-app

# Energy Consumption Forecasting Application

This project is an Energy Consumption Forecasting application that utilizes a React frontend, Flask backend, and MySQL database. The application aims to provide users with insights into energy consumption patterns and forecasts.

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

## Backend

The backend is built using Flask and serves as the API for the application. It handles data processing, database interactions, and serves requests from the frontend.

### Setup Instructions

1. Navigate to the `backend` directory.
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```
4. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
5. Run the Flask application:
   ```
   python src/app.py
   ```

## Frontend

The frontend is built using React and provides a user-friendly interface for interacting with the energy consumption data.

### Setup Instructions

1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Database

The application uses MySQL as the database to store energy consumption data. Ensure that the database is set up and configured correctly in the `backend/src/config.py` file.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.