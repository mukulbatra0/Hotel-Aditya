let items = [
  {
    img: "/Images/MyPhoto.jpg",
    name: "Shubham Sangwan",
    para: `Full-Stack Developer`,
    instaId: "https://www.instagram.com/shubham.sngwn?igsh=MTh6MGFmMmJkemU5",
    linkedinId: "https://linkedin.com/in/shubham-sangwan-9ab1a9263"
  },

  {
    img: "/Images/mukul.jpg",
    name: "Mukul Batra",
    para: `Database Engineer`,
    instaId: "https://www.instagram.com/mukulbatra0?igsh=aXBzMHUxZGQ0dGln",
    linkedinId: "https://www.linkedin.com/in/mukul-batra-aba4b4249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },

  {
    img: "/Images/vishal.jpg",
    name: "Vishal",
    para: `Front-End Developer`,
    instaId: "https://www.instagram.com/vishal_sindhwani_?igsh=MTF5N2dydGN6OTYydg==",
    linkedinId: "https://www.linkedin.com/in/vishal-sindhwani-2911b9191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },

  {
    img: "/Images/girvit.jpg",
    name: "Girvit Sharma",
    para: `Front-End Developer`,
    instaId: "https://www.instagram.com/girvit.sharma?igsh=NWc4eWlnZXNwem1v",
    linkedinId: "https://www.linkedin.com/in/girvit-sharma-504613271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];



displayItemsOnHomepage();


function displayItemsOnHomepage() {
  let itemscontainer = document.querySelector(".wrapper");
  let innerHTML = "";

  items.forEach((item) => {
    innerHTML += `
    <div class="wrapper">
      <div class="text-box">
        <img src="${item.img}" alt="" />
        <h4>${item.name}</h4>
        <p>${item.para}</p>
        <div class="links">
          <a class="fa-brands fa-instagram"
            href=${item.instaId}></a>
          <a class="fa-brands fa-linkedin"
            href=${item.linkedinId}></a>
        </div>
      </div>
    </div>`;
  });
  itemscontainer.innerHTML = innerHTML;
}

function handleBackToHome() {
  window.open("home.html","_self");
}