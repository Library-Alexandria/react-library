import { useState, useEffect } from 'react'
import axios from 'axios'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Search() {
    const [results, setResults] = useState([])

    const author = "Plato"

    async function getResults() {
        try {
            const collection = await axios.get(
                REACT_APP_SERVER_URL + '/books/' + author
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
            alert('FAILED')
        }
    }
    
    useEffect(() => {
        getResults()
    }, [])

    return (
        <div>
            <h2>Search</h2>
            <p>Find a book!</p>
            {results}
        </div>
    )
}

export default Search