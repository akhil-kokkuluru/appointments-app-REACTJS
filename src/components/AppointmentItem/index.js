import './index.css'

const AppointmentItem = props => {
  const {appointmentList} = props
  const {id, name, date, isFavourite} = appointmentList
  return (
    <li className="appointment">
      <div className="nameStar">
        <p className="nameing">{name}</p>
        <button className="imgButton">
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
            alt="star"
          />
        </button>
      </div>
      <p className="datecss">{`Date: ${date}`}</p>
    </li>
  )
}
export default AppointmentItem
