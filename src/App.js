import Login from './components/Login'
import Profile from './components/Profile'
import ReadBook from './components/ReadBook'
import Results from './components/Results'
import Search from './components/Search'
import Signup from './components/Signup'
import './App.css'

function App() {
    return (
        <div className="App">
            <Route component={Login}/>
            <Route component={Profile}/>
            <Route path="/read/:title" component={ReadBook}/>
            <Route path="/results" component={Results}/>
            <Route path="/" component={Search}/>
            <Route component={Signup}/>
        </div>
    )
}

export default App