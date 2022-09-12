const h2 = document.createElement("h2");
h2.textContent = "My Personal Website";
document.querySelector("body").appendChild(h2);

var e = document.getElementById('me');

e.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
}

e.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
}   



