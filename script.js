let arrColor = ["Red","#5d2c21","green","#c14126","blue","#976427","brown","#136ba2","blueviolet","#3a7659","green","#b3b346","#451a95","gray","#8e861d","grey","#0edb7b","white","#144012","black"]
let color = document.getElementById('color');
let btn = document.querySelector('.btn')


btn.addEventListener('click',function(){
    let number = getNumber()
    document.body.style.background = arrColor[number]
    color.innerHTML = arrColor[number]
});
function getNumber(){
    return Math.floor(Math.random() * arrColor.length)
}

function hexadecimal(){
    document.body.style.background = "#fff"
    color.innerHTML = "#fff"
    btn.addEventListener('click',function(){
        let num = getNumber()
        if (arrColor[num].indexOf('#') != -1) {
            document.body.style.background = arrColor[num];
            color.innerHTML = arrColor[num]
        }else{
            document.body.style.background = "#fff"
            color.innerHTML = "#fff"
        }
    })
}