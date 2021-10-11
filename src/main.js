import './android-ble-patch';
import { NearestScanner } from '@toio/scanner';

let cube = null;
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
    let readStr='';
    switch (letterID) {
        case 3670320:
            TextToSpeech.talk("0");
            readStr += '0';
            console.log('0');
            break;
        case 3670321:
            TextToSpeech.talk("1");
            readStr += '1';
            console.log('1');
            break;
        case 3670322:
            TextToSpeech.talk('2');
            readStr += '2';
            console.log('2');
            break;
        case 3670323:
            TextToSpeech.talk('3');
            readStr += '3';
            console.log('3');
            break;
        case 3670324:
            TextToSpeech.talk('4');
            readStr += '4';
            console.log('4');
            break;
        case 3670325:
            TextToSpeech.talk('5');
            readStr += '5';
            console.log('5');
            break;
        case 3670326:
            TextToSpeech.talk('6');
            readStr += '6';
            console.log('6');
            break;
        case 3670327:
            TextToSpeech.talk('7');
            readStr += '7';
            console.log('7');
            break;
        case 3670328:
            TextToSpeech.talk('8');
            readStr += '8';
            console.log('8');
            break;
        case 3670329:
            TextToSpeech.talk('9');
            readStr += '9';
            console.log('9');
            break;
        case 3670337:
            TextToSpeech.talk('A');
            readStr += 'A';
            console.log('A');
            break;
        case 3670338:
            TextToSpeech.talk('B');
            readStr += 'B';
            console.log('B');
            break;
        case 3670339:
            TextToSpeech.talk('C');
            readStr += 'C';
            console.log('C');
            break;
        case 3670340:
            TextToSpeech.talk('D');
            readStr += 'D';
            console.log('D');
            break;
        case 3670341:
            TextToSpeech.talk('E');
            readStr += 'E';
            console.log('E');
            break;
        case 3670342:
            TextToSpeech.talk('F');
            readStr += 'F';
            console.log('F');
            break;
        case 3670343:
            TextToSpeech.talk('G');
            readStr += 'G';
            console.log('G');
            break;
        case 3670344:
            TextToSpeech.talk('H');
            readStr += 'H';
            console.log('H');
            break;
        case 3670345:
            TextToSpeech.talk('I');
            readStr += 'I';
            console.log('I');
            break;
        case 3670346:
            TextToSpeech.talk('J');
            readStr += 'J';
            console.log('J');
            break;
        case 3670347:
            TextToSpeech.talk('K');
            readStr += 'K';
            console.log('K');
            break;
        case 3670348:
            TextToSpeech.talk('L');
            readStr += 'L';
            console.log('L');
            break;
        case 3670349:
            TextToSpeech.talk('M');
            readStr += 'M';
            console.log('M');
            break;
        case 3670350:
            console.log('N');
            TextToSpeech.talk('N');
            readStr += 'N';
            break;
        case 3670351:
            console.log('O');
            TextToSpeech.talk('O');
            readStr += 'O';
            break;
        case 3670352:
            console.log('P');
            TextToSpeech.talk('P');
            readStr += 'P';
            break;
        case 3670353:
            console.log('Q');
            TextToSpeech.talk('Q');
            readStr += 'Q';
            break;
        case 3670354:
            console.log('R');
            TextToSpeech.talk('R');
            readStr += 'R';
            break;
        case 3670355:
            console.log('S');
            TextToSpeech.talk('S');
            readStr += 'S';
            break;
        case 3670356:
            console.log('T');
            TextToSpeech.talk('T');
            readStr += 'T';
            break;
        case 3670357:
            console.log('U');
            TextToSpeech.talk('U');
            readStr += 'U';
            break;
        case 3670358:
            console.log('V');
            TextToSpeech.talk('V');
            readStr += 'V';
            break;
        case 3670359:
            console.log('W');
            TextToSpeech.talk('W');
            readStr += 'W';
            break;
        case 3670360:
            console.log('X');
            TextToSpeech.talk('X');
            readStr += 'X';
            break;
        case 3670361:
            console.log('Y');
            TextToSpeech.talk('Y');
            readStr += 'Y';
            break;
        case 3670362:
            console.log('Z');
            TextToSpeech.talk('Z');
            readStr += 'Z';
            break;
        case 3670070:
            console.log('space');
            readStr += ' ';
            break;
        case 3670032:
            console.log('reading');
            TextToSpeech.talk(readStr);
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
