const link_box = document.querySelectorAll('.link_box');

link_box.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX - card.getBoundingClientRect().left - card.offsetWidth / 2;
        const mouseY = e.clientY - card.getBoundingClientRect().top - card.offsetHeight / 2;
        const rotationX = (mouseY / card.offsetHeight) * 20; // 控制倾斜角度
        const rotationY = (mouseX / card.offsetWidth) * 20; // 控制倾斜角度

        card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none'; // 鼠标离开时恢复初始状态
    });
});