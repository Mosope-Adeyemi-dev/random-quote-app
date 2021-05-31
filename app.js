const express = require('express');
const ejs = require('ejs');
const https = require("https");
const { generateKeyPair } = require('crypto');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", (request, response) => {
    
    response.redirect("/quotes");
});

app.get("/quotes", (request, response) => {

    function generateQuote() {
        let image = "";
        let quote = {};
        const req = https.get('https://api.quotable.io/random?minLength=60&maxLength=90', (res) => {

            res.setEncoding('utf8');
            res.on("data", (chunk) => {
                quote = JSON.parse(chunk);
                console.log(quote.author);
                const author = encodeURI(quote.author);

                const http = require("https");
                const options = {
                    "method": "GET",
                    "hostname": "bing-image-search1.p.rapidapi.com",
                    "port": null,
                    "path": "/images/search?q=" + author + "&count=1",
                    "headers": {
                        "x-rapidapi-key": "2bd881f317msh1b17d98c193666bp10b8ddjsnca443606fba3",
                        "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
                        "useQueryString": true
                    }
                };
                const requ = http.request(options, function (resp) {
                    const chunks = [];
                    resp.on("data", function (chunk) {
                        chunks.push(chunk);
                    });
                    resp.on("end", function () {
                        const body = Buffer.concat(chunks);
                        const images = JSON.parse(body.toString())
                        image = images.value[0].thumbnailUrl;
                        console.log(images.value[0].thumbnailUrl);
                        response.render("home", {
                            quote: quote,
                            imageUrl: image
                        });
                    });

                });

                requ.end();
                requ.on("error", (e) => {
                    console.log(e);
                });

            });
        });

        req.on("error", (e) => {
            console.log(e);
        });
    }
    generateQuote();
})

app.listen(process.env.PORT || 3000, () => {
    console.log("app is running");
})