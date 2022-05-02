// write js code here corresponding to favourites.html
var FavoriteArr=JSON.parse(localStorage.getItem("favourites"));

display(FavoriteArr);

function display(FavoriteArr){
FavoriteArr.forEach(function(element,index){
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=element.MatchNumber;
    
    var td2=document.createElement("td");
    td2.innerText=element.TeamA;
    
    var td3=document.createElement("td");
    td3.innerText=element.TeamB;
    
    var td4=document.createElement("td");
    td4.innerText=element.Date;
    
    var td5=document.createElement("td");
    td5.innerText=element.Venue;

    var td6=document.createElement("td");
    td6.innerText="Delete";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
         FavoriteArr.splice(index,1);
      localStorage.setItem("favourites",JSON.stringify(FavoriteArr));
      window.location.reload();
    })

    tr.append(td1,td2,td3,td4,td5,td6);

    document.querySelector("tbody").append(tr);

})

}