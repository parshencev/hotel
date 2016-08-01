document.addEventListener("DOMContentLoaded", function(){
  addImgEvents();
  addCloseWindowEvent();
});
function openWindow(src,alt){
  var popup = document.getElementById("popup"),
      img_popup = popup.querySelectorAll("img")[0];

  popup.style.display = "block";

  img_popup.src = src;
  img_popup.alt = alt;
}
function closeWindow(){
  document.getElementById("popup").style.display = "none";
}
function addImgEvents(){
  var imgs = document.querySelectorAll(".photo_small");

  for(i=0; i<imgs.length;i++){
    imgs[i].setAttribute("onclick", "openWindow(this.src,this.alt);");
  }
}
function addCloseWindowEvent(){
  document.querySelectorAll("#popup input")[0].setAttribute("onclick", "closeWindow()");
}

