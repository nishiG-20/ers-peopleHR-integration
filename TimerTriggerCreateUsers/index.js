const ersUsers = require('../utility/createUsers.js');

module.exports = async function (context, myTimer) {
    try {
        var timeStamp = new Date().toISOString();
        if (myTimer.isPastDue) {
            context.log('JavaScript is running late!');
        }
        let baseUrl = 'https://ers-rstar.azurewebsites.net/api/ersUserScheduler';
        let results = await ersUsers.users(baseUrl);
        context.log(results)
        context.log('JavaScript timer trigger function ran!', timeStamp);
    } catch (error) {
        console.log(error);
        throw error
    }
}