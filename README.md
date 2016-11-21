Voice Jeopardy

Stackathon project by Brandon Culp to showcase how accessibility can be entertaining.

## Starting the app

git clone or download the repo
cd into the project directory
type npm install
type npm start
open your browser and go to localhost:3000

## App structure

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup. It'll create the database for you if it doesn't exist,
assuming you're using postgres.

`/server` has the Express server and routes. `start.js` is the entry point.



