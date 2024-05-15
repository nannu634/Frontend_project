document.addEventListener('DOMContentLoaded', () => {
    const completeBtn = document.getElementById('complete-btn');
    const addCommentBtn = document.getElementById('add-comment');
    const newCommentInput = document.getElementById('new-comment');

    completeBtn.addEventListener('click', () => {
        alert('Event marked as complete!');
    });

    addCommentBtn.addEventListener('click', () => {
        const commentText = newCommentInput.value.trim();
        if (commentText) {
            addComment('You', commentText);
            newCommentInput.value = '';
        }
    });

    document.querySelectorAll('.edit-comment').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            if (input.readOnly) {
                input.readOnly = false;
                button.textContent = '✔️';
            } else {
                input.readOnly = true;
                button.textContent = '✏️';
            }
        });
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
            <button class="delete-comment">🗑️</button>
        `;
        commentsSection.insertBefore(commentDiv, newCommentInput);

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
