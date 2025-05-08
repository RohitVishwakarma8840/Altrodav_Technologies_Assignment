# Backend Assignment

This is a backend application for managing user authentication, activities, and bookings. It is built using Node.js, Express.js, and MongoDB.

---

## Features

- **User Authentication**: Register and login users.
- **Activity Management**: Create, list, and manage activities.
- **Booking System**: Book activities and retrieve user-specific bookings.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/backend-assignment.git
   cd backend-assignment


Install dependencies:
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string


Start the server:
npm start
or for developement 
npm run dev 

API Endpoints
Authentication
Register User
POST /api/auth/register
Body

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Login User
POST /api/auth/login
Body:

{
  "email": "john@example.com",
  "password": "password123"
}

Activities
List All Activities
GET /api/activities
Response:

[
  {
    "_id": "activity_id",
    "title": "Yoga Class",
    "description": "A relaxing yoga session.",
    "location": "Community Center",
    "date": "2025-05-10",
    "time": "10:00 AM"
  }
]


Create Activity
POST /api/activities
Body:

{
  "title": "Cricket Session",
  "description": "A cricket session for all levels.",
  "location": "Community Center, Main Street",
  "date": "2025-05-15",
  "time": "10:00 AM"
}

Bookings
Book an Activity
POST /api/bookings
Body:

{
  "activityId": "activity_id",
  "userId": "user_id"
}

Get User Bookings
GET /api/bookings
Body:
{
  "userId": "user_id"
}



Project Structure

Backend_Assignment/
├── controllers/
│   ├── activityController.js
│   ├── bookingController.js
│   └── authController.js
├── models/
│   ├── Activity.js
│   ├── Booking.js
│   └── User.js
├── routes/
│   ├── activityRoutes.js
│   ├── bookingRoutes.js
│   └── authRoutes.js
├── app.js
├── package.json
└── .env

Technologies Used
Node.js: Backend runtime.
Express.js: Web framework.
MongoDB: Database for storing data.
Mongoose: ODM for MongoDB.
dotenv: Environment variable management.
Postman: API testing.

















