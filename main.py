from fastapi import FastAPI
import pandas as pd
import joblib 
from pydantic import BaseModel,Field
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("Model_Pipeline.pkl")

COLUMNS = ['neighbourhood_group', 'neighbourhood', 'latitude', 'longitude',
       'price', 'minimum_nights', 'number_of_reviews',
       'reviews_per_month', 'calculated_host_listings_count',
       'availability_365']

class Features(BaseModel):
    latitude: float = Field(..., ge=-90, le=90)
    longitude: float = Field(..., ge=-90, le=90)
    price: float = Field(..., gt=0)
    minimum_nights: int = Field(..., ge=1, le=365)
    number_of_reviews: int = Field(..., ge=0)
    reviews_per_month: float = Field(..., ge=0) 
    calculated_host_listings_count: int = Field(..., ge=0)
    availability_365: int = Field(..., ge=0, le=365)
    neighbourhood_group: str = Field(..., min_length=1)
    neighbourhood: str = Field(..., min_length=1)


@app.get("/")
def greet():
    return "Hello!"

@app.post("/predict")
def predict(features:Features):
    row = pd.DataFrame([features.dict()], columns=COLUMNS)
    prediction = model.predict(row)
    probability = model.predict_proba(row)

    return {
        "Predicted_room_type": prediction[0],
        "Probability": probability.tolist()[0]
    }
