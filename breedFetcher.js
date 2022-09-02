const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback('URL error', null);
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(typeof body);
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback('ERROR: Breed not found', 'N/A' );
    } else {
      callback(null, data[0]['description']);
    }
  });
};

module.exports = { fetchBreedDescription };
