// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  clickHandler = () => {
    // this.setState({
    //   timesClicked: this.state.timesClicked + 1
    // })
    this.setState((prevState) => ({timesClicked: prevState.timesClicked + 1}))
  }




  render() {
    return (
    <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    )
  }

}

export default DigitalClicker