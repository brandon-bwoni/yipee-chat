![yipee](https://github.com/user-attachments/assets/bcde93b1-777f-4ad1-987e-2d67f4a4f594)
# Yipee Social Media App Documentation

## 1. Project Overview

### Title
Yipee - Social Media App

### Description
Yipee is a feature-rich social media app inspired by Instagram, built using React Native for the frontend and Supabase for the backend. The app enables users to share photos, follow other users, interact with posts through likes and comments, and explore trending content. It prioritizes seamless performance, a clean user interface, and robust backend integration.

---

## 2. Features

### Core Features
1. **User Authentication**
   - Sign up with email and password.
   - Login and logout functionality.
   - Password reset and account recovery.

2. **User Profiles**
   - Create and update profile information (name, bio, profile picture).
   - Follow/unfollow other users.
   - View followers and following lists.

3. **Posts**
   - Upload photos with captions.
   - View all posts by users you follow on the feed.
   - Explore trending or popular posts.

4. **Interactions**
   - Like and unlike posts.
   - Comment on posts.
   - View the number of likes and comments on a post.

5. **Search and Explore**
   - Search for users or hashtags.
   - Explore trending content.

6. **Notifications**
   - Real-time notifications for likes, comments, and new followers.

7. **Settings**
   - Update account details.
   - Privacy settings (e.g., private account option).
   - Logout functionality.

---

## 3. Technologies Used

### Frontend
- **React Native**: Framework for building the mobile app.
- **Expo**: For fast development and testing.
- **React Navigation**: For app navigation.
- **Redux Toolkit**: For state management.

### Backend
- **Supabase**: Backend-as-a-Service for authentication, database, and storage.
- **PostgreSQL**: Database used by Supabase.

### Other Tools
- **Cloudinary**: For image optimization and delivery.
- **Firebase Cloud Messaging**: For push notifications.

---

## 4. Installation and Setup

### Prerequisites
- Node.js 16+
- Expo CLI
- Supabase account
- Cloudinary account (optional for image handling)

### Steps to Set Up Locally

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd yipee-social-media-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create an `.env` file in the root directory and add:
   ```env
   SUPABASE_URL=<your-supabase-url>
   SUPABASE_KEY=<your-supabase-key>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```

4. **Start the Development Server:**
   ```bash
   expo start
   ```

   Use the Expo app on your mobile device or an emulator to test the app.

---

## 5. Folder Structure

```
Yipee-Social-Media-App/
├── src/
│   ├── components/      # Reusable components (e.g., buttons, modals)
│   ├── screens/         # App screens (e.g., Feed, Profile, Explore)
│   ├── redux/           # Redux slices and store
│   ├── services/        # API calls and Supabase integration
│   └── utils/           # Helper functions and constants
├── assets/              # Static assets (e.g., images, icons)
├── App.js               # Main app entry point
├── package.json         # Dependencies and scripts
└── .env                 # Environment variables
```

---

## 6. Key Functionalities

### Authentication
- **Supabase Integration:**
  - Handles user sign-up, login, and password recovery.
- **JWT Tokens:**
  - Secure user sessions.

### Post Upload
- **Image Handling:**
  - Images are uploaded to Supabase storage.
  - Optional integration with Cloudinary for image optimization.
- **Database:**
  - Post data (caption, image URL, user ID, timestamp) is stored in Supabase.

### Real-Time Features
- **Post Likes and Comments:**
  - Supabase real-time capabilities update likes and comments without page reloads.
- **Notifications:**
  - Firebase Cloud Messaging sends push notifications.

---

## 7. Deployment

### Expo Deployment
1. **Build the App:**
   ```bash
   expo build:android
   expo build:ios
   ```

2. **Publish to Expo:**
   ```bash
   expo publish
   ```

### App Store and Play Store Deployment
1. Follow the official guidelines for publishing apps:
   - [Google Play Store](https://play.google.com/console/)
   - [Apple App Store](https://developer.apple.com/app-store/)

### Supabase Backend Deployment
- The backend is hosted directly on Supabase, requiring no additional setup.

---

## 8. API Endpoints

### Authentication Endpoints
- **POST /auth/signup**: Register a new user.
- **POST /auth/login**: Login and receive a JWT token.

### User Endpoints
- **GET /users/{id}**: Retrieve user profile details.
- **PUT /users/{id}**: Update user profile.
- **POST /users/follow/{id}**: Follow/unfollow a user.

### Post Endpoints
- **POST /posts/**: Create a new post.
- **GET /posts/**: Retrieve all posts.
- **GET /posts/{id}**: Retrieve a single post by ID.
- **DELETE /posts/{id}**: Delete a post.

### Comment Endpoints
- **POST /comments/**: Add a comment to a post.
- **GET /comments/{post_id}**: Retrieve comments for a post.

### Like Endpoints
- **POST /likes/**: Like a post.
- **DELETE /likes/{id}**: Unlike a post.

---

## 9. Challenges and Learnings

### Challenges
- Optimizing image uploads and display for various device sizes.
- Ensuring real-time updates without compromising performance.

### Learnings
- Deepened knowledge of React Native and Supabase integration.
- Enhanced understanding of real-time capabilities and push notifications.

---

## 10. Future Enhancements

1. **Direct Messaging:**
   - Add one-on-one and group chat functionality.
2. **Story Feature:**
   - Enable users to post disappearing stories.
3. **Advanced Analytics:**
   - Provide users with insights about their posts' performance.
4. **Monetization:**
   - Introduce ads or premium subscription options.

---

## 11. References
- [React Native Documentation](https://reactnative.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [Expo Documentation](https://docs.expo.dev/)

---

## 12. Conclusion
Yipee is a dynamic social media application with core functionalities designed to provide a seamless user experience. Built with modern technologies, it serves as a solid foundation for scalable and feature-rich social networking platforms. The combination of React Native and Supabase ensures performance and scalability, with room for continuous enhancement and innovation.

