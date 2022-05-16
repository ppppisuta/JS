window.addEventListener('load' , function(){
    const pullDownButton = document.getElementById("lists")
})

lists.addEventListener('mouseover', function(){
    console.log("カーソルが乗りました")
})

lists.addEventListener('mouseout', function(){
    console.log("カーソルが離れました")
})

lists.addEventListener('click', function(){
    console.log("クリックしました")
})