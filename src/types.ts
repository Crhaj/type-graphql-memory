import { Field, Float, Int, ObjectType } from "type-graphql"

export type Nullable<T> = T | null

export type Maybe<T> = Nullable<T> | undefined

export type InternalResponseType = {
    country: Maybe<string>,
    indicator: Maybe<string>,
    value: Maybe<number>,
    year: Maybe<number>,
}

@ObjectType()
export class ExampleResolverResponse {
    @Field(type => String)
    country?: Maybe<string>

    @Field(type => String)
    indicator?: Maybe<string>

    @Field(type => Float)
    value?: Maybe<number>

    @Field(type => Int)
    year?: Maybe<number>
}
