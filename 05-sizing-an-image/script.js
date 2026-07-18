let imageElement = document.getElementById("image");
let imageWidth = document.getElementById("imageWidth");
let warningMessage = document.getElementById("warningMessage");

let defaultImageWidth = 200;

imageElement.style.width = defaultImageWidth + "px";
imageWidth.textContent = defaultImageWidth + "px";

function increment() {
    if (defaultImageWidth < 300) {
        defaultImageWidth = defaultImageWidth + 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidth.textContent = defaultImageWidth + "px";
    } else if (defaultImageWidth <= 300) {
        warningMessage.textContent = "TO big. Decrese the size of the image";
    } else {
        warningMessage.textContent = "";
    }
}

function decrement() {

    if (defaultImageWidth > 100) {
        defaultImageWidth = defaultImageWidth - 5;

        imageElement.style.width = defaultImageWidth + "px";
        imageWidth.textContent = defaultImageWidth + "px";
        warningMessage.textContent = "";
    } else {
        warningMessage.textContent = "Can't Visible. Increase the size of the Image.";
    }

}
