document.addEventListener('DOMContentLoaded', () => {
    const addCommentBtn = document.querySelector('.add-comment');
    const newCommentInput = document.getElementById('new-comment');

    addCommentBtn.addEventListener('click', () => {
        const commentText = newCommentInput.value.trim();
        if (commentText) {
            addComment('You', commentText);
            newCommentInput.value = '';
        }
    });

    document.querySelectorAll('.delete-comment').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
        });
    });

    function addComment(author, text) {
        const commentsSection = document.querySelector('.comments-section');
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <span>${author}</span>
            <input type="text" value="${text}" readonly />
            <button class="edit-comment">✏️</button>
            <button class="delete-comment"><img src="./assets/delete.png"></button>
        `;
        commentsSection.insertBefore(commentDiv, document.querySelector('.section_3'));

        commentDiv.querySelector('.edit-comment').addEventListener('click', () => {
            const input = commentDiv.querySelector('input');
            if (input.readOnly) {
                input.readOnly = false;
                commentDiv.querySelector('.edit-comment').textContent = '✔️';
            } else {
                input.readOnly = true;
                commentDiv.querySelector('.edit-comment').textContent = '✏️';
            }
        });

        commentDiv.querySelector('.delete-comment').addEventListener('click', () => {
            commentDiv.remove();
        });
    }
});
