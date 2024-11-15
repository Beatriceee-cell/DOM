// querySelector
var listItem = document.querySelector("li")
console.log(listItem)
var itemList = document.querySelector("h1")
console.log(itemList)
var itemLists = document.querySelector("p")
console.log(itemLists)


var listItem = document.querySelectorAll("li")
console.log(listItem)

var listItem = document.getElementById("domList")
console.log(listItem)
var listItem = document.getElementsByClassName("domList")
console.log(listItem)
var listItem = document.getElementsByTagName("h3")
console.log(listItem)
var audio = document.querySelector("audio")
var audioAttribute = audio.getAttribute("controls")
console.log(audioAttribute);

audio.setAttribute("controls","true")
console.log(audioAttribute);

var video = document.querySelector("video")
var videoAttribute = video.getAttribute("controls")
console.log("videoAttribute");

video.setAttribute("controls", "true")
console.log(videoAttribute);



function handleBtn() {
    return alert("button has been clicked")
}
var button = document.getElementById("btn")
button.addEventListener("click", handleBtn)

function handlehover() {
    return alert ("anchor tag hovered")
}
var anchor = document.getElementById("anchor")
anchor.addEventListener("dbclick", handlehover)
