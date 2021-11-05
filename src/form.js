const guestCount = document.getElementById("guests");
const roomType = document.getElementById("room-type");
const smallRoom = {
    name: "small",
    price: 5000
};
const mediumRoom = {
    name: "medium",
    price: 10000
};
const largeRoom = {
    name: "large",
    price: 20000
};


function handleForm() {
    if (roomType.value === "Small")
        alert(smallRoom.price * guestCount.value + " Ft a fizetendo.");
    else if (roomType.value === "Medium")
        alert(mediumRoom.price * guestCount.value + " Ft a fizetendo.");
    else
        alert(largeRoom.price * guestCount.value + " Ft a fizetendo.");

}