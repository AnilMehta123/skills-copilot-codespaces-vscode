// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// The comments.html file should be in the same directory as the comments.js file.
// The comments.html file should have the following content:
// <!DOCTYPE html>
<html>
<head>
  <title>Comments</title>
</head>
<body>
  <h1>Comments</h1>
  <div id="comments"></div>
  <form id="comment-form">
    <input type="text" id="comment" name="comment" />
    <button type="submit">Submit</button>
  </form>
  <script src="comments.js"></script>
</body>
</html>
// The comments.js file should have the following content:
const form = document.getElementById('comment-form');
const comments = document.getElementById('comments');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const comment = document.getElementById('comment').value;
  const p = document.createElement('p');
  p.textContent = comment;
  comments.appendChild(p);
});
// When the form is submitted, the comment should be added to the comments div as a new paragraph element.  The comment should be the text content of the paragraph element.    The comment should be cleared from the input field after it is submitted.   