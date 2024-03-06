const quotes = [
    "关于2024年按比例安排残疾人就业情况申报审核的通告",
    "北京市残疾人康复服务中心2024年度采购意向公开",
    "中国残联直属单位2024年度第一批面向社会公开招聘工作人员公告",
    "北京市残疾人文化体育服务中心2024年3月至12月政府采购意向",
    "2023年度中国残联课题补充立项公告",
    "北京市残疾人联合会行政(本级)2024年1至12月政府采购意向",
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
