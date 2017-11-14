// IIFE starts
(function() {
    // list of variables
    var image = document.getElementById("image");   
    var background = document.getElementById("background");
    var font = document.getElementById("font");
    var border = document.getElementById("border");
    var message = document.getElementById("message");
    var button = document.getElementsByTagName("input")[0];
    var card = document.getElementsByClassName("card")[0];

    // create a listener to the submit button
    button.addEventListener("click", function(a) {
        // prevents the page from being redirected
        a.preventDefault();

        // invoking the functions after the onclick event
        changeImage();
        changeBackground();
        changeFont();
        changeBorder();
        enterMessage();
    });

    // function for getting the value property from the select list
    function getValue(select) {
        var option = select.children;

        // loops through each item in the option variable and returns the value 
        for (var i = 0; option.length; i++) {
            if (option[i].selected == true) {
                return option[i].value;
            }
        }
    }

    // function for changing the image of the card
    function changeImage() {
        var imageOption = getValue(image);

        // changes the image path using the imageOption variable
        card.children[0].children[0].attributes[0].textContent = "assets/" + imageOption + ".jpg";
    }

    // function for changing the background color of the card
    function changeBackground() {
        var backgroundOption = getValue(background);

        // removes the 2nd item in the card classList
        // card.classList.remove(card.classList[1]);

        // Adds a background class to the card classList using the backgroundOption variable
        card.classList.add(backgroundOption + "Background");
    }

    // function for changes the font of the message in the card
    function changeFont() {
        var fontOption = getValue(font);

        // empty classList array to make sure there won't be any conflicting classes
        card.children[1].children[0].classList = [];

        // adds the fontOption variable to the classList
        card.children[1].children[0].classList.add(fontOption);
    }

    // function for changing the border of the message in the card
    function changeBorder() {
        var borderOption = getValue(border);

        // switches on the borderOption variable because the CSS classes are not the same as 
        // the value returned by the getValue function
        switch (borderOption) {
            case "thin":
                borderOption = "small"; break;
            case "thick":
                borderOption = "big"; break;
            // case "filled":
            //     borderOption = ""; break;
            default:
                break;
        }

        card.children[1].classList = [];
        
        // adds a border class to the card classList using the borderOption variable
        card.children[1].classList.add(borderOption + "Border");
    }

    // function to insert text in the card to whatever the user enters
    function enterMessage() {
        var addMessage = message.value;

        if (addMessage === "" && addMessage) {
            // If the message is empty do not anything
        } else if (addMessage !== "" && addMessage) {
            // If the message is filled do this
            card.children[1].children[0].textContent = addMessage;
        }
    }
    
})(); //IIFE end
