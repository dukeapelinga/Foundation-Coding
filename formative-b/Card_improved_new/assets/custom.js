// IIFE starts
(function() {
    // Variable declarations
    var image = document.getElementById("image");   
    var background = document.getElementById("background");
    var font = document.getElementById("font");
    var border = document.getElementById("border");
    var message = document.getElementById("message");
    var button = document.getElementsByTagName("input")[0];
    var card = document.getElementsByClassName("card")[0];

    // Generic function for getting the value property from the select list
    function getValue(select) {
        // Assigns the arguments children to a variable
        var option = select.children;

        // Loops through each item in the opt variable and returns
        // the value at the index where the selected property is true
        for (var i = 0; option.length; i++) {
            if (option[i].selected == true) {
                return option[i].value;
            }
        }
    }

    // Changes the image on the card
    function changeImage() {
        // Gets the selected images value and assigns it to a variable
        var imageOption = getValue(image);

        // Changes the image path using the imgVal variable
        card.children[0].children[0].attributes[0].textContent = "assets/" + imageOption + ".jpg";
    }

    // Changes the background color of the card
    function changeBackground() {
        // Gets the selected backgrounds value and assigns it to a variable
        var backgroundOption = getValue(background);

        // Removes the 2nd item in the card classList
        card.classList.remove(card.classList[1]);

        // Adds a background class to the card classList using the
        // bgVal variable and concatenation
        card.classList.add(backgroundOption + "Background");
    }

    // Changes the font of the message in the card
    function changeFont() {
        // Gets the selected fonts value and assigns it to a variable
        var fontOption = getValue(font);

        // Emptys the classList array to make sure there
        // won't be any conflicting classes
        card.children[1].children[0].classList = [];

        // Adds the fontVal variable to the classList
        card.children[1].children[0].classList.add(fontOption);
    }

    // Changes the border of the message in the card
    function changeBorder() {
        // Gets the selected border value and assigns it to a variable
        var borderOption = getValue(border);

        // Switches on the brdrValue variable because the CSS
        // classes aren't the same as the value returned
        // by the getValue function
        switch (borderOption) {
            case "thin":
                borderOption = "small";
                break;
            case "thick":
                borderOption = "big";
                break;
            default:
                break;
        }

        // Emptys the classList array to make sure there
        // won't be any conflicting classes
        card.children[1].classList = [];
        
        // Adds a border class to the card classList using the
        // brdrVal variable and concatenation
        card.children[1].classList.add(borderOption + "Border");
    }

    // Change the text in the card to whatever the user enters
    function changeText() {
        var addMessage = message.value;
            // erMsgEl = document.getElementById("errorMessage");

        if (addMessage === "" && addMessage) {
            // If the message is empty and the erMsgEl
            // element exists, don't do anything
        } else if (addMessage !== "" && addMessage) {
            // If the message is not empty and the erMsgEl
            // element exists, remove the erMsgEl element
            // msg.parentElement.removeChild(msg);
            card.children[1].children[0].textContent = addMessage;
        }

        // Add the text to the card. Blank or with message
        // as to not be render blocking
        
    }

    // Adds a listener to the submit button
    button.addEventListener("click", function(a) {
        // Prevents the page from being redirected
        a.preventDefault();

        // Calls the above functions and executes them
        changeImage();
        changeBackground();
        changeFont();
        changeBorder();
        changeText();
    });
})(); //IIFE end
