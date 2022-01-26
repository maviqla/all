function sizer() {
  return function (size) {
    document.getElementById("story").style.fontSize = size + 'px'
  }
}

let sizes = sizer();
