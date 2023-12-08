 document.addEventListener("DOMContentLoaded", function() {
            var image = document.getElementById("interactive-image");
            var images = [
                "images/Dog 1.jpg",
                "images/Dog 2.jpg",
                "images/Dog 3.jpg"
            ];
            var currentIndex = 0;

            function changeImage(offset) {
                // Change the image source based on the offset
                currentIndex = (currentIndex + offset + images.length) % images.length;
                image.src = images[currentIndex];
            }

            document.getElementById("interactive-image").addEventListener("click", function() {
                // Change the image source to the next one in the array
                changeImage(1);
            });

            // Button click events
            document.querySelector("button:nth-of-type(1)").addEventListener("click", function() {
                // Previous button clicked
                changeImage(-1);
            });

            document.querySelector("button:nth-of-type(2)").addEventListener("click", function() {
                // Next button clicked
                changeImage(1);
            });
        });


/* Parse/JSON/API code for dog facts below */

    // URL of the API endpoint
    const apiUrl = 'https://dogapi.dog/api/v2/facts?limit=1';

    // Reference to the div element
    const factContainer = document.getElementById('factContainer');

    // Make a GET request to the API
    fetch(apiUrl)
      .then(response => {
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON in the response
        return response.json();
      })
      .then(data => {
        // Check if 'data' has the expected structure
        if (data && Array.isArray(data.data) && data.data.length > 0) {
          // Access the first fact in the array
          const firstFact = data.data[0];

          // Access the 'body' attribute
          const factBody = firstFact.attributes.body;

          // Display the factBody in the div
          factContainer.textContent = 'Dog Fact: ' + factBody;
        } else {
          // Display an error message if the data structure is invalid
          factContainer.textContent = 'Invalid data structure in the API response';
        }
      })
      .catch(error => {
        // Display an error message if there's an issue fetching data
        factContainer.textContent = 'Error fetching data: ' + error.message;
      });