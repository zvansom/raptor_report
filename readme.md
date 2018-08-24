# Auth Boilerplate: How to use

A boilerplate is a thing at it's most basic functionality.  It's the parts that are similar or identical across all projects.  You use a boilerplate so that you don't have to write out the basics every time you start a project.  Instead, you start with a baseline and can build from there.

## What it includes

* Sequelize models and migration for user model
* Settings for Postgresql
* Passport and Passport-Local
* Express sessions to keep user logged in from page to page
* Connect-Flash for error/success messaging
* Bcrypt for hashing passwords

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
| admin | Boolean | Admin or Regular User |

> NOTE: Change these fields in the model and the migration files BEFORE running sequelize db:migrate

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

