const button = document.querySelector("#imageButton");
const imageContainer = document.querySelector(".image");
const images = document.querySelectorAll("#img img");
const close = document.querySelector("#img #close");
const next = document.querySelector("#next");
var number = 0;
var done = 0;
const time = document.querySelector("#img p");
const eye = document.querySelector("#img .eye");
const unseen = document.querySelector("#img .unseen");
const seen = document.querySelector("#img .seen");
const learnMore = document.querySelector("#img #learnMore");
const point = document.querySelector(".points");
var timeLeft = 5;
var timerId;
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        number++;
        point.innerHTML = number + " points";
        seen.style.display = "block";
        unseen.style.display = "none";
        done = 1;
    } else {
        time.innerHTML = timeLeft + 's';
        timeLeft--;
        done = 0;
    }
}

button.addEventListener("click",
    () => {
        imageContainer.style.display = "block";
        timerId = setInterval(countdown, 1000);
    }
)
imageContainer.addEventListener("click",
    () => {
        imageContainer.style.display = "none";
        timeLeft = 5;
        clearInterval(timerId);

    }, true
)
images.forEach(image => {
    image.addEventListener("mouseenter",
        () => {
            close.style.display = "block";
            eye.style.display = "block";
            learnMore.style.display = "block";

        }
    )
    image.addEventListener("mouseout",
        () => {
            close.style.display = "none";
            eye.style.display = "none";
            learnMore.style.display = "none";
        }
    )
    image.addEventListener("click",
        () => {
            imageContainer.style.display = "block";
        }
    )

});
close.addEventListener("click",
    () => {
        imageContainer.style.display = "none";
        timeLeft = 5;
        clearInterval(timerId);
    }
)
close.addEventListener("mouseenter",
    () => {
        close.style.display = "block";
        eye.style.display = "block";
        learnMore.style.display = "block";
    }
)
eye.addEventListener("mouseenter",
    () => {
        close.style.display = "block";
        eye.style.display = "block";
        learnMore.style.display = "block";
    }
)
time.addEventListener("mouseenter",
    () => {
        close.style.display = "block";
        eye.style.display = "block";
        learnMore.style.display = "block";
    }
)
learnMore.addEventListener("mouseenter",
    () => {
        close.style.display = "block";
        eye.style.display = "block";
        learnMore.style.display = "block";
    }
)
next.addEventListener("mouseenter",
    () => {
        close.style.display = "block";
        eye.style.display = "block";
        learnMore.style.display = "block";
    }
)
next.addEventListener("click",
    () => {
        images.forEach(element => {
            if (element.style.zIndex == 3) {
                if (done != 1) {
                    element.classList.add('swipe')
                    element.style.transform = "rotate(-19deg)";
                    next.style.display = "none";
                    setTimeout(() => {
                        element.style.zIndex = 1;
                    }, 1000);
                }
                else {
                    element.classList.add('remove');
                    setTimeout(() => {
                        element.remove();
                    }, 1000);
                }
                setTimeout(() => {
                    next.style.display = "block";

                }, 2000);
            }
            else {
                if (element.style.zIndex == 2) {
                    element.style.zIndex = 3;
                    element.style.transform = "none";
                }
                else {
                    if (element.style.zIndex == 1) {
                        element.style.zIndex = 2;
                        element.style.transform = "rotate(-10deg)";
                        element.classList.remove("swipe");
                    }
                }
            }
        });
        imageContainer.style.display = "block";
        clearInterval(timerId)
        timeLeft = 5;
        timerId = setInterval(countdown, 1000);
        seen.style.display = "none";
        unseen.style.display = "block";
    })
