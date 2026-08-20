// Change this if your FastAPI service is hosted somewhere else.
const API_URL = "http://127.0.0.1:8000/predict";

const form = document.querySelector("#prediction-form");
const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector("#form-error");
const emptyState = document.querySelector("#empty-state");
const resultState = document.querySelector("#result-state");
const roomType = document.querySelector("#room-type");
const resultCopy = document.querySelector("#result-copy");
const confidenceValue = document.querySelector("#confidence-value");
const confidencePill = document.querySelector("#confidence-pill");
const probabilityList = document.querySelector("#probability-list");
const resultPanel = document.querySelector(".result-panel");

const titleCase = (value) => value.replace(/\b\w/g, (letter) => letter.toUpperCase());

function showState(state) {
  emptyState.hidden = false;
  resultState.hidden = state !== "result";
}

function readPayload() {
  const value = (id) => document.querySelector(`#${id}`).value.trim();
  return {
    neighbourhood_group: value("neighbourhood_group"),
    neighbourhood: value("neighbourhood"),
    latitude: Number(value("latitude")),
    longitude: Number(value("longitude")),
    price: Number(value("price")),
    minimum_nights: Number(value("minimum_nights")),
    // Empty optional fields become zero, appropriate for new or unknown listings.
    number_of_reviews: Number(value("number_of_reviews") || 0),
    reviews_per_month: Number(value("reviews_per_month") || 0),
    calculated_host_listings_count: Number(value("calculated_host_listings_count")),
    availability_365: Number(value("availability_365")),
  };
}

function validate(payload) {
  if (!payload.neighbourhood_group || !payload.neighbourhood) return "Please select a borough and enter a neighbourhood.";
  if (!Number.isFinite(payload.latitude) || !Number.isFinite(payload.longitude)) return "Enter a valid latitude and longitude.";
  if (!Number.isFinite(payload.price) || payload.price <= 0) return "Nightly price must be greater than $0.";
  if (!Number.isInteger(payload.minimum_nights) || payload.minimum_nights < 1 || payload.minimum_nights > 365) return "Minimum nights must be between 1 and 365.";
  if (!Number.isInteger(payload.availability_365) || payload.availability_365 < 0 || payload.availability_365 > 365) return "Availability must be between 0 and 365 days.";
  return "";
}

function normaliseProbabilities(response) {
  if (response.Probabilities) return response.Probabilities;
  // Supports the current API response order from the saved model.
  const classes = ["Entire home/apt", "Private room", "Shared room"];
  return Object.fromEntries(classes.map((name, index) => [name, response.Probability[index]]));
}

function renderResult(prediction, probabilities) {
  resultPanel.classList.add("has-result");
  const highest = Math.max(...Object.values(probabilities));
  const percentage = Math.round(highest * 100);
  roomType.textContent = prediction;
  resultCopy.textContent = `This listing most closely matches the characteristics of a ${prediction.toLowerCase()}.`;
  confidenceValue.textContent = `${percentage}%`;
  confidencePill.textContent = `${percentage}% confidence`;
  probabilityList.innerHTML = Object.entries(probabilities)
    .sort(([, a], [, b]) => b - a)
    .map(([name, probability]) => `<div class="probability-row"><span>${name}</span><span>${Math.round(probability * 100)}%</span><div class="probability-track"><div class="probability-fill" style="width:${probability * 100}%"></div></div></div>`)
    .join("");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorMessage.textContent = "";
  const payload = readPayload();
  const validationError = validate(payload);
  if (validationError) { errorMessage.textContent = validationError; return; }

  submitButton.disabled = true;
  submitButton.querySelector("span:first-child").textContent = "Getting prediction…";
  try {
    const response = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const body = await response.json();
    if (!response.ok) throw new Error(body.detail?.[0]?.msg || "The prediction request could not be completed.");
    renderResult(body.Predicted_room_type, normaliseProbabilities(body));
    showState("result");
  } catch (error) {
    showState("empty");
    errorMessage.textContent = error.message === "Failed to fetch" ? "Could not reach the API. Start FastAPI on port 8000, then try again." : error.message;
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector("span:first-child").textContent = "Generate prediction";
  }
});
