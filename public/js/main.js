let timerId = null;

        window.addEventListener("DOMContentLoaded", function() {
            document.addEventListener("keydown", startAnimation);
            document.addEventListener("keyup", stopAnimation);
        });

        function startAnimation(e) {
            let direction;
            switch(e.key.toLowerCase()) { // Convert key to lowercase
                case 'w':
                    direction = 'up';
                    break;
                case 'a':
                    direction = 'left';
                    break;
                case 's':
                    direction = 'down';
                    break;
                case 'd':
                    direction = 'right';
                    break;
                default:
                    return; // Ignore other keys
            }

            if (timerId !== null) {
                clearInterval(timerId);
            }

            timerId = setInterval(function() {
                moveImage(direction);
            }, 10);
        }

        function stopAnimation() {
            if (timerId !== null) {
                clearInterval(timerId);
                timerId = null;
            }
        }

        function moveImage(direction) {
            const img = document.querySelector("img");

            let imgX = parseInt(img.style.left) || 0;
            let imgY = parseInt(img.style.top) || 0;

            const stepSize = 1; // pixels per step

            switch(direction) {
                case 'up':
                    imgY -= stepSize;
                    break;
                case 'down':
                    imgY += stepSize;
                    break;
                case 'left':
                    imgX -= stepSize;
                    break;
                case 'right':
                    imgX += stepSize;
                    break;
            }

            img.style.left = imgX + "px";
            img.style.top = imgY + "px";
        }