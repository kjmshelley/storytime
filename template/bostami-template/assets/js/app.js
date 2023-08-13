const storyContainer = document.querySelector("#storyContainer");

const story = [{
    order: 1,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "電視: 今天的天氣是34度。",
        sentenceHtml: "<span class='text-bold'>電視</span>: 今天的天氣是34度。",
        sentencePinyin: "diànshì: jīntiān de tiānqì shì 34 dù.",
        words: [
            { char_trad: "電視", char_simp: "电视", char_pinyin: "diànshì", zhuyin: "", meaning: "television", explaination: "" },
            { char_trad: "今天", char_simp: "今天", char_pinyin: "jīntiān", zhuyin: "", meaning: "weather", explaination: "" },
            { char_trad: "的", char_simp: "的", char_pinyin: "de", zhuyin: "", meaning: "'s;possession;adjective modifier", explaination: "" },
            { char_trad: "天氣", char_simp: "天气", char_pinyin: "tiānqì", zhuyin: "", meaning: "weather", explaination: "" },
            { char_trad: "是", char_simp: "是", char_pinyin: "shì", zhuyin: "", meaning: "to be", explaination: "" },
            { char_trad: "度", char_simp: "度", char_pinyin: "dù", zhuyin: "", meaning: "degree", explaination: "" },
        ]
    }]
}];

let storyHTML = "";
let DEFAULTS = {
    level: 1,
    charType: "char_trad",
};

function injectHTML(sentence) {
    let s = sentence.sentenceHtml;
    sentence.words.map(w => {
        const cw = w[DEFAULTS.charType];
        s = s.replace(cw, `<span class="text-highlight" data-value="${cw}">${cw}</span>`);
    })
    return s;
}

for(const sentence of story) {
    const sidx = sentence.levels.filter(s => s.level === DEFAULTS.level);
    levelSentence = sentence.levels[sidx] || sentence.levels.at(0);

    storyHTML += `<p class="text sentence">${injectHTML(levelSentence)}</p>`;
}
storyContainer.innerHTML += storyHTML;

document.querySelector(".sentence").addEventListener("click", evt => {
    console.log(evt.target.dataset.value);
});

console.log(storyHTML);