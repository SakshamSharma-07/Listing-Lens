# Listing-Lens

## 🏠 Airbnb Room Type Classification System

A machine learning-powered web application that predicts Airbnb listing room types based on comprehensive property features. Built with Python and deployed as a full-stack application combining data science with modern web technologies.

---

## 📋 Overview

**Listing-Lens** is an end-to-end machine learning project that classifies NYC Airbnb listings into three room type categories:
- Entire home/apartment
- Private room  
- Shared room

The system combines advanced data analysis, predictive modeling, and an intuitive web interface to deliver actionable insights on property classifications based on market factors like pricing, location, availability, and guest reviews.

**Dataset**: 48,895 NYC Airbnb listings from 2019 with 16 features including geographic coordinates, pricing, review metrics, and host information.

---

## 🎯 Key Features

- **Predictive Modeling**: Machine learning classification trained on real-world Airbnb data
- **RESTful API**: Production-ready FastAPI backend with CORS support and input validation
- **Interactive Dashboard**: Responsive web interface for real-time predictions
- **Confidence Scoring**: Probability distributions for each prediction class
- **Data-Driven Insights**: Comprehensive EDA with visualizations of market trends
- **Field Validation**: Robust input validation for geographic coordinates, pricing, and temporal data

---

## 🛠️ Technology Stack

**Backend**
- **Framework**: FastAPI (modern async Python web framework)
- **ML Framework**: Scikit-Learn (model pipeline and preprocessing)
- **Data Processing**: Pandas, NumPy
- **Serialization**: Joblib (model persistence)

**Frontend**
- **UI**: HTML5, CSS3, vanilla JavaScript
- **Styling**: Modern responsive design with CSS Grid/Flexbox
- **API Communication**: Fetch API with async/await

**Data Science**
- **Analysis & Visualization**: Jupyter Notebook, Matplotlib, Seaborn
- **Dataset**: CSV (7.07 MB, 48,895 records)

**Deployment**
- **Backend Hosting**: Render
- **Architecture**: Containerized with CORS middleware for cross-origin requests

---

## 📁 Project Structure
