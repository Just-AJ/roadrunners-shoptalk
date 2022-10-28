async function newPostHandler(event) {
    event.preventDefault();
    // console.log('submitting post');

    const title = document.querySelector('#forum-post-title').value;
    const copy = document.querySelector('#post-input').value;
    console.log(title, copy);
    const response = await fetch('/api/posts', {
      method: 'POST',
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
  
  document.querySelector('#main-post-modal').addEventListener('submit', newPostHandler);
  