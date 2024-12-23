import streamlit as st
import pandas as pd
import pickle

def load_model():
    with open('energy_consumption_model.pkl', 'rb') as file:
        data = pickle.load(file)
    return data

data = load_model()