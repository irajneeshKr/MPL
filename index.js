// write js code here corresponding to index.html
// You should add submit event on the form

var form = document.querySelector('#masaiForm');
form.addEventListener("submit",setData);

var matchData=JSON.parse(localStorage.getItem("schedule"))||[];
function setData(){
    event.preventDefault();

    var match={
        MatchNumber:form.matchNum.value,
        TeamA:form.teamA.value,
        TeamB:form.teamB.value,
        Date:form.date.value,
        Venue:form.venue.value
    }
    matchData.push(match);
   // console.log(matchData);
   localStorage.setItem("schedule",JSON.stringify(matchData));
}