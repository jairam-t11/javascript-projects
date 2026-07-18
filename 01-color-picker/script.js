let colorPickerContainer = document.getElementById("colorPickerContainer");
let selectedColorHexCode = document.getElementById("selectedColorHexCode");

function getGreyColor() {
    colorPickerContainer.style.backgroundColor = "#e0e0e0";
    selectedColorHexCode.textContent = "#e0e0e0";
}

function getGreenColor() {
    colorPickerContainer.style.backgroundColor = "#6fcf97";
    selectedColorHexCode.textContent = "#6fcf97";
    selectedColorHexCode.color = "#49a6e9";
}

function getBlueColor() {
    colorPickerContainer.style.backgroundColor = "#56ccf2";
    selectedColorHexCode.textContent = "#56ccf2";
}

function getPurpleColor() {
    colorPickerContainer.style.backgroundColor = "#bb6bd9";
    selectedColorHexCode.textContent = "#bb6bd9";
}
