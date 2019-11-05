import { map } from "ramda"
import { Ctx, Query, Resolver } from "type-graphql"
import { ExampleResolverResponse, InternalResponseType } from "../types"
import { Context } from "../context"

@Resolver()
export class ExampleResolver {
    @Query(returns => [ExampleResolverResponse])
    async exampleData(@Ctx() ctx: Context) {
        try {
            const data: InternalResponseType[] = await ctx.getExampleData()
            return map(row => ({
                country: row["Country"],
                indicator: row["Indicator"],
                value: row["Value"],
                year: row["Year"],
            }), data)
        } catch (err) {
            console.log("Error in ExampleResolver -> exampleData: ", err)
            throw new Error()
        }
    }
}
