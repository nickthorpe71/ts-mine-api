function takeCareOfNewPup24Hours() {
  let states = ['sleep', 'pee/poo', 'play', 'eat', 'nap'];
  let currentState = 0;
  let awake = false;
  let currentHour = 0;

  setInterval(() => {
    // if night time sleep else be awake
    awake = !(currentHour > 20 || currentHour < 5);
    currentState = awake ? randomChance(4) : 0;

    // basic behaviour loop
    if (awake) {
      console.log(`time to ${states[currentState]}!`);
      currentHour++;
      currentState++;
    }
    else {
      currentHour++;
      // chance to randomly wake up in the middle of the night
      if (randomChance(100) < 20) {
        console.log('middle of the night barking/peeing!');
      } else {
        console.log('sleeping...');
      }
    }

    // check reset hours and state
    currentHour = currentHour >= 24 ? 0 : currentHour;
    currentState = currentState > states.length ? 1 : currentState;

    console.log(`current time: ${currentHour}:00`);

  }, 1000);
}

function randomChance(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

takeCareOfNewPup24Hours();