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

function addNewItem(dataText, time, text, imgPath) {
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


//时间线数据
items = [
    { dataText: "广式月饼", time: "五仁月饼", text: "", imgPath: "src/MoonCake_img/01.jpg" },
    { dataText: "广式月饼", time: "红豆月饼", text: "", imgPath: "src/MoonCake_img/02.png" },
    { dataText: "广式月饼", time: "蛋黄莲蓉", text: "", imgPath: "src/MoonCake_img/03.png" },
    { dataText: "京式月饼", time: "自来红", text: "", imgPath: "src/MoonCake_img/04.png" },
    { dataText: "苏式月饼", time: "苏式月饼", text: "", imgPath: "src/MoonCake_img/05.png" },
    { dataText: "潮式月饼", time: "潮式月饼", text: "", imgPath: "src/MoonCake_img/06.jpg" },
    { dataText: "滇式月饼", time: "云腿月饼", text: "", imgPath: "src/MoonCake_img/07.png" },
    { dataText: "晋式月饼", time: "晋式月饼", text: "", imgPath: "src/MoonCake_img/08.png" },
    { dataText: "琼式月饼", time: "琼式月饼", text: "", imgPath: "src/MoonCake_img/09.png" },
    { dataText: "台式月饼", time: "台式月饼", text: "", imgPath: "src/MoonCake_img/10.png" },
    { dataText: "哈式月饼", time: "哈式月饼", text: "", imgPath: "src/MoonCake_img/11.png" },
    { dataText: "港式月饼", time: "冰皮月饼", text: "", imgPath: "src/MoonCake_img/12.jpg" }
];

items.forEach(element => {
    addNewItem(element.dataText, element.time, element.text, element.imgPath);
});



