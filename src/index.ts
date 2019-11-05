import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server-express"
import { ExampleResolver } from "./resolvers/ExampleResolver"
import { contextFunction } from "./context"

const bootstrap = (async () => {
    const port = process.env.PORT || 4010

    let server
    try {
        const schema = await buildSchema({
            resolvers: [ExampleResolver],
            nullableByDefault: true,
        })

        server = new ApolloServer({
            schema: schema,
            context: contextFunction,
        })
    } catch (error) {
        console.log("Error in bootstrap", error)
    }

    const app = express()
    app.use(cors({ origin: "*", credentials: true }))
    app.use(bodyParser.json({ limit: "4mb" }))

    server.applyMiddleware({ app: app, path: "/" })

    app.listen({ port: port }, () => {
        console.log(`GraphQL ready at port ${port}`)
    })
})()
