$(document).ready(function(){

	//console.log($("#heading"));
	//console.log($(".ptag"));
	//console.log($("p"));
	// var heading =$("#heading");
	// console.log(heading);

	// var color = "#cdcdcd"
	// var number1 = 10;
	// var number2 = 2;
	// console.log (number1 * number2);

	$("#heading").dblclick(function(){
		alert("you have clicked on the heading");
	});

	// .click
	// .dblclick
	// .hover
	// .mouseenter
	// .mouseleave

	$("#hideButton").click(function(){
		event.preventDefault();
		$("#box1").hide();
	})
	
	$("#showButton").click(function(){
		event.preventDefault();
		$("#box1").show();
	})

	$("#toggleButton").click(function(){
		event.preventDefault();
		$("#box2").toggle(3000);
	});

	$("#fadeIn").click(function(){
		event.preventDefault();
		$("#box3").fadeIn(1000);
	});

	$("#fadeOut").click(function(){
		event.preventDefault();
		$("#box3").fadeOut(1000);
	});

	$("#addListItem").click(function(){
		event.preventDefault();
		$("#List").prepend("<li>hello</li>");
	});

	$("#addBox").click(function(){
		event.preventDefault();
		$("#addBoxContainer").append("<div class='box boxrandom'></div>");
	});

	$("#changeColour").click(function(){
		event.preventDefault();
		// $("#box4").addClass("pumpkin").removeClass("silver")
		$("#box4").toggleClass("silver pumpkin")
	});

	$("#changeCSS").click(function(){
		event.preventDefault();
		$("#box5").css({'width':'600px', 'height':'400px'});
	});

	$(".box").click(function(){
		$(this).toggleClass('border')
	});
})