const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;

    const brightness = getBrightness(newColor);
    if (brightness <= 90) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

const getBrightness = (color) => {
    const rgb = color.substring(4, color.length - 1)
        .replace(/ /g, '')
        .split(',');
    return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}
