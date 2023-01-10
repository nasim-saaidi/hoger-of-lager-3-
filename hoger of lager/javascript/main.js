let playerOne = 0

let dice, decidingNumber;

const mainNumber = document.querySelector('.mainNumber');

function updateNumber() {
    dice = generateRandomNumber();
    decidingNumber = generateRandomNumber();
    mainNumber.innerHTML = decidingNumber;
}

function generateRandomNumber() {
    return Math.round(Math.random() * 6);
}

function higher() {

    if (dice > decidingNumber) {
        alert('je hebt het goed, je gooide ' + dice + ', plus 5');
        playerOne = playerOne + 5;
        alert('je hebt nu ' + playerOne + ' punten');
        mainNumber.innerHTML = decidingNumber;
    }


    else if (dice < decidingNumber) {
        alert('jammer, je hebt het fout, je gooide ' + dice + ', min 5 ');
        playerOne = playerOne - 5;
        alert('je hebt nu ' + playerOne + ' punten');
        mainNumber.innerHTML = decidingNumber;

    }

    else if (dice === decidingNumber) {
        alert('je hebt, ' + dice + ' gegooid, dit is gelijk, plus 0');
        alert('je hebt nu ' + playerOne + ' punten');
        mainNumber.innerHTML = decidingNumber;

    };

    updateNumber();  
}

function lower() {
    let dice = Math.round(Math.random() * 6);
    if (dice > decidingNumber) {
        alert('jammer, je hebt het fout, je gooide ' + dice + ', - 5');
        playerOne = playerOne - 5;
        alert('je hebt nu ' + playerOne + ' punten');
        mainNumber.innerHTML = decidingNumber;
    }


    else if (dice < decidingNumber) {
        alert('je hebt het goed, je gooide ' + dice + ', plus 5');
        playerOne = playerOne + 5;
        alert('je hebt nu ' + playerOne + ' punten');
        mainNumber.innerHTML = decidingNumber;

    }
    else if (dice === decidingNumber) {
        alert('je hebt ' + dice + ' gegooid, dit is gelijk, plus 0');
        alert('je hebt nu ' + playerOne + ' punten');
        mainNumber.innerHTML = decidingNumber;
    };
updateNumber();
}

updateNumber();



