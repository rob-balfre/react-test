# React Test

- users can see a list of articles
- users can press a button to load more articles

## Instructions

Fork this repository. Create a feature branch to do your work. When done create a pull request back to bauermediaau as a new branch.
 
There is no design, feel free to make the list as aesthetically pleasing as you like as long as the main requirements are met.

If there are any questions, feel free to record any assumptions made.
 
## Details

- use React for rendering the HTML list and button ui
- use the Flux data flow pattern
- code must be unit tested
- use local JSON files as pages of articles to display
- all articles have unique ids, titles and images. one article is:

```
{
	id: 1,
	title: "article title 1",
	image: "http://placehold.it/300x250&text=image 1"
}
```

## Installation

```
npm install
```

## Compile and run

```
# Work around bug in browserify
ulimit -n 2560
gulp
cd dist/ && python -m SimpleHTTPServer 8000
```

Open http://locahost:8000/ in your browser of choice.

## Tests

```
npm test
```