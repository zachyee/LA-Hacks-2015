// Review constructor

function review(title, author, reviewer, paragraphs) {
	this.title = title;
	this.author = author;
	this.reviewer = reviewer;
	this.paragraphs = paragraphs;
	this.totalReview = title + "\nWritten By " + author + 
		"\nReviewed By " + reviewer + "\nReview: " + paragraphs + "\n";
}

var allReviews = new Array();
allReviews.push(new review("Jane Eyre", "Charlotte Bronte", "Zachary Yee", 
	"Crazy bitches be living in the attic."));
allReviews.push(new review("Ulysses", "James Joyce", "Bryan Aitken",
	"Tough to read unless you understand 40 languages and are on LSD."));
allReviews.push(new review("The Catcher in the Rye", "J. D. Salinger", "A. Customer",
	"The man who wrote this should be in an asylum. Total waste of paper."));
allReviews.push(new review("The Great Gatsby", "F. Scott Fitzgerald", "Stephen Roberts",
	"Excellent substitute for valium... The most artificially inflated phenomenon since "
	+ "\nthe 1929 stock market, and likewise it seems like a worthy instigator of "
	+ "\nthe Great Depression."));
allReviews.push(new review("1984", "George Orwell", "Shar Tampeka",
	"High expectations only to suffer through a drab chain of non sequitur events,"
	+ " thoroughly lacking any explanations at all"));
allReviews.push(new review("Crime and Punishment", "Ryodor Dostoyevsky", "Zachary Yee",
	"Have you prepared for a 10-day marathon?"));

// http://localhost:8888/

var http = require("http"); 


http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	for (i = 0; i < allReviews.length; i++) {
		response.write(allReviews[i].totalReview + "\n");
	}
	response.end();
}).listen(8888); 

