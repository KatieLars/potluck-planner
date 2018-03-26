#Potluck Planner

Designed to help you create, invite, and track your potluck events, friends, and dishes. Never worry about a potluck with seven potato salads and no burgers again!

Redux-React client-side server runs next to a Rails API for basic CRUD handling. Currently this app is only available by forking and cloning the 'api-only' branch of this repo and running ```rake start``` to get both servers started (port 3000 for npm and 3001 for Rails).Deployment via Heroku is pending.

Features: 
  +Babel plugins for ES5/ES6 compatability
  +Knock gem for JWT authentication
  +Active Model Serializer for custom JSON responses
  +Reactstrap library for Bootstrap 4 compatability
  +React-Router-DOM for basic client-side routing
