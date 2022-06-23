document.addEventListener("DOMContentLoaded", () => {
fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: '',
      lastName: '',
      age: '',
      /* other user data */
    })
  })
  .then(res => res.json())
  .then(console.log);

});