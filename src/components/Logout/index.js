// Write your code here
import './index.css'

const Logout = props => {
  const {onChangeStatus} = props

  return (
    <button type="button" className="btn-logout" onClick={onChangeStatus}>
      Logout
    </button>
  )
}

export default Logout
