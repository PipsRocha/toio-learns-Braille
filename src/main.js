import './android-ble-patch';
import { NearestScanner } from '@toio/scanner';

//cube and buttons
let cube = null;
let readStr=' ';
let elem = document.getElementById('didactic-btn');
let elem2 = document.getElementById('interactive-btn');


//connect button for 1 toio bluetooth
document.getElementById('connect').addEventListener('click', async () => {
    document.getElementById('connect').innerText = "Connecting...";
    cube = await new NearestScanner().start();

    await cube.connect();
    document.getElementById('connect').innerText = "Connected!";

    //get info from cube
    cube.on('battery:battery', data => console.log('[BATTERY]', data));
    //cube.on('id:standard-id', info => (console.log('', info.standardId)));
    //cube.on('id:position-id', data => console.log('[POS ID]', data));
    //cube.on('id:position-id-missed', data => console.log('[POS ID MISSED]', data));
});

//didactic mode activation
document.getElementById('didactic-btn').addEventListener('click', async () => {

    //deactivate interactive mode
    if (elem.value === 'false' && elem2.value === 'true') {

        elem2.innerText = "Interactive Mode";
        elem2.value = 'false';
        document.getElementById('interactive-title').style.visibility='hidden';
        document.getElementById('interactive-table').style.visibility='hidden';

        elem.innerText = "Leave";
        elem.value = 'true';
        document.getElementById('didactic-title').style.visibility='visible';

    } else if (elem.value === 'false') {
        elem.innerText = "Leave";
        elem.value = 'true';
        document.getElementById('didactic-title').style.visibility='visible';
    } else {
        elem.innerText = "Didactic Mode";
        elem.value = 'false';
        document.getElementById('didactic-title').style.visibility='hidden';
        cube.stop(); //not working
        cube.off(); //not working
    }


    //identify standard id position and wait for button press
    let stdId = null;
    cube.on('id:standard-id', data => stdId= data);
    cube.on('button:press', info => {
        if(info.pressed) {
            console.log('BTN', info.pressed);//true
            console.log('BTN', stdId.standardId);
            didacticMode(stdId.standardId);
        }
        console.log('BTN', info.pressed);//false
    });

});

//activate interactive mode
document.getElementById('interactive-btn').addEventListener('click', async () => {

    //deactivate didactic mode
    if (elem2.value === 'false' && elem.value === 'true') {
        elem.innerText = "Didactic Mode";
        elem.value = 'false';
        document.getElementById('didactic-title').style.visibility='hidden';

        elem2.innerText = "Leave";
        elem2.value = 'true';
        document.getElementById('interactive-title').style.visibility = 'visible';
        document.getElementById('interactive-table').style.visibility='visible';

    } else if (elem2.value === 'false') {
        elem2.innerText = "Leave";
        elem2.value = 'true';
        document.getElementById('interactiv' +
          'title').style.visibility='visible';
        document.getElementById('interactive-table').style.visibility='visible';
    } else {
        elem2.innerText = "Interactive Mode";
        elem2.value = 'false';
        document.getElementById('interactive-title').style.visibility='hidden';
        document.getElementById('interactive-table').style.visibility='hidden';
    }

    cube.on('id:position-id', data => {
        interactiveMode(data);
        console.log('[POS ID]', 'x:'+ data.x+ ' y:'+ data.y);
    });

    document.getElementById('move-forward').addEventListener('touchstart', async () => {
        cube.playPresetSound(2);
        cube.move(20, 20, 0);
    });
    document.getElementById('move-backward').addEventListener('touchstart', async () => cube.move(-20, -20, 0));
    document.getElementById('move-left').addEventListener('touchstart', async () => cube.move(-20, 20, 0));
    document.getElementById('move-right').addEventListener('touchstart', async () => cube.move(20, -20, 0));
    document.getElementById('interactive-table').addEventListener('touchstart', async ev => ev.preventDefault());
    document.getElementById('interactive-table').addEventListener('touchend', async () => cube.stop());
    document.getElementById('interactive-table').addEventListener('touchend', async ev => ev.preventDefault());

    document.getElementById('move-forward').addEventListener('mousedown', async () => {
        cube.playPresetSound(2);
        cube.move(20, 20, 0);
    });
    document.getElementById('move-backward').addEventListener('mousedown', async () => cube.move(-20, -20, 0));
    document.getElementById('move-left').addEventListener('mousedown', async () => cube.move(-20, 20, 0));
    document.getElementById('move-right').addEventListener('mousedown', async () => cube.move(20, -20, 0));
    document.getElementById('interactive-table').addEventListener('mouseup', async () => cube.stop());
    document.getElementById('interactive-table').addEventListener('mouseleave', async () => cube.stop());

});

//given a standard id position add to string and play audio of that letter/number
function didacticMode(letterID) {
    let toSay;
    switch (letterID) {
        case 3670320:
            readStr += '0';
            toSay = new SpeechSynthesisUtterance("0");
            speechSynthesis.speak(toSay);
            console.log('0');
            break;
        case 3670321:
            toSay = new SpeechSynthesisUtterance("1");
            readStr += '1';
            console.log('1');
            break;
        case 3670322:
            toSay = new SpeechSynthesisUtterance("2");
            speechSynthesis.speak(toSay);
            readStr += '2';
            console.log('2');
            break;
        case 3670323:
            toSay = new SpeechSynthesisUtterance("3");
            speechSynthesis.speak(toSay);
            readStr += '3';
            console.log('3');
            break;
        case 3670324:
            toSay = new SpeechSynthesisUtterance("4");
            speechSynthesis.speak(toSay);
            readStr += '4';
            console.log('4');
            break;
        case 3670325:
            toSay = new SpeechSynthesisUtterance("5");
            speechSynthesis.speak(toSay);
            readStr += '5';
            console.log('5');
            break;
        case 3670326:
            toSay = new SpeechSynthesisUtterance("6");
            speechSynthesis.speak(toSay);
            readStr += '6';
            console.log('6');
            break;
        case 3670327:
            toSay = new SpeechSynthesisUtterance("7");
            speechSynthesis.speak(toSay);
            readStr += '7';
            console.log('7');
            break;
        case 3670328:
            toSay = new SpeechSynthesisUtterance("8");
            speechSynthesis.speak(toSay);
            readStr += '8';
            console.log('8');
            break;
        case 3670329:
            toSay = new SpeechSynthesisUtterance("9");
            speechSynthesis.speak(toSay);
            readStr += '9';
            console.log('9');
            break;
        case 3670337:
            toSay = new SpeechSynthesisUtterance("A");
            speechSynthesis.speak(toSay);
            readStr += 'A';
            console.log('A');
            break;
        case 3670338:
            toSay = new SpeechSynthesisUtterance("B");
            speechSynthesis.speak(toSay);
            readStr += 'B';
            console.log('B');
            break;
        case 3670339:
            toSay = new SpeechSynthesisUtterance("C");
            speechSynthesis.speak(toSay);
            readStr += 'C';
            console.log('C');
            break;
        case 3670340:
            toSay = new SpeechSynthesisUtterance("D");
            speechSynthesis.speak(toSay);
            readStr += 'D';
            console.log('D');
            break;
        case 3670341:
            toSay = new SpeechSynthesisUtterance("E");
            speechSynthesis.speak(toSay);
            readStr += 'E';
            console.log('E');
            break;
        case 3670342:
            toSay = new SpeechSynthesisUtterance("F");
            speechSynthesis.speak(toSay);
            readStr += 'F';
            console.log('F');
            break;
        case 3670343:
            toSay = new SpeechSynthesisUtterance("G");
            speechSynthesis.speak(toSay);
            readStr += 'G';
            console.log('G');
            break;
        case 3670344:
            toSay = new SpeechSynthesisUtterance("H");
            speechSynthesis.speak(toSay);
            readStr += 'H';
            console.log('H');
            break;
        case 3670345:
            toSay = new SpeechSynthesisUtterance("I");
            speechSynthesis.speak(toSay);
            readStr += 'I';
            console.log('I');
            break;
        case 3670346:
            toSay = new SpeechSynthesisUtterance("J");
            speechSynthesis.speak(toSay);
            readStr += 'J';
            console.log('J');
            break;
        case 3670347:
            toSay = new SpeechSynthesisUtterance("K");
            speechSynthesis.speak(toSay);
            readStr += 'K';
            console.log('K');
            break;
        case 3670348:
            toSay = new SpeechSynthesisUtterance("L");
            speechSynthesis.speak(toSay);
            readStr += 'L';
            console.log('L');
            break;
        case 3670349:
            toSay = new SpeechSynthesisUtterance("M");
            speechSynthesis.speak(toSay);
            readStr += 'M';
            console.log('M');
            break;
        case 3670350:
            toSay = new SpeechSynthesisUtterance("N");
            speechSynthesis.speak(toSay);
            console.log('N');
            readStr += 'N';
            break;
        case 3670351:
            toSay = new SpeechSynthesisUtterance("O");
            speechSynthesis.speak(toSay);
            console.log('O');
            readStr += 'O';
            break;
        case 3670352:
            toSay = new SpeechSynthesisUtterance("P");
            speechSynthesis.speak(toSay);
            readStr += 'P';
            break;
        case 3670353:
            toSay = new SpeechSynthesisUtterance("Q");
            speechSynthesis.speak(toSay);
            readStr += 'Q';
            break;
        case 3670354:
            toSay = new SpeechSynthesisUtterance("R");
            speechSynthesis.speak(toSay);
            readStr += 'R';
            break;
        case 3670355:
            toSay = new SpeechSynthesisUtterance("S");
            speechSynthesis.speak(toSay);
            readStr += 'S';
            break;
        case 3670356:
            toSay = new SpeechSynthesisUtterance("T");
            speechSynthesis.speak(toSay);
            readStr += 'T';
            break;
        case 3670357:
            toSay = new SpeechSynthesisUtterance("U");
            speechSynthesis.speak(toSay);
            readStr += 'U';
            break;
        case 3670358:
            toSay = new SpeechSynthesisUtterance("V");
            speechSynthesis.speak(toSay);
            readStr += 'V';
            break;
        case 3670359:
            toSay = new SpeechSynthesisUtterance("W");
            speechSynthesis.speak(toSay);
            readStr += 'W';
            break;
        case 3670360:
            toSay = new SpeechSynthesisUtterance("X");
            speechSynthesis.speak(toSay);
            readStr += 'X';
            break;
        case 3670361:
            toSay = new SpeechSynthesisUtterance("Y");
            speechSynthesis.speak(toSay);
            readStr += 'Y';
            break;
        case 3670362:
            console.log('Z');
            toSay = new SpeechSynthesisUtterance("Z");
            speechSynthesis.speak(toSay);
            readStr += 'Z';
            break;
        case 3670070:
            console.log('space');
            readStr += ' ';
            break;
        case 3670032:
            console.log('reading'+readStr);
            toSay = new SpeechSynthesisUtterance(''+readStr);
            speechSynthesis.speak(toSay);
            break;
        case 3670066:
            readStr = '';
            cube.playPresetSound(4);
            console.log('restart');
            break;
        case 3670030:
            readStr = '';
            cube.playPresetSound(4);
            console.log('restart');
            break;
    }
}

function interactiveMode(coordinatesID) {
    // TO DO
    //toio move buttons disable?
    //change to correct coordinates
    let currStr = '';
    switch (coordinatesID) {
        case ((coordinatesID.x+-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Hospital');
            currStr = 'Hospital';
            TextToSpeech.talk('sound_Hospital.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Fruit Store');
            currStr = 'FruitStore';
            TextToSpeech.talk('sound_FruitStore.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Police Station');
            currStr = 'PoliceStation';
            TextToSpeech.talk('sound_PoliceSt.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Post Office');
            currStr = 'PostOffice';
            TextToSpeech.talk('sound_PostOffice.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Dress Shop');
            currStr = 'DressShop';
            TextToSpeech.talk('sound_DressShop.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Fire Station');
            currStr = 'FireStation';
            TextToSpeech.talk('sound_FireSt.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Garden');
            currStr = 'Garden';
            TextToSpeech.talk('sound_Garden.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Museum');
            currStr = 'Museum';
            TextToSpeech.talk('sound_Museum.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Ice Cream Shop');
            currStr = 'IceCreamShop';
            TextToSpeech.talk('sound_IceCreamShop.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Library');
            currStr = 'Library';
            TextToSpeech.talk('sound_Library.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('School');
            currStr = 'School';
            TextToSpeech.talk('sound_School.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Coffee Shop');
            currStr = 'CoffeeShop';
            TextToSpeech.talk('sound_Garden.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Big House');
            currStr = 'BigHouse';
            TextToSpeech.talk('sound_BigHouse.mp3').play();
            //spellfunction while place ask for letters
            break;
        case ((coordinatesID.x-30 < coordinatesID.x < coordinatesID.x+30) && (coordinatesID.y-30 < coordinatesID.y < coordinatesID.y+30)):
            console.log('Small House');
            currStr = 'Small House';
            TextToSpeech.talk('sound_SmallHouse.mp3').play();
            //spellfunction while place ask for letters
            break;
    }

}

async function connect2() {
    //console.log('start')
    // start a scanner to find nearest cube
    const num = 1
    const toios = await new NearScanner(num).start()

    // connect to the cube

    const cubes = []
    for (let i = 0; i < num; i++) {
        const cube = await toios[i].connect()
        cubes.push(cube)
    }
    console.log(cubes[0].id);
}

function spellPlace(spellStr){
    // TO DO
}
