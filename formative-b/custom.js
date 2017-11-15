//iffe starts ****
(function(){  
  //This is click event for the form
  document.getElementById('subBtn').onclick = function(){
      // This stops the submit button from sending you to another page
  	   event.preventDefault();
   	
     // this accesses the property of the form in the document object
      var oForm = document.forms[0];
      // this accessed the elements of the form property
      var els = oForm.elements;
      
      var values;

      // this function loops through the elements on the form
      // and pushes them into the empty array. the variable values is
      // then set to equal that array
      function loopFormEls(elements){
          //An empty array to push the values into
          var valuesPlease = [];
          // loops through the form elements and gets their values
          for (var i = 0; i < elements.length; i++) {
              valuesPlease.push(elements[i].value);
          };
          
          values = valuesPlease;
          console.log(values);
          return valuesPlease; 
         

  	}


  // This function changes the image of the card by using an if else statement
  // dependent on the value that is chosen
   function changeImage(){
     var myImage = document.getElementsByTagName('img');

     var valuesTwo = values[1];

  	 if(valuesTwo === 'christmas'){
           myImage[0].src = 'assets/christmas.jpg';
       } else if (valuesTwo === 'birthday'){
           myImage[0].src = 'assets/birthday.jpg';
       } else if (valuesTwo === 'valentines'){
           myImage[0].src = 'assets/valentines.jpg';
       }
       else{
           console.log('break');
       }
    }

   	 // This function changes the background colour of the card by using an if else statement
  // dependent on the value that is chosen
    function changeColour(){
  	   var myColour = document.getElementsByClassName('card');

  	   var valuesThree = values[2];

  		 if(valuesThree === 'celadon'){
             myColour[0].className = ' card celadonBackground';
         } else if (valuesThree === 'graphite'){
            myColour[0].className = ' card graphiteBackground';
         } else if (valuesThree === 'rose'){
             myColour[0].className = ' card roseBackground';
         }
         else{
             console.log('break');
         }
    }

  	 // This function changes the font of the card by using an if else statement
  // dependent on the value that is chosen
    function changeFont(){
  	   var myFont = document.getElementsByTagName('h1');

  	   var valuesFour = values[3];

  		 if(valuesFour === 'handwriting'){
             myFont[0].className = ' handwriting';
         } else if (valuesFour === 'sketch'){
            myFont[0].className = 'sketch';
         } else if (valuesFour === 'print'){
             myFont[0].className = ' print';
         }
         else{
             console.log('break');
         }
    }
    // This function changes the border style of the card by using an if else statement
  // dependent on the value that is chosen
    function changeBorder(){
    	   var myBorder = document.getElementsByTagName('div');
    	 
    	   var valuesFive = values[4];

    		 if(valuesFive === 'none'){
               myBorder[3].className = 'noneBorder';
           } else if (valuesFive === 'thin'){
              myBorder[3].className = 'smallBorder';
           } else if (valuesFive === 'thick'){
               myBorder[3].className = 'bigBorder';
           }else if (valuesFive === 'filled'){
               myBorder[3].className = 'filledBorder';
           }
           else{
               console.log('break');
           }
    }
    // This function changes the message in the card 
    //it does this by using the value that is input and
    // setting it as the text content of the h1 tag
    function changeMessage(){
    	var text = document.getElementsByTagName('h1');
      var valuesSix = values[5];

      text[0].textContent = valuesSix;


    	
    }
      //These invoke all the functions
   	   loopFormEls(els);
   	    changeImage();
   	    changeColour();
   	    changeFont();
   	    changeBorder();
   	    changeMessage();

  }
})() //iffe ends ***




	