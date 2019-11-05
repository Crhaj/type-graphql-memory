import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import { ApolloServer } from "apollo-server-express"
import { exampleResolver } from "./resolvers/ExampleResolver"
import { contextFunction } from "./context"
import { typeDefs } from "./schema"

const port = process.env.PORT || 4010

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: {
        Query: {
            exampleData: exampleResolver,
        },
    },
    context: contextFunction,
})

const app = express()
app.use(cors({ origin: "*", credentials: true }))
app.use(bodyParser.json({ limit: "4mb" }))

server.applyMiddleware({ app: app, path: "/" })

app.listen({ port: port }, () => {
    console.log(`GraphQL ready at port ${port}`)
})
