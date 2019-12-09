$(document).ready(function () {
    var portfolioItems = [
        {
            title: "Word Guessing Game",
            description: "Hangman style word guessing game",
            link: "https://psoneill.github.io/Word-Guess-Game/",
            img1: "assets/images/cardinals.jfif",
            img2: ""
        },
        {
            title: "Star Wars RPG",
            description: "Choose your character and battle Star Wars foes",
            link: "https://psoneill.github.io/unit-4-game/",
            img1: "assets/images/uga.png",
            img2: ""
        },
        {
            title: "Trivia of World Wonders",
            description: "Answer 10 Questions about World Wonders",
            link: "https://psoneill.github.io/TriviaGame/",
            img1: "assets/images/falcons.jpg",
            img2: ""
        },
        {
            title: "GIF Populator",
            description: "Choose your own subject and generate GIFS",
            link: "https://psoneill.github.io/gifPopulator/",
            img1: "assets/images/ncState.png",
            img2: ""
        },
        {
            title: "NetFIX",
            description: "See what new and expiring Netflix content is available",
            link: "https://loganmcnulty.github.io/Project1/ProjectDefault.html",
            img1: "assets/images/notreDame.jfif",
            img2: ""
        },
    ]

    portfolioItems.forEach(project => {
        console.log(project);
        var newAccordianHeading = $("<h3>").text(project.title);
        var newAccordianContent = $('<div class="list-group">');

        var newLink = $('<a href="'+project.link+'" target="_blank">');
        var newImg = $('<img src="'+project.img1+'">')
        newLink.append(newImg);

        var newDescription = $("<span>").text(project.description);

        newAccordianContent.append(newLink);
        newAccordianContent.append(newDescription);

        $("#accordionProjects").prepend(newAccordianContent);
        $("#accordionProjects").prepend(newAccordianHeading);
    });

    $("#accordionProjects").accordion({
        heightStyle: "content"
    });
});

{/* <a href="https://psoneill.github.io/Responsive-Portfolio/" target="_blank">
                                <img src="assets/images/Hurricanes.jfif" alt="Hurricanes">
                                <h3 class="portfolioTitle">Mobile Responsive Portfolio</h3>
                            </a> */}