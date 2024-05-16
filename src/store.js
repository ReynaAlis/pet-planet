// изменение активного класса у кнопки категории
const categoryButtons = document.querySelectorAll('.store__category-button');

const changeActiveCategoryBtn = (event) => {
    const target = event.target;
    categoryButtons.forEach((categoryButton) => {
        categoryButton.classList.remove('store__category-button_active');
    });
    target.classList.add('store__category-button_active');
};

categoryButtons.forEach((categoryButton) => {
    categoryButton.addEventListener('click', changeActiveCategoryBtn);
});
