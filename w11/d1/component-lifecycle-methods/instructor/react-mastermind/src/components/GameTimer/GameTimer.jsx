import React, {Component} from 'react';
import styles from './GameTimer.module.css';

// Utils
import { formatTime } from '../../utils'

// const GameTimer = (props) => (
//   <div className={`${styles.GameTimer} flex-h`}>
//     00:00
//   </div>
// );

class GameTimer extends Component{
  componentDidMount() {
    this.timerId = setInterval(this.handleTick, 1000)

    // BAD APPROACH
    // this.setState({timerId: setInterval(this.handleTick, 1000)});
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  handleTick = () => {
    const { handleTimerUpdate } = this.props;
    return handleTimerUpdate()
  }

  render(){
    const { elapsedTime } = this.props

    return (
    <div className={`${styles.GameTimer} flex-h`}>
      {/* TIMER in format of MM:SS */}
      {formatTime(elapsedTime)}
    </div>)
  }
}



export default GameTimer;
