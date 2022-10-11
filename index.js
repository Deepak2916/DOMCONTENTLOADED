document.getElementById("btn")?.addEventListener("click",DOMCONTENTLOADED)
function DOMCONTENTLOADED(){
     function y(x){
          x()
     }
     y(function y(){
          console.log( "DOM has loaded")
     })
}
