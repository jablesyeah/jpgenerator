//USER LANGUAGE CHOICE

var choice = "romaji";

//LISTENERS 

var set = document.getElementById('output');
var answer = document.getElementById('answer');
var reveal = document.getElementById('reveal');
var optRomaji = document.getElementById('optRomaji');
var optHirigana = document.getElementById('optHirigana');
var optBoth = document.getElementById('optBoth');
var quizLength = document.getElementById('userInput').value;
var form = document.getElementById('availableCharacters');
var checkAnswers = document.getElementById('checkAnswers');
var result = document.getElementById("answersTable"); 
var select = document.getElementById("selectCharacter");

// ----- Checkboxes ----- //

// Hiragana

var aCheckBox = document.getElementById("aRowCheck");
var kCheckBox = document.getElementById("kRowCheck");
var sCheckBox = document.getElementById("sRowCheck");
var tCheckBox = document.getElementById("tRowCheck");
var nCheckBox = document.getElementById("nRowCheck");
var hCheckBox = document.getElementById("hRowCheck");
var mCheckBox = document.getElementById("mRowCheck");
var yCheckBox = document.getElementById("yRowCheck");
var rCheckBox = document.getElementById("rRowCheck");
var wCheckBox = document.getElementById("wRowCheck");

var kY = document.getElementById("kYoon");
var sY = document.getElementById("sYoon");
var tY = document.getElementById("tYoon");
var nY = document.getElementById("nYoon");
var hY = document.getElementById("hYoon");
var mY = document.getElementById("mYoon");
var rY = document.getElementById("rYoon");

// Gojuon

var gCheckBox = document.getElementById("gRowCheck");
var zCheckBox = document.getElementById("zRowCheck");
var dCheckBox = document.getElementById("dRowCheck");
var bpCheckBox = document.getElementById("bpRowCheck");

var gH = document.getElementById("gHan");
var zH = document.getElementById("zHan");
var dH = document.getElementById("dHan");
var bpH = document.getElementById("bpHan");

// BUTTON CLICK FUNCTIONS

function hirigana() {
choice = "hirigana";
optRomaji.disabled = false;
optBoth.disabled = false;
optHirigana.disabled = true;
};

function romaji() {
choice = "romaji";
optHirigana.disabled = false;
optBoth.disabled = false;
optRomaji.disabled = true;
};

function both() {
choice = "both"
optRomaji.disabled = false;
optHirigana.disabled = false;
optBoth.disabled = true;
};

function showAnswers() {
    var toShow = document.getElementsByClassName("answers");
    for (var show = 0; show < toShow.length; show++) {
    toShow[show].hidden = false;
    };
    verifyAnswers();
    checkAnswers.hidden = true;
}

function verifyAnswers() {
    
    var quizLength = document.getElementById('userInput').value;
    for (var checkNum = 0; checkNum < quizLength; checkNum++) {
        var guess = document.getElementById("guess" + checkNum);
        var correctAns= document.getElementById("answer" + checkNum);
        if (guess.value == correctAns.textContent) {
            correctAns.classList.add("correct");
        } else {
        correctAns.classList.add("incorrect");
        }
    }   
}

/*function checkAll() {
    var allOption = document.getElementById('allRows')
    if (allOption.checked == true) {
        aCheckBox.checked = true;
        kaCheckBox.checked = true;
        saCheckBox.checked = true;
        taCheckBox.checked = true;
    } else {
        aCheckBox.checked = false;
        kaCheckBox.checked = false;
        saCheckBox.checked = false;
        taCheckBox.checked = false;
    }  
}*/

// QUESTION / ANSWER GENERATOR

function showArray() {
    result.innerHTML = "";
    checkAnswers.hidden = true;
    var errors = document.getElementById('errors');
        errors.textContent = '';
    var quizLength = document.getElementById('userInput').value;
    combineTick();
    if (combined.length == 0){ 
        return;
    };
    for(i= 0; i < quizLength; i++) {
        var randomItem = Math.floor(Math.random()*combined.length);
        var item;
        var item2;
        if (choice == "romaji") {
            item = combined[randomItem].romaji;
            item2 = combined[randomItem].hirigana;            
        } else if (choice == "hirigana") {
            item = combined[randomItem].hirigana; 
            item2 = combined[randomItem].romaji;
        } else {
            var top = (Math.floor(Math.random() * 2) == 0) ? 'romaji' : 'hirigana';
            if (top == 'romaji'){
            item = combined[randomItem].romaji;
            item2 = combined[randomItem].hirigana;
            } else {
            item2 = combined[randomItem].romaji;
            item = combined[randomItem].hirigana;
            }
        }
        addTableRow(item, item2, top);
    }
    hideAnswers();
    checkAnswers.hidden = false;
}

// OPTIONS SELECTED ARRAY GENERATOR

function combineTick() {
    combined = [];
    // Hiragana boxes
    if (aCheckBox.checked == true){
    combined.push.apply( combined, aRow );
    }
    if (kCheckBox.checked == true){
    combined.push.apply( combined, kRow );
    }
    if (sCheckBox.checked == true){
    combined.push.apply( combined, sRow );
    }
    if (tCheckBox.checked == true){
    combined.push.apply( combined, tRow );
    }
    if (nCheckBox.checked == true){
    combined.push.apply( combined, nRow );
    }
    if (hCheckBox.checked == true){
    combined.push.apply( combined, hRow );
    } 
    if (mCheckBox.checked == true){
    combined.push.apply( combined, mRow );
    }
    if (yCheckBox.checked == true){
    combined.push.apply( combined, yRow );
    }
    if (rCheckBox.checked == true){
    combined.push.apply( combined, rRow );
    }
    
    // Yoon boxes
    
    if (kY.checked == true){
    combined.push.apply( combined, kYoon );
    }
    if (sY.checked == true){
    combined.push.apply( combined, sYoon );
    }
    if (tY.checked == true){
    combined.push.apply( combined, tYoon );
    }
    if (nY.checked == true){
    combined.push.apply( combined, nYoon );
    }
    if (hY.checked == true){
    combined.push.apply( combined, hYoon );
    }
    if (mY.checked == true){
    combined.push.apply( combined, mYoon );
    }
    if (rY.checked == true){
    combined.push.apply( combined, rYoon );
    }
    
    // Gojuon boxes
    
    if (gCheckBox.checked == true){
    combined.push.apply( combined, gSym );
    }
    if (zCheckBox.checked == true){
    combined.push.apply( combined, zSym );
    }
    if (dCheckBox.checked == true){
    combined.push.apply( combined, dSym );
    }
    if (bpCheckBox.checked == true){
    combined.push.apply( combined, bSym );
    combined.push.apply( combined, pSym );
    }
    
    // Han boxes
    
    if (gH.checked == true){
    combined.push.apply( combined, gYoonSym );
    }
    if (zH.checked == true){
    combined.push.apply( combined, zYoonSym );
    }
    if (dH.checked == true){
    combined.push.apply( combined, dYoonSym );
    }
    if (bpH.checked == true){
    combined.push.apply( combined, bYoonSym );
    combined.push.apply( combined, pYoonSym );
    }

    // Check if array is still empty
    if (combined.length == 0){
        var errors = document.getElementById('errors');
        errors.textContent = 'select a row';
    }
}

// Hide Answers

function hideAnswers() {
    var toHide = document.getElementsByClassName("answers");
    for (var hide = 0; hide < toHide.length; hide++) {
    toHide[hide].hidden = true;
    }
}

// QandA table generator

function addTableRow(question, answer, bothValue) {
    var el = document.createElement("tr");
    
    var q = document.createElement("th");
    q.textContent = question;
    
    var a = document.createElement("th");
    a.textContent = answer;
    a.classList.add("answers")
    a.id = "answer" + i;
    
    var opt = document.createElement("th");
    var res = document.createElement("select");
    res.id = "guess" + i;
    
    //add new row to table
    result.appendChild(el);
    //add question to row
    el.appendChild(q);
    //add select to row
    el.appendChild(opt);
    //add options to select
    opt.appendChild(res);    
    //add answer to row
    el.appendChild(a); 
    //add options to select
    for (var incr= 0; incr < combined.length; incr++) {
        if (choice == "hirigana") {
        var opt = combined[incr].romaji;
        } else if (choice == "romaji") {
        var opt = combined[incr].hirigana;
        } else {
            if (bothValue == 'romaji'){
            var opt = combined[incr].hirigana;
            } else {
            var opt = combined[incr].romaji;
            }
        };
        var nextOption = document.createElement("option");
            nextOption.textContent = opt;
            nextOption.value = opt;
            res.appendChild(nextOption);
    };    
};


// ----------------------------------------ARRAYS---------------------------------------- //

// Monographs (gojuon)

var aRow = [    
    {romaji: "a", hirigana: "あ"},
    {romaji: "i", hirigana: "い"},
    {romaji: "u", hirigana: "う"},
    {romaji: "e", hirigana: "え"},
    {romaji: "o", hirigana: "お"},
    ];
var kRow = [
    {romaji: "ka", hirigana: "か"},
    {romaji: "ki", hirigana: "き"},
    {romaji: "ku", hirigana: "く"},
    {romaji: "ke", hirigana: "け"},
    {romaji: "ko", hirigana: "こ"},
];
var sRow = [
    {romaji: "sa", hirigana: "さ"},
    {romaji: "shi", hirigana: "し"},
    {romaji: "su", hirigana: "す"},
    {romaji: "se", hirigana: "せ"},
    {romaji: "so", hirigana: "そ"},
];
var tRow = [
    {romaji: "ta", hirigana: "た"},
    {romaji: "chi", hirigana: "ち"},
    {romaji: "tsu", hirigana: "つ"},
    {romaji: "te", hirigana: "て"},
    {romaji: "to", hirigana: "と"},
];
var nRow = [
    {romaji: "na", hirigana: "な"},
    {romaji: "ni", hirigana: "に"},
    {romaji: "nu", hirigana: "ぬ"},
    {romaji: "ne", hirigana: "ね"},
    {romaji: "no", hirigana: "の"},
];
var hRow = [
    {romaji: "ha", hirigana: "は"},
    {romaji: "he", hirigana: "ひ"},
    {romaji: "fu", hirigana: "ふ"},
    {romaji: "he", hirigana: "へ"},
    {romaji: "ho", hirigana: "ほ"},
];
var mRow = [
    {romaji: "ma", hirigana: "ま"},
    {romaji: "mi", hirigana: "み"},
    {romaji: "mu", hirigana: "む"},
    {romaji: "me", hirigana: "め"},
    {romaji: "mo", hirigana: "も"},
];
var yRow = [
    {romaji: "ya", hirigana: "や"},
    {romaji: "yu", hirigana: "ゆ"},
    {romaji: "yo", hirigana: "よ"},
];
var rRow = [
    {romaji: "ra", hirigana: "ら"},
    {romaji: "ri", hirigana: "り"},
    {romaji: "ru", hirigana: "る"},
    {romaji: "re", hirigana: "れ"},
    {romaji: "ro", hirigana: "ろ"},
];
var wRow = [
    {romaji: "wa", hirigana: "わ"},
    {romaji: "wo", hirigana: "を"},
];
var additional = [
    {romaji: "n", hirigana: "ん"},
    {romaji: "lengthen", hirigana: "っ ."},
    {romaji: "dupe", hirigana: "ゝ"},
    {romaji: "dupe", hirigana: "ゞ"},
];

// Diacritics (gojuon with Dakuten)

var gSym = [
    {romaji: "ga", hirigana: "が"},
    {romaji: "gi", hirigana: "ぎ"},
    {romaji: "gu", hirigana: "ぐ"},
    {romaji: "ge", hirigana: "げ"},
    {romaji: "go", hirigana: "ご"},
];
var zSym = [
    {romaji: "za", hirigana: "ざ"},
    {romaji: "ji", hirigana: "じ"},
    {romaji: "zu", hirigana: "ず"},
    {romaji: "ze", hirigana: "ぜ"},
    {romaji: "zo", hirigana: "ぞ"},
];
var dSym = [
    {romaji: "da", hirigana: "だ"},
    {romaji: "ji, dji", hirigana: "ぢ"},
    {romaji: "dzu, zu", hirigana: "づ"},
    {romaji: "de", hirigana: "で"},
    {romaji: "do", hirigana: "ど"},
];
var bSym = [
    {romaji: "ba", hirigana: "ば"},
    {romaji: "bi", hirigana: "び"},
    {romaji: "bu", hirigana: "ぶ"},
    {romaji: "be", hirigana: "べ"},
    {romaji: "bo", hirigana: "ぼ"},
];
var pSym = [
    {romaji: "pa", hirigana: "ぱ"},
    {romaji: "pi", hirigana: "ぴ"},
    {romaji: "pu", hirigana: "ぷ"},
    {romaji: "pe", hirigana: "ぺ"},
    {romaji: "po", hirigana: "ぽ"},
];

// Diagraphs (yoon)

var kYoon = [
    {romaji: "kya", hirigana: "きゃ"},
    {romaji: "kyu", hirigana: "きゅ"},
    {romaji: "kyo", hirigana: "きょ"},
];
var sYoon = [
    {romaji: "sha", hirigana: "しゃ"},
    {romaji: "shu", hirigana: "しゅ"},
    {romaji: "sho", hirigana: "しょ"},
];
var tYoon = [
    {romaji: "cha", hirigana: "ちゃ"},
    {romaji: "chu", hirigana: "ちゅ"},
    {romaji: "cho", hirigana: "ちょ"},
];
var nYoon = [
    {romaji: "nya", hirigana: "にゃ"},
    {romaji: "nyu", hirigana: "にゅ"},
    {romaji: "nyo", hirigana: "にょ"},
];
var hYoon = [
    {romaji: "hya", hirigana: "ひゃ"},
    {romaji: "hyu", hirigana: "ひゅ"},
    {romaji: "hyo", hirigana: "ひょ"},
];
var mYoon = [
    {romaji: "mya", hirigana: "みゃ"},
    {romaji: "myu", hirigana: "みゅ"},
    {romaji: "myo", hirigana: "みょ"},
];
var rYoon = [
    {romaji: "rya", hirigana: "りゃ"},
    {romaji: "ryu", hirigana: "りゅ"},
    {romaji: "ryo", hirigana: "りょ"},
];

// Digraphs with diacritics (yoon with Dakuten)

var gYoonSym = [
    {romaji: "gya", hirigana: "ぎゃ"},
    {romaji: "gyu", hirigana: "ぎゅ"},
    {romaji: "gyo", hirigana: "ぎょ"},
];
var zYoonSym = [
    {romaji: "ja", hirigana: "じゃ"},
    {romaji: "ju", hirigana: "じゅ"},
    {romaji: "jo", hirigana: "じょ"},
];
var dYoonSym = [
    {romaji: "ja", hirigana: "ぢゃ"},
    {romaji: "ju", hirigana: "ぢゅ"},
    {romaji: "jo", hirigana: "ぢょ"},
];
var bYoonSym = [
    {romaji: "bya", hirigana: "びゃ"},
    {romaji: "byu", hirigana: "びゅ"},
    {romaji: "byo", hirigana: "びょ"},
];
var pYoonSym = [
    {romaji: "pya", hirigana: "ぴゃ"},
    {romaji: "pyu", hirigana: "ぴゅ"},
    {romaji: "pyo", hirigana: "ぴょ"},
];

// Array for combining all above arrays

var combined = [];

//

function getCheckboxes() {
    var results = document.querySelectorAll('[class=checkBox]')
    for ( var i = 0; i<results.length; i++) {
            this[results[i].id] = results[i].id;
                 console.log(this);
    } 
}

