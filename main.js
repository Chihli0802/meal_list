const mealList = [
    {
        "name": "蒙上你的眼",
        "category": ["Horror", "Sci-Fi"],
        "filter": false
    },
    {
        "name": "噤界",
        "category": ["Horror", "Sci-Fi"],
        "filter": false
    },
    {
        "name": "全面啟動",
        "category": ["Action", "Sci-Fi"],
        "filter": false
    },
    {
        "name": "勇闖禁區",
        "category": ["Drama", "Sport"],
        "filter": false
    },
    {
        "name": "攻其不備",
        "category": ["Drama", "Sport"],
        "filter": false
    },
    {
        "name": "記得我",
        "category": ["Drama", "Romance"],
        "filter": false
    },
    {
        "name": "美麗境界",
        "category": ["Drama", "Romance"],
        "filter": false
    },
    {
        "name": "已經很想妳",
        "category": ["Drama", "Romance"],
        "filter": false
    },
    {
        "name": "我願意",
        "category": ["Adventure", "Romance"],
        "filter": false
    },
    {
        "name": "關鍵少數",
        "category": ["Drama", "Historical film"],
        "filter": false
    },
    {
        "name": "球神梅西",
        "category": ["Drama", "Biographical film"],
        "filter": false
    },
    {
        "name": "水果硬糖",
        "category": ["Drama", "Thriller"],
        "filter": false
    },
    {
        "name": "顫慄柏林",
        "category": ["Horror", "Thriller"],
        "filter": false
    }
]

const btn = document.querySelector("#btn");
const answer = document.querySelector("#answer");
const sci = document.querySelector("#sci");
const hor = document.querySelector("#hor");
const spo = document.querySelector("#spo");
const rom = document.querySelector("#rom");
const dra = document.querySelector("#dra");


btn.addEventListener("click", function () {


    //將有打勾的category丟進arr
    const arr = []
    if (sci.checked) {
        arr.push(sci.value)
    }
    if (hor.checked) {
        arr.push(hor.value)
    }
    if (spo.checked) {
        arr.push(spo.value)
    }
    if (rom.checked) {
        arr.push(rom.value)
    }
    if (dra.checked) {
        arr.push(dra.value)
    }
    console.log(arr);


    //假設都沒勾選，arr為空
    if (arr.length===0) {
        answer.innerText = "你要選啊"
        return;
    }


    // 將符合的片單加入re
    const re = [];
    mealList.forEach(function (i) {
        arr.forEach(function (cate) {
            if (i.category.includes(cate)) {
                re.push(i)
            }
        })
    })
   

    // 將re隨機選出一部
    const random = Math.floor(Math.random() * re.length);
    const movie = (re[random].name)
    answer.innerText = movie;
})







