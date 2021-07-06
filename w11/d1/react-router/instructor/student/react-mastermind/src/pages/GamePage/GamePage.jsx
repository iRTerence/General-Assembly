import React from 'react'

// React Router
import { Link } from 'react-router-dom';

// CSS
import './gamepage.css'

// Components
import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';


export default function GamePage( {
  colors,
  guesses,
  handlePegClick,
  handleScoreClick,
  selColorIdx,
  handleColorSelection,
  handleNewGameClick,
  winTries
}) {


  // SAME AS FUNCTION PARAMETER DESTRUCTURING
// const { colors,
//   guesses,
//   handlePegClick,
//   handleScoreClick,
//   selColorIdx,
//   handleColorSelection,
//   handleNewGameClick,
//   winTries} = props;

  return (
    <div className="App">
      <div className="flex-h align-flex-end">
        <GameBoard
          colors={colors}
          guesses={guesses}
          handlePegClick={handlePegClick}
          handleScoreClick={handleScoreClick}
        />
        <div className='App-controls'>
          <ColorPicker
            colors={colors}
            selColorIdx={selColorIdx}
            handleColorSelection={handleColorSelection}
          />
          <GameTimer />
          <Link className='btn btn-default' to='/settings'>Difficulty</Link>
          <NewGameButton handleNewGameClick={handleNewGameClick}/>
        </div>
      </div>
      <footer className='App-header-footer'>
        {(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}
      </footer>
    </div>
  );
}
