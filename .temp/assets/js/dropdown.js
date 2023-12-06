const listItem = document.querySelector('.faq__list-item');
const additionalText = document.querySelector('.dropdown');

listItem.addEventListener('click', () => {
    additionalText.classList.toggle('visible-class'); // Replace 'visible-class' with the class that controls visibility
});
