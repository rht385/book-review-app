# Book Reviews API

## Setup Instructions

1. Clone the repository:
    ```sh
    git clone git@github.com:rht385/book-review-app.git
    cd book-review-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the project and add your MongoDB connection string:
    ```env
    MONGODB_URI=mongodb+srv://alpha:Ranajasus3%40@cluster0.b2yeigg.mongodb.net/book-reviews?retryWrites=true&w=majority
    PORT=7000
    JWT_SECRET=reviewbooksandaddreviewcomments
    ```

4. Start the application:
    ```sh
    npm run serve
    ```

5. Open your browser and navigate to `http://localhost:7000`.

### API Endpoints

#### User Endpoints
- `POST /users/register`: Register a new user
- `POST /users/login`: Log in a user

#### Book Endpoints
- `GET /books`: Retrieve all books
- `GET /books/:id`: Retrieve a single book by ID
- `POST /books`: Create a new book

#### Review Endpoints
- `GET /reviews/:bookId`: Retrieve all reviews for a book
- `POST /reviews/:bookId`: Submit a new review for a book (requires JWT token)

### Usage Instructions

1. **Register a User**:
    ```sh
    POST /users/register
    {
        "username": "your_username",
        "email": "your_email",
        "password": "your_password"
    }
    ```

2. **Log in a User**:
    ```sh
    POST /users/login
    {
        "email": "your_email",
        "password": "your_password"
    }
    ```
    The response will include a JWT token.

3. **Submit a Review**:
    Include the JWT token in the `Authorization` header when submitting a review.
    ```sh
    POST /reviews/:bookId?userId={userId}
    {
        "rating": 4,
        "comment": "Great book!"
    }
    ```
    Header: `Authorization: Bearer <your_jwt_token>`
