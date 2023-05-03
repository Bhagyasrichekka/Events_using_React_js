// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, onClickImg} = props
  const {name, imageUrl, location, registrationStatus} = eachEvent

  const callTheFun = () => {
    onClickImg(registrationStatus)
  }

  return (
    <li className="event-card">
      <button type="button" onClick={callTheFun}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>

      <p className="name">{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
