import { useState } from 'react'
import axios from 'axios'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const handleQuery = (e) => {
        const author = e.target.value
        const lowerAuthor = author.toLowerCase()
        const properAuthor = lowerAuthor[0].toUpperCase() + lowerAuthor.substring(1)
        setQuery(properAuthor)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const collection = await axios.get(
                REACT_APP_SERVER_URL + '/books/' + query
            )
            const collectionArray = collection.data.books.map((book, index) => {
                return (
                    <div 
                        key={index}
                    >
                        <h3>{book.title}</h3>
                        <h4>by {book.author}</h4>
                        <p>Subjects: {book.subjects}</p>
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