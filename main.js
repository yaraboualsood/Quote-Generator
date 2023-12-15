var quotes = ['“Be yourself; everyone else is already taken.”― Oscar Wilde',
    ' “I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”― Marilyn Monroe'
    , '“So many books, so little time.”― Frank Zappa',
    '“A room without books is like a body without a soul.” ― Marcus Tullius Cicero',
    '“You only live once, but if you do it right, once is enough.”― Mae West',
    '“Be the change that you wish to see in the world.”― Gandhi',
    '“giving up doesn\'t always mean your weak sometimes you\'re just strong enough to let go”― Taylor Swift',
    '“I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”― Maya Angelou',
    '“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde',
    '“We accept the love we think we deserve.”― Stephen Chbosky, The Perks of Being a Wallflower',
    '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”― Martin Luther King Jr',
    '“Always forgive your enemies; nothing annoys them so much.”― Oscar Wilde',
    '“If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it.”― Toni Morrison',
    '“′Classic′ - a book which people praise and don\'t read.”― Mark Twain',
    '“You don’t forget the face of the person who was your last hope.”― Suzanne Collins, The Hunger Games',
    '“I love mankind ... it\'s people I can\'t stand!!”― Charles M. Schulz',
    '“The world is not a wish-granting factory.”― John Green, The Fault in Our Stars',
    '“It\'s far better to be unhappy alone than unhappy with someone — so far.”― Marilyn Monroe',
    '“People haven\'t always been there for me but music always has.”― Taylor Swift',
    '“You cannot find peace by avoiding life.”― Michael Cunningham '
]


var random

function GenerateQuote() {

    do {
        var newRandom = Math.floor(Math.random() * (quotes.length))

    } while (newRandom === random) 

    random = newRandom    //leh mynf3sh ashelha
    document.getElementById('RandomQuoteOutput').innerHTML = quotes[newRandom]
    console.log(newRandom)
    

}


