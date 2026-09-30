# Listing-Lens 🏠

> **An intelligent machine learning system for automated Airbnb listing classification**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/Python-3.8%2B-blue)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.95%2B-009485.svg)](https://fastapi.tiangolo.com/)
[![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-1.0%2B-F7931E.svg)](https://scikit-learn.org/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Dataset](#dataset)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Model Architecture](#model-architecture)
- [API Documentation](#api-documentation)
- [Results & Performance](#results--performance)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Listing-Lens** is a production-ready machine learning system that automates the classification of New York City Airbnb listings into room types. By leveraging advanced data science techniques and a full-stack web application, this project bridges the gap between predictive modeling and practical real-world applications.

The system analyzes comprehensive property features—including geographic coordinates, pricing, review metrics, and host information—to accurately classify listings into three categories:

- **Entire home/apartment** - Full properties available for exclusive rental
- **Private room** - Single rooms with shared common areas
- **Shared room** - Rooms shared among multiple guests

### Why Listing-Lens?

Understanding room type classification is crucial for:
- **Market Analysis**: Identifying property type distributions across neighborhoods
- **Pricing Strategy**: Informing optimal pricing based on property characteristics
- **Host Insights**: Helping hosts position their listings effectively
- **Platform Intelligence**: Enabling platforms to provide better recommendations

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| **Predictive Modeling** | Multi-class classification algorithm trained on 48,895+ real-world NYC Airbnb listings with 95%+ accuracy |
| **RESTful API** | Production-ready FastAPI backend with async processing, CORS support, and comprehensive input validation |
| **Interactive Dashboard** | Responsive web interface for real-time predictions with confidence scoring |
| **Confidence Scoring** | Probability distributions for each prediction class enabling decision-making confidence assessment |
| **Data-Driven Insights** | Comprehensive exploratory data analysis (EDA) with interactive visualizations of market trends and patterns |
| **Field Validation** | Robust input validation for geographic coordinates, pricing ranges, temporal data, and business logic constraints |
| **Error Handling** | Graceful error management with detailed feedback for debugging and user experience |

---

## 🛠️ Technology Stack

### Backend
| Technology | Purpose | Version |
|-----------|---------|---------|
| **FastAPI** | Modern async web framework for building APIs | 0.95+ |
| **Scikit-Learn** | Machine learning pipeline and preprocessing | 1.0+ |
| **Pandas** | Data manipulation and analysis | 1.3+ |
| **NumPy** | Numerical computing | 1.20+ |
| **Joblib** | Model serialization and persistence | 1.0+ |
| **Uvicorn** | ASGI server for FastAPI | 0.20+ |

### Frontend
| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup structure |
| **CSS3** | Responsive design with Grid/Flexbox |
| **Vanilla JavaScript** | DOM manipulation and API communication |
| **Fetch API** | Async HTTP requests with async/await |

### Data Science & Analysis
| Technology | Purpose |
|-----------|---------|
| **Jupyter Notebook** | Interactive data exploration and model development |
| **Matplotlib** | Statistical visualization |
| **Seaborn** | Advanced statistical graphics |
| **Pandas** | Data manipulation and analysis |

### Deployment
| Component | Details |
|-----------|---------|
| **Backend Hosting** | Render (serverless platform) |
| **Container Format** | Production-ready containerized application |
| **Middleware** | CORS middleware for cross-origin API requests |

---

## 📁 Project Structure
