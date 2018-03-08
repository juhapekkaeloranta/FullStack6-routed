import React from 'react'

const Notification = ({ notificationText }) => {
  const notification = notificationText
  const style = {
    backgroundColor: '#dbffc9',
    padding: 10,
    borderWidth: 1
  }

  const emptyStyle = {
    backgroundColor: '#ffffff',
    padding: 10,
    borderWidth: 1
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