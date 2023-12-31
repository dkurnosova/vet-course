const moreButtons = document.querySelectorAll(".btn__more");

moreButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const moduleContainer = this.closest(".program__module");

        const moduleDescription = moduleContainer.querySelector(".program__module-description");

        const textSpan = this.querySelector("span");

         if (moduleDescription.style.maxHeight === '0px' || moduleDescription.style.maxHeight === '') {
             moduleDescription.style.maxHeight = moduleDescription.scrollHeight + "px";
             moduleDescription.style.paddingTop = "20px";
            moduleDescription.style.visibility = "visible";
                textSpan.style.transform = 'rotate(45deg)';
            } else {
             moduleDescription.style.maxHeight = "0";
             moduleDescription.style.paddingTop = "0";
              moduleDescription.style.visibility = "hidden";
                textSpan.style.transform = 'rotate(0deg)';
            }
    });
});

const readMoreButton = document.querySelector(".read-more");
const reksArticle = document.querySelector(".reks__article");
const closeButton = document.querySelector(".close");

readMoreButton.addEventListener("click", function () {
    const topOffset = window.scrollY

   reksArticle.classList.add("show");
   reksArticle.style.top = topOffset + "px";
});

closeButton.addEventListener("click", function () {
   reksArticle.classList.remove("show");
});

const buyButtons = document.querySelectorAll(".show-form");
const formOrder = document.querySelector(".form-order");
const submitButton = document.querySelector(".order");

buyButtons.forEach((button) => {
   button.addEventListener("click", function () {
      formOrder.classList.add("show");
   });
});    

submitButton.addEventListener("click", function (event) {
   event.preventDefault();
   formOrder.classList.remove("show");
});

const testButton = document.querySelector(".btn-test");
const testDrive = document.querySelector(".test-drive__popup");
const accessButton = document.querySelector(".btn-access");

testButton.addEventListener("click", function () {
   testDrive.classList.add("show");
});

accessButton.addEventListener("click", function () {
   testDrive.classList.remove("show");
});

const feedbackList = document.querySelector(".feedback-list");
const feedbackPoints = document.querySelectorAll(".feedback__point");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;

function showFeedback(index) {
   feedbackList.style.transform = `translateX(${-index * 360}px)`; 
}

function handleArrowClick(direction) {
   if (direction === "left") {
      currentIndex = (currentIndex - 1 + feedbackPoints.length) % feedbackPoints.length;
   } else {
      currentIndex = (currentIndex + 1) % feedbackPoints.length;
   }

   showFeedback(currentIndex);
}

leftArrow.addEventListener("click", function () {
   handleArrowClick("left");
});

rightArrow.addEventListener("click", function () {
   handleArrowClick("right");
});


const answerButtons = document.querySelectorAll(".btn__answer");

answerButtons.forEach((button) => {
   button.addEventListener("click", function () {
      const container = this.closest(".question-answer__point");

      const answer = container.querySelector(".question-answer__text");

      const arrow = this.querySelector("img");

      if (answer.style.maxHeight === "0px" || answer.style.maxHeight === "") {
         answer.style.maxHeight = answer.scrollHeight + "px";
         answer.style.paddingTop = "15px";
         answer.style.visibility = "visible";
         arrow.style.transform = "rotate(-180deg)";
      } else {
         answer.style.maxHeight = "0";
         answer.style.paddingTop = "0";
         answer.style.visibility = "hidden";
         arrow.style.transform = "rotate(0deg)";
      }
   });
});
