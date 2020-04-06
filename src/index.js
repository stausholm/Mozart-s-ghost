import "./styles.scss";

// flip through sections for 3-5 seconds and after that call window.history.back() 
const SECONDS_MIN = 3
const SECONDS_MAX = 5
const IS_PROD = process.env.NODE_ENV === 'production'

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const init = () => {
  const time = randomInt(SECONDS_MIN, SECONDS_MAX) * 1000
  const screens = Array.from(document.querySelectorAll('.screen:not(.final)'))
  shuffleArray(screens)
  
  screens[randomInt(0, screens.length - 1)].classList.add('active')
  let i = 1
  
  setInterval(() => {
    const previousScreen = document.querySelector('.screen.active')

    // loop through all screens once and then start picking at random
    let screen
    const currentIndex = screens.indexOf(previousScreen)
    if (i >= screens.length) {
      screen = screens[randomInt(0, screens.length - 1)]
      if (screen === previousScreen) {
        screen = currentIndex + 1 === screens.length ? screens[0] : screens[currentIndex + 1]
      }
    } else {
      screen = currentIndex + 1 === screens.length ? screens[0] : screens[currentIndex + 1]
    }
    
    previousScreen.classList.remove('active')
    screen.classList.add('active')
    
    i++
  }, 150)
  
  // final screen
  setTimeout(() => {
    const finalBlink = document.querySelector('.final .blink')
    document.querySelector('.final').classList.add('active')
    setInterval(() => {
      finalBlink.classList.toggle('blink')
    }, 400)
    setTimeout(() => {
      if(IS_PROD) {
        window.history.back()
      } else {
        console.log('window.history.back()')
      }
    }, 2000)
  }, time)
}

init()