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
