 document.addEventListener("DOMContentLoaded", function() {
            var image = document.getElementById("interactive-image");
            var images = [
                "images/Dog 1",
                "https://media.discordapp.net/attachments/1065413758475833344/1180269698684829726/IMG_8737.jpg?ex=657cced0&is=656a59d0&hm=4e0fe2b16b65c420610bf3258470c0b55b120c0e99494d63ac76d197d5f17c66&=&format=webp&width=647&height=660",
                "https://cdn.discordapp.com/attachments/1065413758475833344/1180269798999994388/IMG_8786.jpg?ex=657ccee8&is=656a59e8&hm=1064917edcd8fc1bebcea8c81fc42365d386d1258ef448146a3e6aab4cc8edd2&"
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
