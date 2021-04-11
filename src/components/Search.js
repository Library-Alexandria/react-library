import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const author = query
            const lowerAuthor = author.toLowerCase()
            const properAuthor = lowerAuthor[0].toUpperCase() + lowerAuthor.substring(1)
            const finalAuthor = properAuthor.split(' ')[0]
            const collection = await axios.get(
                REACT_APP_SERVER_URL + '/books/search/' + finalAuthor
            )
            const collectionArray = collection.data.books.map((book, index) => {
                return (
                    <div 
                        key={index}
                    >
                        <h3>{book.title}</h3>
                        <h4>by {book.author}</h4>
                        <p>Subjects: {book.subjects}</p>
                        <Link 
                            to={{
                                pathname: "/read",
                                state: {book}
                            }}
                        >
                            Read this book
                        </Link>
                    </div>
                )
            })
            setResults(collectionArray)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <h2>Search</h2>
            <p>Find a book!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    value={query}
                    onChange={handleQuery}
                />
                <button type="submit">Submit</button>
            </form>
            {results}
        </div>
    )
}

export default Search