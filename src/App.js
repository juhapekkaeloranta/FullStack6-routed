import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import Notification from './components/Notification'

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <b>{anecdote.content}</b>
      <p>by {anecdote.author}</p>
      <p>votes: {anecdote.votes}</p>
      <a href={anecdote.info}>more info</a>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: null
    }
  }

  addNew = (anecdote, history) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({ anecdotes: this.state.anecdotes.concat(anecdote) })
    history.push('/')
    this.setState({ notification: 'Anecdote created!' })
    setTimeout(() => {
      console.log('notification reset!')
      this.setState({ notification: null })
    }, 3000)
  }

  anecdoteById = (id) => {
    return this.state.anecdotes.find(a => a.id === id)
  }

  vote = (id) => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    return (
      <div>
        <h1>Software anecdotes</h1>
        <Router>
          <div>
            <div>
              <Link to="/">anecdotes</Link> &nbsp;
              <Link to="/new">create new</Link> &nbsp;
              <Link to="/about">about</Link>
            </div>
            <Notification notificationText={this.state.notification} />
            <Route exact path="/" render={() => <AnecdoteList anecdotes={this.state.anecdotes} />} />
            <Route exact path="/new" render={({ history }) =>
              <CreateNew history={history} addNew={this.addNew} />}
            />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/anecdote/:id" render={({ match }) => <Anecdote anecdote={this.anecdoteById(match.params.id)} />} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
