const carousel = document.getElementById('image-carousel');
const images = carousel.getElementsByTagName('img');
let imageIndex = 0; // 独立的imageIndex变量  

function changeImage() {
    images[imageIndex].classList.remove('active');
    imageIndex = (imageIndex + 1) % images.length;
    images[imageIndex].classList.add('active');
}

setInterval(changeImage, 5000); // 图片轮播每6秒更新一次  
changeImage(); // 初始显示第一张图片
