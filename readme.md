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

## Steps to Use

#### 1. Clone repo, but with a different name!
```
git clone <repo_link> <new_name>
```

#### 2. Create a new database for new project

```
createdb <new_db_name>
```

#### 3. Open `config.json` and change the following

* Change database name to what you created in step 2
* Set username/password for local environment
* Make sure the flavor of SQL matches what you're using

> NOTE: If changing from Postgres, you will need different node_modules

#### 4. Check models and migrations for your needs

For example, if you don't need the `admin` column, you will want to delete it from both the migration and model for the user. Likwise, if you need to add something, add in both files.

#### 5. Run the migrations

```
sequelize db:migrate
```

#### 6. Add a `.env` file with a SESSION_SECRET key

This can be set to anything.

#### 7. Install node modules from `package.json`

```
npm install
```

#### 8. Run your server and make sure everything works

If you have nodemon installed globally:
```
nodemon
```

Otherwise:
```
node index.js
```

#### 9. Create a new repository for the new project

* Create a new repo on your Gihub account
* Delete the old remote to origin
* Add new repo as a new remote location(can also be called origin since we deleted the original origin)
* PUSH

```
git remote remove origin
git remote add origin <new_repo_link>
git add .
git commit -m "Beginning of new project"
git push origin master 
```

> NOTE: Do NOT make commits from the new project to your auth boilerplate.  Keet it pristine.

## Next steps

Assuming that the set up steps went smoothly, now you can add new models/migrations for your new app, and start developing it as if you had started from scratch!
