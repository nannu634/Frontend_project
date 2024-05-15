document.addEventListener('DOMContentLoaded', () => {
    const completeBtn = document.getElementById('complete-btn');
    const deleteBtn = document.getElementById('delete-btn');
    const closeBtn = document.getElementById('close-btn');
    const addCommentBtn = document.getElementById('add-comment');
    const newCommentInput = document.getElementById('new-comment');

    completeBtn.addEventListener('click', () => {
        alert('Event marked as complete!');
    });

    deleteBtn.addEventListener('click', () => {
        alert('Event deleted!');
    });

    closeBtn.addEventListener('click', () => {
        alert('Modal closed!');
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
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `
            <span>${author}</span>
            <input type="text" value="${text}" readonly />
            <button class="edit-comment">✏️</button>
            <button class="delete-comment">🗑️</button>
        `;
        commentsSection.appendChild(comment);
        comment.querySelector('.edit-comment').addEventListener('click', () => {
            const input = comment.querySelector('input');
            if (input.readOnly) {
                input.readOnly = false;
                comment.querySelector('.edit-comment').textContent = '✔️';
            } else {
                input.readOnly = true;
                comment.querySelector('.edit-comment').textContent = '✏️';
            }
        });
        comment.querySelector('.delete-comment').addEventListener('click', () => {
            comment.remove();
        });
    }
});
