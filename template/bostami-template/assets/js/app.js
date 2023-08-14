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
}, {
    order: 2,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "小麗: '呃～好吵！' 小麗剛被電視吵醒了。",
        sentenceHtml: "<span class='text-bold'>小麗</span>: '呃～好吵！' 小麗剛被電視吵醒了。",
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
}, {
    order: 3,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "媽：小麗！小麗！快點起床！你快要來不及上飛機了。",
        sentenceHtml: "<span class='text-bold'>媽:</span>小麗！小麗！快點起床！你快要來不及上飛機了。",
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
}, {
    order: 4,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "小麗刷著牙對媽媽喊：「媽！電視幹嘛這麼大聲啊！」",
        sentenceHtml: "<span class='text-bold'>小麗:</span> 刷著牙對媽媽喊：「媽！電視幹嘛這麼大聲啊！」",
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
}, {
    order: 5,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "媽：快點快點小丫頭！",
        sentenceHtml: "<span class='text-bold'>媽:</span>快點快點小丫頭！",
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
},{
    order: 6,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "小麗：好了好了。",
        sentenceHtml: "<span class='text-bold'>小麗:</span> 好了好了。",
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
},{
    order: 7,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "小麗：慘了！媽，我的手機呢？",
        sentenceHtml: "<span class='text-bold'>小麗:</span>慘了！媽，我的手機呢？",
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
},{
    order: 8,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "媽: 我怎麼知道你的手機放在哪？",
        sentenceHtml: "<span class='text-bold'>媽:</span>我怎麼知道你的手機放在哪？",
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
},{
    order: 9,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "你看房間這麼亂，難怪找不到東西。",
        sentenceHtml: "你看房間這麼亂，難怪找不到東西。",
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
},{
    order: 10,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "計程車來了，快點！",
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
},{
    order: 11,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "小麗: 找到了！好，到紐約會聯絡你。",
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
},{
    order: 12,
    levels: [{
        level: 1,
        levelDescription: "beginner",
        sentence: "媽: 寶貝，注意安全喔～",
        sentenceHtml: "<span class='text-bold'> 媽:</span>寶貝，注意安全喔～",
        sentencePinyin: "diànshì: jīntiān de tiānqì shì 34 dù.",
        words: [
            { char_trad: "媽", char_simp: "电视", char_pinyin: "diànshì", zhuyin: "", meaning: "television", explaination: "" },
            { char_trad: "寶貝", char_simp: "今天", char_pinyin: "jīntiān", zhuyin: "", meaning: "weather", explaination: "" },
            { char_trad: "注意", char_simp: "的", char_pinyin: "de", zhuyin: "", meaning: "'s;possession;adjective modifier", explaination: "" },
            { char_trad: "安全", char_simp: "天气", char_pinyin: "tiānqì", zhuyin: "", meaning: "weather", explaination: "" },
            { char_trad: "是", char_simp: "是", char_pinyin: "shì", zhuyin: "", meaning: "to be", explaination: "" },
            { char_trad: "度", char_simp: "度", char_pinyin: "dù", zhuyin: "", meaning: "degree", explaination: "" },
        ],
        phrase: [
            { char_trad: "注意安全", char_simp: "注意安全", char_pinyin: "Zhùyì ānquán", zhuyin: "", meaning: "Be careful", explaination: "" },
        ]
    }]
}];

let storyHTML = "";
let DEFAULTS = {
    level: 1,
    charType: "char_trad",
};

function getSentence(sidx) {
    const lidx = story[sidx || 0].levels.findIndex(s => s.level === DEFAULTS.level);
    return story[sidx || 0].levels[lidx || 0];
}

function injectHTML(sentence, sidx) {
    let s = sentence.sentenceHtml;
    sentence.words.map(w => {
        const cw = w[DEFAULTS.charType];
        s = s.replace(cw, `<span class="text-highlight" data-value="${cw}" data-sidx=${sidx}>${cw}</span>`);
    })
    return s;
}

for(const sentence of story) {
    const sidx = sentence.levels.findIndex(s => s.level === DEFAULTS.level);
    levelSentence = sentence.levels[sidx] || sentence.levels.at(0);

    storyHTML += `<p class="text sentence">${injectHTML(levelSentence, sidx)}</p>`;
}
storyContainer.innerHTML += storyHTML;

document.querySelector(".sentence").addEventListener("click", evt => {
    const { value, sidx } = evt.target.dataset;
    console.log(evt.target.dataset, sidx);
    const sentence = getSentence(sidx);
    const def = sentence.words.filter(w => w[DEFAULTS.charType] === value);
    console.log(def);
});

console.log(storyHTML);