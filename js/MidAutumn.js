document.addEventListener("DOMContentLoaded", function () {
    // 延迟3秒后隐藏加载动画
    setTimeout(function () {
        document.querySelector(".loader-wrapper").style.display = "none";
    }, 500);

    // 为导航栏中的链接添加点击事件处理程序
    var navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // 阻止默认链接跳转行为

            var targetId = this.getAttribute("href").substring(1); // 获取目标锚点的标识符
            var targetElement = document.getElementById(targetId); // 获取目标元素

            if (targetElement) {
                // 使用 scrollTo 方法实现平滑滚动
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        });
    });
});


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

//一键返回顶部事件
backTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
