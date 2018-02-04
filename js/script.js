


$(document).ready(function () {

// PopUp SLIDER1
   $(".popSldier1").hide();

   $(".slInner1").click(function () {
       $(".popSldier1").fadeIn(200);
   });

   $(".close1").click(function () {
       $(".popSldier1").fadeOut(200);
   }); 
// PopUp SLIDER2
   $(".popSldier2").hide();

   $(".slInner2").click(function () {
       $(".popSldier2").fadeIn(200);
   });

   $(".close2").click(function () {
       $(".popSldier2").fadeOut(200);
   }); 
// PopUp SLIDER3
   $(".popSldier3").hide();

   $(".slInner3").click(function () {
       $(".popSldier3").fadeIn(200);
   });

   $(".close3").click(function () {
       $(".popSldier3").fadeOut(200);
   }); 
// PopUp SLIDER3
   $(".popSldier4").hide();

   $(".slInner4").click(function () {
       $(".popSldier4").fadeIn(200);
   });

   $(".close4").click(function () {
       $(".popSldier4").fadeOut(200);
   });    


// Pop Up1  
   $(".pop1").hide();

   $(".PopUp1").click(function () {
       $(".pop1").fadeIn(200);
   });

   $(".pop1").click(function () {
       $(".pop1").fadeOut(200);
   });     
// Pop Up2  
   $(".pop2").hide();

   $(".PopUp2").click(function () {
       $(".pop2").fadeIn(200);
   });

   $(".pop2").click(function () {
       $(".pop2").fadeOut(200);
   });  
// Pop Up3  
   $(".pop3").hide();

   $(".PopUp3").click(function () {
       $(".pop3").fadeIn(200);
   });

   $(".pop3").click(function () {
       $(".pop3").fadeOut(200);
   });     
// Pop Up4  
   $(".pop4").hide();

   $(".PopUp4").click(function () {
       $(".pop4").fadeIn(200);
   });

   $(".pop4").click(function () {
       $(".pop4").fadeOut(200);
   }); 
// Pop Up5  
   $(".pop5").hide();

   $(".PopUp5").click(function () {
       $(".pop5").fadeIn(200);
   });

   $(".pop5").click(function () {
       $(".pop5").fadeOut(200);
   });     
// Pop Up6  
   $(".pop6").hide();

   $(".PopUp6").click(function () {
       $(".pop6").fadeIn(200);
   });

   $(".pop6").click(function () {
       $(".pop6").fadeOut(200);
   });  
// Pop Up7  
   $(".pop7").hide();

   $(".PopUp7").click(function () {
       $(".pop7").fadeIn(200);
   });

   $(".pop7").click(function () {
       $(".pop7").fadeOut(200);
   });     
// Pop Up8  
   $(".pop8").hide();

   $(".PopUp8").click(function () {
       $(".pop8").fadeIn(200);
   });

   $(".pop8").click(function () {
       $(".pop8").fadeOut(200);
   }); 
// Pop Up9  
   $(".pop9").hide();

   $(".PopUp9").click(function () {
       $(".pop9").fadeIn(200);
   });

   $(".pop9").click(function () {
       $(".pop9").fadeOut(200);
   });     
// Pop Up10  
   $(".pop10").hide();

   $(".PopUp10").click(function () {
       $(".pop10").fadeIn(200);
   });

   $(".pop10").click(function () {
       $(".pop10").fadeOut(200);
   }); 
   
   // Scroll
	// Плавный скролл по якорям
	$('a[href^="#"]').click(function () { 
	    elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		if($.browser.safari){
		$('body').animate( { scrollTop: destination }, 1000 );
		} else {
	    	$('html').animate( { scrollTop: destination }, 1000 );
		}
		return false;
	});

});
   




