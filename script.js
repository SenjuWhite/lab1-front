const targetIndex = (21 % 10) + 1;
const targetElement = document.getElementById("target-element");
const targetImage = document.getElementById("target-image");
const addBtn = document.getElementById("add-btn");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const removeBtn = document.getElementById("remove-btn");

let isImageHidden = false;
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleColor(element) {
    const randomBgColor = getRandomColor();
    const randomTextColor = getRandomColor();
    element.style.backgroundColor = randomBgColor;
    element.style.color = randomTextColor;
}

targetElement.addEventListener("click", function() {
    toggleColor(targetElement);
    isTargetClicked = true;
});

document.querySelectorAll("body *").forEach((element, index) => {
    if (index === targetIndex) {
        element.addEventListener("click", function() {
            toggleColor(element);
        });
    }
});



addBtn.addEventListener("click", () => {
    if (isImageHidden) { 
        targetImage.removeAttribute("hidden");
        isImageHidden = false; 
    }
});

increaseBtn.addEventListener("click", () => {
    const currentWidth = targetImage.clientWidth;
    targetImage.style.width = (currentWidth + 20) + "px";
});

decreaseBtn.addEventListener("click", () => {
    const currentWidth = targetImage.clientWidth;
    if (currentWidth > 50) { 
        targetImage.style.width = (currentWidth - 20) + "px";
    }
});

removeBtn.addEventListener("click", () => {
    if (!isImageHidden) { 
        targetImage.setAttribute("hidden", true); 
        isImageHidden = true; 
    }
});