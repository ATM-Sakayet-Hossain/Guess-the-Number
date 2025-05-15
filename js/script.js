let playerHeading = document.querySelector(".player_heading")
let inputOne = document.querySelector(".inputOne")
let inputTwo = document.querySelector(".inputTwo")
let inputThree = document.querySelector(".inputThree")
let inputFour = document.querySelector(".inputFour")
let playerOneBtn = document.querySelector(".player-one-btn")
let playerTwoBtn = document.querySelector(".player-two-btn")
let playerThreeBtn = document.querySelector(".player-three-btn")
let playerFourBtn = document.querySelector(".player-four-btn")
let error = document.querySelector(".error")
let playerTwoChances = document.querySelector(".playerTwoChances")
let playerThreeChances = document.querySelector(".playerThreeChances")
let playerFourChances = document.querySelector(".playerFourChances")
let TwoChances = 3;
let ThreeChances = 3;
let FourChances = 3;

playerOneBtn.addEventListener("click", ()=>{
    if (inputOne.value == "") {
        return error.innerHTML = "Please input your Number between 1 to 10!"
    }
    if(inputOne.value > 10 || inputOne.value < 1){
        return error.innerHTML = "Number should be between 1 to 10!"
    }
    if(!(inputOne.value - 0)){
     return error.innerHTML = "Please input a Valid number!"
    }
    playerHeading.innerHTML = "Player 2";
    inputOne.style = "display: none;";
    inputTwo.style = "display: block;";
    playerOneBtn.style = "display: none;";
    playerTwoBtn.style = "display: block;";
    playerTwoChances.style = "display: block;";
    console.log(inputOne.value);
});
playerTwoBtn.addEventListener("click", ()=>{
    --TwoChances
    if (inputTwo.value == "") {
        return error.innerHTML = "Please input your Number between 1 to 10!"
    }
    if(inputTwo.value > 10 || inputTwo.value < 1){
        return error.innerHTML = "Number should be between 1 to 10!"
    }
    if(!(inputTwo.value - 0)){
     return error.innerHTML = "Please input a Valid number!"
    }
    if (TwoChances > 0) {
        playerTwoChances.innerHTML = `You have ${TwoChances} chances left!`
        if (inputOne.value == inputTwo.value) {
            playerHeading.innerHTML = "Player 3";
            inputTwo.style = "display: none;";
            inputThree.style = "display: block;";
            playerTwoBtn.style = "display: none;";
            playerThreeBtn.style = "display: block;";
            playerTwoChances.style = "display: none;";
            playerThreeChances.style = "display: block;";
            error.style = "display: none;";
            console.log(inputTwo.value);
        }
    }else if (TwoChances == 0){
            playerHeading.innerHTML = "Player 3";
            inputTwo.style = "display: none;";
            inputThree.style = "display: Block;";
            playerTwoBtn.style = "display: none;";
            playerThreeBtn.style = "display: block;";
            playerTwoChances.style = "display: none;";
            playerThreeChances.style = "display: block;";
            console.log(inputTwo.value);
    }
});
playerThreeBtn.addEventListener("click", ()=>{
    --ThreeChances
    if (inputThree.value == "") {
        return error.innerHTML = "Please input your Number between 1 to 10!"
    }
    if(inputThree.value > 10 || inputThree.value < 1){
        return error.innerHTML = "Number should be between 1 to 10!"
    }
    if(!(inputThree.value - 0)){
     return error.innerHTML = "Please input a Valid number!"
    }
    if (ThreeChances > 0) {
        playerThreeChances.innerHTML = `You have ${ThreeChances} chances left!`
        if (inputOne.value == inputThree.value) {
            playerHeading.innerHTML = "Player 4";
            inputThree.style = "display: none;";
            inputFour.style = "display: block;";
            playerThreeBtn.style = "display: none;";
            playerFourBtn.style = "display: Block;";
            playerThreeChances.style = "display: none;";
            playerFourChances.style = "display: Block;";
            error.style = "display: none;";
            console.log(inputThree.value);
        }
    }else if (ThreeChances == 0){
        playerHeading.innerHTML = "Player 4";
        inputThree.style = "display: none;";
        inputFour.style = "display: block;";
        playerThreeBtn.style = "display: none;";
        playerFourBtn.style = "display: Block;";
        playerThreeChances.style = "display: none;";
        playerFourChances.style = "display: Block;";
        console.log(inputThree.value);
    }
});
playerFourBtn.addEventListener("click", ()=>{
    --FourChances
    if (inputFour.value == "") {
        return error.innerHTML = "Please input your Number between 1 to 10!"
    }
    if(inputFour.value > 10 || inputFour.value < 1){
        return error.innerHTML = "Number should be between 1 to 10!"
    }
    if(!(inputFour.value - 0)){
     return error.innerHTML = "Please input a Valid number!"
    }
    if (FourChances > 0) {
        playerFourChances.innerHTML = `You have ${FourChances} chances left!`
        if (inputOne.value == inputFour.value && inputOne.value == inputThree.value && inputOne.value == inputTwo.value) {
            playerHeading.innerHTML = "Player 2, Player 3 and Player 4 <br>Winner";
            inputFour.style = "display: none;";
            playerFourBtn.style = "display: none;";
            playerFourChances.style = "display: none;";
        }
        else if (inputOne.value == inputFour.value && inputOne.value == inputTwo.value) {
            playerHeading.innerHTML = "Player 2 and Player 4 <br> Winner";
            inputFour.style = "display: none;";
            playerFourBtn.style = "display: none;";
            playerFourChances.style = "display: none;";
        }
        else if (inputOne.value == inputFour.value && inputOne.value == inputThree.value) {
            playerHeading.innerHTML = "Player 3 and Player 4 <br> Winner";
            inputFour.style = "display: none;";
            playerFourBtn.style = "display: none;";
            playerFourChances.style = "display: none;";
        }
        else if (inputOne.value == inputTwo.value && inputOne.value == inputThree.value) {
            playerHeading.innerHTML = "Player 2 and Player 3 <br> Winner";
            inputFour.style = "display: none;";
            playerFourBtn.style = "display: none;";
            playerFourChances.style = "display: none;";
        }
        else if (inputOne.value == inputFour.value) {
            playerHeading.innerHTML = "Player 4 Winner";
            inputFour.style = "display: none;";
            playerFourBtn.style = "display: none;";
            playerFourChances.style = "display: none;";
        }
    }
    else if (inputOne.value == inputThree.value) {
        playerHeading.innerHTML = "Player 3 Winner";
        inputFour.style = "display: none;";
        playerFourBtn.style = "display: none;";
        error.style = "display: none;";
        playerFourChances.style = "display: none;";
    }
    else if (inputOne.value == inputTwo.value) {
        playerHeading.innerHTML = "Player 2 Winner";
        inputFour.style = "display: none;";
        playerFourBtn.style = "display: none;";
        error.style = "display: none;";
        playerFourChances.style = "display: none;";
    }else{
        playerHeading.innerHTML = "Player 1 winner";
        inputFour.style = "display: none;";
        playerFourBtn.style = "display: none;";
        error.style = "display: none;";
        playerFourChances.style = "display: none;";
        console.log(inputFour.value);
    }
});