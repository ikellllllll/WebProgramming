const miniImage = document.querySelectorAll('.image_button');
const mainImage = document.querySelector('.image_box img');

const leftBtn = document.querySelector('.button_left');
const rightBtn = document.querySelector('.button_right');

let imgIndex = 0;

// 이미지 선택 function
function selectImg(index) {
    for(let i = 0; i < miniImage.length; i++) {
        if(i == index) miniImage[i].setAttribute('aria-selected', true);
        else miniImage[i].setAttribute('aria-selected', false);
    }

    mainImage.setAttribute('src', miniImage[index].querySelector('img').getAttribute('src'));
}

// 미니 이미지 hover
miniImage.forEach((image, index) => {
    image.addEventListener('mouseover', () => {
        imgIndex = index;
        selectImg(index);
    });
});

leftBtn.addEventListener('click', () => {
    if(imgIndex <= 0) imgIndex = miniImage.length;

    selectImg(--imgIndex);
});

rightBtn.addEventListener('click', () => {
    if(imgIndex >= miniImage.length - 1) imgIndex = -1;

    selectImg(++imgIndex);
});