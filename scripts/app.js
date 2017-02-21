module.exports = function(bot) {
    bot.hear(/gideon/, function(res) {
        return res.send("yes sir?");
    });
};