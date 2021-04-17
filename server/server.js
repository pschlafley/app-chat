const express = require('express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schema');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer(
    { typeDefs, resolvers }
);

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
        console.log(`User Graphql at http://localhost:${PORT}${server.graphqlPath}`);
        console.log(`Subscriptions ready at ws://localhost${PORT}${server.subscriptionsPath}`);
    });
});