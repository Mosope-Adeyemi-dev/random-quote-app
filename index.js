var quotes = [{
        "text": 'If you want to achieve greatness stop asking for permission.',
        "author": 'Anonymous',
        "imgAuthor": "https://techcrunch.com/wp-content/uploads/2015/11/anonymous.jpg"
    },
    {
        "text": "To live a creative life, we must lose our fear of being wrong.",
        "author": "Anonymous",
        "imgAuthor": "https://techcrunch.com/wp-content/uploads/2015/11/anonymous.jpg"
    },
    {
        "text": "If you are not willing to risk the usual you will have to settle for the ordinary",
        "author": "Jim Rohn",
        "imgAuthor": "https://assets.entrepreneur.com/content/3x2/2000/20160304132547-jim-rohn.jpeg"
    },
    {
        "text": "All our dreams can come true if we have the courage to pursue them.",
        "author": "Walt Disney",
        "imgAuthor": "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG"
    },
    {
        "text": "Success is walking from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill",
        "imgAuthor": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHAR18cqPFM1mZfLs57VG0fhqincTTsM75w&usqp=CAU"
    },
    {
        "text": "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
        "author": "Proverb",
        "imgAuthor": "https://galaxypress.com/wp-content/uploads/2018/12/Best-Mystery-Books.jpg"
    },
    {
        "text": "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",
        "author": "Vaibhav Shah",
        "imgAuthor": "https://i.unu.edu/media/egov.unu.edu/expert/4484/Vaibhav-Shah-BW.jpg"
    },
    {
        "text": "Try not to become a person of success, but rather try to become a person of value.",
        "author": "Albert Einstein",
        "imgAuthor": "https://plybon.msitesprogram.com/wp-content/uploads/sites/143/2019/10/Albert-Einstein_0.jpg"
    },
    {
        "text": "If you need words of encouragement as an entrepreneur, then you should'nt be an enterpreneur",
        "author": "Elon Musk",
        "imgAuthor": "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
    },
];

storeNewRandom = [];
var randomNumber = Math.floor(Math.random() * quotes.length);

function loadQuote() {
    var quote = quotes[randomNumber].text;
    var author = quotes[randomNumber].author;

    document.querySelector(".quote-text").innerHTML = `${quote}`;
    document.querySelector(".quote-author").innerHTML = `~ ${author}`;
    
    var imgUrl = quotes[randomNumber].imgAuthor;
    document.querySelector(".author-img").src = "" + imgUrl + "";
}

function newQuote() {
    document.querySelector(".quote-text").innerHTML = " ";
    var newRandomNumber = Math.floor(Math.random() * quotes.length);

    if (randomNumber === newRandomNumber) {
        newRandomNumber = Math.floor(Math.random() * quotes.length);
    }
    storeNewRandom.push(newRandomNumber);
    if (storeNewRandom[storeNewRandom.length - 1 === newRandomNumber]) {
        newRandomNumber = Math.floor(Math.random() * quotes.length);
    }
    var newQuote = quotes[newRandomNumber].text;
    var newAuthor = quotes[newRandomNumber].author;
    var imgUrl = quotes[newRandomNumber].imgAuthor;

    document.querySelector(".quote-text").innerHTML = `${newQuote}`;
    document.querySelector(".quote-author").innerHTML = `~${newAuthor}`;
    document.querySelector(".author-img").src = "" + imgUrl + "";

}