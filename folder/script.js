function myEvent() {
    var x = document.getElementById("event");
    var y=document.getElementById("moreless");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML="Read Less";
    } else {
      x.style.display = "none";
      y.innerHTML="Read More";

    }
 }
 
 var i=0;
 var text="The Foundation Committee met on 29 October 1920.On 22 November 1920, Hakim Ajmal Khan was elected the first chancellor of Jamia.Mohamed Ali Jauhar became Jamia’s first Vice Chancellor, as Allama Iqbal could not accept theoffer made through Gandhiji. It also elected a syndicate and created a syllabus subcommitteeThe known freedom fighter and Muslim theologian, Maulana Mehmud Hasan,laid the foundation stone of Jamia Millia Islamia at Aligarh on Friday, 29 October 1920.Considering the difficult circumstances under which it started, the list of its first teachersis very impressive";
 var speed=90;
 function movetext(){
   if(i<text.length){
     document.getElementById("more").innerHTML +=text.charAt(i);
     i++;
     setTimeout(movetext,speed);
   }
 }

$(document).ready(function(){
  $("#mb").mouseleave(function(){
$("#hand1,#hand2,#hand3").css("color", "blue");
});
}); 
$(document).ready(function(){
  $('.animated-bg').animatedbg({
    colors : ["red","blue","green","black"],
    numParticles: 100,
  });
});