$(document).ready(function () {
    var portfolioItems = [
        {
            title: "Word Guessing Game",
            description: "Hangman style word guessing game",
            link: "https://psoneill.github.io/Word-Guess-Game/",
            img1: "assets/images/WordGuess.PNG",
            img2: ""
        },
        {
            title: "Star Wars RPG",
            description: "Choose your character and battle Star Wars foes",
            link: "https://psoneill.github.io/unit-4-game/",
            img1: "assets/images/StarWars.PNG",
            img2: ""
        },
        {
            title: "Trivia of World Wonders",
            description: "Answer 10 Questions about World Wonders",
            link: "https://psoneill.github.io/TriviaGame/",
            img1: "assets/images/Trivia.PNG",
            img2: ""
        },
        {
            title: "GIF Populator",
            description: "Choose your own subject and generate GIFS",
            link: "https://psoneill.github.io/gifPopulator/",
            img1: "assets/images/GifPopulator.PNG",
            img2: ""
        },
        {
            title: "Rock Paper Scissors with FireBase",
            description: "Play Rock Paper Scissors with Friends through Firebase",
            link: "https://psoneill.github.io/RPS-Multiplayer/",
            img1: "assets/images/RPS.PNG",
            img2: ""
        },
        {
            title: "Sequelizer Through Burgers",
            description: "Create and Devour Burgers Using Sequelizer",
            link: "https://secure-plains-71755.herokuapp.com/",
            img1: "assets/images/BurgerSequelizer.PNG",
            img2: ""
        },
        {
            title: "NetFIX",
            description: "See what new and expiring Netflix content is available",
            link: "https://loganmcnulty.github.io/Project1/ProjectDefault.html",
            img1: "assets/images/Netfix.PNG",
            img2: ""
        },
        {
            title: "Employee Portal for HomeCare (Mobile App)",
            description: "Sign in, view schedule, record shift tasks, and take educational tests",
            link: "https://project-2jljp.herokuapp.com/",
            img1: "assets/images/EmployeePortal.PNG",
            img2: ""
        }
    ]

    portfolioItems.forEach(project => {
        console.log(project);
        var newAccordianHeading = $("<h3>").text(project.title);
        var newAccordianContent = $('<div class="list-group">');

        var newLink = $('<a href="'+project.link+'" target="_blank" class="text-center">');
        var newImg = $('<img src="'+project.img1+'" class="img-fluid">')
        newLink.append(newImg);

        var newDescription = $('<h4 class="text-center">').text(project.description);

        newAccordianContent.append(newLink);
        newAccordianContent.append("<hr>");
        newAccordianContent.append(newDescription);

        $("#accordionProjects").prepend(newAccordianContent);
        $("#accordionProjects").prepend(newAccordianHeading);
    });

    $("#accordionProjects").accordion({
        heightStyle: "content"
    });
});