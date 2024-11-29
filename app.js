let boxes = document.querySelectorAll(".boxes") 
let reset = document.querySelector(".reset")
let message = document.querySelector(".message")
let msg = document.querySelector(".msg")
let newGame = document.querySelector(".newGame")

let turnO = true // Game start here , player O ne apni baari chal di hai .
let count = 0

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

] // these are the possible winning patterns

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked")

        if(turnO === true){
            box.innerText = "O"
            turnO = false
        }

        else {
            box.innerText = "X"
            box.style.color = "black"
            turnO = true
        }

        box.disabled = true

        count++
        
        let isWinner = checkWinner()

        if(count === 9 && !isWinner){
            gameDraw()
        }

        checkWinner()
    })
})

const checkWinner = () => {
    for(let pattern of winPatterns){
        //console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText)
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val)
                showWinner(pos1Val)
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Player ${winner} Wins.`
    message.classList.remove("hide")
    disableBoxes()
}

const gameDraw = () => {
    msg.innerText = `Game is Draw.`
    message.classList.remove("hide")
    disableBoxes()
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const resetGame = () => {
    turnO = true
    count = 0
    enableBoxes()
    message.classList.add("hide")

}

reset.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)