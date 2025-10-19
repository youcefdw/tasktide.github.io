AOS.init()
const questions = document.querySelectorAll(".question")
questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    const isVisible = answer.style.maxHeight;

    if (isVisible) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});