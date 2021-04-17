const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User { 
        _id: ID!
        username: String!
        password: String!
    }

    type ChatRoom {
        _id: ID!
        roomName: String!,
        password: String!,
        users: [User]
    }

    type Query {
        getUsers: [User]
        getChatRooms: [ChatRoom]
    }

    type Mutation {
        createNewUser(username: String!, password: String!): User
        createChatRoom(roomName: String!, password: String!): ChatRoom
        joinChatRoom(roomId: ID!, username: String): ChatRoom
    }
`;

module.exports = typeDefs;