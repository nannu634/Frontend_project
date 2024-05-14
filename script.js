function toggleDetails() {
    var details = document.getElementById("details");
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
function addComment() {
    var commentInput = document.querySelector('.comment-input');
    var commentText = commentInput.value.trim();
    if (commentText !== '') {
        var commentsDiv = document.getElementById('comments');
        var commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = commentText;
        commentsDiv.appendChild(commentDiv);
        commentInput.value = '';
    }
}