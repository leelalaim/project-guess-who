// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filter = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Ava',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Noah',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Oliver',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'William',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Sophia',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Charlotte',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Benjamin',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Amelia',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Lucas',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Mia',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Ryan',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Claire',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Elena',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Adam',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Kai',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Eva',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Tyler',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay, count

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}



// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  //1. Set the secret person 
  setSecret()
  // 2. Cards generated
  generateBoard()

   //Hide the winOrLose section after pressing the PLAY AGAIN button 
   winOrLose.style.display = "none"
   // Showing back the board 
   board.style.display = "flex"
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {

  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  
  // Variable that stores the actual value of the question we've selected.
  const value = questions.value
  

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
   }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  
  const keep = currentQuestion.value === secret[currentQuestion.attribute]
  // Then invoke filterCharacters
  filterCharacters(keep)

}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // Show the correct alert message for different categories
  const attribute = currentQuestion.attribute
  const value = currentQuestion.value
  const category = currentQuestion.category

  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${attribute}! Keep all that wears ${attribute}`)
    } else {
      alert(`No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`)
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person is ${attribute}! Keep all that are ${attribute}'s`)
    } else {
      alert(`No, the person is not ${attribute}! Remove all ${attribute}'s`)
    }
  } else if (category === 'hair color') {
    if (keep) {
      alert(`Yes, the person has ${value} hair! Keeping all the people with ${value} hair.`)
    } else {
      alert(`No, the person doesn't have ${value} hair. Removing people with ${value} hair.`)
    }
  } else if (category === 'eye color')
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keeping all the people with ${value} eyes.`)
    } else {
      alert(`No, the person doesn't have ${value} eyes. Removing people with ${value} eyes.`)
    }

  // filter to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
   // store the interaction from the player in a variable.
  const confirmSuspect = confirm(`Are you sure you want that your guess is ${suspect}?`)
  // If the player wants to guess, invoke the checkMyGuess function.
  if (confirmSuspect === true) {
    checkMyGuess(suspect)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Check if the suspect is the same as the secret person's name
  if (suspect === secret.name) {
    // 2. Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerHTML = `You guessed on the correct ${suspect}!!!`
  } else {
    winOrLoseText.innerHTML = `No it's not ${suspect}. The correct answer is ${secret.name}!`
  }
  
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  board.style.display = 'none'

}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', start)
questions.addEventListener('change', () => selectQuestion())
filter.addEventListener('click', checkQuestion)