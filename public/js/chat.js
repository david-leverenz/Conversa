const socket = io();

const userlist = document.getElementById("active_users_list");
const roomlist = document.getElementById("active_rooms_list");
const message = document.getElementById("messageInput");
const sendMessageBtn = document.getElementById("send_message_btn");
const roomInput = document.getElementById("roomInput");
const createRoomBtn = document.getElementById("room_add_icon_holder");
const chatHead = document.getElementById("chatHead");
const chatDisplay = document.getElementById("chat");

let currentRoom = "global";
let myUsername = "";



// Prompt for username on connecting to server
socket.on("connect", function () {
    const response = fetch('/api/session', {
        method: 'GET',
    }).then((res) => res.json())
        .then((response) => {

            socket.emit("createUser", response);
        });

});

// Send message on button click
sendMessageBtn.addEventListener("click", function () {
    socket.emit("sendMessage", message.value);
    message.value = "";
});

// Send message on enter key press
message.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        sendMessageBtn.click();
    }
});

// Create new room on button click
createRoomBtn.addEventListener("click", function () {
    // socket.emit("createRoom", prompt("Enter new room: "));
    let roomName = roomInput.value.trim();
    if (roomName !== "") {
        socket.emit("createRoom", roomName);
        roomInput.value = "";
    }
});

// Update chat on new message
socket.on("updateChat", function (username, data) {
    console.log(username + " = username");

    // Display announcement if username is INFO
    if (username === "INFO") {
        console.log("Displaying announcement");
        chatHead.innerHTML = `<strong>${data}</strong>`;
    } else {
        console.log("Displaying user message");
        chatDisplay.innerHTML += `<div class="message_holder ${username === myUsername ? "me" : ""}">
                                <div class="message_box">
                                  <div id="message" class="message">
                                    <span class="message_name">${username}</span>
                                    <span class="message_text">${data}</span>
                                  </div>
                                </div>
                              </div>`;
    }

    chatDisplay.scrollTop = chatDisplay.scrollHeight;
});

// Update user list on new user connection/disconnection
socket.on("updateUsers", function (usernames) {
    userlist.innerHTML = "";
    console.log("usernames returned from server", usernames);
    for (let user in usernames) {
        userlist.innerHTML += `<div class="user_card">
                              <span>${user}</span>
                            </div>`;
    }
});

socket.on("updateRooms", function (rooms, newRoom) {
    roomlist.innerHTML = "";

    for (let index in rooms) {
        roomlist.innerHTML += `<div class="room_card" id="${rooms[index].name}"
                                onclick="changeRoom('${rooms[index].name}')">
                                <div class="room_item_content">
                                    <div class="roomInfo">
                                    <span class="room_name">#${rooms[index].name}</span>
                                    <span class="room_author">${rooms[index].creator}</span>
                                    </div>
                                </div>
                            </div>`;
    }

    document.getElementById(currentRoom).classList.add("active_item");
});

function changeRoom(room) {
    if (room != currentRoom) {
        socket.emit("updateRooms", room);
        document.getElementById(currentRoom).classList.remove("active_item");
        currentRoom = room;
        document.getElementById(currentRoom).classList.add("active_item");
    }
}
