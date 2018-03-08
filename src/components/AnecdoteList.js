import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {List, ListItem} from 'material-ui/List'

//<Link to={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link>
const listStyle = {
  listStyleType: 'none',
  margin: 5
}

const textStyle = {
  fontFamily: 'Open Sans',
  textTransform: 'none',
  margin: 5
}

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2 style={textStyle}>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote =>
        <li style={listStyle} key={anecdote.id} >
          <Link to={`/anecdote/${anecdote.id}`}><i>{anecdote.content}</i></Link>
        </li>
      )}
    </ul>
  </div>
)

export default AnecdoteList