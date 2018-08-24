# Raptor Report

Content coming soon!

### User Model

| Column Name | SQL Type | Notes |
| ----------- | -------- | ------------------------------- |
| id | integer | serial primary key |
| createdAt | Date | auto generated |
| updatedAt | Date | auto generated |
| firstname | String | - |
| lastname | String | - |
| email | String | usernameField for login |
| password | String | hashed with bcrypt |
| dob | Date | - |

### Default Routes Supplied

| Method | Path | Location | Purpose |
| ------ |------------------ | -------------------- | ------------------------------------- |
| GET | / | index.js | Home |
| GET | /profile | controllers/profile.js | Profile page (authorization req) |
| GET | /auth/login | controllers/auth.js | Login form page |
| POST | /auth/login | controllers/auth.js | Login submission; Redirect to Profile |
| GET | /auth/signup | controllers/auth.js |Signup form page |
| POST | /auth/signup | controllers/auth.js |Signup submission; Redirect to Profile |
| GET | /auth/logout | controllers/auth.js |Logout; Redirect to Home
