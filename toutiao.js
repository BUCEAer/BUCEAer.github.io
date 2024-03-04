const quotes = [
    "公告-点击跳转（1）",
    "第二句话",
    "公告-点击跳转（3）",
    "第四句话",
    "第五句话",
    "第六句话",
    "第七句话",
    "第八句话",
    "第九句话",
    "第十句话"
];

let quoteIndex = 0; // 独立的quoteIndex变量  

function showQuote() {
    const quoteElement1 = document.getElementById('quoteText1');
    const quoteElement2 = document.getElementById('quoteText2');

    // 为每一句话生成一个独特的超链接  
    const uniqueLink1 = `quote-${quoteIndex}`;
    const uniqueLink2 = `quote-${(quoteIndex + 1) % quotes.length}`;

    quoteElement1.innerHTML = `<a href="${uniqueLink1}.html">${quotes[quoteIndex]}</a>`;
    quoteElement2.innerHTML = `<a href="${uniqueLink2}.html">${quotes[(quoteIndex + 1) % quotes.length]}</a>`;

    quoteIndex = (quoteIndex + 2) % quotes.length; // 每次移动两个位置  
}

setInterval(showQuote, 4000); // 文字轮播每4秒更新一次  
showQuote(); // 初始显示第一句和第二句  