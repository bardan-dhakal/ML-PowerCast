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
st.write("This web application predicts the energy consumption of various regions in the United States using a trained XGBoost regression model.")