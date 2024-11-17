# Medical Streaming App

This is a full-stack SaaS application for viewing live streams and videos for medical students. The app features a modern dark background with a responsive and slick UI. It has two main sections: "Live Streams" and "Videos", each further divided into subcategories such as neurosurgery, otolaryngology, gastroenterology, oncology, etc.

## Features

- **Live Streams and Videos**: View live streams and videos categorized by medical specialties.
- **User Authentication**: Secure login and registration system.
- **Responsive Design**: Works on all devices with a modern dark theme.

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd medical-streaming-app/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd medical-streaming-app/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

### Environment Variables

Create a `.env` file in the backend directory with the following content:

```
MONGO_URI=mongodb://localhost:27017/medical-streaming
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Deployment

Instructions for deploying the application will be added here.

## License

This project is licensed under the MIT License.