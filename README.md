# Friend-Finder App

This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.


# Technologies Used

 * JavaScript

 * jQuery

 * node.js
 
 * HTML

 * Bootstrap


# Code Explanation

* The server.js sets up the express server, specifies the port number, loads npm packages that need to be used, and also set the routes that were externalized.

* There are two html files that serve as the front end for the user to see and use the app; a modal is displayed with the best match after the survey is complete.

* The routing files (apiRoutes.js and htmlRoutes.js) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed. The API routes send back existing content in our server-side data or add new friends.

* The script.js file handles the user's input and the modal part

* Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object.

* The modal is then displayed, with the best match to the person who just took the survey

* A list of all friends can be accessed on the api/friends route

<<<<<<< HEAD
![Image 1](https://res.cloudinary.com/bootcamp2019/image/upload/v1553993654/screenshotHome.png)
=======
The app can be accessed through the following link:
>>>>>>> ba9bef5630b7e8b86510deff9e57077b982f0d69

https://blooming-dusk-13977.herokuapp.com/

