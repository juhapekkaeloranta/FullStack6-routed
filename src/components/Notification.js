import React from 'react'

const Notification = ({ notificationText }) => {
  const notification = notificationText
  const style = {
    backgroundColor: '#dbffc9',
    border: 'solid',
    borderColor: '#9bb290',
    padding: 10,
    borderWidth: 1,
    marginTop: 5
  }

  const emptyStyle = {
    backgroundColor: '#ffffff',
    border: 'solid',
    borderColor: '#000000', //'#9bb290',
    padding: 10,
    borderWidth: 1,
    marginTop: 5
  }

  const notificationElement = () => (
    <div style={style}>
      {notification}
    </div>
  )

  const notificationPlaceholder = () => (
    <div style={emptyStyle}>
      Hello!
      </div>
  )

  if (notification !== null) {
    return (
      notificationElement()
    )
  } else {
    return (
      notificationPlaceholder()
    )
  }
}

export default Notification