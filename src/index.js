const BASE_URL = 'http://localhost:3000/quotes?_embed=likes'
const quotesArea = document.querySelector("#quote-list")

function renderQuotes(quotes) {    

    const quoteList = document.createElement('li')
    quoteList.textContent = `${quotes.quote}    `

    const likeButton = document.createElement("button")
    // likedClicked(quotes, likeButton)
    
    likeButton.addEventListener('click', () => likequote(quotes, likeButton))
    
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "X"
    deleteButton.addEventListener('click', () => deletequote(quotes, quoteList))

    quoteList.append(likeButton, deleteButton)
    quotesArea.append(quoteList)
}


function getquotes(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(quote => quote.forEach(renderQuotes))
}
getquotes()