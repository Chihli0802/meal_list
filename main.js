
const btn = document.querySelector("#btn");
const answer = document.querySelector("#answer");
const sci = document.querySelector("#sci");
const hor = document.querySelector("#hor");
const spo = document.querySelector("#spo");
const rom = document.querySelector("#rom");
const dra = document.querySelector("#dra");

//===========================================
let mealList = [] //要創空間
fetch("mealList.json")
    .then(function(response){
    //從json轉回JS物件
    return response.json()
})
    .then(function(data){
        // 成功抓取資料
        //將抓到的資料存進空間
        mealList = data;
    
})
    .catch(function(error){
    //沒有抓成功的話 就會進catch
    console.log(error)
})
//===========================================





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







