function ToggleChatRoom(chatroom_id, chat_id) {
    $("#" + chatroom_id).click(function () {
        $("#" + chat_id).toggleClass("d-none");
    });
}

// openchat
function openChat() {

    $('.left-box').css("display", "none");
    $('.right-box').css("display", "none");
    $('.middle-box').css("display", "block");

}

// closechat
function closeChat() {

    $('.middle-box').css("display", "none");
    $('.right-box').css("display", "none");
    $('.left-box').css("display", "block");

}

// display online users
function displayOnlineUsers() {

    $('.left-box').css("display", "none");
    $('.middle-box').css("display", "none");
    $('.right-box').css("display", "block");
}