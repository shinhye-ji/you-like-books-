# Book Search Engine Starter Code

GIVEN a book search engine


WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button

WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site

WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up

WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button

WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button

WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site

WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site

WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout

WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account

WHEN I click on the Save button on a book
THEN that book’s information is saved to my account

WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each 
featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account

WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list

WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  


|-- client
    |-- public
        |-- vite.svg
    |-- src
        |-- assets
            |-- react.svg
        |-- components
            |-- LoginForm.jsx
            |-- NavBar.jsx
            |-- SignupForm.jsx
        |-- pages
            |-- SavedBooks.jsx
            |-- SearchBooks.jsx
        |-- utils
            |-- API.js
            |-- auth.js
            |-- localStorage.js
        |-- App.css
        |-- App.jsx
        |-- main.jsx
    |-- .eslintrc.cjs
    |-- .gitignore
    |-- index.html
    |-- package.json
    |-- vite.config.js
|-- server
    |-- config
        |-- connection.js
    |-- models
        |-- Book.js
        |-- index.js
        |-- User.js
    |-- schemas
        |-- index.js
        |-- resolvers.js
        |-- typeDefs.js
    |-- seeders
        |-- cleanDB.js
        |-- profileSeeds.json
        |-- seed.js
    |-- utils
        |-- auth.js
    |-- package.json
    |-- server.js
|-- .npmrc
|-- package.json
|-- README.md


You’ll need to complete the following tasks in each of these back-end files:

* `auth.js`: Update the auth middleware function to work with the GraphQL API.

<!-- * `server.js`: Implement the Apollo Server and apply it to the Express server as middleware. -->

* `Schemas` directory:

  * `index.js`: Export your typeDefs and resolvers.

  * `resolvers.js`: Define the query and mutation functionality to work with the Mongoose models.

  **Hint**: Use the functionality in the `user-controller.js` as a guide.

  * `typeDefs.js`: Define the necessary `Query` and `Mutation` types:

    * `Query` type:

      * `me`: Which returns a `User` type.
  
    * `Mutation` type:

      * `login`: Accepts an email and password as parameters; returns an `Auth` type.

      * `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

      * `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

      * `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.

    * `User` type:

      * `_id`

      * `username`

      * `email`

      * `bookCount`

      * `savedBooks` (This will be an array of the `Book` type.)

    * `Book` type:

      * `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)

      * `authors` (An array of strings, as there may be more than one author.)

      * `description`

      * `title`

      * `image`

      * `link`

    * `Auth` type:

      * `token`

      * `user` (References the `User` type.)