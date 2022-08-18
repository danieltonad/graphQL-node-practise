const { gql } = require("apollo-server");

const typeDefs = gql`   

    type Location{
        street: String!
        city: String!
        state: String!
        postcode: Int!
    }
    
    type User{
    email: String!
    gender: String!
    phone_number: String!
    id: ID!
    location: Location!
    password: String!
    title: String!
    first_name: String!
    last_name: String!
    username: String!
    picture: String!
    }

    type Query {
    users: [User!]!
    user(id: ID!) : User
    }
`;

module.exports = {typeDefs}