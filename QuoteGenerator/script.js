async function fetchQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();

      const Index = Math.floor(Math.random() * data.length);
      const Quote = data[Index];

      const randomquote = document.querySelector('.quote');
      randomquote.innerHTML = `<p>${Quote.text}</p><p>- ${Quote.author || 'Unknown'}</p>`;
    } catch (error) {
      console.error('Error in fetching a random quote:', error);
    }
  }
  
  function onButtonClick() {
    fetchQuote();
  }
 
  const newQuoteButton = document.getElementById('new-quote-btn');
  newQuoteButton.addEventListener('click', onButtonClick);
  
  fetchQuote();
  