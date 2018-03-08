import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//<Link to={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link>


const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote =>
        <li key={anecdote.id} >
          <Link to={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      )}
    </ul>
  </div>
)

export default AnecdoteList