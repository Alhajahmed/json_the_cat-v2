// Require the 'request' module to make HTTP requests
const request = require("request");

// Get the breed name from the command line arguments
const breedName = process.argv[2];

// Send a request to the Cat API with the breed name as a query parameter
// and handle the response in a callback function
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    if (error) {
      // If an error occurs, log it to the console
      console.log(`Error occurred: `, error);
    } else {
      // Otherwise, parse the response body as JSON and check if the breed exists
      const data = JSON.parse(body);
      if (data.length === 0) {
        // If the breed does not exist, log a message to the console
        console.log(`Breed ${breedName} not found`);
      } else {
        // If the breed exists, log its description to the console
        console.log(data[0].description);
      }
    }
  }
);
