import React from 'react'

const footerStyle = {
  margin: 10,
  marginTop: 50
}

const Footer = () => (
  <div style={footerStyle}>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.
    <br/>
    See <a href='https://github.com/juhapekkamoilanen/FullStack6-routed'>https://github.com/juhapekkamoilanen/FullStack6-routed</a> for the source code.
  </div>
)

export default Footer