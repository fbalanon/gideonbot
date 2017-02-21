module.exports = function(bot) {
    bot.hear(/gideon/, function(res) {
        return res.send("yes sir?");
    });
    bot.respond(/What's your favorite dance move?/, function(res) {
        return res.send("The robot of course!!!");
    });
};