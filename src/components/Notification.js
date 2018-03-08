import React from 'react'

const Notification = ({ notificationText }) => {
  const notification = notificationText
  const style = {
    backgroundColor: '#dbffc9',
    border: 'solid',
    borderColor: '#9bb290',
    padding: 10,
    borderWidth: 0.5,
    marginTop: 5,
    minHeight: 25
  }

  const emptyStyle = {
    backgroundColor: '#ffffff',
    padding: 10,
    borderWidth: 1,
    marginTop: 5,
    minHeight: 25
  }

  const notificationElement = () => (
    <div style={style}>
      {notification}
    </div>
  )

  const notificationPlaceholder = () => (
    <div style={emptyStyle}>
      
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