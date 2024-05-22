// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onChangeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state
    let messageEle
    let btnEle
    if (isLogin) {
      messageEle = <Message content="Welcome User" />
      btnEle = <Logout onChangeStatus={this.onChangeStatus} />
    } else {
      messageEle = <Message content="Please Login" />
      btnEle = <Login onChangeStatus={this.onChangeStatus} />
    }
    return (
      <div className="bg-container">
        <div className="card-container">
          {messageEle}
          {btnEle}
        </div>
      </div>
    )
  }
}

export default Home
