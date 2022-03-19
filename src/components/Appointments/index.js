import './index.css'
import {Component} from 'react'
import {format} from 'date-fns'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {titleName: '', dateValue: '', appointmentList: []}

  onTyping = event => {
    this.setState({titleName: event.target.value})
  }

  onDateSelection = event => {
    this.setState({dateValue: event.target.value})
  }

  onSubmitting = event => {
    event.preventDefault()
    const {dateValue, titleName} = this.state
    const formatDate = dateValue
      ? format(new Date(dateValue), 'dd MMMM yyyy, EEEE')
      : ''
    const newAppointment = {
      id: v4(),
      name: titleName,
      date: formatDate,
      isFavourite: false,
    }
    this.setState(prevValue => ({
      appointmentList: [...prevValue.appointmentList, newAppointment],
      titleName: '',
      dateValue: '',
    }))
  }

  onclickingStar = id => {
    this.setState(prevValue => ({
      appointmentList: prevValue.appointmentList.map(item => {
        if (id === item.id) {
          return {...item, isFavourite: !item.isFavourite}
        }
        return item
      }),
    }))
  }

  onFiltering = () => {
    this.setState(prevValue => ({
      appointmentList: prevValue.appointmentList.filter(
        item => item.isFavourite === true,
      ),
    }))
  }

  render() {
    const {titleName, dateValue, appointmentList} = this.state
    return (
      <div className="totalBG">
        <div className="contentBg">
          <div className="inputImageContainer">
            <form className="inputContainer" onSubmit={this.onSubmitting}>
              <h1 className="heading">Add Appointment</h1>
              <label className="inputLabel" htmlFor="nameInput">
                TITLE
              </label>
              <input
                className="inputNameCss"
                type="text"
                id="nameInput"
                placeholder="Title"
                value={titleName}
                onChange={this.onTyping}
              />
              <label className="dateLabel" htmlFor="dateInput">
                DATE
              </label>
              <input
                className="inputDateCss"
                type="date"
                id="dateInput"
                value={dateValue}
                onChange={this.onDateSelection}
              />
              <button className="addButton" type="submit">
                Add
              </button>
            </form>
            <img
              className="appImage"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <hr className="line" />
          <div className="appointmentsContainer">
            <div className="appHeadingStarred">
              <h1 className="heading2">Appointments</h1>
              <button
                type="button"
                className="starredButton"
                onClick={this.onFiltering}
              >
                Starred
              </button>
            </div>
            <ul className="appointmentsContainer">
              {appointmentList.map(item => (
                <AppointmentItem
                  appointmentList={item}
                  onclickingStar={this.onclickingStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
