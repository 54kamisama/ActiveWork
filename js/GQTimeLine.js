const timeline = document.getElementById("timeline");
const backTopButton = document.getElementById("backTopButton");


// 添加滚动事件处理程序
window.addEventListener("scroll", function () {
    // 获取页面滚动的垂直位置
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 检查是否在顶部
    if (scrollTop === 0) {
        // 页面在顶部，显示返回顶部按钮
        backTopButton.style.display = "none";
    } else {
        // 页面不在顶部，隐藏返回顶部按钮
        backTopButton.style.display = "block";
    }
});

backTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function addNewItem(dataText,time,text,imgPath) {
    const item = document.createElement('div');
    const content = document.createElement('div');
    const img = document.createElement('img');
    const content_title = document.createElement('h2');
    const content_desc = document.createElement('p');
    item.className = 'item';
    item.setAttribute('data-text', dataText);
    content.className = 'content';
    img.src = imgPath;
    img.className = 'img';
    img.alt = '';
    content_title.textContent = time;
    content_title.className = "content-title";
    content_desc.textContent = text;
    content_desc.className = "content-desc";
    
    content.append(img, content_title, content_desc);
    item.appendChild(content);
    timeline.appendChild(item);
}

items = [
    { dataText: "《你的孤独，虽败犹荣》", time: "1949", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1949.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1950", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1950.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1951", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1951.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1952", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1952.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1953", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1953.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1954", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1954.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1955", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1955.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1956", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1956.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1957", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1957.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1958", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1958.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1959", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1959.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1984", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1984.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "1999", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/1999.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "2009", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/2009.jpg" },
    { dataText: "《你的孤独，虽败犹荣》", time: "2015", text: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。", imgPath: "src/img/2015.jpg" },
];

items.forEach(element => {
    addNewItem(element.dataText, element.time, element.text, element.imgPath);
});



