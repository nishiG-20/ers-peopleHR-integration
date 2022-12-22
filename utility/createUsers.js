const axios = require('axios');
exports.users = async (url) => {
    try {
        let response = await axios.post(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}