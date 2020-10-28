const request = require("request")

export default {
    postSMS(){
        request('http://www.google.com', function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            return body
        });
    }

}

module.exports = SMS