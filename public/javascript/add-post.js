async function newPostHandler(event) {
    event.preventDefault();
    // console.log('submitting post');

    const title = document.querySelector('input[name="post-title"]').value;
    const copy = document.querySelector('textarea[name="post-text"]').value;
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
  