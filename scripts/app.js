module.exports = function(bot) {
    bot.hear(/hey buddy/, function(res) {
        return res.send("yes sir?");
    });
    bot.respond(/What's your favorite dance move?/, function(res) {
        return res.send("The robot of course!!!");
    });
};