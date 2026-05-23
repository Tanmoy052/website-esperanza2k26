# Esperanza 2k26 - Setup & Architecture Guide

This guide will help you set up the project locally and understand how everything works.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or later)
- MongoDB (local or cloud instance like MongoDB Atlas)
- GitHub Account (for OAuth)

### 1. Install Dependencies
```bash
cd Esperanza_2k25
npm install
```

### 2. Environment Variables Setup
Create a `.env.local` file in the root of `Esperanza_2k25` directory with the following variables:

```env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017
# OR for MongoDB Atlas: mongodb+srv://<username>:<password>@cluster0.mongodb.net
DB_NAME=esperanza2k26

# NextAuth Configuration
AUTH_SECRET=your_random_auth_secret_here
# Generate one using: openssl rand -base64 32

# GitHub OAuth (Optional but recommended)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# NextAuth URL (for development)
NEXTAUTH_URL=http://localhost:3000
```

#### How to get GitHub OAuth credentials:
1. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in:
   - Application name: Esperanza 2k26 (Local)
   - Homepage URL: http://localhost:3000
   - Authorization callback URL: http://localhost:3000/api/auth/callback/github
4. Copy Client ID and Client Secret to your `.env.local`


### 3. Start MongoDB
- **Local MongoDB**: Make sure MongoDB service is running on your machine
- **MongoDB Atlas**: Ensure your IP is whitelisted in Atlas

### 4. Run the Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

---

## 🏗️ Project Architecture

### Tech Stack
- **Framework**: Next.js 15 (Full-stack)
- **Language**: TypeScript
- **Database**: MongoDB + Mongoose ODM
- **Authentication**: NextAuth v5 (Auth.js)
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod
- **UI Components**: shadcn/ui + Radix UI

### Directory Structure
```
Esperanza_2k25/
├── src/
│   ├── actions/              # Server Actions (backend logic)
│   │   ├── signup.action.ts  # User registration
│   │   ├── login.action.ts   # User login
│   │   ├── logout.action.ts  # User logout
│   │   ├── eventRegister.action.ts
│   │   ├── contact.action.ts
│   │   └── fetch.action.ts
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API Routes
│   │   │   ├── auth/[...nextauth]/route.ts  # NextAuth endpoint
│   │   │   └── v1/           # API v1 routes
│   │   ├── login/            # Login/Signup page
│   │   ├── profile/          # User profile
│   │   ├── events/           # Events pages
│   │   └── ...
│   ├── components/           # React components
│   ├── models/               # Mongoose models
│   │   └── user.model.ts     # User schema
│   ├── utils/
│   │   └── db/connect.ts     # MongoDB connection
│   ├── interfaces/           # TypeScript interfaces
│   └── auth.ts               # NextAuth configuration
```

---

## 🔐 Authentication Flow

### 1. Sign Up Process
1. User fills out the signup form (`LoginSignUpForm.tsx`) with:
   - Email
   - Full Name
   - Year (1st/2nd/3rd/4th)
   - Department (CE/CSE/ECE/EE/ME)
   - Roll Number
   - Phone Number
   - Password

2. Form submission triggers `signUp` server action (`src/actions/signup.action.ts`)

3. The server action:
   - Connects to MongoDB via `connectDB()`
   - Creates a new user using `User.create()`
   - Password is automatically hashed by Mongoose pre-save hook (bcryptjs with 10 rounds)
   - Returns success/failure response

4. **Note**: There's currently NO email verification implemented. The `isVerified` field in user model defaults to `false` but isn't used yet.

### 2. Login Process (Credentials)
1. User enters email and password in login form
2. Form triggers `login` server action (`src/actions/login.action.ts`)
3. The action calls `signIn("credentials", ...)` from NextAuth
4. NextAuth's `authorize` function (`src/auth.ts`) does:
   - Connects to MongoDB
   - Finds user by email
   - Compares password using bcryptjs `compare()`
   - Returns user object if successful
5. NextAuth creates a session and redirects to home page

### 3. GitHub OAuth Login
1. User clicks GitHub button (currently not wired up but provider is configured)
2. NextAuth handles OAuth flow with GitHub
3. User is authenticated and session is created

### User Model Schema (`src/models/user.model.ts`)
```typescript
{
  name: String (required),
  year: String (enum: "1st", "2nd", "3rd", "4th"),
  department: String (enum: "CE", "CSE", "ECE", "EE", "ME"),
  rollNumber: String,
  bio: String (default: ""),
  credentials: {
    email: String (required, unique),
    password: String (hashed, select: false),
    phoneNumber: String (unique)
  },
  isVerified: Boolean (default: false),
  registeredEvents: [ObjectId] (ref: "Events")
}
```

---

## 📡 Server Actions vs API Routes

### Server Actions (Used for most operations)
- Located in `src/actions/`
- Directly callable from client components with `"use server"`
- Used for: signup, login, logout, event registration, contact form

### API Routes
- Located in `src/app/api/`
- RESTful endpoints
- Currently used for:
  - NextAuth (`/api/auth/[...nextauth]`)
  - Event creation (`/api/v1/events/create`)
  - Get event participants (`/api/v1/events/participants`)
  - User creation (`/api/v1/user/create`)
  - Get all users (`/api/v1/user/getAllUser`)

---

## 🔧 Key Files Explained

### `src/auth.ts`
- NextAuth configuration
- Configures GitHub and Credentials providers
- Defines `authorize` function for credentials login
- Sets custom sign-in page to `/login`

### `src/utils/db/connect.ts`
- MongoDB connection manager
- Uses Mongoose
- Reuses existing connection if available
- Uses `MONGO_URI` and `DB_NAME` from environment variables

### `src/models/user.model.ts`
- Mongoose schema for User
- Pre-save hook to hash passwords automatically
- Password field has `select: false` to not return it in queries by default

### `src/components/Login/LoginSignUpForm.tsx`
- Client component with login and signup tabs
- Uses React state for form management
- Calls server actions on form submission
- Uses SweetAlert2 for user feedback

---

## 🚧 Current Limitations & Future Improvements

### What's Missing
1. **Email Verification**: `isVerified` field exists but no implementation
2. **Password Reset**: No password reset functionality
3. **Email Service**: Nodemailer not integrated yet (mentioned in prompt.md)
4. **Google/LinkedIn OAuth**: Buttons exist in UI but not configured
5. **Form Validation**: Uses basic HTML5 validation, could use Zod + React Hook Form
6. **Error Handling**: Basic error handling, could be improved

### How to Add Email Verification (Future)
1. Install Nodemailer: `npm install nodemailer @types/nodemailer`
2. Add `MAIL_USER` and `MAIL_PASS` to `.env.local`
3. Generate verification token on signup
4. Store token and expiry in user model
5. Send verification email via Nodemailer
6. Create verification endpoint to confirm email

---

## 📝 Available Scripts

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🆘 Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB service is running locally
- Check `MONGO_URI` and `DB_NAME` in `.env.local`
- For Atlas, ensure IP is whitelisted and credentials are correct

### NextAuth Issues
- Make sure `AUTH_SECRET` is set (generate with `openssl rand -base64 32`)
- Check `NEXTAUTH_URL` is correct
- For GitHub OAuth, verify callback URL is configured correctly

### Port Already in Use
- Change port: `npm run dev -- -p 3001`

---
Made with ❤️ for Esperanza 2k26
