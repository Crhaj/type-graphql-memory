import { InternalResponseType } from "./types"
import axios from "axios"


export type Context = {
    getExampleData: () => Promise<InternalResponseType[]>,
}

export const contextFunction = (): Context => {
    try {
        return {
            getExampleData: () => {
                console.log("Fetch started.", { at: new Date().toISOString() })

                return axios.request({
                    method: "GET",
                    baseURL: "https://pkgstore.datahub.io/datahq/1mb-test/1mb-test_json/data/ca5fd34861cc68b4f519b1c1e15c510e/1mb-test_json.json",
                })
                .then(response => {
                    console.log("Fetch finished.", { at: new Date().toISOString() })
                    return response.data
                })
            }
        }
    } catch (err) {
        console.log("Error in context function: ", err)
        throw err
    }

}
