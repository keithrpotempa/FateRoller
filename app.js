const rollButton = document.querySelector('.roll');
const printHere = document.querySelector('.result');
let modifier = document.getElementById('modifier');
let ladder = document.getElementById('ladder');
let results = [];
let finalResult;

function fateDieRoll() {
    let min = Math.ceil(-1);
    let max = Math.floor(1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function coolDie(die) {
    if (die == 1) {
        printHere.innerHTML += '<img src="images/StarPLUS.png">';
    };
    if (die == -1) {
        printHere.innerHTML += '<img src="images/StarMINUS.png">'
    };
    if (die == 0) {
        printHere.innerHTML += '<img src="images/Star.png">'
    };
}

function sum(array){
    result = array.reduce((a,b) => a + b, 0);
    return parseInt(result) + parseInt(modifier.value);
  }

function highlightRow(arg) {
    // Row IDs in the HTML use the number of the result
    let rowID = `ladder${arg}`
    console.log(rowID);

    // Clears the highlighting from any past rolls
    let rowsNotSelected = ladder.getElementsByTagName('tr');
    for (let row = 0; row < rowsNotSelected.length; row++) {
        rowsNotSelected[row].classList.remove('selected');
    }
    // The CSS class 'selected' highlights the row in yellow
    let rowSelected = document.getElementById(rowID).parentElement;
    rowSelected.className += "selected";
}

rollButton.addEventListener('click', (event) => {
    let results = [];
    printHere.textContent = " ";
    for (let i = 0; i < 4; i += 1) {
        let roll = fateDieRoll();
        results.push(roll)
        coolDie(results[i]);
    }
    finalResult = sum(results)
    printHere.innerHTML += "<h2> Result: " + finalResult + "</h2>"
    highlightRow(finalResult);
}
)