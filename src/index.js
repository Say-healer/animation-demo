
import './css/style.css';


window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 400 / 60);
    };
})();

const fireworks = document.querySelector('.fireworks');
const body = document.querySelector('body');

function randms() {
  let randm = Math.random();
  return randm > 7 ? randm - 2 : randm
}
function createDiv(x, y) {
  let box = document.createElement('div');
  box.className = 'fireworks is-active';
  box.style.left = x - 225 + 'px';
  box.style.top = y - 225 + 'px';
  box.style.transform = `scale(${randms()})`
  body.appendChild(box);

}
createDiv(200,200)



body.addEventListener('click', function (e) {
  let x = e.pageX;
  let y = e.pageY;
  // if(e.target.localName == 'body') {
  createDiv(x, y)
  // }

})