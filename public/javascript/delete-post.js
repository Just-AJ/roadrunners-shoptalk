
  document.querySelectorAll(`[id^="delete-link-"]`).forEach(button => {
    console.log(button)
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      // console.log(event)
    
      const id = event.currentTarget.getAttribute("data-post-id")
      // console.log(id);
      
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
    
      if (response.ok) {
        document.location.replace('/forum');
      } else {
        alert(response.statusText);
      }
    });
  });

  // async function deletePostHandler(event) {
  //   event.preventDefault();
  
  //   const id = event.currentTarget.getAttribute("data-post-id")
  //   console.log(id);

  //   const response = await fetch(`/api/posts/${id}`, {
  //     method: 'DELETE'
  //   });
  
  //   if (response.ok) {
  //     document.location.replace('/forum');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
  
  // document.querySelector('[id^="delete-link-"]').addEventListener('click', deletePostHandler);
  

  async function deleteHandler(event) {
    event.preventDefault();

 
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/forum/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete').addEventListener('click', deleteHandler);



async function deleteCommentHandler(event) {
  event.preventDefault();


  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
  });

  if (response.ok) {
      document.location.replace('/forum/');
  } else {
      alert(response.statusText);
  }
}

document.querySelector('#delete-comment').addEventListener('click', deleteCommentHandler);