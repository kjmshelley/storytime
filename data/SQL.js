module.exports.getStorySQL = `
SELECT
	name,
	tl_name,
	tl_transliteration
FROM stories
WHERE id = $1
`;


module.exports.getStoryWordsSQL = `
SELECT scw.*
FROM story_content sc
	JOIN story_content_words scw ON sc.id = scw.story_content_id
WHERE sc.story_id = $1
ORDER BY sc.order_id, scw.order_id
`;