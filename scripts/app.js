module.exports = function(gideonbot) {
    gideonbot.hear(/hey buddy/, function(res) {
        return res.send("yes sir?");
    });

    gideonbot.respond(/what is your favorite (.*)/i, function(msg) {
        var fav;
        fav = msg.match[1];
        console.log(fav);
        switch (fav) {
            case "dance move":
            return msg.reply("The Robot of Course!!");
            break;
        case "band":
            return msg.reply("It's gotta be Daft Punk!");
            break;
        case "programming language":
            return msg.reply("Javascript, of course!");
            break;
        default:
            return msg.reply("I don't have a favorite " + fav + ". What's yours?");
   }
 });
};