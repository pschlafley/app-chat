const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ChatRoomSchema = new Schema({
    roomName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    users: {
        type: Schema.Types.Array,
        refs: 'User'
    }
});

const ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);

module.exports = ChatRoom;