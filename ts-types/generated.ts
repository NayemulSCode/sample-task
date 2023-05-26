export declare type Maybe<T> = T | null;

export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
    DateTime: any;
    /**
     * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
     * as they may not be parsed correctly on the server side. Use `String` literals if you are
     * dealing with really large numbers to be on the safe side.
     */
    Mixed: any;
    Upload: any;
    /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
    Date: any;
    /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
    DateTimeTz: any;
    Array: Array<any>;
};
export declare type Rating={
    rate: Scalars["Float"];
    count:Scalars["Int"]
}
export declare type Product = {
    id: Scalars["ID"];
    title: Scalars["String"];
    price: Scalars["Float"];
    description: Scalars["String"];
    category: Scalars["String"];
    image: Scalars["String"];
    rating: Maybe<Rating>;
};
export declare type Category ={
    name: Scalars['String']
}
