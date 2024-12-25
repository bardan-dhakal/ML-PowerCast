import streamlit as st
import pandas as pd
import pickle



# Load the trained model
def load_model():
    with open('energy_consumption_model.pkl', 'rb') as file:
        data = pickle.load(file)
    return data

data = load_model()



# App title
st.title("XGBoost Regression Model for predicting Energy Consumption")
st.write("This web application predicts the energy consumption in various regions of the United States using a trained XGBoost regression model.")

st.components.v1.html("""
    <div id="map" style="width: 100%; height: 500px; background-color: #f0f0f0;">
        <h2>Map will be integrated here</h2>
    </div>
""", height=500)