const { Client } = require("pg");

const { getStorySQL } = require("./SQL");

async function getStory({ id }) {
    try {
        const client = new Client();
        await client.connect();
        const data = await client.query(getStorySQL, [id]);
        await client.end();
        return data.rows;
    } catch (ex) {
        console.log(ex);
        return [];
    }
}


module.exports = {
    getStory,
};