// Write your code here
import './index.css'

const Login = props => {
  const {onChangeStatus} = props

  return (
    <button type="button" className="btn-login" onClick={onChangeStatus}>
      Login
    </button>
  )
}

export default Login
