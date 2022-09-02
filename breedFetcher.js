const request = require('request');


const breed = process.argv.splice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('URL error');
  }
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body);
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('ERROR: Breed not found');
  } else {
    console.log(data[0]['description']);
  }
});


