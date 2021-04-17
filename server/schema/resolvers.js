const { User, ChatRoom } = require('../models');

const resolvers = {
    Query: {
        getUsers: async () => {
            return await User.find();
        },
        getChatRooms: async () => {
            return await ChatRoom.find();
        }
    },

    Mutation: {
        createNewUser: async (parent, args) => {
            return await User.create(args);
        },
        createChatRoom: async (parent, args) => {
            return await ChatRoom.create(args);
        },
        joinChatRoom: async (parent, { roomId, username }) => {
            console.log(username);
            return await ChatRoom.findByIdAndUpdate(
                { _id: roomId },
                { $push: { users: { username: username } } },
                { new: true }
            )
        }
    }
};

module.exports = resolvers;