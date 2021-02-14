	var sco = [1];
		
		
	function playagain() {
	
	document.location.href="shoot birds2.html";
}
	
		function kill(id , id2 , id3){
			
			document.querySelector(".score").innerHTML="score:" + sco[0]++ + "/10";
				
			

			
	
		document.getElementById(id).style.display="none";
			document.getElementById(id2).style.display="none";
			document.getElementById(id3).style.display="none";
			
		//if(document.getElementById(id).style.display=="none"){ 
			
			// }
			
			if(document.querySelector(".score").innerHTML==="score:10/10"){
				
				document.querySelector(".winner").style.display="block";
				window.all.style.opacity="0.5";
				clearInterval(timer);
				document.querySelector(".again-win").style.display="block";
				
				//document.querySelector(".time").style.animation.play.state="paused"; 
				
			}

	
		}

		
		var t = 20;
		
		function countingdown(){
			
			document.querySelector(".time").innerHTML=t--;
			
			if(t < 5){
				
				document.querySelector(".time").style.WebkitAnimationPlayState= "running";
			}
			
			 if(t < 0){
				
				document.querySelector(".lose").style.display="block";
				window.all.style.opacity="0.5";
				clearInterval(timer);
				document.querySelector(".time").style.WebkitAnimationPlayState= "paused";
				 
				 // loop
				  var x, i;
  x = document.querySelectorAll(".box");
  for (i = 0; i < x.length; i++) {
    x[i].style.WebkitAnimationPlayState= "paused";
	
	  }
	  
	  
	  
	  // sco = +1 fa kont lazem a3mel -1 3ashan yetla3 el rakam s7 lma a5sar w yetla3 el score 
	  var c = sco - 1;
	  
	  document.querySelector(".score").style.display="none";
	  document.querySelector(".score-after-losing").style.display="block";
	  document.querySelector(".score-after-losing").innerHTML="score:" + c + "/10";
	  
  }
				//document.querySelectorAll(".box").style.WebkitAnimationPlayState= "paused";
				// document.style.WebkitAnimationPlayState= "paused";
				//document.querySelector(".time").style.; 
				
			/*	 x.onclick=function() {
					 
					  document.body.style.backgroundColor="red"
				 } 
				 */
			    var a, b;
  a = document.querySelectorAll(".bird");
  for (b = 0; b < x.length; b++) {
    a[b].onclick=function() {
		
		 a[b].style.display="block";
	}
	
	  }
	
		
		}
		
		
		
		
		
		
		
		var timer = setInterval(countingdown , 1000);
		
		
