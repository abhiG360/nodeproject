# nodeproject
Backend API for managing job seeker services

# Worko.ai Backend API

## Description

This project implements a backend API for Worko.ai, facilitating job seekers to request referrals and access career services like resume review, interview preparation, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   $ git clone <repository_url>
   $ cd worko-backend

Install dependencies:

$ npm install

Set up environment variables:
Create a .env file in the root directory with the following variables:
PORT=3000
MONGODB_URI=<your_mongodb_uri>
SECRET_KEY=<your_secret_key>

Start the server:

$ npm run dev

The server will start running on http://localhost:3000

##Usage
The API provides endpoints to manage user data and career services. Here are some example endpoints:

GET /worko/user: Get a list of all users.
GET /worko/user/:userId: Get details of a specific user.
POST /worko/user: Create a new user.
PUT /worko/user/:userId: Update user details.
PATCH /worko/user/:userId: Update specific user details.
DELETE /worko/user/:userId: Soft delete a user.
Ensure you have valid JWT token for authenticated routes.

##API Documentation
/worko/user
GET /worko/user
Retrieve a list of all users.

GET /worko/user/:userId
Get details of a specific user by ID.

Request Parameters:

userId: ID of the user to fetch.
POST /worko/user
Create a new user.

Request Body:

{
  "email": "user@example.com",
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "zipCode": "10001"
}

PUT /worko/user/:userId
Update user details.

Request Parameters:

userId: ID of the user to update.
Request Body:

{
  "email": "updateduser@example.com",
  "name": "Updated Name"
}

PATCH /worko/user/:userId
Update specific user details.

Request Parameters:

userId: ID of the user to update.
Request Body:
{
  "city": "San Francisco"
}


DELETE /worko/user/:userId
Soft delete a user by marking as inactive.

Request Parameters:

userId: ID of the user to delete.

##Technologies Used
Node.js
Express
MongoDB (Mongoose)
Joi for validation
JWT for authentication
dotenv for environment variables
##Testing
Unit tests are implemented using Jest and Supertest to achieve at least 60% code coverage.

Run tests:
$ npm test

##Contributing
Contributions are welcome! Fork the repository and submit a pull request with your enhancements.


##License
This project is licensed under the MIT License - see the LICENSE file for details.
