document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    const userId = urlParams.get("userId");
    console.log(userId);
    fetch(`https://dummyjson.com/users/${userId}`)
    .then((response) => response.json())
    .then((json) => addUser(json));


  function addUser(users) {
console.log(users.image);
// let imageApi = `${users.image}`;
// let imagePng = imageApi.slice(0, imageApi.length-20);
// console.log(imagePng);
      document.getElementById('user').innerHTML += `<div class="user">
      <img src="${users.image}">
      <h1>${users.firstName} ${users.maidenName} ${users.lastName}</h1>

      </div>
      <div class="userInfo">
      <div class="basicInfo">
      <p><i class="fa-solid fa-house icons"></i> Lives in ${users.address.city}, ${users.address.state}</p>
      <p><i class="fa-solid fa-at icons"></i> <a href="mailto:${users.email}">${users.email}</a></p>
      <p><i class="fa-solid fa-mobile icons"></i> ${users.phone}</p>
      <p><i class="fa-solid fa-laptop-code icons"></i> <a href="http://${users.domain}" target="_blank">${users.domain}</a></p>
      <p><i class="fa-solid fa-graduation-cap icons"></i> ${users.university}</p>
      </div>
      <div class="Characteristics">
      <p><strong>Date of Birth:</strong> ${users.birthDate}</p>
      <p><strong>Blood Type:</strong> ${users.bloodGroup}</p>
      <p><strong>Height:</strong> ${users.height} cm</p>
      <p><strong>Weight:</strong> ${users.weight} kg</p>
      <p><strong>Eye Color:</strong> ${users.eyeColor} | <strong>Hair:</strong> ${users.hair.type}, ${users.hair.color}</p>
      </div>
      </div>`;
    
}

});