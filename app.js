fetch("https://zodiac-sign.p.rapidapi.com/signs", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "{x-rapidapi-key}",
		"x-rapidapi-host": "zodiac-sign.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});