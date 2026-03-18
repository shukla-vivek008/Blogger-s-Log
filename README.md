# Blogger's Log

![Blogger's Log Banner](https://via.placeholder.com/1200x300/007bff/ffffff?text=Blogger's+Log)

A modern, full-stack blogging platform designed for seamless content creation and sharing.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/shukla-vivek008/Blogger-s-Log/actions)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/shukla-vivek008/Blogger-s-Log)
[![Contributors](https://img.shields.io/github/contributors/shukla-vivek008/Blogger-s-Log)](https://github.com/shukla-vivek008/Blogger-s-Log/graphs/contributors)

## Overview

Blogger's Log is a comprehensive blogging platform that empowers users to create, publish, and manage their blog posts with ease. It features robust user authentication, a rich text editor for content creation, image upload capabilities, and a responsive user interface. This project is built as a full-stack application, separating the client-side UI from the server-side API.

The platform is ideal for individuals or communities looking for a straightforward yet powerful tool to share their thoughts and stories online.

## Features

*   **User Authentication**: Secure user registration, login, and session management powered by Clerk.
*   **CRUD Operations for Posts**: Create, Read, Update, and Delete blog posts.
*   **Rich Text Editor**: Craft engaging content with a feature-rich editor (React Quill).
*   **Image Uploads**: Seamlessly upload and manage images for your blog posts using ImageKit.
*   **Commenting System**: Engage with readers through an integrated comment section.
*   **Infinite Scrolling**: Efficiently load more posts as users scroll, enhancing user experience.
*   **Responsive Design**: A modern, mobile-first UI built with TailwindCSS.
*   **Secure API**: Protected API routes with Clerk middleware for authenticated access.
*   **Database Integration**: Persistent storage for users, posts, and comments using MongoDB.

## Tech Stack

### Client-Side (Frontend)

*   **Framework**: [React](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [TailwindCSS](https://tailwindcss.com/)
*   **Authentication**: [@clerk/clerk-react](https://clerk.com/)
*   **State Management/Data Fetching**: [@tanstack/react-query](https://tanstack.com/query/latest)
*   **HTTP Client**: [Axios](https://axios-http.com/)
*   **Image Management**: [@imagekit/react](https://www.imagekit.io/)
*   **Routing**: [React Router DOM](https://reactrouter.com/en/main)
*   **Rich Text Editor**: [React Quill](https://github.com/quilljs/react-quill)
*   **Sanitization**: [DOMPurify](https://github.com/cure53/DOMPurify)
*   **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
*   **Time Formatting**: [timeago.js](https://timeago.org/)

### Server-Side (Backend)

*   **Runtime**: [Node.js](https://nodejs.org/en)
*   **Web Framework**: [Express.js](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) (with [Mongoose](https://mongoosejs.com/) ODM)
*   **Authentication**: [@clerk/express](https://clerk.com/)
*   **Image Management**: [imagekit](https://www.imagekit.io/)
*   **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)
*   **Webhooks**: [Svix](https://www.svix.com/) (for Clerk webhooks)
*   **CORS**: [cors](https://www.npmjs.com/package/cors)

## Architecture

The project follows a client-server architecture, organized as a monorepo:

*   **`client/`**: Contains the React frontend application, responsible for rendering the UI, handling user interactions, and communicating with the backend API.
*   **`server/`**: Houses the Node.js/Express.js backend API, which manages data persistence, handles business logic, authenticates users, and serves API endpoints.

### Key Components

*   **Database**: MongoDB is used as the primary data store, with Mongoose schemas defining the structure for `User`, `Post`, and `Comment` models.
*   **Authentication**: Clerk handles all user authentication flows, with `@clerk/express` securing API routes and `@clerk/clerk-react` managing client-side authentication states.
*   **Image Storage**: ImageKit is integrated for efficient storage and delivery of user-uploaded images.
*   **API Endpoints**: The server exposes RESTful API endpoints for managing users, posts, and comments, as well as a dedicated endpoint for Clerk webhooks.
*   **Middleware**: Custom Express middleware is used for tasks like increasing post visit counts (`increaseVisit.js`) and error handling.

### Directory Structure

```
.
├── client/                 # Frontend React application
│   ├── public/             # Static assets
│   ├── src/                # React source code
│   │   ├── components/     # Reusable UI components
│   │   ├── layouts/        # Page layouts
│   │   ├── routes/         # React Router configurations
│   │   └── ...
│   └── ...
└── server/                 # Backend Node.js/Express.js application
    ├── controllers/        # Business logic for API routes
    ├── lib/                # Database connection utility
    ├── middlewares/        # Express middleware
    ├── models/             # Mongoose schemas for database
    ├── routes/             # API endpoint definitions
    └── ...
```

## Getting Started

Follow these instructions to set up and run the Blogger's Log project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: v18 or higher (includes npm)
*   **npm** or **Yarn**: Package manager
*   **MongoDB**: A running instance of MongoDB (local or cloud-hosted).
*   **Clerk Account**: Required for user authentication. Obtain your `Publishable Key` and `Secret Key`.
*   **ImageKit Account**: Required for image uploads. Obtain your `Public Key`, `Private Key`, and `URL Endpoint`.

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/shukla-vivek008/Blogger-s-Log.git
    cd Blogger-s-Log
    ```

2.  **Install client dependencies**:

    ```bash
    cd client
    npm install
    # or yarn install
    ```

3.  **Install server dependencies**:

    ```bash
    cd ../server
    npm install
    # or yarn install
    ```

### Configuration

Both the client and server require environment variables for proper functioning. Create `.env` files in both the `client/` and `server/` directories.

#### `client/.env`

```env
VITE_CLERK_PUBLISHABLE_KEY="pk_live_YOUR_CLERK_PUBLISHABLE_KEY"
VITE_CLERK_SIGN_IN_URL="/sign-in"
VITE_CLERK_SIGN_UP_URL="/sign-up"
VITE_API_URL="http://localhost:3000" # Or your deployed backend URL
VITE_IMAGEKIT_PUBLIC_KEY="YOUR_IMAGEKIT_PUBLIC_KEY"
VITE_IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/YOUR_IMAGEKIT_ID/"
```

#### `server/.env`

```env
MONGO_URI="mongodb://localhost:27017/bloggerslog" # Or your MongoDB Atlas connection string
CLERK_SECRET_KEY="sk_live_YOUR_CLERK_SECRET_KEY"
CLERK_WEBHOOK_SECRET="whsec_YOUR_CLERK_WEBHOOK_SECRET" # Generate from Clerk dashboard
IMAGEKIT_PRIVATE_KEY="YOUR_IMAGEKIT_PRIVATE_KEY"
IMAGEKIT_PUBLIC_KEY="YOUR_IMAGEKIT_PUBLIC_KEY"
IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/YOUR_IMAGEKIT_ID/"
VITE_API_URL="http://localhost:5173" # Or your deployed frontend URL (for CORS)
```

**Note**: Replace placeholder values (`YOUR_...`) with your actual keys and URLs.

## Usage

### Running the Application

1.  **Start the backend server**:

    ```bash
    cd server
    node index.js
    # Or, if you have nodemon installed for development:
    # nodemon index.js
    ```
    The server will start on `http://localhost:3000`.

2.  **Start the frontend client**:

    ```bash
    cd client
    npm run dev
    # or yarn dev
    ```
    The client will typically start on `http://localhost:5173`.

3.  **Access the application**:
    Open your web browser and navigate to `http://localhost:5173`.

### Basic Interactions

*   **Sign Up/Sign In**: Use the authentication flow provided by Clerk to create an account or log in.
*   **Create a Post**: Navigate to the "Create Post" section, use the rich text editor to write your content, and upload images.
*   **View Posts**: Browse existing blog posts, scroll infinitely to load more.
*   **Comment**: Leave comments on posts to engage with the content.

## Development

### Setting up the Development Environment

The setup is the same as the installation steps. Ensure both client and server are running concurrently.

### Running Tests

Currently, there are no dedicated test scripts configured in the `package.json` files for this project.

### Code Style Guidelines

The client-side project uses ESLint for code linting. You can run the linter to check for code style issues:

```bash
cd client
npm run lint
```

## Deployment

### Building the Client

To create a production-ready build of the client application:

```bash
cd client
npm run build
```
This will generate optimized static assets in the `client/dist` directory.

### Deploying the Server

The Node.js server can be deployed to various cloud platforms (e.g., Heroku, Vercel, AWS EC2, DigitalOcean Droplet).

1.  Ensure your `server/.env` variables are configured for the production environment (e.g., `MONGO_URI` pointing to a cloud MongoDB instance, `VITE_API_URL` pointing to your deployed frontend).
2.  Use a process manager like PM2 to keep your `index.js` running continuously:
    ```bash
    npm install -g pm2
    cd server
    pm2 start index.js --name "bloggers-log-api"
    ```
3.  Configure your chosen cloud provider to serve the `client/dist` directory for the frontend and run the Node.js server for the backend.

### Docker/Containerization

While not explicitly configured, both the client (as static assets) and server (Node.js application) are suitable for Dockerization. You would typically create separate `Dockerfile`s for each, build images, and deploy them using container orchestration tools like Docker Compose or Kubernetes.

## API Documentation

The backend exposes a RESTful API for managing blog data.

**Base URL**: `http://localhost:3000` (or your deployed backend URL)

### Authentication

All protected routes require authentication via Clerk. The client-side Clerk SDK automatically handles attaching authentication tokens to requests. On the server, `clerkMiddleware()` and `requireAuth()` are used to validate requests.

### Endpoints

#### Users

*   `GET /users`: Retrieve a list of users.
*   `GET /users/:id`: Retrieve a specific user by ID.
*   `GET /protected`: Example protected route, returns authenticated user info.

#### Posts

*   `GET /posts`: Retrieve all blog posts. Supports pagination/infinite scroll.
*   `GET /posts/:id`: Retrieve a single blog post by ID.
*   `POST /posts`: Create a new blog post. (Requires authentication)
*   `PUT /posts/:id`: Update an existing blog post. (Requires authentication and ownership)
*   `DELETE /posts/:id`: Delete a blog post. (Requires authentication and ownership)

#### Comments

*   `GET /comments/:postId`: Retrieve comments for a specific post.
*   `POST /comments/:postId`: Add a new comment to a post. (Requires authentication)
*   `DELETE /comments/:id`: Delete a comment. (Requires authentication and ownership)

#### Webhooks

*   `POST /webhooks`: Endpoint for Clerk webhooks to handle user lifecycle events (e.g., user created, user deleted). This route uses `svix` for webhook verification.

## Contributing

We welcome contributions to Blogger's Log! If you'd like to contribute, please follow these guidelines:

1.  **Fork the repository**.
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/issue-description`.
3.  **Make your changes**, ensuring they adhere to the existing code style.
4.  **Commit your changes** with a clear and descriptive commit message.
5.  **Push your branch** to your forked repository.
6.  **Open a Pull Request** to the `main` branch of the original repository.

Please ensure your pull requests are well-documented and include any relevant tests or updates to the documentation.

## Troubleshooting

*   **`npm install` failures**: Ensure you have a stable Node.js version and clear your npm cache (`npm cache clean --force`).
*   **Environment Variables**: Double-check that your `.env` files are correctly configured and that all required variables are present. Typos are common!
*   **Port Conflicts**: If the client or server fails to start, another application might be using the default ports (3000 for server, 5173 for client). You can change the port in `server/index.js` or `client/vite.config.js` respectively.
*   **MongoDB Connection**: Verify your `MONGO_URI` is correct and your MongoDB instance is running and accessible.
*   **Clerk/ImageKit Issues**: Ensure your API keys and URLs are correct and that your Clerk/ImageKit accounts are properly set up and active.

If you encounter persistent issues, please open an issue on the GitHub repository.

## Roadmap

*   Implement user profiles and dashboards.
*   Add search functionality for posts.
*   Introduce categories/tags for posts.
*   Enhance rich text editor with more features (e.g., code blocks, tables).
*   Improve performance with server-side rendering (SSR) or static site generation (SSG).
*   Add social sharing features.
*   Implement dark mode.

## License & Credits

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

**Developed by**:
*   Vivek Shukla (shukla-vivek008)

**Acknowledgments**:
*   Thanks to all the open-source projects and libraries that made this possible.