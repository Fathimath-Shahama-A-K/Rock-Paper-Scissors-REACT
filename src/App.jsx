import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  const [score, setScore] = useState(0);
  const [computerScore,setComputerScore]=useState(0);
  const [playerChoice,setPlayerChoice]=useState('');
  const [computerChoice,setComputerChoice]=useState('');
  const choices=['✊','🖐️','✌️'];
  function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
  }

  function playGame(playerChoice){
    const computer=getComputerChoice();

    setPlayerChoice(playerChoice);
    setComputerChoice(computer);
    
    
    if(playerChoice===computer){
      setResult('Tie');
    }
    //for rock
    else if(playerChoice==='✊' && computer==='✌️'){
      setResult('You Win!');
      setScore( prevScore => prevScore+1);
    }
   
    //for paper logic
   
    else if(playerChoice==='🖐️' && computer==='✊'){
      setResult('You Win!');
      setScore(prevScore => prevScore+1);
    }
   
    //for scissors
    
    else if(playerChoice==='✌️' && computer==='🖐️'){
      setResult('You Win!');
      setScore(prevScore => prevScore+1);
    }
    else{
      setResult('You Lose');
      setComputerScore(prevScore => prevScore+1);
    }
   

  }
  function resetGame(){
    setScore(0);
    setComputerScore(0);
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    
  }
  const [result,setResult]=useState('');

  return (
    <>
      <section id="center">
        <h1>Rock-Paper-Scissors</h1>

        <p className='score'>Your Score:{score} | Computer Score:{computerScore}</p>
        
        <p className='you'>You Chose:{playerChoice}</p>
        <p className='computer'>Computer Chose:{computerChoice}</p>
        <p className='result'>{result}</p>


        <div className='choices'>
            <button className="choiceBtn" onClick={() => playGame('✊')}>
            ✊
            </button>

            <button className="choiceBtn" onClick={() =>playGame('🖐️')}>
              🖐️
            </button>

            <button className="choiceBtn" onClick={() => playGame('✌️')}>
              ✌️
            </button>
        </div>
        <button className='resetBtn' onClick={resetGame}>
          Reset Game
        </button>
      </section>

      
    </>
  )
}

export default App
