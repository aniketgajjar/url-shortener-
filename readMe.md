# 🔗 URL Shortener API

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-black.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-4ea94b.svg)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A lightweight, robust RESTful URL Shortening Service built with **Node.js, Express.js, and MongoDB**. Designed with a modular architecture, this API handles URL validation, collision-safe short code generation, click tracking analytics, and redirection.

---

## ✨ Features

- **Short Code Generation**: Converts long original URLs into unique, compact short links.
- **Collision & Duplicate Handling**: Prevents duplicate DB entries and manages hash collisions gracefully.
- **URL Validation**: Ensures incoming URLs adhere to standard URI protocols before processing.
- **Click Analytics**: Tracks total access counts and timestamp logs for each short code.
- **Redirection Engine**: Fast HTTP `302/301` redirection from short paths to target destinations.
- **Resource Management**: Dedicated endpoints for retrieving analytics and deleting shortened URLs.
- **Modular MVC Architecture**: Clean separation of routes, controllers, models, and custom middleware.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Utilities**: `dotenv` (Environment Config), `cors` (Cross-Origin Resource Sharing)
- **API Testing**: Postman

---

## 📂 Directory Structure

```text
URL-Shortener/
├── src/
│   ├── config/
│   │   └── db.js            # Database connection setup
│   ├── controllers/
│   │   └── url.controller.js # Request handlers & business logic
│   ├── middlewares/
│   │   └── url.middleware.js # Validation & custom middleware
│   ├── models/
│   │   └── url.model.js      # Mongoose schema definitions
│   ├── routes/
│   │   └── url.routes.js     # Express route handlers
│   └── app.js                # Express app configuration
├── .env.example              # Template for environment variables
├── .gitignore                # Ignored Git files
├── server.js                 # Entry point
├── package.json
└── README.md


| **Method** | **Endpoint**                     | **Description**                          |
| ---------- | -------------------------------- | ---------------------------------------- |
| `POST`     | `/api/urls`                      | Create a shortened URL                   |
| `GET`      | `/:shortCode`                    | Redirect to the original long URL        |
| `GET`      | `/api/urls/:shortCode/analytics` | Fetch click counts and URL analytics     |
| `DELETE`   | `/api/urls/:shortCode`           | Remove a shortened URL from the database |


Installation & Setup
1. Clone the Repository
git clone https://github.com/YOUR_USERNAME/url-shortener.git
cd url-shortener
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env file in the root directory:

PORT=3000
MONGO_URI=mongodb://localhost:27017/url-shortener
BASE_URL=http://localhost:3000
4. Run the Server
# Development mode
npm run dev

# Production mode
npm start

The server will run on:

http://localhost:3000
🔄 Request Flow Architecture
Client Request
      ↓
Express Route
      ↓
Middleware (Validation)
      ↓
Controller
      ↓
Mongoose Model
      ↓
MongoDB
      ↓
Client Response / HTTP Redirect
🎯 Key Learning Objectives
Designing RESTful API architectures.
Implementing separation of concerns using Controllers, Models, Routes, and Middleware.
Managing asynchronous database operations using Mongoose and Async/Await.
Designing schemas for URL and click analytics.
Generating unique short codes.
Validating user input.
Handling duplicate URLs and short-code collisions.
Implementing HTTP redirects.
Practicing Git and GitHub workflow.
🧪 Testing Flow
Create Short URL
      ↓
Copy Generated Short URL
      ↓
Open Short URL
      ↓
Verify Redirection
      ↓
Generate Clicks
      ↓
Check Analytics
      ↓
Delete Short URL
      ↓
Verify Deletion
🎯 Project Status

Completed — Practice Project

This project was built to strengthen backend development fundamentals and understand how a URL shortening service works using Node.js, Express.js, MongoDB, and Mongoose.

👨‍💻 Author

Ani Gajjar

Full-Stack / Backend Developer

GitHub: https://github.com/YOUR_USERNAME
LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN