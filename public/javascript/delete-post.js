
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
  