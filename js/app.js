const backpackImagesCarousel = document.querySelector('#backpackImagesCarousel')
const prodNum = document.querySelector('.prodNum');
const colorText = document.querySelector('.colorText');
const priceText = document.querySelector('.price');
const colorButtons = document.querySelectorAll('.color-btn');
const stockInfo = document.querySelector('.stock-info');
const imgCarousel1 = document.querySelector('#img1');
const imgCarousel2 = document.querySelector('#img2');
const imgCarousel3 = document.querySelector('#img3');
const btnBuy = document.querySelector('.btn-buy');

const carousel = new bootstrap.Carousel(backpackImagesCarousel, {
    interval: false
});

function scrollToCarousel() {
    if (screen.width <= 1024) {
        backpackImagesCarousel.scrollIntoView(true);
    }
}

function changeImages(colorName) {
    imgCarousel1.src = `./images/backpack-${colorName}-1.jpg`;
    imgCarousel2.src = `./images/backpack-${colorName}-2.png`;
    imgCarousel3.src = `./images/backpack-${colorName}-3.png`;
}

function changeStockInfo(colorName) {
    if (colorName === 'black') {
        btnBuy.removeAttribute('disabled', '');
        stockInfo.classList.remove('text-warning');
        stockInfo.classList.remove('text-danger');
        stockInfo.textContent = 'Available';
        stockInfo.classList.add('text-success');
    } else if (colorName === 'green') {
        btnBuy.removeAttribute('disabled', '');
        stockInfo.classList.remove('text-success');
        stockInfo.classList.remove('text-danger');
        stockInfo.textContent = 'Only a few left';
        stockInfo.classList.add('text-warning');
    } else if (colorName === 'red') {
        stockInfo.classList.remove('text-warning');
        stockInfo.classList.remove('text-success');
        stockInfo.textContent = 'Out of Stock';
        stockInfo.classList.add('text-danger');
        btnBuy.setAttribute('disabled', '');
    }
}

for (const colorBtn of colorButtons) {
    colorBtn.addEventListener('click', function () {
        if (colorBtn.id == 'colorGreen') {
            prodNum.textContent = 'DC4244-325';
            colorText.textContent = 'Cargo Khaki/Black/White';
            priceText.textContent = 38;
            changeStockInfo(this.dataset.name);
            changeImages(this.dataset.name);
            scrollToCarousel();
        } else if (colorBtn.id == 'colorRed') {
            prodNum.textContent = 'DC4244-622';
            colorText.textContent = 'Gypsy Rose/Black/Metallic Bronze';
            priceText.textContent = 45;
            changeStockInfo(this.dataset.name);
            changeImages(this.dataset.name);
            scrollToCarousel();
        } else {
            prodNum.textContent = 'DC4244-010';
            colorText.textContent = 'Black/Black/White';
            priceText.textContent = 35;
            changeStockInfo(this.dataset.name);
            changeImages(this.dataset.name);
            scrollToCarousel();
        }
    });
}