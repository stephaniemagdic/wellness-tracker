// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import UserRepository from './UserRepository';

//fectch user data only to populate the new User Repository

//reusable function to fetch APIData
    function fetchData(type) {
      const root = http://localhost:3001/api/v1/;
      const url = `${root}type`;

      const promise = fetch(url)
        .then(response => response.json());
        console.log("response", response)
        console.log("promise", promise)
      return promise;
    }

