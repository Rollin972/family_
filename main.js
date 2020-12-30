var members=["Richard","Charu","Rollin","Ronnie"];
var members_1=["Richard.jpg", "Charu.jpg", "Rollin.jpg", "Ronnie.jpg" ];
var i=0;
function changeimage()
{
  document.getElementById("p2").innerHTML=members[i];
  document.getElementById("img1").src=members_1[i];
  i++;
  ;
} 