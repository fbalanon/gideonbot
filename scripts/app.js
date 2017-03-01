//declaring variables and arrays

var today = new Date();
var month = today.getMonth() +1;
var day = today.getDate();

var motivate = ["https://youtu.be/CevxZvSJLk8", "https://youtu.be/co6WMzDOh1o", "https://youtu.be/IKqV7DB8Iwg", "https://youtu.be/G_Vzpjv_kR4", "https://youtu.be/XuRnNRHcN4A", "https://youtu.be/vx2u5uUu3DE", "https://youtu.be/btPJPFnesV4", "https://youtu.be/y6Sxv-sUYtM", "https://youtu.be/04854XqcfCY", "https://youtu.be/rmpQReqZfd0", "https://youtu.be/nfWlot6h_JM"];
var reset = ["https://www.youtube.com/watch?v=GdIaEL72PwI&t=2s","https://www.youtube.com/watch?v=ORirnHtuWjc","https://www.youtube.com/watch?v=un0ga8KBlYs&t=2s","https://www.youtube.com/watch?v=H_hgNmdONPE&t=2s","https://www.youtube.com/watch?v=d_pu9OtR3Ik&t=2s"];
var sports = ["https://www.youtube.com/watch?v=3judM0wSq7g","https://www.youtube.com/watch?v=Hzl0Jf6VPJQ","https://www.youtube.com/watch?v=FRlL7XYq77E","https://youtu.be/gb0wmBUB4cg","https://youtu.be/wk377KOejlo","https://youtu.be/EVah1Fj3EY8"];
var classTopics = ["Class 00: Installfest","Class 01: Command line JavaScript",
"Class 02: Data types & loops","Class 03: Conditionals & functions","Class 04: Scope & closures","Class 05: Slack bot lab","Class 06: Objects & JSON","Class 07: Intro to the DOM","Class 08: Intro to jQuery & templating","Class 09: Ajax & APIs","Class 10: Asynchronous JavaScript & callbacks","Class 11: Advanced APIs","Class 12: Feedr lab","Class 13: Prototypal inheritance","Class 14: The module pattern & this","Class 15: Intro to CRUD and Firebase","Class 16: Deploying your app","Class 17: TBD (instructor-student choice)","Class 18: Final project lab","Class 19: Final project presentations & graduation!"];
var classSlides =["https://github.com/svodnik/sfjs6/blob/master/00-installfest/JS-SF-6-00-installfest-slides.pdf", "https://github.com/svodnik/sfjs6/blob/master/01-command-line-JS/JS-SF-6-01-command-line-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/02-data-types-loops/JS-SF-6-02-data-types-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/03-conditionals-functions/JS-SF-6-03-conditionals-functions-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/04-scope-closures/JS-SF-6-04-scope-closures-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/05-slackbot-lab/JS-SF-6-05-slackbot-lab-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/06-objects-json/JS-SF-6-06-objects-json-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/07-dom-intro/JS-SF-6-07-dom-intro-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/08-jquery-templating/JS-SF-6-08-jquery-templating-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/09-ajax-apis/JS-SF-6-09-ajax-apis-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/10-async-callbacks/JS-SF-6-10-async-callbacks-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/11-advanced-apis/JS-SF-6-11-advanced-apis-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/12-feedr-lab/JS-SF-6-12-feedr-lab-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/13-prototypal-inheritance/JS-SF-6-13-prototypal-inheritance-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/14-module-pattern-this/JS-SF-6-14-module-pattern-this-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/15-crud-firebase/JS-SF-6-15-crud-firebase-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/16-deploying-your-app/JS-SF-6-16-deploying-your-app-slides.pdf","https://github.com/svodnik/sfjs6/blob/master/17-instructor-student-choice/JS-SF-6-17-instructor-student-choice-slides.pdf"];

var randomReset = function() {
    return reset[Math.floor((Math.random() * reset.length))];
};
var randomMotivate = function() { 
    return motivate[Math.floor((Math.random() * motivate.length))];
};
var randomSports = function() {
    return sports[Math.floor((Math.random() * sports.length))];
};

var topics = function(){
    var string = "\n";
    function tableContents () {
    for (var i = 0; i < classTopics.length; i++)
    string = string + classTopics[i] + "\n";
};
    tableContents();
    return string;
};

var slides = function(num) {
  return classSlides[num];  
};

//Interact with my hubot named gideon
module.exports = function(gideonbot) {
    gideonbot.hear(/hey gideon/, function(res) {
        return res.send("yes sir?");
    });

    gideonbot.respond(/thank you!/, function(res) {
        return res.reply("++ you're welcome!");
    });

//responds to "what" questions, "what are the class topics?" is my favorite
    gideonbot.respond(/what (.*)/i, function(msg) {
        var question;
        question = msg.match[1];
        console.log(question);
        switch (question) {
            case "is your favorite dance move?":
                return msg.reply("The Robot of Course!!" + " " + "https://media.giphy.com/media/1Mng0gXC5Tpcs/giphy.gif");
                break;
            case "is the meaning of life?":
                return msg.reply("42");
                break;
            case "are the class topics?":
                return msg.reply(topics());
                break;
            default:
                return msg.reply("I don't understand " + question + ". Have a good day!");
        }
    });

//after getting a list of the class topics, you could plug in the topic number with "class slides" below to actually get the slides
    gideonbot.respond(/class slides (.*)/i, function(num) {
        var number;
        number = num.match[1];
            if (number <= classSlides.length){
                return num.send(classSlides[number]);
            } else {
                return num.reply("Please look at the class topics again!");
            }
    });

//Code to receive some random motivation, reset or take a break, or to feel accomplished
    gideonbot.respond(/feeling (.*)/i, function(msg) {
        var mood;
        mood = msg.match[1];
        console.log(mood);
        switch (mood) {
            case "tired":
                return msg.reply("listen to some music for motivation! \n" + randomMotivate());
                break;
            case "blah":
                return msg.reply("enjoy! \n" + randomSports());
                break;
            case "crazy":
                return msg.reply("take a break \n" + randomReset());
                break;
            case "done":
                return msg.reply("Congratulations!!! \n" + "https://youtu.be/KQ6zr6kCPj8");
                break;
            default:
                return msg.reply("Sorry, I can't help you, phone a friend!");
        }
    });

//code to get the links of Sasha's repo to get what's due this week
 gideonbot.respond(/Lo que se debe/i, function(msg) {
     console.log(month + "-" + day);
    if (month === 2 && day <= 28) {
        return msg.reply("https://github.com/svodnik/sfjs6/tree/master/05-slackbot-lab "  + "https://github.com/svodnik/sfjs6/tree/master/06-objects-json");
    } else if (month === 3 && day < 7) {
        return msg.reply("https://github.com/svodnik/sfjs6/tree/master/07-dom-intro " + "https://github.com/svodnik/sfjs6/tree/master/08-jquery-templating");
    } else if (month === 3 && day < 14) {
        return msg.reply("https://github.com/svodnik/sfjs6/tree/master/09-ajax-apis " + "https://github.com/svodnik/sfjs6/tree/master/10-async-callbacks");
    } else if (month === 3 && day < 21) {
        return msg.reply("https://github.com/svodnik/sfjs6/tree/master/11-advanced-apis " + "https://github.com/svodnik/sfjs6/tree/master/12-feedr-lab");
    } else if (month === 3 && day < 28) {
        return msg.reply("https://github.com/svodnik/sfjs6/tree/master/13-prototypal-inheritance " + "https://github.com/svodnik/sfjs6/tree/master/14-module-pattern-this");
    }  else if ((month === 3 && day <= 31) || (month === 4 && day < 4)) {
        return msg.reply("https://github.com/svodnik/sfjs6/tree/master/15-crud-firebase " + "https://github.com/svodnik/sfjs6/tree/master/16-deploying-your-app");
    } else {
        return msg.reply("I believe it's all on you now, good luck!!!");
    }
    });
};

