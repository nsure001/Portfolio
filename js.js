var slideIndex = 1;
var $window = $(window);

function myFunction() {
var x = document.getElementById('mydiv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

$(window).on('resize', function() {
    if ($(window).width() > 768) {
        $('.navlist, .hide').show();
        $('.btn1').hide();
	} else {
		$('.navlist, .hide').hide();
        $('.btn1').show();
	}
});


$(document).ready(function(e) {
    if ($(window).width() > 768) {
        $('.navlist, .hide').show();
        $('.btn1').hide();

    }
});


$(document).ready(function() {
	
	if($(window).width()<767) {
		
		$('#nav').click(function() {
			$('.navbar').slideToggle("fast");
		});
	} else {
			$('#nav').click(function() {
				$(".navbar").show();
			});
	}
});

function checkWidth() {
	$('#nav').off("click");
	if($(window).width()<767) {
		
		$('.btn1').click(function() {
			$('.navlist').show();
		});
	} else {
			$('#nav').click(function() {
				$(".navbar").show();
			});
	}
	
var windowsize = $window.width();
    if (windowsize <= 767) {
		// $(".navbar").hide();
		$('.navlist, .hide').hide();
        $('.btn1').show();
	} else {
        $('.navbar').show();
		
	}
};
checkWidth();
$(window).resize(checkWidth);


$(document).ready(function(e) {
		
	if($(window).width()<767) {
			
		$(".navbar").hide();
	} else {
		$(".navbar").show();
	}
		
		
	$("#home").click(function(e) {
		e.preventDefault();
			$("#about1").hide();
			$("#skills1").hide();
			$("#experience1").hide();
			$("#projects1").hide();
			$("#academics1").hide();
			$("#contact1").hide();
			$("#home1").show();
			slideIndex =1;
			document.getElementById("about").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "#f4aa42";
	});
			
	$("#about").click(function(e) {
		e.preventDefault();
		slideIndex =2;
			$("#about1").show();
			$("#skills1").hide();
			$("#experience1").hide();
			$("#projects1").hide();
			$("#academics1").hide();
			$("#contact1").hide();
			$("#home1").hide();
				
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("about").style.color = "#f4aa42";
	});
			
	$("#skills").click(function(e) {
		slideIndex =3;
		e.preventDefault();
			$("#about1").hide();
			$("#skills1").show();
			$("#experience1").hide();
			$("#projects1").hide();
			$("#academics1").hide();
			$("#contact1").hide();
			$("#home1").hide();
				
			document.getElementById("about").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "#f4aa42";
	});
			
	$("#experience").click(function(e) {
		e.preventDefault();
		slideIndex =4;
			$("#about1").hide();
			$("#skills1").hide();
			$("#experience1").show();
			$("#projects1").hide();
			$("#academics1").hide();
			$("#contact1").hide();
			$("#home1").hide();
				
			document.getElementById("about").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "#f4aa42";
	});
			
	$("#projects").click(function(e) {
		slideIndex =5;
		e.preventDefault();
			$("#about1").hide();
			$("#skills1").hide();
			$("#experience1").hide();
			$("#projects1").show();
			$("#academics1").hide();
			$("#contact1").hide();
			$("#home1").hide();
				
			document.getElementById("about").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "#f4aa42";
	});
			
	$("#academics").click(function(e) {
		e.preventDefault();
			slideIndex =6;
			$("#about1").hide();
			$("#skills1").hide();
			$("#experience1").hide();
			$("#projects1").hide();
			$("#academics1").show();
			$("#contact1").hide();
			$("#home1").hide();
				
			document.getElementById("about").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "#f4aa42";
	});
			
	$("#contact").click(function(e) {
		e.preventDefault();
			slideIndex =7;
			$("#about1").hide();
			$("#skills1").hide();
			$("#experience1").hide();
			$("#projects1").hide();
			$("#academics1").hide();
			$("#contact1").show();
			$("#home1").hide();
				
			document.getElementById("about").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "#f4aa42";
	});
});

function changeSlides(n){
	showSlides(slideIndex+=n);
	
		if(slideIndex==1)
		{
			document.getElementById("about").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
		document.getElementById("home").style.color = "#f4aa42";
		}
		if(slideIndex==2)
		{
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("about").style.color = "#f4aa42";
		}
		if(slideIndex==3)
			{
			document.getElementById("about").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "#f4aa42";
		}

		if(slideIndex==4)
			{
			document.getElementById("about").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "#f4aa42";
		}
		if(slideIndex==5)
			{
			document.getElementById("about").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "#f4aa42";
		}

		if(slideIndex==6)
			{
			document.getElementById("about").style.color = "";
			document.getElementById("contact").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "#f4aa42";
		}


		if(slideIndex==7)
			{
			document.getElementById("about").style.color = "";
			document.getElementById("home").style.color = "";
			document.getElementById("skills").style.color = "";
			document.getElementById("experience").style.color = "";
			document.getElementById("projects").style.color = "";
			document.getElementById("academics").style.color = "";
			document.getElementById("contact").style.color = "#f4aa42";
		}
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("slides");
	
	if(n>slides.length){slideIndex=1}
	if(n<1){slideIndex=slides.length}
	for(i=0; i<slides.length; i++){
		slides[i].style.display="none";
	}
	slides[slideIndex-1].style.display="block";
}

function showModal1(){
	//body..
	var m1 = document.getElementById("modal1");
	m1.style.display="block";
}

function closeModal1(){
	//body..
	var m1 = document.getElementById("modal1");
	m1.style.display="none";
}