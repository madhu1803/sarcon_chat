function ToggleChatRoom(chatroom_id, chat_id) {
    $("#" + chatroom_id).click(function () {
        $("#" + chat_id).toggleClass("d-none");
    });
}