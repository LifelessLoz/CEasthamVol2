// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
fadeIn('.ml13')

function contactInfo(target) {
    fadeIn(target);
    setTimeout(() => {  opacityShow() }, 300);
}

function opacityShow() {
  document.getElementById('scrolltextHeader').style.opacity = 1;
}

function changeText(text) {
  document.getElementById("scrollText").innerHTML = text;
  var textWrapper = document.querySelector('.ml14 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

function hideText(text, target) {
  fadeOut(target);
  setTimeout(() => {  changeText(text) }, 800);
  setTimeout(() => {  contactInfo(target) }, 900);
}

function fadeOut(target){
  anime.timeline({loop: false}).add({
      targets: target,
      opacity: 0,
      duration: 600,
      easing: "easeOutExpo",
      delay: 200
    });
}

function fadeIn(target){
anime.timeline({loop: false}).add({
    targets: target + ' .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: target + ' .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  });
}

var lettersAll = document.querySelectorAll('.ml11 .letters');
var wordsAll = document.querySelectorAll('.ml11 .line');
var containerAll = document.querySelectorAll('.ml11');
for (var i = 0, len = lettersAll.length; i < len; i++) {
    lettersAll[i].innerHTML = lettersAll[i].textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter' id='" + lettersAll[i].id + "Text'>$&</span>");
}

onloadWords();

function textScrollIn(words, letters, container) {
  anime.timeline({loop: false})
    .add({
      targets: "#" + container,
      opacity: 1
    })
    .add({
      targets: "#" + words,
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: "#" + words,
      translateX: [0, document.getElementById(letters).getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: "#" + letters + "Text",
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: "#" + words,
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 700
    });
}

function textScrollOut(container){
  anime.timeline({loop: false})
    .add({
      targets: "#" + container,
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 700
    });
}

function reduceBackground(background){
  anime.timeline({loop:false})
  .add({
    targets: ".testclass",
    scaleY: [1,0.2],
    easing: "easeOutExpo",
    duration: 700
  });
}

function hideElement(hiddenElement) {
  document.getElementById(hiddenElement).style.display = "none";
}

function showElement(shownElement) {
  document.getElementById(shownElement).style.display = "block"
}

function displayFlex(flexElement) {
  document.getElementById(flexElement).style.display = "flex"
}

function onloadWords(){
  textScrollIn(wordsAll[1].id, lettersAll[1].id, containerAll[1].id);
  setTimeout(() => {  textScrollIn(wordsAll[2].id, lettersAll[2].id, containerAll[2].id) }, 1400);
  setTimeout(() => {  textScrollIn(wordsAll[3].id, lettersAll[3].id, containerAll[3].id) }, 2800);
  setTimeout(() => {  textScrollOut(containerAll[1].id) }, 7000);
  setTimeout(() => {  textScrollOut(containerAll[2].id) }, 7000);
  setTimeout(() => {  textScrollOut(containerAll[3].id) }, 7000);
  setTimeout(() => {  hideElement(containerAll[1].id) }, 8000);
  setTimeout(() => {  hideElement(containerAll[2].id) }, 8000);
  setTimeout(() => {  hideElement(containerAll[3].id) }, 8000);
  setTimeout(() => {  showElement(containerAll[0].id) }, 8100);
  setTimeout(() => {  displayFlex(document.getElementById("align_center").id) }, 8100);
  setTimeout(() => {  textScrollIn(wordsAll[0].id, lettersAll[0].id, containerAll[0].id) }, 8100);
  setTimeout(() => {  reduceBackground(document.querySelector(".testclass")) }, 9200);
}
