// write js code here corresponding to matches.html

var matchData=JSON.parse(localStorage.getItem("schedule"));



display(matchData);

function display(data){
data.forEach(function(element){

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
    td6.innerText="Favorites";
    td6.style.color="green";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
         makeFavorite(element);
    })

    tr.append(td1,td2,td3,td4,td5,td6);

    document.querySelector("tbody").append(tr);

})

}

var FavoriteArr=JSON.parse(localStorage.getItem("favourites")) || [];
function makeFavorite(element){
   FavoriteArr.push(element);
   //console.log(FavoriteArr);
   localStorage.setItem("favourites",JSON.stringify(FavoriteArr));
}