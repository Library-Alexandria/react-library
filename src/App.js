import { Route } from "react-router-dom"

import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Search from './components/Search'
import Results from './components/Results'
import ReadBook from './components/ReadBook'
import './App.css'

function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>HELLO ALEXANDRIA</h1>
            </div>

            <div className="flex-container">
                <div className="column">
                    <img className="pillar" src="https://res.cloudinary.com/carolinaurrea/image/upload/v1618028409/pillars_kl2tke.png" alt="pillar"></img>
                </div>

                <div className="scroll">
                    <img className="scroll" src="https://res.cloudinary.com/carolinaurrea/image/upload/v1618070627/scrollonce_hpjsq7.gif" alt="scroll"/>

                    <div className="main">
                        <Route exact path="/" component={Home} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/search" component={Search} />
                        <Route path="/results" component={Results} />
                        <Route path="/read/:title" component={ReadBook} />
                    </div>
                </div>

                <div className="column">
                    <img className="pillar" src="https://res.cloudinary.com/carolinaurrea/image/upload/v1618028409/pillars_kl2tke.png" alt="pillar"></img>
                </div>
            </div>
        </div>
    )
}

export default App