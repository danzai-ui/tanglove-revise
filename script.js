let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 Yes 的次数

// Yes 按钮的拒绝文案
const question = [
    "你不配！",
    "想得美！", 
    "我才不喜欢你！", 
    "别自作多情！", 
    "死心吧:("
];

// Yes 按钮点击事件（拒绝逻辑）
yesButton.addEventListener("click", function() {
    clickCount++;

    // 放大 No 按钮
    let noSize = 1 + (clickCount * 1.05);
    noButton.style.transform = `scale(${noSize})`;

    // 挤压 Yes 按钮
    let yesOffset = clickCount * 15;
    yesButton.style.transform = `translateX(${yesOffset}px)`;

    // 图片和文字上移
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // 文案变化
    if (clickCount <= 5) {
        yesButton.innerText = rejectTexts[clickCount - 1];
    }

    // 图片变化
    if (clickCount === 1) mainImage.src = "images/disgust.png";
    if (clickCount === 2) mainImage.src = "images/angry.png";
    if (clickCount === 3) mainImage.src = "images/laugh.png";
    if (clickCount >= 4) mainImage.src = "images/crying.png";
});

// No 按钮点击后接受
noButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">其实我早就喜欢你啦！(〃∀〃)</h1>
            <img src="images/kiss.png" alt="亲吻" class="yes-image">
        </div>
    `;
    document.body.style.overflow = "hidden";
});