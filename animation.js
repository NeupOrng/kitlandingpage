window.onscroll = function() {
  console.log(document.documentElement.scrollTop)
  if(document.documentElement.scrollTop > 0){
    document.getElementById('navigation').style.backgroundColor = "rgba(255, 255, 255, 1)"
  }
  else {
    document.getElementById('navigation').style.backgroundColor = "rgba(255, 255, 255, 0)"
  }
}
