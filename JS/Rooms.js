let items = [
  {
    room_img: "/Images/hotel1.jpeg",
    room_name: "Standard Room",
    rupee: "Rs.699",
    p_description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
    exercitationem corporis incidunt blanditiis vero odio consequuntur`,
  },
  {
    room_img: "/Images/hotel2.jpeg",
    room_name: "Double Room",
    rupee: "Rs.899",
    p_description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
    exercitationem corporis incidunt blanditiis vero odio consequuntur`,
  },
  {
    room_img: "/Images/hotel3.jpeg",
    room_name: "Junior Suite",
    rupee: "Rs.1099",
    p_description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
    exercitationem corporis incidunt blanditiis vero odio consequuntur`,
  },
  {
    room_img: "/Images/hotel4.jpeg",
    room_name: "Deluxe Suite",
    rupee: "Rs.1599",
    p_description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
    exercitationem corporis incidunt blanditiis vero odio consequuntur`,
  },
];

generateRoomsSection();

function generateRoomsSection() {
  let itemsContainerElement = document.querySelector(".rooms-container");
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `
    <div class="rooms">
        <div class="room">
          <img src=${item.room_img} alt="" />
        </div>
        <div class="room-details">
          <p>
            <b>${item.room_name}</b><small>From</small><span>${item.rupee}</span
            ><small>/night</small>
          </p>
          <p>${item.p_description}</p>
          <div class="imgs">
            <i class="fa-solid fa-tv fa-2x"></i>
            <i class="fa-solid fa-wifi fa-2x"></i>
            <i class="fa-solid fa-location-dot fa-2x"></i>
            <i class="fa-solid fa-person-swimming fa-2x"></i>
          </div>
          <div class="btn">
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}

function handleMainPage() {
  window.open("Main.html","_self");
}