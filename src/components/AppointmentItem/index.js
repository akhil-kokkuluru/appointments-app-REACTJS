import './index.css'

const AppointmentItem = props => {
  const {appointmentList, onclickingStar} = props
  const {id, name, date, isFavourite} = appointmentList

  const starImgUrl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    onclickingStar(id)
  }

  return (
    <li className="appointment">
      <div className="nameStar">
        <p className="nameing">{name}</p>
        <button className="imgButton" onClick={onClickStar} type="button">
          <img src={starImgUrl} alt="star" />
        </button>
      </div>
      <p className="datecss">{`Date: ${date}`}</p>
    </li>
  )
}
export default AppointmentItem
