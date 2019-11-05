import { map } from "ramda"
import { InternalResponseType } from "../types"
import { Context } from "../context"

export const exampleResolver = async (source, args, ctx: Context): Promise<InternalResponseType[]> => {
    try {
        const data: InternalResponseType[] = await ctx.getExampleData()
        return map(row => ({
            country: row["Country"],
            indicator: row["Indicator"],
            value: row["Value"],
            year: row["Year"],
        }), data)
    } catch (err) {
        console.log("Error in ExampleResolver: ", err)
        throw new Error()
    }
}
