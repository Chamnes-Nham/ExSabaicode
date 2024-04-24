const image = document.querySelector(".divhtml");
const backchange = document.getElementById("div_One")
function changeImage(myImage){
    image.setAttribute("src", myImage);
}
function changeBack(colors){
backchange.style.backgroundColor = colors;
}