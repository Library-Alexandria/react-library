import { useState, useEffect } from 'react'
import axios from 'axios'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function ReadBook() {
    const [text, setText] = useState('')

    const bookId = 1

    async function getText() {
        try {
            const book = await axios.get(
                REACT_APP_SERVER_URL + '/books/text/' + bookId
            )
            setText(book.data.text)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getText()
    }, [])

    return (
        <div>
            <h2>Read This Book</h2>
            <p>Read the full text of this book.</p>
            <div 
                dangerouslySetInnerHTML={{
                    __html: text
                }} 
            />
        </div>
    )
}

export default ReadBook