(function(){

	var btn = document.getElementsByTagName('input');
	btn[0].addEventListener('click', preventDefaultReDirection , false);

		//function to prevent defualt link to non exsiting card.html
		function preventDefaultReDirection (){
			event.preventDefault();
			console.log('making card, please hold');

			addingCustomMessage()
			choosingImage()
			choosingBG()
			choosingFont()
			choosingBorder()
		}

		//Adding custom message
		function addingCustomMessage (){
			var customMessage = document.getElementById('message').value;
			var printedMessage = document.getElementsByTagName('h1');
			
			printedMessage[0].innerHTML = customMessage;
		}

		//Choosing image for card function
		function choosingImage (){
			var chosenImage = document.getElementsByTagName('img');
			var imageSelector = document.getElementById('image').value;

			chosenImage[0].src = "assets/" + imageSelector + ".jpg";

		}

		//Choosing background colour function
		function choosingBG (){
			var chosenBG = document.getElementsByTagName('div');

			var BGSelector = document.getElementById('background').value;

				chosenBG[1].className = "card " + BGSelector + "Background";
		}

		//Choosing a font function
		function choosingFont (){
			var chosenFont = document.getElementsByTagName("h1");
			var fontSelector = document.getElementById('font').value;

				chosenFont[0].className = fontSelector;
		}

		//Choosing border thickness function
		function choosingBorder (){
			var chosenBorder = document.getElementsByTagName("div");
			var borderSelector = document.getElementById('border').value;

			switch(borderSelector) {
			    case "none":
			        chosenBorder[3].className = 'noneBorder';
			        break;
			    case "thin":
			        chosenBorder[3].className = 'smallBorder';
			        break;
			    case "think":
			        chosenBorder[3].className = 'bigBorder';
			        break;
			    case "filled":
			        chosenBorder[3].className = 'filledBorder';
			        break;
			    default:
			        console.log('Please choose a border');
			}
		}

})();
