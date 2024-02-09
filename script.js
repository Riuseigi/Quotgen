//DOM Initialiation
const quoteElement = document.getElementById("quoteElement");
const authorElement = document.getElementById("authorElement");


/**
 * The function `randomQuote` fetches a random quote and displays it along with the author's name.
 */
async function randomQuote(){
    const data = await fetchQuote();
  
    try{
        const quote = data.content;
        quoteElement.textContent = quote
        
        const author = data.author;
        authorElement.textContent = `- ${author}`
      
    }catch(error){
        console.error(error)
    }

}




/**
 * The function fetchQuote uses the fetch API to make a request to the 'https://api.quotable.io/random'
 * endpoint and returns a random quote as a JSON object.
 * @returns The function `fetchQuote` returns a promise that resolves to the JSON data fetched from the
 * 'https://api.quotable.io/random' endpoint.
 */
async function fetchQuote(){
    const response = await fetch('https://api.quotable.io/random')

    if(!response.ok){
        throw new Error("Could not Fetch Data")
    }
    return await response.json();
}




// function fetchQuote() {
//     fetch('https://api.quotable.io/random')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//       })
//       .catch(error => {
//         console.error('Error fetching quote:', error);
//       });
//   }
//   fetchQuote();
