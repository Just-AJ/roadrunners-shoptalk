async function editHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const copy = document.querySelector('textarea[name="note-body"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'put',
        body: JSON.stringify({
            title,
            copy
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/forum');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post').addEventListener('submit', editHandler);