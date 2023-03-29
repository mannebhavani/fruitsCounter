import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mCount: 0, bCount: 0}

  eatMango = () => {
    this.setState(prevState => {
      console.log(`previous state is: ${prevState.mCount}`)
      return {mCount: prevState.mCount + 1}
    })
  }

  eatBanana = () => {
    this.setState(prevState => {
      console.log(`previous state is: ${prevState.bCount}`)
      return {bCount: prevState.bCount + 1}
    })
  }

  render() {
    const {mCount, bCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="number-count">{mCount}</span> mangoes{' '}
            <span className="number-count">{bCount}</span> bananas
          </h1>
          <div className="item-cards-container">
            <div className="item-card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>

            <div className="item-card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
