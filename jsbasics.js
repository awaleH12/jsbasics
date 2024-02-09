let icon = document.getElementById("icon");
let style = document.getElementById("style");

icon.onclick = function(){
  // style.href = ""
  // style.href = "white.css"
  

  if(style.href.includes("darktheme.css")){
    style.href = "white.css"
    icon.src = "icons/moonn-01-01.png"
  } else if (style.href.includes("white.css")) {
    style.href = "darktheme.css"
    icon.src = "icons/sunn-01.png"
    
  }
  // style.src ="darktheme.css"
  // document.body.classList.toggle("darkmode");
  // if(document.body.classList.contains("darkmode")){
  //   icon.src = "icons/sunn-01.png"
  // } else {
  //   icon.src = "icons/moonn-01-01.png"
  // }
 
}
 
// style theme
// let style = document.getElementById("style");

// students record
$(document).ready(function(){
  let marks; 
});


