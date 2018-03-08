import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import Notification from './components/Notification'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <i>{anecdote.content}</i>
      <p>by {anecdote.author}</p>
      <p>votes: {anecdote.votes}</p>
      <a href={anecdote.info}>more info</a>
    </div>
  )
}

const textStyle = {
  fontFamily: 'Open Sans',
  textTransform: 'none'
}

const paperStyle = {
  height: '100%',
  width: 400,
  margin: '0 auto',
  textAlign: 'center',
  display: 'inline-block',
  padding: 10
}

const buttonStyle = {
  bg: '#darkblue',
  border: 'solid',
  borderColor: '#757575',
  borderWidth: 1,
  fontFamily: 'Open Sans',
  textTransform: 'none',
  fontSize: '1rem',
  marginLeft: 10,
  marginRight: 10
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
      <div><Paper style={paperStyle} zDepth={3}>
        <h1 style={textStyle}>Software anecdotes</h1>
        <Router>
          <div>
            <div>
              <Button style={buttonStyle}><Link to="/">Anecdotes</Link> &nbsp;</Button>
              <Button style={buttonStyle}><Link to="/new">Create new</Link> &nbsp;</Button>
              <Button style={buttonStyle}><Link to="/about">About</Link></Button>
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
      </Paper>
      </div>
    )
  }
}

export default App;
