# Afghan Proverbs & Sayings App

A web application that allows users to view, add, update, and delete Afghan proverbs and sayings in Dari, Pashto, and English. The project connects a React frontend to a RESTful Node.js/Express API backend.

## Features

- View a list of Afghan proverbs with translations and meanings
- View details of a single proverb
- Add new proverbs (Dari, Pashto, English, category, meaning)
- Edit and delete existing proverbs
- Filter proverbs by category (Bonus)
- Search proverbs by keyword (Bonus)
- Responsive design with user-friendly interface

## Tech Stack

*Frontend*
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS (or CSS/Bootstrap)

*Backend*
- Node.js
- Express
- Lowdb (JSON database)
- CORS & body-parser

## Getting Started

### Prerequisites

Make sure you have installed:
- Node.js
- npm (comes with Node.js)

---

## Backend Setup

1. Open a terminal and navigate to the backend folder:

   bash
   cd afghan-proverbs-backend
   

2. Install dependencies:

   bash
   npm install
   

3. Start the backend server:

   bash
   npm start
   

4. API will be running at: http://localhost:3000

---

## Frontend Setup

1. Open another terminal and navigate to the frontend folder:

   bash
   cd afghan-proverbs-frontend
   

2. Install frontend dependencies:

   bash
   npm install
   

3. Start the frontend:

   bash
   npm run dev
   

4. App will be running at: http://localhost:5173

---

## API Endpoints

- GET /proverbs — get all proverbs
- GET /proverbs/:id — get a single proverb
- POST /proverbs — add a new proverb
- PUT /proverbs/:id — update a proverb
- DELETE /proverbs/:id — delete a proverb
- GET /proverbs?category=wisdom — filter by category
- GET /proverbs/random — get a random proverb

---

## Example Proverb Format

json
{
  "id": 1,
  "textDari": "با یک دست دو هندوانه گرفت نتوان",
  "textPashto": "په یوه لاس دوې هندوانې نشې نیولی",
  "translationEn": "You can't hold two watermelons in one hand",
  "meaning": "Don’t take on more tasks than you can handle.",
  "category": "wisdom"
}


---

## Screenshots

(Add screenshots of your app here)

---

## Bonus Features

- [x] Filter proverbs by category
- [x] Search bar to filter by keywords
- [ ] Display random proverb
- [ ] Multiple categories per proverb

---

## Author

*Hasina Rahimy*

---

## License

This project is for educational purposes only.
