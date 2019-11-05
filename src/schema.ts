import { gql } from "apollo-server-express"

export const typeDefs = gql`
    type Query {
        exampleData: [InternalResponseType]
    }
    
    type InternalResponseType {
        country: String
        indicator: String
        value: Float
        year: Int
    }
`
