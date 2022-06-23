document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => allUsers(json));

  let addUser = "";

  function allUsers(listing) {
      console.log(listing.users);
      const user = listing.users;
      
      for (let i = 0; i < user.length; i++) {
        // let imageApi = `${user[i].image}`;
        // let imagePng = imageApi.slice(0, imageApi.length-20);
        // console.log(imagePng);
        addUser += `<div class="userID">
        <div class="userImg">
        <a href="./user.html?userId=${user[i].id}"><img src="${user[i].image}"></a>
        </div>
        <div class="userInfo">
        <h3 class="name">${user[i].firstName} ${user[i].maidenName} ${user[i].lastName}</h3>
        <p class="address">Lives in ${user[i].address.city}, ${user[i].address.state} · Age: ${user[i].age} · ${user[i].gender}</p>
        </div>
        </div>`;
      }
      document.getElementById("allUsers").innerHTML = addUser;
  }
});

let modal = document.getElementById('modal-content'),
openModal = document.getElementById('modal-open'),
closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', function(){
  modal.style.display = 'block';
})
closeModal.addEventListener('click', function(){
  modal.style.display = 'none';
})