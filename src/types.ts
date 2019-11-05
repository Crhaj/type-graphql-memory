export type Nullable<T> = T | null

export type Maybe<T> = Nullable<T> | undefined

export type InternalResponseType = {
    country: Maybe<string>,
    indicator: Maybe<string>,
    value: Maybe<number>,
    year: Maybe<number>,
}
