const { Client } = require("pg");

const { getStoryWordsSQL } = require("./SQL");
console.log(getStoryWordsSQL);
async function getStoryWords({ id }) {
    try {
        const client = new Client();
        await client.connect();
        const data = await client.query(getStoryWordsSQL, [id]);
        await client.end();
        return data.rows;
    } catch (ex) {
        console.log(ex);
        return [];
    }
}


module.exports = {
    getStoryWords,
};