# README for the Backend of the Energy Forecast App

NOTE: The environment is set to 'development' in config.py by default. This ensures that sample data is loaded automatically for development and testing. Remove or change this setting for production deployments.

This README file provides instructions for setting up and running the backend of the Energy Forecast App, which is built using Flask and connects to a MySQL database.

## Project Structure

```
energy-forecast-app
├── backend
│   ├── src
│   │   ├── app.py
│   │   ├── config.py
│   │   ├── models
│   │   │   └── __init__.py
│   │   ├── routes
│   │   │   └── __init__.py
│   │   └── utils
│   │       └── __init__.py
│   ├── requirements.txt
│   └── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd energy-forecast-app/backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the database:**
   Update the `config.py` file with your database connection details.

5. **Run the application:**
   ```bash
   python src/app.py
   ```

## Usage

The backend API provides endpoints for fetching and managing energy consumption data. You can access the API at `http://localhost:5000`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.