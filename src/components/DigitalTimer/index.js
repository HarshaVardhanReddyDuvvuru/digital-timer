import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isRunning: false,
    reset: false,
    timerLimit: 25,
    minutes: 25,
    seconds: 0,
  }

  renderTimer = () => {
    const {minutes, seconds} = this.state
    return (
      <p className="timer">
        {minutes > 9 ? minutes : `0${minutes}`}:
        {seconds > 9 ? seconds : `0${seconds}`}
      </p>
    )
  }

  render() {
    const {isRunning, timerLimit} = this.state
    const state = isRunning ? 'Pause' : 'Start'
    const stateImgSrc = isRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altText = isRunning ? 'pause icon' : 'play icon'
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="timer-app-container">
          <div className="timer-bg-container">
            <div className="timer-container">
              {this.renderTimer()}
              <p>Running</p>
            </div>
          </div>
          <div className="timer-controls-container">
            <div className="control-container">
              <div>
                <img
                  className="control-icon"
                  src={stateImgSrc}
                  alt={altText}
                  onClick={this.onClickControlIcon}
                />
                <p>{state}</p>
              </div>
              <div>
                <img
                  className="control-icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <p>Reset</p>
              </div>
            </div>
            <div className="timer-limit-container">
              <p>Set Timer Limit</p>
              <button type="button" className="adjust-limit-btn">
                -
              </button>
              <button type="button">{timerLimit}</button>
              <button type="button" className="adjust-limit-btn">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
