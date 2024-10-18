# Personal Blog APP

This is a **Personal Blog API** built using **Node.js** and **MongoDB**. It allows users to create, read, update, and delete blog posts, as well as add and manage comments associated with each post. The API also supports storing user details and linking users with posts and comments.

## Features

- User Management
- Post Management
- Comment Management
- Create, View, Update and Delete Post

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt.js
- body-parser
- cors
- dotenv
- nodemon

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sujanbutani/Task-Management-p-2-.git

2. Install dependencies:

    ```bash
    npm install

3. .env file

     ```
    MONGO_URI=your_mongo_db_connection_string
    PORT=5000
    ```

4. Start the development server:

   ```bash
   npm start
   ```

## API Endpoints

### User Api
1. User Api (Post) :- localhost:5000/api/users
2. User Api (Get - Alluser) :- localhost:5000/api/users
3. User Api (Get - Oneuser) :- localhost:5000/api/users/<user_id>

### Post Api
1. Post Api (Post) :- localhost:5000/api/posts
2. Post Api (Get - Allpost) :- localhost:5000/api/posts
3. Post Api (Get - Onepost) :- localhost:5000/api/posts/<post_id>
4. Post Api (Update) :- localhost:5000/api/posts/<post_id>
5. Post Api (Delete) :- localhost:5000/api/posts/<post_id>

### Comment Api
1. Comment Api (Post) :- localhost:5000/api/comments
2. Comment Api (Get - Onecomm) :- localhost:5000/api/comments/<post_id>
3. Comment Api (Update) :- localhost:5000/api/comments/<comment_id>
4. Comment Api (Delete) :- localhost:5000/api/comments/<comment_id>

## Environment Variables
- PORT: The port for the server to listen on.
- MONGODB_URI: Your MongoDB connection string.
