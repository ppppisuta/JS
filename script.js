window.addEventListener('load' , function(){
    const pullDownButton = document.getElementById("lists")

pullDownButton.addEventListener('mouseover', function(){
    console.log("カーソルが乗りました")
    pullDownButton.setAttribute("style", "background-color:blue;")
})

pullDownButton.addEventListener('mouseout', function(){
    console.log("カーソルが離れました")
    pullDownButton.setAttribute("style", "background-color:red;")
})

pullDownButton.addEventListener('click', function(){
    console.log("クリックしました")
    pullDownButton.setAttribute("style", "background-color:green;")
})
})