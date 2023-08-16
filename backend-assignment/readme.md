This project is using Express, Node, MongoDB as db.

Getting Started
Follow these instructions to get the project up and running on your local machine.

Prerequisites
Make sure you have the following software installed:
 - Node.js

Installation
- Clone the repository or download the source code.

- Open a terminal/command prompt and navigate to the project directory.

- Install the project dependencies by running the following command:
  - npm install

Configuration
- Create a .env file in the root directory of the project.

Add the following environment variables to the .env file and provide appropriate values:

- MONGODB_URI=mongodb://localhost:27017/backend_assignment
- JWT_SECRET=your_secret_key_here

MONGODB_URI: The MongoDB connection URI (replace with your MongoDB server URI).
JWT_SECRET: A secret key for JWT token generation and validation.

For populating database
Before running the application, you need to populate the database with initial data. Run the following command:
- npm run populate:db
This command will execute the populate_db.js script to populate the database with data.json data.

Starting the Server
To start the server, run the following command:
- npm start
The server will start.


Dependencies
This project relies on the following libraries and packages:

bcryptjs: Password hashing and comparison
dotenv: Environment variable management
express: Web application framework
jsonwebtoken: JSON Web Token (JWT) generation and verification
mongoose: MongoDB object modeling
passport: Authentication middleware
passport-jwt: Passport strategy for authenticating with a JWT