# Property Pilot

Property Pilot is a comprehensive real estate platform that seamlessly connects property owners with buyers and renters, and offers a diverse range of accommodation options for travelers. The platform facilitates property listing, searching, and booking, making it an all-in-one solution for real estate and lodging needs.

## Features

- **Property Listings**: Users can list their homes, penthouses, and commercial properties for rent or sale.
- **Search and Filters**: Advanced search options and filters to help users find properties based on location, price, size, and type.
- **Booking System**: Travelers can browse and book accommodations in various hotels, including options for both short-term and long-term stays.
- **User Profiles**: Users can create and manage profiles to track their listings, bookings, and preferences.
- **Property Management**: Property owners can update, manage, and remove their listings directly through the platform.
- **Real-Time Updates**: Instant notifications for property updates, booking confirmations, and messages.

## Tech Stack

- **Frontend**: 
  - **ReactJS**: For building interactive user interfaces.
  - **TailwindCSS**: For styling the application with a modern and responsive design.
  - **Redux Toolkit**: For managing global state efficiently.

- **Backend**:
  - **Node.js**: JavaScript runtime for building scalable server-side applications.
  - **Express.js**: Web framework for creating RESTful APIs.
  - **MongoDB**: NoSQL database for storing user data, property listings, and booking information.
  - **Firebase**: For user authentication and secure login.

## Setup Instructions

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node package manager)
- **MongoDB** (local or cloud)
- **Firebase CLI** (for authentication)

### Clone the Repository

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/property-pilot.git
    ```

2. Navigate into the project directory:

    ```bash
    cd property-pilot
    ```

### Frontend Setup

1. Navigate to the `client` directory:

    ```bash
    cd client
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Build the React application:

    ```bash
    npm run build
    ```

4. (Optional) Start the frontend development server:

    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the `api` directory:

    ```bash
    cd ../api
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables. Create a `.env` file in the `api` directory and add the following content:

    ```env
    MONGO_URI=your_mongodb_connection_string
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    ```

4. Start the backend server in development mode:

    ```bash
    npm run dev
    ```

### Running the Application

1. Build the frontend if you haven’t already:

    ```bash
    npm run build
    ```

2. Start the backend server:

    ```bash
    npm run start
    ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Scripts

The following scripts are available:

- `npm run dev`: Starts the backend server in development mode with `nodemon`.
- `npm run start`: Starts the backend server in production mode.
- `npm run build`: Installs dependencies for both frontend and backend, and then builds the React application.
