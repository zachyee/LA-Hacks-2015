// Review constructor

function review(title, author, reviewer, paragraphs) {
	this.title = title;
	this.author = author;
	this.reviewer = reviewer;
	this.paragraphs = paragraphs;
	this.totalReview = title + "\nWritten By " + author + 
		"\nReviewed By " + reviewer + "\nReview: " + paragraphs;
}

var allReviews = new Array();
allReviews.push(new review("Jane Eyre", "Charlotte Bronte", "Zachary Yee", 
	"Crazy bitches be living in the attic."));

// http://localhost:8888/

var http = require("http"); 


http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	for (i = 0; i < allReviews.length; i++) {
		response.write(allReviews[i].totalReview + "\n");
	}
	response.end();
}).listen(8888); 

