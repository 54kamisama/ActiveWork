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

// 一键返回
backTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//格式化数据
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


//时间线数据
items = [
    { dataText: "飞行中队参加开国大典空中受阅 第一次飞越天安门", time: "1949", text: "受阅部队的阅兵训练不足一个月。开国大典。朱德检阅部队。人民解放军陆海空三军首次联合受阅。受阅飞机中有4架携弹飞行，防备空袭。由于飞机数量不够，第一梯队9架战斗机绕飞第二圈成第四梯队。", imgPath: "src/img/1949.jpg" },
    { dataText: "中国人民解放军骑兵部队通过天安门广场", time: "1950", text: "公安部队首次受阅。1900匹白色骏马以6路纵队通过。朱德要求就朝鲜战争、台海局势做好战斗准备。国庆阅兵后的第19天，中国人民志愿军就跨过鸭绿江，抗美援朝，保家卫国。", imgPath: "src/img/1950.jpg" },
    { dataText: "1951年火箭炮部队首次亮相国庆阅兵式", time: "1951", text: "受阅部队最前列的方队是正在军事学院受训的身经百战、功勋卓著的高级军官，军事学院方队首次成为徒步方队第一方队。伞兵部队、探照灯部队、民兵方队、喷气式飞机首次受阅。告别了以往螺旋桨飞机受阅的历史。", imgPath: "src/img/1951.jpg" },
    { dataText: "中国人民解放军摩托化部队经过天安门广场", time: "1952", text: "仪仗兵首次参加国庆阅兵。160辆摩托车组成的三轮摩托化步兵方阵，来自全国各民族的民兵组成的方队，都是一道道亮丽的风景。", imgPath: "src/img/1952.jpg" },
    { dataText: "中国人民解放军火箭炮部队方阵通过天安门广场", time: "1953", text: "火箭炮兵方队、黄色战马方队首次出现，各种口径的大炮引人注目。35幅领袖画像分组5个方队的群体方阵，创历次国庆阅兵典礼之最。", imgPath: "src/img/1953.jpg" },
    { dataText: "此次是骑兵部队最后一次参加阅兵", time: "1954", text: "彭德怀检阅部队。受阅部队的武器装备有了很大提高，由开国大典时的“万国造”变为“苏式”武器装备的基本统一。雷达探照灯首次亮相。骑兵部队最后一次受阅。", imgPath: "src/img/1954.jpg" },
    { dataText: "中国人民解放军的坦克部队通过天安门广场", time: "1955", text: "1955年国庆阅兵是人民解放军实行军衔制后的首次阅兵。受阅部队指战员身穿55式军服，佩戴肩章、领章，军容严整地通过天安门广场。空军飞机因浓云延迟起飞，与群众游行队伍同时受阅。", imgPath: "src/img/1955.jpg" },
    { dataText: "彭德怀在阅兵总指挥杨成武陪同下冒雨检阅", time: "1956", text: "阅兵式在滂沱大雨中进行，这是新中国成立后国庆阅兵中唯一一次雨中阅兵。受阅官兵的军装湿透，精神却越发饱满，踏着水花前进。阅兵部队乘坐的汽车是第一批出厂的国产解放牌汽车。空军飞机因雨未能起飞受阅。", imgPath: "src/img/1956.jpg" },
    { dataText: "中国人民解放军海军方队通过天安门广场", time: "1957", text: "1957年1月，中央军委扩大会议，通过了《关于裁减军队数量加强质量的决定》。军事建设反映在阅兵上，最大的变化是受阅总人数比往年少，是新中国历次阅兵中最少的一次。这次阅兵国外来宾空前多。应邀来我国访问的50多个国家的外宾、各国驻华使节和外交官员，以及在华外国专家等观看了阅兵式。中国制造的伊尔-28式喷气式轰炸机、歼击机首次受阅。", imgPath: "src/img/1957.jpg" },
    { dataText: "女民兵方队首次在国庆大阅兵中出现", time: "1958", text: "此次阅兵全民皆兵的“战争火药味”和大炼钢铁、人民公社化的“大跃进”气氛都很浓。三轮摩托车方队、成方阵的士兵船形帽最后一次出现在国庆阅兵式上。由工人、农民、干部、学生7个师组成的“首都民兵师”首次出现在受阅队伍中。首次出现的女民兵方队，是新中国阅兵史上的创举 。", imgPath: "src/img/1958.jpg" },
    { dataText: "空降兵部队整装待发 准备接受检阅", time: "1959", text: "林彪检阅部队。中国制造的第一代主战坦克“五九”式中型坦克首次亮相。受阅部队新式武器装备都由我国自行制造。参加游行群众多达70余万人，是目前历次国庆阅兵庆典中最多的一次。", imgPath: "src/img/1959.jpg" },
    { dataText: "战略导弹方阵通过天安门广场", time: "1984", text: "邓小平检阅部队。在这次大阅兵中，受阅武器装备的科技含量大大提升，全部28种武器中有19种是新装备，有的装备已具有世界先进水平。中国战略导弹部队首次参加阅兵，更是震撼了世界。受阅官兵身着“八五”式新军装。群众游行队伍中出现“小平您好”横幅。", imgPath: "src/img/1984.jpg" },
    { dataText: "中国人民解放军三军仪仗队参加阅兵分列式检阅", time: "1999", text: "江泽民检阅部队。在这一年，改革开放新时期诞生的陆军航空兵、海军陆战队、武警特警、预备役等部队第一次汇入了受阅大军中。在武器装备方面，此次受阅的42种装备，90%以上都是新装备，绝大部分都是自行设计和生产的，高科技武器装备已开始成为解放军的主战武器。“世纪大阅兵”完美地实现了“米秒不差”。", imgPath: "src/img/1999.jpg" },
    { dataText: "胡锦涛检阅受阅部队", time: "2009", text: "胡锦涛检阅部队。新中国迎来“甲子大阅兵”。同时也是迈入新世纪后，中国第一次举行盛大国庆阅兵。陆、海、空参阅部队的比例基本相当，二炮、武警较过去增大比例。", imgPath: "src/img/2009.jpg" },
    { dataText: "抗战老兵、英烈子女、抗战支前模范接受检阅", time: "2015", text: "这是新中国成立以来首次以纪念抗战胜利为主题举行的阅兵；首次邀请外国军队代表参加分列式；首次组织抗战老兵包括国民党老兵参阅；首次编组英模部队方队受阅；首次按作战体系编排装备方队；首次由将军担任领队。", imgPath: "src/img/2015.jpg" },
];

//向时间线添加数据
items.forEach(element => {
    addNewItem(element.dataText, element.time, element.text, element.imgPath);
});



