
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Fighter
 * 
 */
export type Fighter = $Result.DefaultSelection<Prisma.$FighterPayload>
/**
 * Model Gym
 * 
 */
export type Gym = $Result.DefaultSelection<Prisma.$GymPayload>
/**
 * Model WeightClass
 * 
 */
export type WeightClass = $Result.DefaultSelection<Prisma.$WeightClassPayload>
/**
 * Model FightingStyle
 * 
 */
export type FightingStyle = $Result.DefaultSelection<Prisma.$FightingStylePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Fight
 * 
 */
export type Fight = $Result.DefaultSelection<Prisma.$FightPayload>
/**
 * Model NewsItem
 * 
 */
export type NewsItem = $Result.DefaultSelection<Prisma.$NewsItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  User: 'User'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fighter`: Exposes CRUD operations for the **Fighter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fighters
    * const fighters = await prisma.fighter.findMany()
    * ```
    */
  get fighter(): Prisma.FighterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gym`: Exposes CRUD operations for the **Gym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gyms
    * const gyms = await prisma.gym.findMany()
    * ```
    */
  get gym(): Prisma.GymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weightClass`: Exposes CRUD operations for the **WeightClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeightClasses
    * const weightClasses = await prisma.weightClass.findMany()
    * ```
    */
  get weightClass(): Prisma.WeightClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fightingStyle`: Exposes CRUD operations for the **FightingStyle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FightingStyles
    * const fightingStyles = await prisma.fightingStyle.findMany()
    * ```
    */
  get fightingStyle(): Prisma.FightingStyleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fight`: Exposes CRUD operations for the **Fight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fights
    * const fights = await prisma.fight.findMany()
    * ```
    */
  get fight(): Prisma.FightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsItem`: Exposes CRUD operations for the **NewsItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsItems
    * const newsItems = await prisma.newsItem.findMany()
    * ```
    */
  get newsItem(): Prisma.NewsItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Fighter: 'Fighter',
    Gym: 'Gym',
    WeightClass: 'WeightClass',
    FightingStyle: 'FightingStyle',
    Event: 'Event',
    Fight: 'Fight',
    NewsItem: 'NewsItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "fighter" | "gym" | "weightClass" | "fightingStyle" | "event" | "fight" | "newsItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Fighter: {
        payload: Prisma.$FighterPayload<ExtArgs>
        fields: Prisma.FighterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FighterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FighterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>
          }
          findFirst: {
            args: Prisma.FighterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FighterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>
          }
          findMany: {
            args: Prisma.FighterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>[]
          }
          create: {
            args: Prisma.FighterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>
          }
          createMany: {
            args: Prisma.FighterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FighterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>[]
          }
          delete: {
            args: Prisma.FighterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>
          }
          update: {
            args: Prisma.FighterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>
          }
          deleteMany: {
            args: Prisma.FighterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FighterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FighterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>[]
          }
          upsert: {
            args: Prisma.FighterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>
          }
          aggregate: {
            args: Prisma.FighterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFighter>
          }
          groupBy: {
            args: Prisma.FighterGroupByArgs<ExtArgs>
            result: $Utils.Optional<FighterGroupByOutputType>[]
          }
          count: {
            args: Prisma.FighterCountArgs<ExtArgs>
            result: $Utils.Optional<FighterCountAggregateOutputType> | number
          }
        }
      }
      Gym: {
        payload: Prisma.$GymPayload<ExtArgs>
        fields: Prisma.GymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findFirst: {
            args: Prisma.GymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findMany: {
            args: Prisma.GymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          create: {
            args: Prisma.GymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          createMany: {
            args: Prisma.GymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          delete: {
            args: Prisma.GymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          update: {
            args: Prisma.GymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          deleteMany: {
            args: Prisma.GymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          upsert: {
            args: Prisma.GymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          aggregate: {
            args: Prisma.GymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGym>
          }
          groupBy: {
            args: Prisma.GymGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymCountArgs<ExtArgs>
            result: $Utils.Optional<GymCountAggregateOutputType> | number
          }
        }
      }
      WeightClass: {
        payload: Prisma.$WeightClassPayload<ExtArgs>
        fields: Prisma.WeightClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeightClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeightClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload>
          }
          findFirst: {
            args: Prisma.WeightClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeightClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload>
          }
          findMany: {
            args: Prisma.WeightClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload>[]
          }
          create: {
            args: Prisma.WeightClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload>
          }
          createMany: {
            args: Prisma.WeightClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeightClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload>[]
          }
          delete: {
            args: Prisma.WeightClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload>
          }
          update: {
            args: Prisma.WeightClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload>
          }
          deleteMany: {
            args: Prisma.WeightClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeightClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeightClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload>[]
          }
          upsert: {
            args: Prisma.WeightClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightClassPayload>
          }
          aggregate: {
            args: Prisma.WeightClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeightClass>
          }
          groupBy: {
            args: Prisma.WeightClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeightClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeightClassCountArgs<ExtArgs>
            result: $Utils.Optional<WeightClassCountAggregateOutputType> | number
          }
        }
      }
      FightingStyle: {
        payload: Prisma.$FightingStylePayload<ExtArgs>
        fields: Prisma.FightingStyleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FightingStyleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FightingStyleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload>
          }
          findFirst: {
            args: Prisma.FightingStyleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FightingStyleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload>
          }
          findMany: {
            args: Prisma.FightingStyleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload>[]
          }
          create: {
            args: Prisma.FightingStyleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload>
          }
          createMany: {
            args: Prisma.FightingStyleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FightingStyleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload>[]
          }
          delete: {
            args: Prisma.FightingStyleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload>
          }
          update: {
            args: Prisma.FightingStyleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload>
          }
          deleteMany: {
            args: Prisma.FightingStyleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FightingStyleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FightingStyleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload>[]
          }
          upsert: {
            args: Prisma.FightingStyleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightingStylePayload>
          }
          aggregate: {
            args: Prisma.FightingStyleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFightingStyle>
          }
          groupBy: {
            args: Prisma.FightingStyleGroupByArgs<ExtArgs>
            result: $Utils.Optional<FightingStyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.FightingStyleCountArgs<ExtArgs>
            result: $Utils.Optional<FightingStyleCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Fight: {
        payload: Prisma.$FightPayload<ExtArgs>
        fields: Prisma.FightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          findFirst: {
            args: Prisma.FightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          findMany: {
            args: Prisma.FightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>[]
          }
          create: {
            args: Prisma.FightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          createMany: {
            args: Prisma.FightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>[]
          }
          delete: {
            args: Prisma.FightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          update: {
            args: Prisma.FightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          deleteMany: {
            args: Prisma.FightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>[]
          }
          upsert: {
            args: Prisma.FightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          aggregate: {
            args: Prisma.FightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFight>
          }
          groupBy: {
            args: Prisma.FightGroupByArgs<ExtArgs>
            result: $Utils.Optional<FightGroupByOutputType>[]
          }
          count: {
            args: Prisma.FightCountArgs<ExtArgs>
            result: $Utils.Optional<FightCountAggregateOutputType> | number
          }
        }
      }
      NewsItem: {
        payload: Prisma.$NewsItemPayload<ExtArgs>
        fields: Prisma.NewsItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          findFirst: {
            args: Prisma.NewsItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          findMany: {
            args: Prisma.NewsItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>[]
          }
          create: {
            args: Prisma.NewsItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          createMany: {
            args: Prisma.NewsItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>[]
          }
          delete: {
            args: Prisma.NewsItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          update: {
            args: Prisma.NewsItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          deleteMany: {
            args: Prisma.NewsItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>[]
          }
          upsert: {
            args: Prisma.NewsItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          aggregate: {
            args: Prisma.NewsItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsItem>
          }
          groupBy: {
            args: Prisma.NewsItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsItemCountArgs<ExtArgs>
            result: $Utils.Optional<NewsItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    fighter?: FighterOmit
    gym?: GymOmit
    weightClass?: WeightClassOmit
    fightingStyle?: FightingStyleOmit
    event?: EventOmit
    fight?: FightOmit
    newsItem?: NewsItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    trackedFighters: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    trackedFighters?: boolean | UserCountOutputTypeCountTrackedFightersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrackedFightersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FighterWhereInput
  }


  /**
   * Count Type FighterCountOutputType
   */

  export type FighterCountOutputType = {
    styles: number
    fightsA: number
    fightsB: number
    trackedByUsers: number
  }

  export type FighterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    styles?: boolean | FighterCountOutputTypeCountStylesArgs
    fightsA?: boolean | FighterCountOutputTypeCountFightsAArgs
    fightsB?: boolean | FighterCountOutputTypeCountFightsBArgs
    trackedByUsers?: boolean | FighterCountOutputTypeCountTrackedByUsersArgs
  }

  // Custom InputTypes
  /**
   * FighterCountOutputType without action
   */
  export type FighterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FighterCountOutputType
     */
    select?: FighterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FighterCountOutputType without action
   */
  export type FighterCountOutputTypeCountStylesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightingStyleWhereInput
  }

  /**
   * FighterCountOutputType without action
   */
  export type FighterCountOutputTypeCountFightsAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightWhereInput
  }

  /**
   * FighterCountOutputType without action
   */
  export type FighterCountOutputTypeCountFightsBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightWhereInput
  }

  /**
   * FighterCountOutputType without action
   */
  export type FighterCountOutputTypeCountTrackedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type GymCountOutputType
   */

  export type GymCountOutputType = {
    fighters: number
  }

  export type GymCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fighters?: boolean | GymCountOutputTypeCountFightersArgs
  }

  // Custom InputTypes
  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymCountOutputType
     */
    select?: GymCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountFightersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FighterWhereInput
  }


  /**
   * Count Type WeightClassCountOutputType
   */

  export type WeightClassCountOutputType = {
    fighters: number
  }

  export type WeightClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fighters?: boolean | WeightClassCountOutputTypeCountFightersArgs
  }

  // Custom InputTypes
  /**
   * WeightClassCountOutputType without action
   */
  export type WeightClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClassCountOutputType
     */
    select?: WeightClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeightClassCountOutputType without action
   */
  export type WeightClassCountOutputTypeCountFightersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FighterWhereInput
  }


  /**
   * Count Type FightingStyleCountOutputType
   */

  export type FightingStyleCountOutputType = {
    fighters: number
  }

  export type FightingStyleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fighters?: boolean | FightingStyleCountOutputTypeCountFightersArgs
  }

  // Custom InputTypes
  /**
   * FightingStyleCountOutputType without action
   */
  export type FightingStyleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyleCountOutputType
     */
    select?: FightingStyleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FightingStyleCountOutputType without action
   */
  export type FightingStyleCountOutputTypeCountFightersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FighterWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    fights: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fights?: boolean | EventCountOutputTypeCountFightsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountFightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    username: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    role?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    trackedFighters?: boolean | User$trackedFightersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    trackedFighters?: boolean | User$trackedFightersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      trackedFighters: Prisma.$FighterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      username: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trackedFighters<T extends User$trackedFightersArgs<ExtArgs> = {}>(args?: Subset<T, User$trackedFightersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.trackedFighters
   */
  export type User$trackedFightersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    where?: FighterWhereInput
    orderBy?: FighterOrderByWithRelationInput | FighterOrderByWithRelationInput[]
    cursor?: FighterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    activeFrom: Date | null
    activeUntil: Date | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    activeFrom: Date | null
    activeUntil: Date | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    activeFrom: number
    activeUntil: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    activeFrom?: true
    activeUntil?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    activeFrom?: true
    activeUntil?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    activeFrom?: true
    activeUntil?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    activeFrom: Date
    activeUntil: Date
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activeFrom?: boolean
    activeUntil?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activeFrom?: boolean
    activeUntil?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activeFrom?: boolean
    activeUntil?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    activeFrom?: boolean
    activeUntil?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activeFrom" | "activeUntil" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      activeFrom: Date
      activeUntil: Date
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly activeFrom: FieldRef<"Session", 'DateTime'>
    readonly activeUntil: FieldRef<"Session", 'DateTime'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Fighter
   */

  export type AggregateFighter = {
    _count: FighterCountAggregateOutputType | null
    _avg: FighterAvgAggregateOutputType | null
    _sum: FighterSumAggregateOutputType | null
    _min: FighterMinAggregateOutputType | null
    _max: FighterMaxAggregateOutputType | null
  }

  export type FighterAvgAggregateOutputType = {
    wins: number | null
    losses: number | null
    draws: number | null
    heightCm: number | null
    reachCm: number | null
  }

  export type FighterSumAggregateOutputType = {
    wins: number | null
    losses: number | null
    draws: number | null
    heightCm: number | null
    reachCm: number | null
  }

  export type FighterMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    nickname: string | null
    wins: number | null
    losses: number | null
    draws: number | null
    heightCm: number | null
    reachCm: number | null
    dob: Date | null
    bio: string | null
    imageUrl: string | null
    weightClassId: string | null
    gymId: string | null
  }

  export type FighterMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    nickname: string | null
    wins: number | null
    losses: number | null
    draws: number | null
    heightCm: number | null
    reachCm: number | null
    dob: Date | null
    bio: string | null
    imageUrl: string | null
    weightClassId: string | null
    gymId: string | null
  }

  export type FighterCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    nickname: number
    wins: number
    losses: number
    draws: number
    heightCm: number
    reachCm: number
    dob: number
    bio: number
    imageUrl: number
    weightClassId: number
    gymId: number
    _all: number
  }


  export type FighterAvgAggregateInputType = {
    wins?: true
    losses?: true
    draws?: true
    heightCm?: true
    reachCm?: true
  }

  export type FighterSumAggregateInputType = {
    wins?: true
    losses?: true
    draws?: true
    heightCm?: true
    reachCm?: true
  }

  export type FighterMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    wins?: true
    losses?: true
    draws?: true
    heightCm?: true
    reachCm?: true
    dob?: true
    bio?: true
    imageUrl?: true
    weightClassId?: true
    gymId?: true
  }

  export type FighterMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    wins?: true
    losses?: true
    draws?: true
    heightCm?: true
    reachCm?: true
    dob?: true
    bio?: true
    imageUrl?: true
    weightClassId?: true
    gymId?: true
  }

  export type FighterCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    wins?: true
    losses?: true
    draws?: true
    heightCm?: true
    reachCm?: true
    dob?: true
    bio?: true
    imageUrl?: true
    weightClassId?: true
    gymId?: true
    _all?: true
  }

  export type FighterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fighter to aggregate.
     */
    where?: FighterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fighters to fetch.
     */
    orderBy?: FighterOrderByWithRelationInput | FighterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FighterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fighters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fighters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fighters
    **/
    _count?: true | FighterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FighterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FighterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FighterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FighterMaxAggregateInputType
  }

  export type GetFighterAggregateType<T extends FighterAggregateArgs> = {
        [P in keyof T & keyof AggregateFighter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFighter[P]>
      : GetScalarType<T[P], AggregateFighter[P]>
  }




  export type FighterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FighterWhereInput
    orderBy?: FighterOrderByWithAggregationInput | FighterOrderByWithAggregationInput[]
    by: FighterScalarFieldEnum[] | FighterScalarFieldEnum
    having?: FighterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FighterCountAggregateInputType | true
    _avg?: FighterAvgAggregateInputType
    _sum?: FighterSumAggregateInputType
    _min?: FighterMinAggregateInputType
    _max?: FighterMaxAggregateInputType
  }

  export type FighterGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    nickname: string | null
    wins: number
    losses: number
    draws: number
    heightCm: number
    reachCm: number
    dob: Date
    bio: string | null
    imageUrl: string
    weightClassId: string | null
    gymId: string | null
    _count: FighterCountAggregateOutputType | null
    _avg: FighterAvgAggregateOutputType | null
    _sum: FighterSumAggregateOutputType | null
    _min: FighterMinAggregateOutputType | null
    _max: FighterMaxAggregateOutputType | null
  }

  type GetFighterGroupByPayload<T extends FighterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FighterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FighterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FighterGroupByOutputType[P]>
            : GetScalarType<T[P], FighterGroupByOutputType[P]>
        }
      >
    >


  export type FighterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    heightCm?: boolean
    reachCm?: boolean
    dob?: boolean
    bio?: boolean
    imageUrl?: boolean
    weightClassId?: boolean
    gymId?: boolean
    weightClass?: boolean | Fighter$weightClassArgs<ExtArgs>
    gym?: boolean | Fighter$gymArgs<ExtArgs>
    styles?: boolean | Fighter$stylesArgs<ExtArgs>
    fightsA?: boolean | Fighter$fightsAArgs<ExtArgs>
    fightsB?: boolean | Fighter$fightsBArgs<ExtArgs>
    trackedByUsers?: boolean | Fighter$trackedByUsersArgs<ExtArgs>
    _count?: boolean | FighterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fighter"]>

  export type FighterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    heightCm?: boolean
    reachCm?: boolean
    dob?: boolean
    bio?: boolean
    imageUrl?: boolean
    weightClassId?: boolean
    gymId?: boolean
    weightClass?: boolean | Fighter$weightClassArgs<ExtArgs>
    gym?: boolean | Fighter$gymArgs<ExtArgs>
  }, ExtArgs["result"]["fighter"]>

  export type FighterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    heightCm?: boolean
    reachCm?: boolean
    dob?: boolean
    bio?: boolean
    imageUrl?: boolean
    weightClassId?: boolean
    gymId?: boolean
    weightClass?: boolean | Fighter$weightClassArgs<ExtArgs>
    gym?: boolean | Fighter$gymArgs<ExtArgs>
  }, ExtArgs["result"]["fighter"]>

  export type FighterSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    heightCm?: boolean
    reachCm?: boolean
    dob?: boolean
    bio?: boolean
    imageUrl?: boolean
    weightClassId?: boolean
    gymId?: boolean
  }

  export type FighterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "nickname" | "wins" | "losses" | "draws" | "heightCm" | "reachCm" | "dob" | "bio" | "imageUrl" | "weightClassId" | "gymId", ExtArgs["result"]["fighter"]>
  export type FighterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weightClass?: boolean | Fighter$weightClassArgs<ExtArgs>
    gym?: boolean | Fighter$gymArgs<ExtArgs>
    styles?: boolean | Fighter$stylesArgs<ExtArgs>
    fightsA?: boolean | Fighter$fightsAArgs<ExtArgs>
    fightsB?: boolean | Fighter$fightsBArgs<ExtArgs>
    trackedByUsers?: boolean | Fighter$trackedByUsersArgs<ExtArgs>
    _count?: boolean | FighterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FighterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weightClass?: boolean | Fighter$weightClassArgs<ExtArgs>
    gym?: boolean | Fighter$gymArgs<ExtArgs>
  }
  export type FighterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weightClass?: boolean | Fighter$weightClassArgs<ExtArgs>
    gym?: boolean | Fighter$gymArgs<ExtArgs>
  }

  export type $FighterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fighter"
    objects: {
      weightClass: Prisma.$WeightClassPayload<ExtArgs> | null
      gym: Prisma.$GymPayload<ExtArgs> | null
      styles: Prisma.$FightingStylePayload<ExtArgs>[]
      fightsA: Prisma.$FightPayload<ExtArgs>[]
      fightsB: Prisma.$FightPayload<ExtArgs>[]
      trackedByUsers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      nickname: string | null
      wins: number
      losses: number
      draws: number
      heightCm: number
      reachCm: number
      dob: Date
      bio: string | null
      imageUrl: string
      weightClassId: string | null
      gymId: string | null
    }, ExtArgs["result"]["fighter"]>
    composites: {}
  }

  type FighterGetPayload<S extends boolean | null | undefined | FighterDefaultArgs> = $Result.GetResult<Prisma.$FighterPayload, S>

  type FighterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FighterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FighterCountAggregateInputType | true
    }

  export interface FighterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fighter'], meta: { name: 'Fighter' } }
    /**
     * Find zero or one Fighter that matches the filter.
     * @param {FighterFindUniqueArgs} args - Arguments to find a Fighter
     * @example
     * // Get one Fighter
     * const fighter = await prisma.fighter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FighterFindUniqueArgs>(args: SelectSubset<T, FighterFindUniqueArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fighter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FighterFindUniqueOrThrowArgs} args - Arguments to find a Fighter
     * @example
     * // Get one Fighter
     * const fighter = await prisma.fighter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FighterFindUniqueOrThrowArgs>(args: SelectSubset<T, FighterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fighter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterFindFirstArgs} args - Arguments to find a Fighter
     * @example
     * // Get one Fighter
     * const fighter = await prisma.fighter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FighterFindFirstArgs>(args?: SelectSubset<T, FighterFindFirstArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fighter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterFindFirstOrThrowArgs} args - Arguments to find a Fighter
     * @example
     * // Get one Fighter
     * const fighter = await prisma.fighter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FighterFindFirstOrThrowArgs>(args?: SelectSubset<T, FighterFindFirstOrThrowArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fighters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fighters
     * const fighters = await prisma.fighter.findMany()
     * 
     * // Get first 10 Fighters
     * const fighters = await prisma.fighter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fighterWithIdOnly = await prisma.fighter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FighterFindManyArgs>(args?: SelectSubset<T, FighterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fighter.
     * @param {FighterCreateArgs} args - Arguments to create a Fighter.
     * @example
     * // Create one Fighter
     * const Fighter = await prisma.fighter.create({
     *   data: {
     *     // ... data to create a Fighter
     *   }
     * })
     * 
     */
    create<T extends FighterCreateArgs>(args: SelectSubset<T, FighterCreateArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fighters.
     * @param {FighterCreateManyArgs} args - Arguments to create many Fighters.
     * @example
     * // Create many Fighters
     * const fighter = await prisma.fighter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FighterCreateManyArgs>(args?: SelectSubset<T, FighterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fighters and returns the data saved in the database.
     * @param {FighterCreateManyAndReturnArgs} args - Arguments to create many Fighters.
     * @example
     * // Create many Fighters
     * const fighter = await prisma.fighter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fighters and only return the `id`
     * const fighterWithIdOnly = await prisma.fighter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FighterCreateManyAndReturnArgs>(args?: SelectSubset<T, FighterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fighter.
     * @param {FighterDeleteArgs} args - Arguments to delete one Fighter.
     * @example
     * // Delete one Fighter
     * const Fighter = await prisma.fighter.delete({
     *   where: {
     *     // ... filter to delete one Fighter
     *   }
     * })
     * 
     */
    delete<T extends FighterDeleteArgs>(args: SelectSubset<T, FighterDeleteArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fighter.
     * @param {FighterUpdateArgs} args - Arguments to update one Fighter.
     * @example
     * // Update one Fighter
     * const fighter = await prisma.fighter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FighterUpdateArgs>(args: SelectSubset<T, FighterUpdateArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fighters.
     * @param {FighterDeleteManyArgs} args - Arguments to filter Fighters to delete.
     * @example
     * // Delete a few Fighters
     * const { count } = await prisma.fighter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FighterDeleteManyArgs>(args?: SelectSubset<T, FighterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fighters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fighters
     * const fighter = await prisma.fighter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FighterUpdateManyArgs>(args: SelectSubset<T, FighterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fighters and returns the data updated in the database.
     * @param {FighterUpdateManyAndReturnArgs} args - Arguments to update many Fighters.
     * @example
     * // Update many Fighters
     * const fighter = await prisma.fighter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fighters and only return the `id`
     * const fighterWithIdOnly = await prisma.fighter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FighterUpdateManyAndReturnArgs>(args: SelectSubset<T, FighterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fighter.
     * @param {FighterUpsertArgs} args - Arguments to update or create a Fighter.
     * @example
     * // Update or create a Fighter
     * const fighter = await prisma.fighter.upsert({
     *   create: {
     *     // ... data to create a Fighter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fighter we want to update
     *   }
     * })
     */
    upsert<T extends FighterUpsertArgs>(args: SelectSubset<T, FighterUpsertArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fighters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterCountArgs} args - Arguments to filter Fighters to count.
     * @example
     * // Count the number of Fighters
     * const count = await prisma.fighter.count({
     *   where: {
     *     // ... the filter for the Fighters we want to count
     *   }
     * })
    **/
    count<T extends FighterCountArgs>(
      args?: Subset<T, FighterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FighterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fighter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FighterAggregateArgs>(args: Subset<T, FighterAggregateArgs>): Prisma.PrismaPromise<GetFighterAggregateType<T>>

    /**
     * Group by Fighter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FighterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FighterGroupByArgs['orderBy'] }
        : { orderBy?: FighterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FighterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFighterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fighter model
   */
  readonly fields: FighterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fighter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FighterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weightClass<T extends Fighter$weightClassArgs<ExtArgs> = {}>(args?: Subset<T, Fighter$weightClassArgs<ExtArgs>>): Prisma__WeightClassClient<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gym<T extends Fighter$gymArgs<ExtArgs> = {}>(args?: Subset<T, Fighter$gymArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    styles<T extends Fighter$stylesArgs<ExtArgs> = {}>(args?: Subset<T, Fighter$stylesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fightsA<T extends Fighter$fightsAArgs<ExtArgs> = {}>(args?: Subset<T, Fighter$fightsAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fightsB<T extends Fighter$fightsBArgs<ExtArgs> = {}>(args?: Subset<T, Fighter$fightsBArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trackedByUsers<T extends Fighter$trackedByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Fighter$trackedByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fighter model
   */
  interface FighterFieldRefs {
    readonly id: FieldRef<"Fighter", 'String'>
    readonly firstName: FieldRef<"Fighter", 'String'>
    readonly lastName: FieldRef<"Fighter", 'String'>
    readonly nickname: FieldRef<"Fighter", 'String'>
    readonly wins: FieldRef<"Fighter", 'Int'>
    readonly losses: FieldRef<"Fighter", 'Int'>
    readonly draws: FieldRef<"Fighter", 'Int'>
    readonly heightCm: FieldRef<"Fighter", 'Int'>
    readonly reachCm: FieldRef<"Fighter", 'Int'>
    readonly dob: FieldRef<"Fighter", 'DateTime'>
    readonly bio: FieldRef<"Fighter", 'String'>
    readonly imageUrl: FieldRef<"Fighter", 'String'>
    readonly weightClassId: FieldRef<"Fighter", 'String'>
    readonly gymId: FieldRef<"Fighter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fighter findUnique
   */
  export type FighterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    /**
     * Filter, which Fighter to fetch.
     */
    where: FighterWhereUniqueInput
  }

  /**
   * Fighter findUniqueOrThrow
   */
  export type FighterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    /**
     * Filter, which Fighter to fetch.
     */
    where: FighterWhereUniqueInput
  }

  /**
   * Fighter findFirst
   */
  export type FighterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    /**
     * Filter, which Fighter to fetch.
     */
    where?: FighterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fighters to fetch.
     */
    orderBy?: FighterOrderByWithRelationInput | FighterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fighters.
     */
    cursor?: FighterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fighters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fighters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fighters.
     */
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[]
  }

  /**
   * Fighter findFirstOrThrow
   */
  export type FighterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    /**
     * Filter, which Fighter to fetch.
     */
    where?: FighterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fighters to fetch.
     */
    orderBy?: FighterOrderByWithRelationInput | FighterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fighters.
     */
    cursor?: FighterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fighters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fighters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fighters.
     */
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[]
  }

  /**
   * Fighter findMany
   */
  export type FighterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    /**
     * Filter, which Fighters to fetch.
     */
    where?: FighterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fighters to fetch.
     */
    orderBy?: FighterOrderByWithRelationInput | FighterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fighters.
     */
    cursor?: FighterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fighters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fighters.
     */
    skip?: number
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[]
  }

  /**
   * Fighter create
   */
  export type FighterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    /**
     * The data needed to create a Fighter.
     */
    data: XOR<FighterCreateInput, FighterUncheckedCreateInput>
  }

  /**
   * Fighter createMany
   */
  export type FighterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fighters.
     */
    data: FighterCreateManyInput | FighterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fighter createManyAndReturn
   */
  export type FighterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * The data used to create many Fighters.
     */
    data: FighterCreateManyInput | FighterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fighter update
   */
  export type FighterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    /**
     * The data needed to update a Fighter.
     */
    data: XOR<FighterUpdateInput, FighterUncheckedUpdateInput>
    /**
     * Choose, which Fighter to update.
     */
    where: FighterWhereUniqueInput
  }

  /**
   * Fighter updateMany
   */
  export type FighterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fighters.
     */
    data: XOR<FighterUpdateManyMutationInput, FighterUncheckedUpdateManyInput>
    /**
     * Filter which Fighters to update
     */
    where?: FighterWhereInput
    /**
     * Limit how many Fighters to update.
     */
    limit?: number
  }

  /**
   * Fighter updateManyAndReturn
   */
  export type FighterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * The data used to update Fighters.
     */
    data: XOR<FighterUpdateManyMutationInput, FighterUncheckedUpdateManyInput>
    /**
     * Filter which Fighters to update
     */
    where?: FighterWhereInput
    /**
     * Limit how many Fighters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fighter upsert
   */
  export type FighterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    /**
     * The filter to search for the Fighter to update in case it exists.
     */
    where: FighterWhereUniqueInput
    /**
     * In case the Fighter found by the `where` argument doesn't exist, create a new Fighter with this data.
     */
    create: XOR<FighterCreateInput, FighterUncheckedCreateInput>
    /**
     * In case the Fighter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FighterUpdateInput, FighterUncheckedUpdateInput>
  }

  /**
   * Fighter delete
   */
  export type FighterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    /**
     * Filter which Fighter to delete.
     */
    where: FighterWhereUniqueInput
  }

  /**
   * Fighter deleteMany
   */
  export type FighterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fighters to delete
     */
    where?: FighterWhereInput
    /**
     * Limit how many Fighters to delete.
     */
    limit?: number
  }

  /**
   * Fighter.weightClass
   */
  export type Fighter$weightClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    where?: WeightClassWhereInput
  }

  /**
   * Fighter.gym
   */
  export type Fighter$gymArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    where?: GymWhereInput
  }

  /**
   * Fighter.styles
   */
  export type Fighter$stylesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    where?: FightingStyleWhereInput
    orderBy?: FightingStyleOrderByWithRelationInput | FightingStyleOrderByWithRelationInput[]
    cursor?: FightingStyleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FightingStyleScalarFieldEnum | FightingStyleScalarFieldEnum[]
  }

  /**
   * Fighter.fightsA
   */
  export type Fighter$fightsAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    where?: FightWhereInput
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    cursor?: FightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
  }

  /**
   * Fighter.fightsB
   */
  export type Fighter$fightsBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    where?: FightWhereInput
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    cursor?: FightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
  }

  /**
   * Fighter.trackedByUsers
   */
  export type Fighter$trackedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Fighter without action
   */
  export type FighterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
  }


  /**
   * Model Gym
   */

  export type AggregateGym = {
    _count: GymCountAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  export type GymMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
  }

  export type GymMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    name: number
    location: number
    _all: number
  }


  export type GymMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    _all?: true
  }

  export type GymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gym to aggregate.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gyms
    **/
    _count?: true | GymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymMaxAggregateInputType
  }

  export type GetGymAggregateType<T extends GymAggregateArgs> = {
        [P in keyof T & keyof AggregateGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGym[P]>
      : GetScalarType<T[P], AggregateGym[P]>
  }




  export type GymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymWhereInput
    orderBy?: GymOrderByWithAggregationInput | GymOrderByWithAggregationInput[]
    by: GymScalarFieldEnum[] | GymScalarFieldEnum
    having?: GymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymCountAggregateInputType | true
    _min?: GymMinAggregateInputType
    _max?: GymMaxAggregateInputType
  }

  export type GymGroupByOutputType = {
    id: string
    name: string
    location: string | null
    _count: GymCountAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  type GetGymGroupByPayload<T extends GymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymGroupByOutputType[P]>
            : GetScalarType<T[P], GymGroupByOutputType[P]>
        }
      >
    >


  export type GymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    fighters?: boolean | Gym$fightersArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
  }, ExtArgs["result"]["gym"]>

  export type GymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
  }, ExtArgs["result"]["gym"]>

  export type GymSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
  }

  export type GymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location", ExtArgs["result"]["gym"]>
  export type GymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fighters?: boolean | Gym$fightersArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gym"
    objects: {
      fighters: Prisma.$FighterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string | null
    }, ExtArgs["result"]["gym"]>
    composites: {}
  }

  type GymGetPayload<S extends boolean | null | undefined | GymDefaultArgs> = $Result.GetResult<Prisma.$GymPayload, S>

  type GymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymCountAggregateInputType | true
    }

  export interface GymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gym'], meta: { name: 'Gym' } }
    /**
     * Find zero or one Gym that matches the filter.
     * @param {GymFindUniqueArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymFindUniqueArgs>(args: SelectSubset<T, GymFindUniqueArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymFindUniqueOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymFindUniqueOrThrowArgs>(args: SelectSubset<T, GymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymFindFirstArgs>(args?: SelectSubset<T, GymFindFirstArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymFindFirstOrThrowArgs>(args?: SelectSubset<T, GymFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gyms
     * const gyms = await prisma.gym.findMany()
     * 
     * // Get first 10 Gyms
     * const gyms = await prisma.gym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymWithIdOnly = await prisma.gym.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymFindManyArgs>(args?: SelectSubset<T, GymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gym.
     * @param {GymCreateArgs} args - Arguments to create a Gym.
     * @example
     * // Create one Gym
     * const Gym = await prisma.gym.create({
     *   data: {
     *     // ... data to create a Gym
     *   }
     * })
     * 
     */
    create<T extends GymCreateArgs>(args: SelectSubset<T, GymCreateArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gyms.
     * @param {GymCreateManyArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymCreateManyArgs>(args?: SelectSubset<T, GymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gyms and returns the data saved in the database.
     * @param {GymCreateManyAndReturnArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymCreateManyAndReturnArgs>(args?: SelectSubset<T, GymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gym.
     * @param {GymDeleteArgs} args - Arguments to delete one Gym.
     * @example
     * // Delete one Gym
     * const Gym = await prisma.gym.delete({
     *   where: {
     *     // ... filter to delete one Gym
     *   }
     * })
     * 
     */
    delete<T extends GymDeleteArgs>(args: SelectSubset<T, GymDeleteArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gym.
     * @param {GymUpdateArgs} args - Arguments to update one Gym.
     * @example
     * // Update one Gym
     * const gym = await prisma.gym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymUpdateArgs>(args: SelectSubset<T, GymUpdateArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gyms.
     * @param {GymDeleteManyArgs} args - Arguments to filter Gyms to delete.
     * @example
     * // Delete a few Gyms
     * const { count } = await prisma.gym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymDeleteManyArgs>(args?: SelectSubset<T, GymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymUpdateManyArgs>(args: SelectSubset<T, GymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms and returns the data updated in the database.
     * @param {GymUpdateManyAndReturnArgs} args - Arguments to update many Gyms.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GymUpdateManyAndReturnArgs>(args: SelectSubset<T, GymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gym.
     * @param {GymUpsertArgs} args - Arguments to update or create a Gym.
     * @example
     * // Update or create a Gym
     * const gym = await prisma.gym.upsert({
     *   create: {
     *     // ... data to create a Gym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gym we want to update
     *   }
     * })
     */
    upsert<T extends GymUpsertArgs>(args: SelectSubset<T, GymUpsertArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymCountArgs} args - Arguments to filter Gyms to count.
     * @example
     * // Count the number of Gyms
     * const count = await prisma.gym.count({
     *   where: {
     *     // ... the filter for the Gyms we want to count
     *   }
     * })
    **/
    count<T extends GymCountArgs>(
      args?: Subset<T, GymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GymAggregateArgs>(args: Subset<T, GymAggregateArgs>): Prisma.PrismaPromise<GetGymAggregateType<T>>

    /**
     * Group by Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymGroupByArgs['orderBy'] }
        : { orderBy?: GymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gym model
   */
  readonly fields: GymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fighters<T extends Gym$fightersArgs<ExtArgs> = {}>(args?: Subset<T, Gym$fightersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gym model
   */
  interface GymFieldRefs {
    readonly id: FieldRef<"Gym", 'String'>
    readonly name: FieldRef<"Gym", 'String'>
    readonly location: FieldRef<"Gym", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gym findUnique
   */
  export type GymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym findUniqueOrThrow
   */
  export type GymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym findFirst
   */
  export type GymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym findFirstOrThrow
   */
  export type GymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym findMany
   */
  export type GymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gyms to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym create
   */
  export type GymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * The data needed to create a Gym.
     */
    data: XOR<GymCreateInput, GymUncheckedCreateInput>
  }

  /**
   * Gym createMany
   */
  export type GymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gyms.
     */
    data: GymCreateManyInput | GymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gym createManyAndReturn
   */
  export type GymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data used to create many Gyms.
     */
    data: GymCreateManyInput | GymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gym update
   */
  export type GymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * The data needed to update a Gym.
     */
    data: XOR<GymUpdateInput, GymUncheckedUpdateInput>
    /**
     * Choose, which Gym to update.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym updateMany
   */
  export type GymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gyms.
     */
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to update.
     */
    limit?: number
  }

  /**
   * Gym updateManyAndReturn
   */
  export type GymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data used to update Gyms.
     */
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to update.
     */
    limit?: number
  }

  /**
   * Gym upsert
   */
  export type GymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * The filter to search for the Gym to update in case it exists.
     */
    where: GymWhereUniqueInput
    /**
     * In case the Gym found by the `where` argument doesn't exist, create a new Gym with this data.
     */
    create: XOR<GymCreateInput, GymUncheckedCreateInput>
    /**
     * In case the Gym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymUpdateInput, GymUncheckedUpdateInput>
  }

  /**
   * Gym delete
   */
  export type GymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter which Gym to delete.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym deleteMany
   */
  export type GymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gyms to delete
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to delete.
     */
    limit?: number
  }

  /**
   * Gym.fighters
   */
  export type Gym$fightersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    where?: FighterWhereInput
    orderBy?: FighterOrderByWithRelationInput | FighterOrderByWithRelationInput[]
    cursor?: FighterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[]
  }

  /**
   * Gym without action
   */
  export type GymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
  }


  /**
   * Model WeightClass
   */

  export type AggregateWeightClass = {
    _count: WeightClassCountAggregateOutputType | null
    _avg: WeightClassAvgAggregateOutputType | null
    _sum: WeightClassSumAggregateOutputType | null
    _min: WeightClassMinAggregateOutputType | null
    _max: WeightClassMaxAggregateOutputType | null
  }

  export type WeightClassAvgAggregateOutputType = {
    limitLb: number | null
  }

  export type WeightClassSumAggregateOutputType = {
    limitLb: number | null
  }

  export type WeightClassMinAggregateOutputType = {
    id: string | null
    name: string | null
    limitLb: number | null
  }

  export type WeightClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
    limitLb: number | null
  }

  export type WeightClassCountAggregateOutputType = {
    id: number
    name: number
    limitLb: number
    _all: number
  }


  export type WeightClassAvgAggregateInputType = {
    limitLb?: true
  }

  export type WeightClassSumAggregateInputType = {
    limitLb?: true
  }

  export type WeightClassMinAggregateInputType = {
    id?: true
    name?: true
    limitLb?: true
  }

  export type WeightClassMaxAggregateInputType = {
    id?: true
    name?: true
    limitLb?: true
  }

  export type WeightClassCountAggregateInputType = {
    id?: true
    name?: true
    limitLb?: true
    _all?: true
  }

  export type WeightClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightClass to aggregate.
     */
    where?: WeightClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightClasses to fetch.
     */
    orderBy?: WeightClassOrderByWithRelationInput | WeightClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeightClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeightClasses
    **/
    _count?: true | WeightClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeightClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeightClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeightClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeightClassMaxAggregateInputType
  }

  export type GetWeightClassAggregateType<T extends WeightClassAggregateArgs> = {
        [P in keyof T & keyof AggregateWeightClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeightClass[P]>
      : GetScalarType<T[P], AggregateWeightClass[P]>
  }




  export type WeightClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightClassWhereInput
    orderBy?: WeightClassOrderByWithAggregationInput | WeightClassOrderByWithAggregationInput[]
    by: WeightClassScalarFieldEnum[] | WeightClassScalarFieldEnum
    having?: WeightClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeightClassCountAggregateInputType | true
    _avg?: WeightClassAvgAggregateInputType
    _sum?: WeightClassSumAggregateInputType
    _min?: WeightClassMinAggregateInputType
    _max?: WeightClassMaxAggregateInputType
  }

  export type WeightClassGroupByOutputType = {
    id: string
    name: string
    limitLb: number
    _count: WeightClassCountAggregateOutputType | null
    _avg: WeightClassAvgAggregateOutputType | null
    _sum: WeightClassSumAggregateOutputType | null
    _min: WeightClassMinAggregateOutputType | null
    _max: WeightClassMaxAggregateOutputType | null
  }

  type GetWeightClassGroupByPayload<T extends WeightClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeightClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeightClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeightClassGroupByOutputType[P]>
            : GetScalarType<T[P], WeightClassGroupByOutputType[P]>
        }
      >
    >


  export type WeightClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    limitLb?: boolean
    fighters?: boolean | WeightClass$fightersArgs<ExtArgs>
    _count?: boolean | WeightClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightClass"]>

  export type WeightClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    limitLb?: boolean
  }, ExtArgs["result"]["weightClass"]>

  export type WeightClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    limitLb?: boolean
  }, ExtArgs["result"]["weightClass"]>

  export type WeightClassSelectScalar = {
    id?: boolean
    name?: boolean
    limitLb?: boolean
  }

  export type WeightClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "limitLb", ExtArgs["result"]["weightClass"]>
  export type WeightClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fighters?: boolean | WeightClass$fightersArgs<ExtArgs>
    _count?: boolean | WeightClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeightClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeightClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeightClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeightClass"
    objects: {
      fighters: Prisma.$FighterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      limitLb: number
    }, ExtArgs["result"]["weightClass"]>
    composites: {}
  }

  type WeightClassGetPayload<S extends boolean | null | undefined | WeightClassDefaultArgs> = $Result.GetResult<Prisma.$WeightClassPayload, S>

  type WeightClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeightClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeightClassCountAggregateInputType | true
    }

  export interface WeightClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeightClass'], meta: { name: 'WeightClass' } }
    /**
     * Find zero or one WeightClass that matches the filter.
     * @param {WeightClassFindUniqueArgs} args - Arguments to find a WeightClass
     * @example
     * // Get one WeightClass
     * const weightClass = await prisma.weightClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeightClassFindUniqueArgs>(args: SelectSubset<T, WeightClassFindUniqueArgs<ExtArgs>>): Prisma__WeightClassClient<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeightClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeightClassFindUniqueOrThrowArgs} args - Arguments to find a WeightClass
     * @example
     * // Get one WeightClass
     * const weightClass = await prisma.weightClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeightClassFindUniqueOrThrowArgs>(args: SelectSubset<T, WeightClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeightClassClient<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightClassFindFirstArgs} args - Arguments to find a WeightClass
     * @example
     * // Get one WeightClass
     * const weightClass = await prisma.weightClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeightClassFindFirstArgs>(args?: SelectSubset<T, WeightClassFindFirstArgs<ExtArgs>>): Prisma__WeightClassClient<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightClassFindFirstOrThrowArgs} args - Arguments to find a WeightClass
     * @example
     * // Get one WeightClass
     * const weightClass = await prisma.weightClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeightClassFindFirstOrThrowArgs>(args?: SelectSubset<T, WeightClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeightClassClient<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeightClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeightClasses
     * const weightClasses = await prisma.weightClass.findMany()
     * 
     * // Get first 10 WeightClasses
     * const weightClasses = await prisma.weightClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weightClassWithIdOnly = await prisma.weightClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeightClassFindManyArgs>(args?: SelectSubset<T, WeightClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeightClass.
     * @param {WeightClassCreateArgs} args - Arguments to create a WeightClass.
     * @example
     * // Create one WeightClass
     * const WeightClass = await prisma.weightClass.create({
     *   data: {
     *     // ... data to create a WeightClass
     *   }
     * })
     * 
     */
    create<T extends WeightClassCreateArgs>(args: SelectSubset<T, WeightClassCreateArgs<ExtArgs>>): Prisma__WeightClassClient<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeightClasses.
     * @param {WeightClassCreateManyArgs} args - Arguments to create many WeightClasses.
     * @example
     * // Create many WeightClasses
     * const weightClass = await prisma.weightClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeightClassCreateManyArgs>(args?: SelectSubset<T, WeightClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeightClasses and returns the data saved in the database.
     * @param {WeightClassCreateManyAndReturnArgs} args - Arguments to create many WeightClasses.
     * @example
     * // Create many WeightClasses
     * const weightClass = await prisma.weightClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeightClasses and only return the `id`
     * const weightClassWithIdOnly = await prisma.weightClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeightClassCreateManyAndReturnArgs>(args?: SelectSubset<T, WeightClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeightClass.
     * @param {WeightClassDeleteArgs} args - Arguments to delete one WeightClass.
     * @example
     * // Delete one WeightClass
     * const WeightClass = await prisma.weightClass.delete({
     *   where: {
     *     // ... filter to delete one WeightClass
     *   }
     * })
     * 
     */
    delete<T extends WeightClassDeleteArgs>(args: SelectSubset<T, WeightClassDeleteArgs<ExtArgs>>): Prisma__WeightClassClient<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeightClass.
     * @param {WeightClassUpdateArgs} args - Arguments to update one WeightClass.
     * @example
     * // Update one WeightClass
     * const weightClass = await prisma.weightClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeightClassUpdateArgs>(args: SelectSubset<T, WeightClassUpdateArgs<ExtArgs>>): Prisma__WeightClassClient<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeightClasses.
     * @param {WeightClassDeleteManyArgs} args - Arguments to filter WeightClasses to delete.
     * @example
     * // Delete a few WeightClasses
     * const { count } = await prisma.weightClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeightClassDeleteManyArgs>(args?: SelectSubset<T, WeightClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeightClasses
     * const weightClass = await prisma.weightClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeightClassUpdateManyArgs>(args: SelectSubset<T, WeightClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightClasses and returns the data updated in the database.
     * @param {WeightClassUpdateManyAndReturnArgs} args - Arguments to update many WeightClasses.
     * @example
     * // Update many WeightClasses
     * const weightClass = await prisma.weightClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeightClasses and only return the `id`
     * const weightClassWithIdOnly = await prisma.weightClass.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeightClassUpdateManyAndReturnArgs>(args: SelectSubset<T, WeightClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeightClass.
     * @param {WeightClassUpsertArgs} args - Arguments to update or create a WeightClass.
     * @example
     * // Update or create a WeightClass
     * const weightClass = await prisma.weightClass.upsert({
     *   create: {
     *     // ... data to create a WeightClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeightClass we want to update
     *   }
     * })
     */
    upsert<T extends WeightClassUpsertArgs>(args: SelectSubset<T, WeightClassUpsertArgs<ExtArgs>>): Prisma__WeightClassClient<$Result.GetResult<Prisma.$WeightClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeightClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightClassCountArgs} args - Arguments to filter WeightClasses to count.
     * @example
     * // Count the number of WeightClasses
     * const count = await prisma.weightClass.count({
     *   where: {
     *     // ... the filter for the WeightClasses we want to count
     *   }
     * })
    **/
    count<T extends WeightClassCountArgs>(
      args?: Subset<T, WeightClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeightClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeightClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeightClassAggregateArgs>(args: Subset<T, WeightClassAggregateArgs>): Prisma.PrismaPromise<GetWeightClassAggregateType<T>>

    /**
     * Group by WeightClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeightClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeightClassGroupByArgs['orderBy'] }
        : { orderBy?: WeightClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeightClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeightClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeightClass model
   */
  readonly fields: WeightClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeightClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeightClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fighters<T extends WeightClass$fightersArgs<ExtArgs> = {}>(args?: Subset<T, WeightClass$fightersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeightClass model
   */
  interface WeightClassFieldRefs {
    readonly id: FieldRef<"WeightClass", 'String'>
    readonly name: FieldRef<"WeightClass", 'String'>
    readonly limitLb: FieldRef<"WeightClass", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeightClass findUnique
   */
  export type WeightClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    /**
     * Filter, which WeightClass to fetch.
     */
    where: WeightClassWhereUniqueInput
  }

  /**
   * WeightClass findUniqueOrThrow
   */
  export type WeightClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    /**
     * Filter, which WeightClass to fetch.
     */
    where: WeightClassWhereUniqueInput
  }

  /**
   * WeightClass findFirst
   */
  export type WeightClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    /**
     * Filter, which WeightClass to fetch.
     */
    where?: WeightClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightClasses to fetch.
     */
    orderBy?: WeightClassOrderByWithRelationInput | WeightClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightClasses.
     */
    cursor?: WeightClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightClasses.
     */
    distinct?: WeightClassScalarFieldEnum | WeightClassScalarFieldEnum[]
  }

  /**
   * WeightClass findFirstOrThrow
   */
  export type WeightClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    /**
     * Filter, which WeightClass to fetch.
     */
    where?: WeightClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightClasses to fetch.
     */
    orderBy?: WeightClassOrderByWithRelationInput | WeightClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightClasses.
     */
    cursor?: WeightClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightClasses.
     */
    distinct?: WeightClassScalarFieldEnum | WeightClassScalarFieldEnum[]
  }

  /**
   * WeightClass findMany
   */
  export type WeightClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    /**
     * Filter, which WeightClasses to fetch.
     */
    where?: WeightClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightClasses to fetch.
     */
    orderBy?: WeightClassOrderByWithRelationInput | WeightClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeightClasses.
     */
    cursor?: WeightClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightClasses.
     */
    skip?: number
    distinct?: WeightClassScalarFieldEnum | WeightClassScalarFieldEnum[]
  }

  /**
   * WeightClass create
   */
  export type WeightClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    /**
     * The data needed to create a WeightClass.
     */
    data: XOR<WeightClassCreateInput, WeightClassUncheckedCreateInput>
  }

  /**
   * WeightClass createMany
   */
  export type WeightClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeightClasses.
     */
    data: WeightClassCreateManyInput | WeightClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeightClass createManyAndReturn
   */
  export type WeightClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * The data used to create many WeightClasses.
     */
    data: WeightClassCreateManyInput | WeightClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeightClass update
   */
  export type WeightClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    /**
     * The data needed to update a WeightClass.
     */
    data: XOR<WeightClassUpdateInput, WeightClassUncheckedUpdateInput>
    /**
     * Choose, which WeightClass to update.
     */
    where: WeightClassWhereUniqueInput
  }

  /**
   * WeightClass updateMany
   */
  export type WeightClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeightClasses.
     */
    data: XOR<WeightClassUpdateManyMutationInput, WeightClassUncheckedUpdateManyInput>
    /**
     * Filter which WeightClasses to update
     */
    where?: WeightClassWhereInput
    /**
     * Limit how many WeightClasses to update.
     */
    limit?: number
  }

  /**
   * WeightClass updateManyAndReturn
   */
  export type WeightClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * The data used to update WeightClasses.
     */
    data: XOR<WeightClassUpdateManyMutationInput, WeightClassUncheckedUpdateManyInput>
    /**
     * Filter which WeightClasses to update
     */
    where?: WeightClassWhereInput
    /**
     * Limit how many WeightClasses to update.
     */
    limit?: number
  }

  /**
   * WeightClass upsert
   */
  export type WeightClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    /**
     * The filter to search for the WeightClass to update in case it exists.
     */
    where: WeightClassWhereUniqueInput
    /**
     * In case the WeightClass found by the `where` argument doesn't exist, create a new WeightClass with this data.
     */
    create: XOR<WeightClassCreateInput, WeightClassUncheckedCreateInput>
    /**
     * In case the WeightClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeightClassUpdateInput, WeightClassUncheckedUpdateInput>
  }

  /**
   * WeightClass delete
   */
  export type WeightClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
    /**
     * Filter which WeightClass to delete.
     */
    where: WeightClassWhereUniqueInput
  }

  /**
   * WeightClass deleteMany
   */
  export type WeightClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightClasses to delete
     */
    where?: WeightClassWhereInput
    /**
     * Limit how many WeightClasses to delete.
     */
    limit?: number
  }

  /**
   * WeightClass.fighters
   */
  export type WeightClass$fightersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    where?: FighterWhereInput
    orderBy?: FighterOrderByWithRelationInput | FighterOrderByWithRelationInput[]
    cursor?: FighterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[]
  }

  /**
   * WeightClass without action
   */
  export type WeightClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightClass
     */
    select?: WeightClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightClass
     */
    omit?: WeightClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightClassInclude<ExtArgs> | null
  }


  /**
   * Model FightingStyle
   */

  export type AggregateFightingStyle = {
    _count: FightingStyleCountAggregateOutputType | null
    _min: FightingStyleMinAggregateOutputType | null
    _max: FightingStyleMaxAggregateOutputType | null
  }

  export type FightingStyleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FightingStyleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FightingStyleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FightingStyleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FightingStyleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FightingStyleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FightingStyleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FightingStyle to aggregate.
     */
    where?: FightingStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingStyles to fetch.
     */
    orderBy?: FightingStyleOrderByWithRelationInput | FightingStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FightingStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FightingStyles
    **/
    _count?: true | FightingStyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FightingStyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FightingStyleMaxAggregateInputType
  }

  export type GetFightingStyleAggregateType<T extends FightingStyleAggregateArgs> = {
        [P in keyof T & keyof AggregateFightingStyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFightingStyle[P]>
      : GetScalarType<T[P], AggregateFightingStyle[P]>
  }




  export type FightingStyleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightingStyleWhereInput
    orderBy?: FightingStyleOrderByWithAggregationInput | FightingStyleOrderByWithAggregationInput[]
    by: FightingStyleScalarFieldEnum[] | FightingStyleScalarFieldEnum
    having?: FightingStyleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FightingStyleCountAggregateInputType | true
    _min?: FightingStyleMinAggregateInputType
    _max?: FightingStyleMaxAggregateInputType
  }

  export type FightingStyleGroupByOutputType = {
    id: string
    name: string
    _count: FightingStyleCountAggregateOutputType | null
    _min: FightingStyleMinAggregateOutputType | null
    _max: FightingStyleMaxAggregateOutputType | null
  }

  type GetFightingStyleGroupByPayload<T extends FightingStyleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FightingStyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FightingStyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FightingStyleGroupByOutputType[P]>
            : GetScalarType<T[P], FightingStyleGroupByOutputType[P]>
        }
      >
    >


  export type FightingStyleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fighters?: boolean | FightingStyle$fightersArgs<ExtArgs>
    _count?: boolean | FightingStyleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fightingStyle"]>

  export type FightingStyleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["fightingStyle"]>

  export type FightingStyleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["fightingStyle"]>

  export type FightingStyleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FightingStyleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["fightingStyle"]>
  export type FightingStyleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fighters?: boolean | FightingStyle$fightersArgs<ExtArgs>
    _count?: boolean | FightingStyleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FightingStyleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FightingStyleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FightingStylePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FightingStyle"
    objects: {
      fighters: Prisma.$FighterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["fightingStyle"]>
    composites: {}
  }

  type FightingStyleGetPayload<S extends boolean | null | undefined | FightingStyleDefaultArgs> = $Result.GetResult<Prisma.$FightingStylePayload, S>

  type FightingStyleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FightingStyleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FightingStyleCountAggregateInputType | true
    }

  export interface FightingStyleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FightingStyle'], meta: { name: 'FightingStyle' } }
    /**
     * Find zero or one FightingStyle that matches the filter.
     * @param {FightingStyleFindUniqueArgs} args - Arguments to find a FightingStyle
     * @example
     * // Get one FightingStyle
     * const fightingStyle = await prisma.fightingStyle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FightingStyleFindUniqueArgs>(args: SelectSubset<T, FightingStyleFindUniqueArgs<ExtArgs>>): Prisma__FightingStyleClient<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FightingStyle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FightingStyleFindUniqueOrThrowArgs} args - Arguments to find a FightingStyle
     * @example
     * // Get one FightingStyle
     * const fightingStyle = await prisma.fightingStyle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FightingStyleFindUniqueOrThrowArgs>(args: SelectSubset<T, FightingStyleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FightingStyleClient<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FightingStyle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingStyleFindFirstArgs} args - Arguments to find a FightingStyle
     * @example
     * // Get one FightingStyle
     * const fightingStyle = await prisma.fightingStyle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FightingStyleFindFirstArgs>(args?: SelectSubset<T, FightingStyleFindFirstArgs<ExtArgs>>): Prisma__FightingStyleClient<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FightingStyle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingStyleFindFirstOrThrowArgs} args - Arguments to find a FightingStyle
     * @example
     * // Get one FightingStyle
     * const fightingStyle = await prisma.fightingStyle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FightingStyleFindFirstOrThrowArgs>(args?: SelectSubset<T, FightingStyleFindFirstOrThrowArgs<ExtArgs>>): Prisma__FightingStyleClient<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FightingStyles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingStyleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FightingStyles
     * const fightingStyles = await prisma.fightingStyle.findMany()
     * 
     * // Get first 10 FightingStyles
     * const fightingStyles = await prisma.fightingStyle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fightingStyleWithIdOnly = await prisma.fightingStyle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FightingStyleFindManyArgs>(args?: SelectSubset<T, FightingStyleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FightingStyle.
     * @param {FightingStyleCreateArgs} args - Arguments to create a FightingStyle.
     * @example
     * // Create one FightingStyle
     * const FightingStyle = await prisma.fightingStyle.create({
     *   data: {
     *     // ... data to create a FightingStyle
     *   }
     * })
     * 
     */
    create<T extends FightingStyleCreateArgs>(args: SelectSubset<T, FightingStyleCreateArgs<ExtArgs>>): Prisma__FightingStyleClient<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FightingStyles.
     * @param {FightingStyleCreateManyArgs} args - Arguments to create many FightingStyles.
     * @example
     * // Create many FightingStyles
     * const fightingStyle = await prisma.fightingStyle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FightingStyleCreateManyArgs>(args?: SelectSubset<T, FightingStyleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FightingStyles and returns the data saved in the database.
     * @param {FightingStyleCreateManyAndReturnArgs} args - Arguments to create many FightingStyles.
     * @example
     * // Create many FightingStyles
     * const fightingStyle = await prisma.fightingStyle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FightingStyles and only return the `id`
     * const fightingStyleWithIdOnly = await prisma.fightingStyle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FightingStyleCreateManyAndReturnArgs>(args?: SelectSubset<T, FightingStyleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FightingStyle.
     * @param {FightingStyleDeleteArgs} args - Arguments to delete one FightingStyle.
     * @example
     * // Delete one FightingStyle
     * const FightingStyle = await prisma.fightingStyle.delete({
     *   where: {
     *     // ... filter to delete one FightingStyle
     *   }
     * })
     * 
     */
    delete<T extends FightingStyleDeleteArgs>(args: SelectSubset<T, FightingStyleDeleteArgs<ExtArgs>>): Prisma__FightingStyleClient<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FightingStyle.
     * @param {FightingStyleUpdateArgs} args - Arguments to update one FightingStyle.
     * @example
     * // Update one FightingStyle
     * const fightingStyle = await prisma.fightingStyle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FightingStyleUpdateArgs>(args: SelectSubset<T, FightingStyleUpdateArgs<ExtArgs>>): Prisma__FightingStyleClient<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FightingStyles.
     * @param {FightingStyleDeleteManyArgs} args - Arguments to filter FightingStyles to delete.
     * @example
     * // Delete a few FightingStyles
     * const { count } = await prisma.fightingStyle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FightingStyleDeleteManyArgs>(args?: SelectSubset<T, FightingStyleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FightingStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingStyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FightingStyles
     * const fightingStyle = await prisma.fightingStyle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FightingStyleUpdateManyArgs>(args: SelectSubset<T, FightingStyleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FightingStyles and returns the data updated in the database.
     * @param {FightingStyleUpdateManyAndReturnArgs} args - Arguments to update many FightingStyles.
     * @example
     * // Update many FightingStyles
     * const fightingStyle = await prisma.fightingStyle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FightingStyles and only return the `id`
     * const fightingStyleWithIdOnly = await prisma.fightingStyle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FightingStyleUpdateManyAndReturnArgs>(args: SelectSubset<T, FightingStyleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FightingStyle.
     * @param {FightingStyleUpsertArgs} args - Arguments to update or create a FightingStyle.
     * @example
     * // Update or create a FightingStyle
     * const fightingStyle = await prisma.fightingStyle.upsert({
     *   create: {
     *     // ... data to create a FightingStyle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FightingStyle we want to update
     *   }
     * })
     */
    upsert<T extends FightingStyleUpsertArgs>(args: SelectSubset<T, FightingStyleUpsertArgs<ExtArgs>>): Prisma__FightingStyleClient<$Result.GetResult<Prisma.$FightingStylePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FightingStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingStyleCountArgs} args - Arguments to filter FightingStyles to count.
     * @example
     * // Count the number of FightingStyles
     * const count = await prisma.fightingStyle.count({
     *   where: {
     *     // ... the filter for the FightingStyles we want to count
     *   }
     * })
    **/
    count<T extends FightingStyleCountArgs>(
      args?: Subset<T, FightingStyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FightingStyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FightingStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingStyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FightingStyleAggregateArgs>(args: Subset<T, FightingStyleAggregateArgs>): Prisma.PrismaPromise<GetFightingStyleAggregateType<T>>

    /**
     * Group by FightingStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightingStyleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FightingStyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FightingStyleGroupByArgs['orderBy'] }
        : { orderBy?: FightingStyleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FightingStyleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFightingStyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FightingStyle model
   */
  readonly fields: FightingStyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FightingStyle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FightingStyleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fighters<T extends FightingStyle$fightersArgs<ExtArgs> = {}>(args?: Subset<T, FightingStyle$fightersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FightingStyle model
   */
  interface FightingStyleFieldRefs {
    readonly id: FieldRef<"FightingStyle", 'String'>
    readonly name: FieldRef<"FightingStyle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FightingStyle findUnique
   */
  export type FightingStyleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    /**
     * Filter, which FightingStyle to fetch.
     */
    where: FightingStyleWhereUniqueInput
  }

  /**
   * FightingStyle findUniqueOrThrow
   */
  export type FightingStyleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    /**
     * Filter, which FightingStyle to fetch.
     */
    where: FightingStyleWhereUniqueInput
  }

  /**
   * FightingStyle findFirst
   */
  export type FightingStyleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    /**
     * Filter, which FightingStyle to fetch.
     */
    where?: FightingStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingStyles to fetch.
     */
    orderBy?: FightingStyleOrderByWithRelationInput | FightingStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FightingStyles.
     */
    cursor?: FightingStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FightingStyles.
     */
    distinct?: FightingStyleScalarFieldEnum | FightingStyleScalarFieldEnum[]
  }

  /**
   * FightingStyle findFirstOrThrow
   */
  export type FightingStyleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    /**
     * Filter, which FightingStyle to fetch.
     */
    where?: FightingStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingStyles to fetch.
     */
    orderBy?: FightingStyleOrderByWithRelationInput | FightingStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FightingStyles.
     */
    cursor?: FightingStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FightingStyles.
     */
    distinct?: FightingStyleScalarFieldEnum | FightingStyleScalarFieldEnum[]
  }

  /**
   * FightingStyle findMany
   */
  export type FightingStyleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    /**
     * Filter, which FightingStyles to fetch.
     */
    where?: FightingStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FightingStyles to fetch.
     */
    orderBy?: FightingStyleOrderByWithRelationInput | FightingStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FightingStyles.
     */
    cursor?: FightingStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FightingStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FightingStyles.
     */
    skip?: number
    distinct?: FightingStyleScalarFieldEnum | FightingStyleScalarFieldEnum[]
  }

  /**
   * FightingStyle create
   */
  export type FightingStyleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    /**
     * The data needed to create a FightingStyle.
     */
    data: XOR<FightingStyleCreateInput, FightingStyleUncheckedCreateInput>
  }

  /**
   * FightingStyle createMany
   */
  export type FightingStyleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FightingStyles.
     */
    data: FightingStyleCreateManyInput | FightingStyleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FightingStyle createManyAndReturn
   */
  export type FightingStyleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * The data used to create many FightingStyles.
     */
    data: FightingStyleCreateManyInput | FightingStyleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FightingStyle update
   */
  export type FightingStyleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    /**
     * The data needed to update a FightingStyle.
     */
    data: XOR<FightingStyleUpdateInput, FightingStyleUncheckedUpdateInput>
    /**
     * Choose, which FightingStyle to update.
     */
    where: FightingStyleWhereUniqueInput
  }

  /**
   * FightingStyle updateMany
   */
  export type FightingStyleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FightingStyles.
     */
    data: XOR<FightingStyleUpdateManyMutationInput, FightingStyleUncheckedUpdateManyInput>
    /**
     * Filter which FightingStyles to update
     */
    where?: FightingStyleWhereInput
    /**
     * Limit how many FightingStyles to update.
     */
    limit?: number
  }

  /**
   * FightingStyle updateManyAndReturn
   */
  export type FightingStyleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * The data used to update FightingStyles.
     */
    data: XOR<FightingStyleUpdateManyMutationInput, FightingStyleUncheckedUpdateManyInput>
    /**
     * Filter which FightingStyles to update
     */
    where?: FightingStyleWhereInput
    /**
     * Limit how many FightingStyles to update.
     */
    limit?: number
  }

  /**
   * FightingStyle upsert
   */
  export type FightingStyleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    /**
     * The filter to search for the FightingStyle to update in case it exists.
     */
    where: FightingStyleWhereUniqueInput
    /**
     * In case the FightingStyle found by the `where` argument doesn't exist, create a new FightingStyle with this data.
     */
    create: XOR<FightingStyleCreateInput, FightingStyleUncheckedCreateInput>
    /**
     * In case the FightingStyle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FightingStyleUpdateInput, FightingStyleUncheckedUpdateInput>
  }

  /**
   * FightingStyle delete
   */
  export type FightingStyleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
    /**
     * Filter which FightingStyle to delete.
     */
    where: FightingStyleWhereUniqueInput
  }

  /**
   * FightingStyle deleteMany
   */
  export type FightingStyleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FightingStyles to delete
     */
    where?: FightingStyleWhereInput
    /**
     * Limit how many FightingStyles to delete.
     */
    limit?: number
  }

  /**
   * FightingStyle.fighters
   */
  export type FightingStyle$fightersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null
    where?: FighterWhereInput
    orderBy?: FighterOrderByWithRelationInput | FighterOrderByWithRelationInput[]
    cursor?: FighterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[]
  }

  /**
   * FightingStyle without action
   */
  export type FightingStyleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightingStyle
     */
    select?: FightingStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FightingStyle
     */
    omit?: FightingStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightingStyleInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    location: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    location: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    date: number
    location: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    location?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    location?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    location?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    date: Date
    location: string | null
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    location?: boolean
    fights?: boolean | Event$fightsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    location?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    location?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    location?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "location", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fights?: boolean | Event$fightsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      fights: Prisma.$FightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      location: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fights<T extends Event$fightsArgs<ExtArgs> = {}>(args?: Subset<T, Event$fightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.fights
   */
  export type Event$fightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    where?: FightWhereInput
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    cursor?: FightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Fight
   */

  export type AggregateFight = {
    _count: FightCountAggregateOutputType | null
    _min: FightMinAggregateOutputType | null
    _max: FightMaxAggregateOutputType | null
  }

  export type FightMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    fighterAId: string | null
    fighterBId: string | null
    isMainEvent: boolean | null
  }

  export type FightMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    fighterAId: string | null
    fighterBId: string | null
    isMainEvent: boolean | null
  }

  export type FightCountAggregateOutputType = {
    id: number
    eventId: number
    fighterAId: number
    fighterBId: number
    isMainEvent: number
    _all: number
  }


  export type FightMinAggregateInputType = {
    id?: true
    eventId?: true
    fighterAId?: true
    fighterBId?: true
    isMainEvent?: true
  }

  export type FightMaxAggregateInputType = {
    id?: true
    eventId?: true
    fighterAId?: true
    fighterBId?: true
    isMainEvent?: true
  }

  export type FightCountAggregateInputType = {
    id?: true
    eventId?: true
    fighterAId?: true
    fighterBId?: true
    isMainEvent?: true
    _all?: true
  }

  export type FightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fight to aggregate.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fights
    **/
    _count?: true | FightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FightMaxAggregateInputType
  }

  export type GetFightAggregateType<T extends FightAggregateArgs> = {
        [P in keyof T & keyof AggregateFight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFight[P]>
      : GetScalarType<T[P], AggregateFight[P]>
  }




  export type FightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightWhereInput
    orderBy?: FightOrderByWithAggregationInput | FightOrderByWithAggregationInput[]
    by: FightScalarFieldEnum[] | FightScalarFieldEnum
    having?: FightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FightCountAggregateInputType | true
    _min?: FightMinAggregateInputType
    _max?: FightMaxAggregateInputType
  }

  export type FightGroupByOutputType = {
    id: string
    eventId: string
    fighterAId: string
    fighterBId: string
    isMainEvent: boolean
    _count: FightCountAggregateOutputType | null
    _min: FightMinAggregateOutputType | null
    _max: FightMaxAggregateOutputType | null
  }

  type GetFightGroupByPayload<T extends FightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FightGroupByOutputType[P]>
            : GetScalarType<T[P], FightGroupByOutputType[P]>
        }
      >
    >


  export type FightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    fighterAId?: boolean
    fighterBId?: boolean
    isMainEvent?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    fighterA?: boolean | FighterDefaultArgs<ExtArgs>
    fighterB?: boolean | FighterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fight"]>

  export type FightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    fighterAId?: boolean
    fighterBId?: boolean
    isMainEvent?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    fighterA?: boolean | FighterDefaultArgs<ExtArgs>
    fighterB?: boolean | FighterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fight"]>

  export type FightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    fighterAId?: boolean
    fighterBId?: boolean
    isMainEvent?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    fighterA?: boolean | FighterDefaultArgs<ExtArgs>
    fighterB?: boolean | FighterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fight"]>

  export type FightSelectScalar = {
    id?: boolean
    eventId?: boolean
    fighterAId?: boolean
    fighterBId?: boolean
    isMainEvent?: boolean
  }

  export type FightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "fighterAId" | "fighterBId" | "isMainEvent", ExtArgs["result"]["fight"]>
  export type FightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    fighterA?: boolean | FighterDefaultArgs<ExtArgs>
    fighterB?: boolean | FighterDefaultArgs<ExtArgs>
  }
  export type FightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    fighterA?: boolean | FighterDefaultArgs<ExtArgs>
    fighterB?: boolean | FighterDefaultArgs<ExtArgs>
  }
  export type FightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    fighterA?: boolean | FighterDefaultArgs<ExtArgs>
    fighterB?: boolean | FighterDefaultArgs<ExtArgs>
  }

  export type $FightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fight"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      fighterA: Prisma.$FighterPayload<ExtArgs>
      fighterB: Prisma.$FighterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      fighterAId: string
      fighterBId: string
      isMainEvent: boolean
    }, ExtArgs["result"]["fight"]>
    composites: {}
  }

  type FightGetPayload<S extends boolean | null | undefined | FightDefaultArgs> = $Result.GetResult<Prisma.$FightPayload, S>

  type FightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FightCountAggregateInputType | true
    }

  export interface FightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fight'], meta: { name: 'Fight' } }
    /**
     * Find zero or one Fight that matches the filter.
     * @param {FightFindUniqueArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FightFindUniqueArgs>(args: SelectSubset<T, FightFindUniqueArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FightFindUniqueOrThrowArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FightFindUniqueOrThrowArgs>(args: SelectSubset<T, FightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindFirstArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FightFindFirstArgs>(args?: SelectSubset<T, FightFindFirstArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindFirstOrThrowArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FightFindFirstOrThrowArgs>(args?: SelectSubset<T, FightFindFirstOrThrowArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fights
     * const fights = await prisma.fight.findMany()
     * 
     * // Get first 10 Fights
     * const fights = await prisma.fight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fightWithIdOnly = await prisma.fight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FightFindManyArgs>(args?: SelectSubset<T, FightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fight.
     * @param {FightCreateArgs} args - Arguments to create a Fight.
     * @example
     * // Create one Fight
     * const Fight = await prisma.fight.create({
     *   data: {
     *     // ... data to create a Fight
     *   }
     * })
     * 
     */
    create<T extends FightCreateArgs>(args: SelectSubset<T, FightCreateArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fights.
     * @param {FightCreateManyArgs} args - Arguments to create many Fights.
     * @example
     * // Create many Fights
     * const fight = await prisma.fight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FightCreateManyArgs>(args?: SelectSubset<T, FightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fights and returns the data saved in the database.
     * @param {FightCreateManyAndReturnArgs} args - Arguments to create many Fights.
     * @example
     * // Create many Fights
     * const fight = await prisma.fight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fights and only return the `id`
     * const fightWithIdOnly = await prisma.fight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FightCreateManyAndReturnArgs>(args?: SelectSubset<T, FightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fight.
     * @param {FightDeleteArgs} args - Arguments to delete one Fight.
     * @example
     * // Delete one Fight
     * const Fight = await prisma.fight.delete({
     *   where: {
     *     // ... filter to delete one Fight
     *   }
     * })
     * 
     */
    delete<T extends FightDeleteArgs>(args: SelectSubset<T, FightDeleteArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fight.
     * @param {FightUpdateArgs} args - Arguments to update one Fight.
     * @example
     * // Update one Fight
     * const fight = await prisma.fight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FightUpdateArgs>(args: SelectSubset<T, FightUpdateArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fights.
     * @param {FightDeleteManyArgs} args - Arguments to filter Fights to delete.
     * @example
     * // Delete a few Fights
     * const { count } = await prisma.fight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FightDeleteManyArgs>(args?: SelectSubset<T, FightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fights
     * const fight = await prisma.fight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FightUpdateManyArgs>(args: SelectSubset<T, FightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fights and returns the data updated in the database.
     * @param {FightUpdateManyAndReturnArgs} args - Arguments to update many Fights.
     * @example
     * // Update many Fights
     * const fight = await prisma.fight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fights and only return the `id`
     * const fightWithIdOnly = await prisma.fight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FightUpdateManyAndReturnArgs>(args: SelectSubset<T, FightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fight.
     * @param {FightUpsertArgs} args - Arguments to update or create a Fight.
     * @example
     * // Update or create a Fight
     * const fight = await prisma.fight.upsert({
     *   create: {
     *     // ... data to create a Fight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fight we want to update
     *   }
     * })
     */
    upsert<T extends FightUpsertArgs>(args: SelectSubset<T, FightUpsertArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightCountArgs} args - Arguments to filter Fights to count.
     * @example
     * // Count the number of Fights
     * const count = await prisma.fight.count({
     *   where: {
     *     // ... the filter for the Fights we want to count
     *   }
     * })
    **/
    count<T extends FightCountArgs>(
      args?: Subset<T, FightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FightAggregateArgs>(args: Subset<T, FightAggregateArgs>): Prisma.PrismaPromise<GetFightAggregateType<T>>

    /**
     * Group by Fight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FightGroupByArgs['orderBy'] }
        : { orderBy?: FightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fight model
   */
  readonly fields: FightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fighterA<T extends FighterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FighterDefaultArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fighterB<T extends FighterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FighterDefaultArgs<ExtArgs>>): Prisma__FighterClient<$Result.GetResult<Prisma.$FighterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fight model
   */
  interface FightFieldRefs {
    readonly id: FieldRef<"Fight", 'String'>
    readonly eventId: FieldRef<"Fight", 'String'>
    readonly fighterAId: FieldRef<"Fight", 'String'>
    readonly fighterBId: FieldRef<"Fight", 'String'>
    readonly isMainEvent: FieldRef<"Fight", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Fight findUnique
   */
  export type FightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fight to fetch.
     */
    where: FightWhereUniqueInput
  }

  /**
   * Fight findUniqueOrThrow
   */
  export type FightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fight to fetch.
     */
    where: FightWhereUniqueInput
  }

  /**
   * Fight findFirst
   */
  export type FightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fight to fetch.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fights.
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fights.
     */
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
  }

  /**
   * Fight findFirstOrThrow
   */
  export type FightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fight to fetch.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fights.
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fights.
     */
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
  }

  /**
   * Fight findMany
   */
  export type FightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fights to fetch.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fights.
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
  }

  /**
   * Fight create
   */
  export type FightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * The data needed to create a Fight.
     */
    data: XOR<FightCreateInput, FightUncheckedCreateInput>
  }

  /**
   * Fight createMany
   */
  export type FightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fights.
     */
    data: FightCreateManyInput | FightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fight createManyAndReturn
   */
  export type FightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * The data used to create many Fights.
     */
    data: FightCreateManyInput | FightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fight update
   */
  export type FightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * The data needed to update a Fight.
     */
    data: XOR<FightUpdateInput, FightUncheckedUpdateInput>
    /**
     * Choose, which Fight to update.
     */
    where: FightWhereUniqueInput
  }

  /**
   * Fight updateMany
   */
  export type FightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fights.
     */
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyInput>
    /**
     * Filter which Fights to update
     */
    where?: FightWhereInput
    /**
     * Limit how many Fights to update.
     */
    limit?: number
  }

  /**
   * Fight updateManyAndReturn
   */
  export type FightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * The data used to update Fights.
     */
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyInput>
    /**
     * Filter which Fights to update
     */
    where?: FightWhereInput
    /**
     * Limit how many Fights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fight upsert
   */
  export type FightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * The filter to search for the Fight to update in case it exists.
     */
    where: FightWhereUniqueInput
    /**
     * In case the Fight found by the `where` argument doesn't exist, create a new Fight with this data.
     */
    create: XOR<FightCreateInput, FightUncheckedCreateInput>
    /**
     * In case the Fight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FightUpdateInput, FightUncheckedUpdateInput>
  }

  /**
   * Fight delete
   */
  export type FightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter which Fight to delete.
     */
    where: FightWhereUniqueInput
  }

  /**
   * Fight deleteMany
   */
  export type FightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fights to delete
     */
    where?: FightWhereInput
    /**
     * Limit how many Fights to delete.
     */
    limit?: number
  }

  /**
   * Fight without action
   */
  export type FightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
  }


  /**
   * Model NewsItem
   */

  export type AggregateNewsItem = {
    _count: NewsItemCountAggregateOutputType | null
    _min: NewsItemMinAggregateOutputType | null
    _max: NewsItemMaxAggregateOutputType | null
  }

  export type NewsItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    snippet: string | null
    content: string | null
    publishedAt: Date | null
    author: string | null
  }

  export type NewsItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    snippet: string | null
    content: string | null
    publishedAt: Date | null
    author: string | null
  }

  export type NewsItemCountAggregateOutputType = {
    id: number
    title: number
    snippet: number
    content: number
    publishedAt: number
    author: number
    _all: number
  }


  export type NewsItemMinAggregateInputType = {
    id?: true
    title?: true
    snippet?: true
    content?: true
    publishedAt?: true
    author?: true
  }

  export type NewsItemMaxAggregateInputType = {
    id?: true
    title?: true
    snippet?: true
    content?: true
    publishedAt?: true
    author?: true
  }

  export type NewsItemCountAggregateInputType = {
    id?: true
    title?: true
    snippet?: true
    content?: true
    publishedAt?: true
    author?: true
    _all?: true
  }

  export type NewsItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsItem to aggregate.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsItems
    **/
    _count?: true | NewsItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsItemMaxAggregateInputType
  }

  export type GetNewsItemAggregateType<T extends NewsItemAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsItem[P]>
      : GetScalarType<T[P], AggregateNewsItem[P]>
  }




  export type NewsItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsItemWhereInput
    orderBy?: NewsItemOrderByWithAggregationInput | NewsItemOrderByWithAggregationInput[]
    by: NewsItemScalarFieldEnum[] | NewsItemScalarFieldEnum
    having?: NewsItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsItemCountAggregateInputType | true
    _min?: NewsItemMinAggregateInputType
    _max?: NewsItemMaxAggregateInputType
  }

  export type NewsItemGroupByOutputType = {
    id: string
    title: string
    snippet: string
    content: string
    publishedAt: Date
    author: string | null
    _count: NewsItemCountAggregateOutputType | null
    _min: NewsItemMinAggregateOutputType | null
    _max: NewsItemMaxAggregateOutputType | null
  }

  type GetNewsItemGroupByPayload<T extends NewsItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsItemGroupByOutputType[P]>
            : GetScalarType<T[P], NewsItemGroupByOutputType[P]>
        }
      >
    >


  export type NewsItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    snippet?: boolean
    content?: boolean
    publishedAt?: boolean
    author?: boolean
  }, ExtArgs["result"]["newsItem"]>

  export type NewsItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    snippet?: boolean
    content?: boolean
    publishedAt?: boolean
    author?: boolean
  }, ExtArgs["result"]["newsItem"]>

  export type NewsItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    snippet?: boolean
    content?: boolean
    publishedAt?: boolean
    author?: boolean
  }, ExtArgs["result"]["newsItem"]>

  export type NewsItemSelectScalar = {
    id?: boolean
    title?: boolean
    snippet?: boolean
    content?: boolean
    publishedAt?: boolean
    author?: boolean
  }

  export type NewsItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "snippet" | "content" | "publishedAt" | "author", ExtArgs["result"]["newsItem"]>

  export type $NewsItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      snippet: string
      content: string
      publishedAt: Date
      author: string | null
    }, ExtArgs["result"]["newsItem"]>
    composites: {}
  }

  type NewsItemGetPayload<S extends boolean | null | undefined | NewsItemDefaultArgs> = $Result.GetResult<Prisma.$NewsItemPayload, S>

  type NewsItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsItemCountAggregateInputType | true
    }

  export interface NewsItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsItem'], meta: { name: 'NewsItem' } }
    /**
     * Find zero or one NewsItem that matches the filter.
     * @param {NewsItemFindUniqueArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsItemFindUniqueArgs>(args: SelectSubset<T, NewsItemFindUniqueArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsItemFindUniqueOrThrowArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsItemFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemFindFirstArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsItemFindFirstArgs>(args?: SelectSubset<T, NewsItemFindFirstArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemFindFirstOrThrowArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsItemFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsItems
     * const newsItems = await prisma.newsItem.findMany()
     * 
     * // Get first 10 NewsItems
     * const newsItems = await prisma.newsItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsItemWithIdOnly = await prisma.newsItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsItemFindManyArgs>(args?: SelectSubset<T, NewsItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsItem.
     * @param {NewsItemCreateArgs} args - Arguments to create a NewsItem.
     * @example
     * // Create one NewsItem
     * const NewsItem = await prisma.newsItem.create({
     *   data: {
     *     // ... data to create a NewsItem
     *   }
     * })
     * 
     */
    create<T extends NewsItemCreateArgs>(args: SelectSubset<T, NewsItemCreateArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsItems.
     * @param {NewsItemCreateManyArgs} args - Arguments to create many NewsItems.
     * @example
     * // Create many NewsItems
     * const newsItem = await prisma.newsItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsItemCreateManyArgs>(args?: SelectSubset<T, NewsItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsItems and returns the data saved in the database.
     * @param {NewsItemCreateManyAndReturnArgs} args - Arguments to create many NewsItems.
     * @example
     * // Create many NewsItems
     * const newsItem = await prisma.newsItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsItems and only return the `id`
     * const newsItemWithIdOnly = await prisma.newsItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsItemCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsItem.
     * @param {NewsItemDeleteArgs} args - Arguments to delete one NewsItem.
     * @example
     * // Delete one NewsItem
     * const NewsItem = await prisma.newsItem.delete({
     *   where: {
     *     // ... filter to delete one NewsItem
     *   }
     * })
     * 
     */
    delete<T extends NewsItemDeleteArgs>(args: SelectSubset<T, NewsItemDeleteArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsItem.
     * @param {NewsItemUpdateArgs} args - Arguments to update one NewsItem.
     * @example
     * // Update one NewsItem
     * const newsItem = await prisma.newsItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsItemUpdateArgs>(args: SelectSubset<T, NewsItemUpdateArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsItems.
     * @param {NewsItemDeleteManyArgs} args - Arguments to filter NewsItems to delete.
     * @example
     * // Delete a few NewsItems
     * const { count } = await prisma.newsItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsItemDeleteManyArgs>(args?: SelectSubset<T, NewsItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsItems
     * const newsItem = await prisma.newsItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsItemUpdateManyArgs>(args: SelectSubset<T, NewsItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsItems and returns the data updated in the database.
     * @param {NewsItemUpdateManyAndReturnArgs} args - Arguments to update many NewsItems.
     * @example
     * // Update many NewsItems
     * const newsItem = await prisma.newsItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsItems and only return the `id`
     * const newsItemWithIdOnly = await prisma.newsItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsItemUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsItem.
     * @param {NewsItemUpsertArgs} args - Arguments to update or create a NewsItem.
     * @example
     * // Update or create a NewsItem
     * const newsItem = await prisma.newsItem.upsert({
     *   create: {
     *     // ... data to create a NewsItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsItem we want to update
     *   }
     * })
     */
    upsert<T extends NewsItemUpsertArgs>(args: SelectSubset<T, NewsItemUpsertArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemCountArgs} args - Arguments to filter NewsItems to count.
     * @example
     * // Count the number of NewsItems
     * const count = await prisma.newsItem.count({
     *   where: {
     *     // ... the filter for the NewsItems we want to count
     *   }
     * })
    **/
    count<T extends NewsItemCountArgs>(
      args?: Subset<T, NewsItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsItemAggregateArgs>(args: Subset<T, NewsItemAggregateArgs>): Prisma.PrismaPromise<GetNewsItemAggregateType<T>>

    /**
     * Group by NewsItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsItemGroupByArgs['orderBy'] }
        : { orderBy?: NewsItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsItem model
   */
  readonly fields: NewsItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsItem model
   */
  interface NewsItemFieldRefs {
    readonly id: FieldRef<"NewsItem", 'String'>
    readonly title: FieldRef<"NewsItem", 'String'>
    readonly snippet: FieldRef<"NewsItem", 'String'>
    readonly content: FieldRef<"NewsItem", 'String'>
    readonly publishedAt: FieldRef<"NewsItem", 'DateTime'>
    readonly author: FieldRef<"NewsItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsItem findUnique
   */
  export type NewsItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem findUniqueOrThrow
   */
  export type NewsItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem findFirst
   */
  export type NewsItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsItems.
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsItems.
     */
    distinct?: NewsItemScalarFieldEnum | NewsItemScalarFieldEnum[]
  }

  /**
   * NewsItem findFirstOrThrow
   */
  export type NewsItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsItems.
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsItems.
     */
    distinct?: NewsItemScalarFieldEnum | NewsItemScalarFieldEnum[]
  }

  /**
   * NewsItem findMany
   */
  export type NewsItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * Filter, which NewsItems to fetch.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsItems.
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    distinct?: NewsItemScalarFieldEnum | NewsItemScalarFieldEnum[]
  }

  /**
   * NewsItem create
   */
  export type NewsItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsItem.
     */
    data: XOR<NewsItemCreateInput, NewsItemUncheckedCreateInput>
  }

  /**
   * NewsItem createMany
   */
  export type NewsItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsItems.
     */
    data: NewsItemCreateManyInput | NewsItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsItem createManyAndReturn
   */
  export type NewsItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * The data used to create many NewsItems.
     */
    data: NewsItemCreateManyInput | NewsItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsItem update
   */
  export type NewsItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsItem.
     */
    data: XOR<NewsItemUpdateInput, NewsItemUncheckedUpdateInput>
    /**
     * Choose, which NewsItem to update.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem updateMany
   */
  export type NewsItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsItems.
     */
    data: XOR<NewsItemUpdateManyMutationInput, NewsItemUncheckedUpdateManyInput>
    /**
     * Filter which NewsItems to update
     */
    where?: NewsItemWhereInput
    /**
     * Limit how many NewsItems to update.
     */
    limit?: number
  }

  /**
   * NewsItem updateManyAndReturn
   */
  export type NewsItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * The data used to update NewsItems.
     */
    data: XOR<NewsItemUpdateManyMutationInput, NewsItemUncheckedUpdateManyInput>
    /**
     * Filter which NewsItems to update
     */
    where?: NewsItemWhereInput
    /**
     * Limit how many NewsItems to update.
     */
    limit?: number
  }

  /**
   * NewsItem upsert
   */
  export type NewsItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsItem to update in case it exists.
     */
    where: NewsItemWhereUniqueInput
    /**
     * In case the NewsItem found by the `where` argument doesn't exist, create a new NewsItem with this data.
     */
    create: XOR<NewsItemCreateInput, NewsItemUncheckedCreateInput>
    /**
     * In case the NewsItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsItemUpdateInput, NewsItemUncheckedUpdateInput>
  }

  /**
   * NewsItem delete
   */
  export type NewsItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
    /**
     * Filter which NewsItem to delete.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem deleteMany
   */
  export type NewsItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsItems to delete
     */
    where?: NewsItemWhereInput
    /**
     * Limit how many NewsItems to delete.
     */
    limit?: number
  }

  /**
   * NewsItem without action
   */
  export type NewsItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsItem
     */
    omit?: NewsItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    activeFrom: 'activeFrom',
    activeUntil: 'activeUntil',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const FighterScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    nickname: 'nickname',
    wins: 'wins',
    losses: 'losses',
    draws: 'draws',
    heightCm: 'heightCm',
    reachCm: 'reachCm',
    dob: 'dob',
    bio: 'bio',
    imageUrl: 'imageUrl',
    weightClassId: 'weightClassId',
    gymId: 'gymId'
  };

  export type FighterScalarFieldEnum = (typeof FighterScalarFieldEnum)[keyof typeof FighterScalarFieldEnum]


  export const GymScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location'
  };

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const WeightClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    limitLb: 'limitLb'
  };

  export type WeightClassScalarFieldEnum = (typeof WeightClassScalarFieldEnum)[keyof typeof WeightClassScalarFieldEnum]


  export const FightingStyleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FightingStyleScalarFieldEnum = (typeof FightingStyleScalarFieldEnum)[keyof typeof FightingStyleScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    location: 'location'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const FightScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    fighterAId: 'fighterAId',
    fighterBId: 'fighterBId',
    isMainEvent: 'isMainEvent'
  };

  export type FightScalarFieldEnum = (typeof FightScalarFieldEnum)[keyof typeof FightScalarFieldEnum]


  export const NewsItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    snippet: 'snippet',
    content: 'content',
    publishedAt: 'publishedAt',
    author: 'author'
  };

  export type NewsItemScalarFieldEnum = (typeof NewsItemScalarFieldEnum)[keyof typeof NewsItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    sessions?: SessionListRelationFilter
    trackedFighters?: FighterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    trackedFighters?: FighterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    sessions?: SessionListRelationFilter
    trackedFighters?: FighterListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: UuidFilter<"Session"> | string
    activeFrom?: DateTimeFilter<"Session"> | Date | string
    activeUntil?: DateTimeFilter<"Session"> | Date | string
    userId?: UuidFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    activeFrom?: SortOrder
    activeUntil?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    activeFrom?: DateTimeFilter<"Session"> | Date | string
    activeUntil?: DateTimeFilter<"Session"> | Date | string
    userId?: UuidFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    activeFrom?: SortOrder
    activeUntil?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Session"> | string
    activeFrom?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    activeUntil?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    userId?: UuidWithAggregatesFilter<"Session"> | string
  }

  export type FighterWhereInput = {
    AND?: FighterWhereInput | FighterWhereInput[]
    OR?: FighterWhereInput[]
    NOT?: FighterWhereInput | FighterWhereInput[]
    id?: UuidFilter<"Fighter"> | string
    firstName?: StringFilter<"Fighter"> | string
    lastName?: StringFilter<"Fighter"> | string
    nickname?: StringNullableFilter<"Fighter"> | string | null
    wins?: IntFilter<"Fighter"> | number
    losses?: IntFilter<"Fighter"> | number
    draws?: IntFilter<"Fighter"> | number
    heightCm?: IntFilter<"Fighter"> | number
    reachCm?: IntFilter<"Fighter"> | number
    dob?: DateTimeFilter<"Fighter"> | Date | string
    bio?: StringNullableFilter<"Fighter"> | string | null
    imageUrl?: StringFilter<"Fighter"> | string
    weightClassId?: UuidNullableFilter<"Fighter"> | string | null
    gymId?: UuidNullableFilter<"Fighter"> | string | null
    weightClass?: XOR<WeightClassNullableScalarRelationFilter, WeightClassWhereInput> | null
    gym?: XOR<GymNullableScalarRelationFilter, GymWhereInput> | null
    styles?: FightingStyleListRelationFilter
    fightsA?: FightListRelationFilter
    fightsB?: FightListRelationFilter
    trackedByUsers?: UserListRelationFilter
  }

  export type FighterOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrderInput | SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    heightCm?: SortOrder
    reachCm?: SortOrder
    dob?: SortOrder
    bio?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    weightClassId?: SortOrderInput | SortOrder
    gymId?: SortOrderInput | SortOrder
    weightClass?: WeightClassOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
    styles?: FightingStyleOrderByRelationAggregateInput
    fightsA?: FightOrderByRelationAggregateInput
    fightsB?: FightOrderByRelationAggregateInput
    trackedByUsers?: UserOrderByRelationAggregateInput
  }

  export type FighterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FighterWhereInput | FighterWhereInput[]
    OR?: FighterWhereInput[]
    NOT?: FighterWhereInput | FighterWhereInput[]
    firstName?: StringFilter<"Fighter"> | string
    lastName?: StringFilter<"Fighter"> | string
    nickname?: StringNullableFilter<"Fighter"> | string | null
    wins?: IntFilter<"Fighter"> | number
    losses?: IntFilter<"Fighter"> | number
    draws?: IntFilter<"Fighter"> | number
    heightCm?: IntFilter<"Fighter"> | number
    reachCm?: IntFilter<"Fighter"> | number
    dob?: DateTimeFilter<"Fighter"> | Date | string
    bio?: StringNullableFilter<"Fighter"> | string | null
    imageUrl?: StringFilter<"Fighter"> | string
    weightClassId?: UuidNullableFilter<"Fighter"> | string | null
    gymId?: UuidNullableFilter<"Fighter"> | string | null
    weightClass?: XOR<WeightClassNullableScalarRelationFilter, WeightClassWhereInput> | null
    gym?: XOR<GymNullableScalarRelationFilter, GymWhereInput> | null
    styles?: FightingStyleListRelationFilter
    fightsA?: FightListRelationFilter
    fightsB?: FightListRelationFilter
    trackedByUsers?: UserListRelationFilter
  }, "id">

  export type FighterOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrderInput | SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    heightCm?: SortOrder
    reachCm?: SortOrder
    dob?: SortOrder
    bio?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    weightClassId?: SortOrderInput | SortOrder
    gymId?: SortOrderInput | SortOrder
    _count?: FighterCountOrderByAggregateInput
    _avg?: FighterAvgOrderByAggregateInput
    _max?: FighterMaxOrderByAggregateInput
    _min?: FighterMinOrderByAggregateInput
    _sum?: FighterSumOrderByAggregateInput
  }

  export type FighterScalarWhereWithAggregatesInput = {
    AND?: FighterScalarWhereWithAggregatesInput | FighterScalarWhereWithAggregatesInput[]
    OR?: FighterScalarWhereWithAggregatesInput[]
    NOT?: FighterScalarWhereWithAggregatesInput | FighterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Fighter"> | string
    firstName?: StringWithAggregatesFilter<"Fighter"> | string
    lastName?: StringWithAggregatesFilter<"Fighter"> | string
    nickname?: StringNullableWithAggregatesFilter<"Fighter"> | string | null
    wins?: IntWithAggregatesFilter<"Fighter"> | number
    losses?: IntWithAggregatesFilter<"Fighter"> | number
    draws?: IntWithAggregatesFilter<"Fighter"> | number
    heightCm?: IntWithAggregatesFilter<"Fighter"> | number
    reachCm?: IntWithAggregatesFilter<"Fighter"> | number
    dob?: DateTimeWithAggregatesFilter<"Fighter"> | Date | string
    bio?: StringNullableWithAggregatesFilter<"Fighter"> | string | null
    imageUrl?: StringWithAggregatesFilter<"Fighter"> | string
    weightClassId?: UuidNullableWithAggregatesFilter<"Fighter"> | string | null
    gymId?: UuidNullableWithAggregatesFilter<"Fighter"> | string | null
  }

  export type GymWhereInput = {
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    id?: UuidFilter<"Gym"> | string
    name?: StringFilter<"Gym"> | string
    location?: StringNullableFilter<"Gym"> | string | null
    fighters?: FighterListRelationFilter
  }

  export type GymOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    fighters?: FighterOrderByRelationAggregateInput
  }

  export type GymWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    location?: StringNullableFilter<"Gym"> | string | null
    fighters?: FighterListRelationFilter
  }, "id" | "name">

  export type GymOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    _count?: GymCountOrderByAggregateInput
    _max?: GymMaxOrderByAggregateInput
    _min?: GymMinOrderByAggregateInput
  }

  export type GymScalarWhereWithAggregatesInput = {
    AND?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    OR?: GymScalarWhereWithAggregatesInput[]
    NOT?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Gym"> | string
    name?: StringWithAggregatesFilter<"Gym"> | string
    location?: StringNullableWithAggregatesFilter<"Gym"> | string | null
  }

  export type WeightClassWhereInput = {
    AND?: WeightClassWhereInput | WeightClassWhereInput[]
    OR?: WeightClassWhereInput[]
    NOT?: WeightClassWhereInput | WeightClassWhereInput[]
    id?: UuidFilter<"WeightClass"> | string
    name?: StringFilter<"WeightClass"> | string
    limitLb?: IntFilter<"WeightClass"> | number
    fighters?: FighterListRelationFilter
  }

  export type WeightClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    limitLb?: SortOrder
    fighters?: FighterOrderByRelationAggregateInput
  }

  export type WeightClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: WeightClassWhereInput | WeightClassWhereInput[]
    OR?: WeightClassWhereInput[]
    NOT?: WeightClassWhereInput | WeightClassWhereInput[]
    limitLb?: IntFilter<"WeightClass"> | number
    fighters?: FighterListRelationFilter
  }, "id" | "name">

  export type WeightClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    limitLb?: SortOrder
    _count?: WeightClassCountOrderByAggregateInput
    _avg?: WeightClassAvgOrderByAggregateInput
    _max?: WeightClassMaxOrderByAggregateInput
    _min?: WeightClassMinOrderByAggregateInput
    _sum?: WeightClassSumOrderByAggregateInput
  }

  export type WeightClassScalarWhereWithAggregatesInput = {
    AND?: WeightClassScalarWhereWithAggregatesInput | WeightClassScalarWhereWithAggregatesInput[]
    OR?: WeightClassScalarWhereWithAggregatesInput[]
    NOT?: WeightClassScalarWhereWithAggregatesInput | WeightClassScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WeightClass"> | string
    name?: StringWithAggregatesFilter<"WeightClass"> | string
    limitLb?: IntWithAggregatesFilter<"WeightClass"> | number
  }

  export type FightingStyleWhereInput = {
    AND?: FightingStyleWhereInput | FightingStyleWhereInput[]
    OR?: FightingStyleWhereInput[]
    NOT?: FightingStyleWhereInput | FightingStyleWhereInput[]
    id?: UuidFilter<"FightingStyle"> | string
    name?: StringFilter<"FightingStyle"> | string
    fighters?: FighterListRelationFilter
  }

  export type FightingStyleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fighters?: FighterOrderByRelationAggregateInput
  }

  export type FightingStyleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: FightingStyleWhereInput | FightingStyleWhereInput[]
    OR?: FightingStyleWhereInput[]
    NOT?: FightingStyleWhereInput | FightingStyleWhereInput[]
    fighters?: FighterListRelationFilter
  }, "id" | "name">

  export type FightingStyleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FightingStyleCountOrderByAggregateInput
    _max?: FightingStyleMaxOrderByAggregateInput
    _min?: FightingStyleMinOrderByAggregateInput
  }

  export type FightingStyleScalarWhereWithAggregatesInput = {
    AND?: FightingStyleScalarWhereWithAggregatesInput | FightingStyleScalarWhereWithAggregatesInput[]
    OR?: FightingStyleScalarWhereWithAggregatesInput[]
    NOT?: FightingStyleScalarWhereWithAggregatesInput | FightingStyleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FightingStyle"> | string
    name?: StringWithAggregatesFilter<"FightingStyle"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: UuidFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    fights?: FightListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    fights?: FightOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    fights?: FightListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type FightWhereInput = {
    AND?: FightWhereInput | FightWhereInput[]
    OR?: FightWhereInput[]
    NOT?: FightWhereInput | FightWhereInput[]
    id?: UuidFilter<"Fight"> | string
    eventId?: UuidFilter<"Fight"> | string
    fighterAId?: UuidFilter<"Fight"> | string
    fighterBId?: UuidFilter<"Fight"> | string
    isMainEvent?: BoolFilter<"Fight"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    fighterA?: XOR<FighterScalarRelationFilter, FighterWhereInput>
    fighterB?: XOR<FighterScalarRelationFilter, FighterWhereInput>
  }

  export type FightOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    fighterAId?: SortOrder
    fighterBId?: SortOrder
    isMainEvent?: SortOrder
    event?: EventOrderByWithRelationInput
    fighterA?: FighterOrderByWithRelationInput
    fighterB?: FighterOrderByWithRelationInput
  }

  export type FightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FightWhereInput | FightWhereInput[]
    OR?: FightWhereInput[]
    NOT?: FightWhereInput | FightWhereInput[]
    eventId?: UuidFilter<"Fight"> | string
    fighterAId?: UuidFilter<"Fight"> | string
    fighterBId?: UuidFilter<"Fight"> | string
    isMainEvent?: BoolFilter<"Fight"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    fighterA?: XOR<FighterScalarRelationFilter, FighterWhereInput>
    fighterB?: XOR<FighterScalarRelationFilter, FighterWhereInput>
  }, "id">

  export type FightOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    fighterAId?: SortOrder
    fighterBId?: SortOrder
    isMainEvent?: SortOrder
    _count?: FightCountOrderByAggregateInput
    _max?: FightMaxOrderByAggregateInput
    _min?: FightMinOrderByAggregateInput
  }

  export type FightScalarWhereWithAggregatesInput = {
    AND?: FightScalarWhereWithAggregatesInput | FightScalarWhereWithAggregatesInput[]
    OR?: FightScalarWhereWithAggregatesInput[]
    NOT?: FightScalarWhereWithAggregatesInput | FightScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Fight"> | string
    eventId?: UuidWithAggregatesFilter<"Fight"> | string
    fighterAId?: UuidWithAggregatesFilter<"Fight"> | string
    fighterBId?: UuidWithAggregatesFilter<"Fight"> | string
    isMainEvent?: BoolWithAggregatesFilter<"Fight"> | boolean
  }

  export type NewsItemWhereInput = {
    AND?: NewsItemWhereInput | NewsItemWhereInput[]
    OR?: NewsItemWhereInput[]
    NOT?: NewsItemWhereInput | NewsItemWhereInput[]
    id?: UuidFilter<"NewsItem"> | string
    title?: StringFilter<"NewsItem"> | string
    snippet?: StringFilter<"NewsItem"> | string
    content?: StringFilter<"NewsItem"> | string
    publishedAt?: DateTimeFilter<"NewsItem"> | Date | string
    author?: StringNullableFilter<"NewsItem"> | string | null
  }

  export type NewsItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    snippet?: SortOrder
    content?: SortOrder
    publishedAt?: SortOrder
    author?: SortOrderInput | SortOrder
  }

  export type NewsItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsItemWhereInput | NewsItemWhereInput[]
    OR?: NewsItemWhereInput[]
    NOT?: NewsItemWhereInput | NewsItemWhereInput[]
    title?: StringFilter<"NewsItem"> | string
    snippet?: StringFilter<"NewsItem"> | string
    content?: StringFilter<"NewsItem"> | string
    publishedAt?: DateTimeFilter<"NewsItem"> | Date | string
    author?: StringNullableFilter<"NewsItem"> | string | null
  }, "id">

  export type NewsItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    snippet?: SortOrder
    content?: SortOrder
    publishedAt?: SortOrder
    author?: SortOrderInput | SortOrder
    _count?: NewsItemCountOrderByAggregateInput
    _max?: NewsItemMaxOrderByAggregateInput
    _min?: NewsItemMinOrderByAggregateInput
  }

  export type NewsItemScalarWhereWithAggregatesInput = {
    AND?: NewsItemScalarWhereWithAggregatesInput | NewsItemScalarWhereWithAggregatesInput[]
    OR?: NewsItemScalarWhereWithAggregatesInput[]
    NOT?: NewsItemScalarWhereWithAggregatesInput | NewsItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NewsItem"> | string
    title?: StringWithAggregatesFilter<"NewsItem"> | string
    snippet?: StringWithAggregatesFilter<"NewsItem"> | string
    content?: StringWithAggregatesFilter<"NewsItem"> | string
    publishedAt?: DateTimeWithAggregatesFilter<"NewsItem"> | Date | string
    author?: StringNullableWithAggregatesFilter<"NewsItem"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    sessions?: SessionCreateNestedManyWithoutUserInput
    trackedFighters?: FighterCreateNestedManyWithoutTrackedByUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    trackedFighters?: FighterUncheckedCreateNestedManyWithoutTrackedByUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sessions?: SessionUpdateManyWithoutUserNestedInput
    trackedFighters?: FighterUpdateManyWithoutTrackedByUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    trackedFighters?: FighterUncheckedUpdateManyWithoutTrackedByUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionCreateInput = {
    id?: string
    activeFrom?: Date | string
    activeUntil: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    activeFrom?: Date | string
    activeUntil: Date | string
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id?: string
    activeFrom?: Date | string
    activeUntil: Date | string
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    activeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FighterCreateInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClass?: WeightClassCreateNestedOneWithoutFightersInput
    gym?: GymCreateNestedOneWithoutFightersInput
    styles?: FightingStyleCreateNestedManyWithoutFightersInput
    fightsA?: FightCreateNestedManyWithoutFighterAInput
    fightsB?: FightCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClassId?: string | null
    gymId?: string | null
    styles?: FightingStyleUncheckedCreateNestedManyWithoutFightersInput
    fightsA?: FightUncheckedCreateNestedManyWithoutFighterAInput
    fightsB?: FightUncheckedCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserUncheckedCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClass?: WeightClassUpdateOneWithoutFightersNestedInput
    gym?: GymUpdateOneWithoutFightersNestedInput
    styles?: FightingStyleUpdateManyWithoutFightersNestedInput
    fightsA?: FightUpdateManyWithoutFighterANestedInput
    fightsB?: FightUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    styles?: FightingStyleUncheckedUpdateManyWithoutFightersNestedInput
    fightsA?: FightUncheckedUpdateManyWithoutFighterANestedInput
    fightsB?: FightUncheckedUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUncheckedUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClassId?: string | null
    gymId?: string | null
  }

  export type FighterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type FighterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GymCreateInput = {
    id?: string
    name: string
    location?: string | null
    fighters?: FighterCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateInput = {
    id?: string
    name: string
    location?: string | null
    fighters?: FighterUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    fighters?: FighterUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    fighters?: FighterUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymCreateManyInput = {
    id?: string
    name: string
    location?: string | null
  }

  export type GymUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GymUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeightClassCreateInput = {
    id?: string
    name: string
    limitLb: number
    fighters?: FighterCreateNestedManyWithoutWeightClassInput
  }

  export type WeightClassUncheckedCreateInput = {
    id?: string
    name: string
    limitLb: number
    fighters?: FighterUncheckedCreateNestedManyWithoutWeightClassInput
  }

  export type WeightClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limitLb?: IntFieldUpdateOperationsInput | number
    fighters?: FighterUpdateManyWithoutWeightClassNestedInput
  }

  export type WeightClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limitLb?: IntFieldUpdateOperationsInput | number
    fighters?: FighterUncheckedUpdateManyWithoutWeightClassNestedInput
  }

  export type WeightClassCreateManyInput = {
    id?: string
    name: string
    limitLb: number
  }

  export type WeightClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limitLb?: IntFieldUpdateOperationsInput | number
  }

  export type WeightClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limitLb?: IntFieldUpdateOperationsInput | number
  }

  export type FightingStyleCreateInput = {
    id?: string
    name: string
    fighters?: FighterCreateNestedManyWithoutStylesInput
  }

  export type FightingStyleUncheckedCreateInput = {
    id?: string
    name: string
    fighters?: FighterUncheckedCreateNestedManyWithoutStylesInput
  }

  export type FightingStyleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fighters?: FighterUpdateManyWithoutStylesNestedInput
  }

  export type FightingStyleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fighters?: FighterUncheckedUpdateManyWithoutStylesNestedInput
  }

  export type FightingStyleCreateManyInput = {
    id?: string
    name: string
  }

  export type FightingStyleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FightingStyleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    name: string
    date: Date | string
    location?: string | null
    fights?: FightCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    date: Date | string
    location?: string | null
    fights?: FightUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    fights?: FightUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    fights?: FightUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    date: Date | string
    location?: string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FightCreateInput = {
    id?: string
    isMainEvent?: boolean
    event: EventCreateNestedOneWithoutFightsInput
    fighterA: FighterCreateNestedOneWithoutFightsAInput
    fighterB: FighterCreateNestedOneWithoutFightsBInput
  }

  export type FightUncheckedCreateInput = {
    id?: string
    eventId: string
    fighterAId: string
    fighterBId: string
    isMainEvent?: boolean
  }

  export type FightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutFightsNestedInput
    fighterA?: FighterUpdateOneRequiredWithoutFightsANestedInput
    fighterB?: FighterUpdateOneRequiredWithoutFightsBNestedInput
  }

  export type FightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    fighterAId?: StringFieldUpdateOperationsInput | string
    fighterBId?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FightCreateManyInput = {
    id?: string
    eventId: string
    fighterAId: string
    fighterBId: string
    isMainEvent?: boolean
  }

  export type FightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    fighterAId?: StringFieldUpdateOperationsInput | string
    fighterBId?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NewsItemCreateInput = {
    id?: string
    title: string
    snippet: string
    content: string
    publishedAt?: Date | string
    author?: string | null
  }

  export type NewsItemUncheckedCreateInput = {
    id?: string
    title: string
    snippet: string
    content: string
    publishedAt?: Date | string
    author?: string | null
  }

  export type NewsItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    snippet?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    snippet?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsItemCreateManyInput = {
    id?: string
    title: string
    snippet: string
    content: string
    publishedAt?: Date | string
    author?: string | null
  }

  export type NewsItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    snippet?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    snippet?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type FighterListRelationFilter = {
    every?: FighterWhereInput
    some?: FighterWhereInput
    none?: FighterWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FighterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    activeFrom?: SortOrder
    activeUntil?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    activeFrom?: SortOrder
    activeUntil?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    activeFrom?: SortOrder
    activeUntil?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type WeightClassNullableScalarRelationFilter = {
    is?: WeightClassWhereInput | null
    isNot?: WeightClassWhereInput | null
  }

  export type GymNullableScalarRelationFilter = {
    is?: GymWhereInput | null
    isNot?: GymWhereInput | null
  }

  export type FightingStyleListRelationFilter = {
    every?: FightingStyleWhereInput
    some?: FightingStyleWhereInput
    none?: FightingStyleWhereInput
  }

  export type FightListRelationFilter = {
    every?: FightWhereInput
    some?: FightWhereInput
    none?: FightWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FightingStyleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FighterCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    heightCm?: SortOrder
    reachCm?: SortOrder
    dob?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    weightClassId?: SortOrder
    gymId?: SortOrder
  }

  export type FighterAvgOrderByAggregateInput = {
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    heightCm?: SortOrder
    reachCm?: SortOrder
  }

  export type FighterMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    heightCm?: SortOrder
    reachCm?: SortOrder
    dob?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    weightClassId?: SortOrder
    gymId?: SortOrder
  }

  export type FighterMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    heightCm?: SortOrder
    reachCm?: SortOrder
    dob?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    weightClassId?: SortOrder
    gymId?: SortOrder
  }

  export type FighterSumOrderByAggregateInput = {
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    heightCm?: SortOrder
    reachCm?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GymCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type GymMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type GymMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type WeightClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    limitLb?: SortOrder
  }

  export type WeightClassAvgOrderByAggregateInput = {
    limitLb?: SortOrder
  }

  export type WeightClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    limitLb?: SortOrder
  }

  export type WeightClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    limitLb?: SortOrder
  }

  export type WeightClassSumOrderByAggregateInput = {
    limitLb?: SortOrder
  }

  export type FightingStyleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FightingStyleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FightingStyleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    location?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    location?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    location?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type FighterScalarRelationFilter = {
    is?: FighterWhereInput
    isNot?: FighterWhereInput
  }

  export type FightCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    fighterAId?: SortOrder
    fighterBId?: SortOrder
    isMainEvent?: SortOrder
  }

  export type FightMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    fighterAId?: SortOrder
    fighterBId?: SortOrder
    isMainEvent?: SortOrder
  }

  export type FightMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    fighterAId?: SortOrder
    fighterBId?: SortOrder
    isMainEvent?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NewsItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    snippet?: SortOrder
    content?: SortOrder
    publishedAt?: SortOrder
    author?: SortOrder
  }

  export type NewsItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    snippet?: SortOrder
    content?: SortOrder
    publishedAt?: SortOrder
    author?: SortOrder
  }

  export type NewsItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    snippet?: SortOrder
    content?: SortOrder
    publishedAt?: SortOrder
    author?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type FighterCreateNestedManyWithoutTrackedByUsersInput = {
    create?: XOR<FighterCreateWithoutTrackedByUsersInput, FighterUncheckedCreateWithoutTrackedByUsersInput> | FighterCreateWithoutTrackedByUsersInput[] | FighterUncheckedCreateWithoutTrackedByUsersInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutTrackedByUsersInput | FighterCreateOrConnectWithoutTrackedByUsersInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type FighterUncheckedCreateNestedManyWithoutTrackedByUsersInput = {
    create?: XOR<FighterCreateWithoutTrackedByUsersInput, FighterUncheckedCreateWithoutTrackedByUsersInput> | FighterCreateWithoutTrackedByUsersInput[] | FighterUncheckedCreateWithoutTrackedByUsersInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutTrackedByUsersInput | FighterCreateOrConnectWithoutTrackedByUsersInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type FighterUpdateManyWithoutTrackedByUsersNestedInput = {
    create?: XOR<FighterCreateWithoutTrackedByUsersInput, FighterUncheckedCreateWithoutTrackedByUsersInput> | FighterCreateWithoutTrackedByUsersInput[] | FighterUncheckedCreateWithoutTrackedByUsersInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutTrackedByUsersInput | FighterCreateOrConnectWithoutTrackedByUsersInput[]
    upsert?: FighterUpsertWithWhereUniqueWithoutTrackedByUsersInput | FighterUpsertWithWhereUniqueWithoutTrackedByUsersInput[]
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    update?: FighterUpdateWithWhereUniqueWithoutTrackedByUsersInput | FighterUpdateWithWhereUniqueWithoutTrackedByUsersInput[]
    updateMany?: FighterUpdateManyWithWhereWithoutTrackedByUsersInput | FighterUpdateManyWithWhereWithoutTrackedByUsersInput[]
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type FighterUncheckedUpdateManyWithoutTrackedByUsersNestedInput = {
    create?: XOR<FighterCreateWithoutTrackedByUsersInput, FighterUncheckedCreateWithoutTrackedByUsersInput> | FighterCreateWithoutTrackedByUsersInput[] | FighterUncheckedCreateWithoutTrackedByUsersInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutTrackedByUsersInput | FighterCreateOrConnectWithoutTrackedByUsersInput[]
    upsert?: FighterUpsertWithWhereUniqueWithoutTrackedByUsersInput | FighterUpsertWithWhereUniqueWithoutTrackedByUsersInput[]
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    update?: FighterUpdateWithWhereUniqueWithoutTrackedByUsersInput | FighterUpdateWithWhereUniqueWithoutTrackedByUsersInput[]
    updateMany?: FighterUpdateManyWithWhereWithoutTrackedByUsersInput | FighterUpdateManyWithWhereWithoutTrackedByUsersInput[]
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type WeightClassCreateNestedOneWithoutFightersInput = {
    create?: XOR<WeightClassCreateWithoutFightersInput, WeightClassUncheckedCreateWithoutFightersInput>
    connectOrCreate?: WeightClassCreateOrConnectWithoutFightersInput
    connect?: WeightClassWhereUniqueInput
  }

  export type GymCreateNestedOneWithoutFightersInput = {
    create?: XOR<GymCreateWithoutFightersInput, GymUncheckedCreateWithoutFightersInput>
    connectOrCreate?: GymCreateOrConnectWithoutFightersInput
    connect?: GymWhereUniqueInput
  }

  export type FightingStyleCreateNestedManyWithoutFightersInput = {
    create?: XOR<FightingStyleCreateWithoutFightersInput, FightingStyleUncheckedCreateWithoutFightersInput> | FightingStyleCreateWithoutFightersInput[] | FightingStyleUncheckedCreateWithoutFightersInput[]
    connectOrCreate?: FightingStyleCreateOrConnectWithoutFightersInput | FightingStyleCreateOrConnectWithoutFightersInput[]
    connect?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
  }

  export type FightCreateNestedManyWithoutFighterAInput = {
    create?: XOR<FightCreateWithoutFighterAInput, FightUncheckedCreateWithoutFighterAInput> | FightCreateWithoutFighterAInput[] | FightUncheckedCreateWithoutFighterAInput[]
    connectOrCreate?: FightCreateOrConnectWithoutFighterAInput | FightCreateOrConnectWithoutFighterAInput[]
    createMany?: FightCreateManyFighterAInputEnvelope
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
  }

  export type FightCreateNestedManyWithoutFighterBInput = {
    create?: XOR<FightCreateWithoutFighterBInput, FightUncheckedCreateWithoutFighterBInput> | FightCreateWithoutFighterBInput[] | FightUncheckedCreateWithoutFighterBInput[]
    connectOrCreate?: FightCreateOrConnectWithoutFighterBInput | FightCreateOrConnectWithoutFighterBInput[]
    createMany?: FightCreateManyFighterBInputEnvelope
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTrackedFightersInput = {
    create?: XOR<UserCreateWithoutTrackedFightersInput, UserUncheckedCreateWithoutTrackedFightersInput> | UserCreateWithoutTrackedFightersInput[] | UserUncheckedCreateWithoutTrackedFightersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTrackedFightersInput | UserCreateOrConnectWithoutTrackedFightersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FightingStyleUncheckedCreateNestedManyWithoutFightersInput = {
    create?: XOR<FightingStyleCreateWithoutFightersInput, FightingStyleUncheckedCreateWithoutFightersInput> | FightingStyleCreateWithoutFightersInput[] | FightingStyleUncheckedCreateWithoutFightersInput[]
    connectOrCreate?: FightingStyleCreateOrConnectWithoutFightersInput | FightingStyleCreateOrConnectWithoutFightersInput[]
    connect?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
  }

  export type FightUncheckedCreateNestedManyWithoutFighterAInput = {
    create?: XOR<FightCreateWithoutFighterAInput, FightUncheckedCreateWithoutFighterAInput> | FightCreateWithoutFighterAInput[] | FightUncheckedCreateWithoutFighterAInput[]
    connectOrCreate?: FightCreateOrConnectWithoutFighterAInput | FightCreateOrConnectWithoutFighterAInput[]
    createMany?: FightCreateManyFighterAInputEnvelope
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
  }

  export type FightUncheckedCreateNestedManyWithoutFighterBInput = {
    create?: XOR<FightCreateWithoutFighterBInput, FightUncheckedCreateWithoutFighterBInput> | FightCreateWithoutFighterBInput[] | FightUncheckedCreateWithoutFighterBInput[]
    connectOrCreate?: FightCreateOrConnectWithoutFighterBInput | FightCreateOrConnectWithoutFighterBInput[]
    createMany?: FightCreateManyFighterBInputEnvelope
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTrackedFightersInput = {
    create?: XOR<UserCreateWithoutTrackedFightersInput, UserUncheckedCreateWithoutTrackedFightersInput> | UserCreateWithoutTrackedFightersInput[] | UserUncheckedCreateWithoutTrackedFightersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTrackedFightersInput | UserCreateOrConnectWithoutTrackedFightersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeightClassUpdateOneWithoutFightersNestedInput = {
    create?: XOR<WeightClassCreateWithoutFightersInput, WeightClassUncheckedCreateWithoutFightersInput>
    connectOrCreate?: WeightClassCreateOrConnectWithoutFightersInput
    upsert?: WeightClassUpsertWithoutFightersInput
    disconnect?: WeightClassWhereInput | boolean
    delete?: WeightClassWhereInput | boolean
    connect?: WeightClassWhereUniqueInput
    update?: XOR<XOR<WeightClassUpdateToOneWithWhereWithoutFightersInput, WeightClassUpdateWithoutFightersInput>, WeightClassUncheckedUpdateWithoutFightersInput>
  }

  export type GymUpdateOneWithoutFightersNestedInput = {
    create?: XOR<GymCreateWithoutFightersInput, GymUncheckedCreateWithoutFightersInput>
    connectOrCreate?: GymCreateOrConnectWithoutFightersInput
    upsert?: GymUpsertWithoutFightersInput
    disconnect?: GymWhereInput | boolean
    delete?: GymWhereInput | boolean
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutFightersInput, GymUpdateWithoutFightersInput>, GymUncheckedUpdateWithoutFightersInput>
  }

  export type FightingStyleUpdateManyWithoutFightersNestedInput = {
    create?: XOR<FightingStyleCreateWithoutFightersInput, FightingStyleUncheckedCreateWithoutFightersInput> | FightingStyleCreateWithoutFightersInput[] | FightingStyleUncheckedCreateWithoutFightersInput[]
    connectOrCreate?: FightingStyleCreateOrConnectWithoutFightersInput | FightingStyleCreateOrConnectWithoutFightersInput[]
    upsert?: FightingStyleUpsertWithWhereUniqueWithoutFightersInput | FightingStyleUpsertWithWhereUniqueWithoutFightersInput[]
    set?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
    disconnect?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
    delete?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
    connect?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
    update?: FightingStyleUpdateWithWhereUniqueWithoutFightersInput | FightingStyleUpdateWithWhereUniqueWithoutFightersInput[]
    updateMany?: FightingStyleUpdateManyWithWhereWithoutFightersInput | FightingStyleUpdateManyWithWhereWithoutFightersInput[]
    deleteMany?: FightingStyleScalarWhereInput | FightingStyleScalarWhereInput[]
  }

  export type FightUpdateManyWithoutFighterANestedInput = {
    create?: XOR<FightCreateWithoutFighterAInput, FightUncheckedCreateWithoutFighterAInput> | FightCreateWithoutFighterAInput[] | FightUncheckedCreateWithoutFighterAInput[]
    connectOrCreate?: FightCreateOrConnectWithoutFighterAInput | FightCreateOrConnectWithoutFighterAInput[]
    upsert?: FightUpsertWithWhereUniqueWithoutFighterAInput | FightUpsertWithWhereUniqueWithoutFighterAInput[]
    createMany?: FightCreateManyFighterAInputEnvelope
    set?: FightWhereUniqueInput | FightWhereUniqueInput[]
    disconnect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    delete?: FightWhereUniqueInput | FightWhereUniqueInput[]
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    update?: FightUpdateWithWhereUniqueWithoutFighterAInput | FightUpdateWithWhereUniqueWithoutFighterAInput[]
    updateMany?: FightUpdateManyWithWhereWithoutFighterAInput | FightUpdateManyWithWhereWithoutFighterAInput[]
    deleteMany?: FightScalarWhereInput | FightScalarWhereInput[]
  }

  export type FightUpdateManyWithoutFighterBNestedInput = {
    create?: XOR<FightCreateWithoutFighterBInput, FightUncheckedCreateWithoutFighterBInput> | FightCreateWithoutFighterBInput[] | FightUncheckedCreateWithoutFighterBInput[]
    connectOrCreate?: FightCreateOrConnectWithoutFighterBInput | FightCreateOrConnectWithoutFighterBInput[]
    upsert?: FightUpsertWithWhereUniqueWithoutFighterBInput | FightUpsertWithWhereUniqueWithoutFighterBInput[]
    createMany?: FightCreateManyFighterBInputEnvelope
    set?: FightWhereUniqueInput | FightWhereUniqueInput[]
    disconnect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    delete?: FightWhereUniqueInput | FightWhereUniqueInput[]
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    update?: FightUpdateWithWhereUniqueWithoutFighterBInput | FightUpdateWithWhereUniqueWithoutFighterBInput[]
    updateMany?: FightUpdateManyWithWhereWithoutFighterBInput | FightUpdateManyWithWhereWithoutFighterBInput[]
    deleteMany?: FightScalarWhereInput | FightScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTrackedFightersNestedInput = {
    create?: XOR<UserCreateWithoutTrackedFightersInput, UserUncheckedCreateWithoutTrackedFightersInput> | UserCreateWithoutTrackedFightersInput[] | UserUncheckedCreateWithoutTrackedFightersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTrackedFightersInput | UserCreateOrConnectWithoutTrackedFightersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTrackedFightersInput | UserUpsertWithWhereUniqueWithoutTrackedFightersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTrackedFightersInput | UserUpdateWithWhereUniqueWithoutTrackedFightersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTrackedFightersInput | UserUpdateManyWithWhereWithoutTrackedFightersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FightingStyleUncheckedUpdateManyWithoutFightersNestedInput = {
    create?: XOR<FightingStyleCreateWithoutFightersInput, FightingStyleUncheckedCreateWithoutFightersInput> | FightingStyleCreateWithoutFightersInput[] | FightingStyleUncheckedCreateWithoutFightersInput[]
    connectOrCreate?: FightingStyleCreateOrConnectWithoutFightersInput | FightingStyleCreateOrConnectWithoutFightersInput[]
    upsert?: FightingStyleUpsertWithWhereUniqueWithoutFightersInput | FightingStyleUpsertWithWhereUniqueWithoutFightersInput[]
    set?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
    disconnect?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
    delete?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
    connect?: FightingStyleWhereUniqueInput | FightingStyleWhereUniqueInput[]
    update?: FightingStyleUpdateWithWhereUniqueWithoutFightersInput | FightingStyleUpdateWithWhereUniqueWithoutFightersInput[]
    updateMany?: FightingStyleUpdateManyWithWhereWithoutFightersInput | FightingStyleUpdateManyWithWhereWithoutFightersInput[]
    deleteMany?: FightingStyleScalarWhereInput | FightingStyleScalarWhereInput[]
  }

  export type FightUncheckedUpdateManyWithoutFighterANestedInput = {
    create?: XOR<FightCreateWithoutFighterAInput, FightUncheckedCreateWithoutFighterAInput> | FightCreateWithoutFighterAInput[] | FightUncheckedCreateWithoutFighterAInput[]
    connectOrCreate?: FightCreateOrConnectWithoutFighterAInput | FightCreateOrConnectWithoutFighterAInput[]
    upsert?: FightUpsertWithWhereUniqueWithoutFighterAInput | FightUpsertWithWhereUniqueWithoutFighterAInput[]
    createMany?: FightCreateManyFighterAInputEnvelope
    set?: FightWhereUniqueInput | FightWhereUniqueInput[]
    disconnect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    delete?: FightWhereUniqueInput | FightWhereUniqueInput[]
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    update?: FightUpdateWithWhereUniqueWithoutFighterAInput | FightUpdateWithWhereUniqueWithoutFighterAInput[]
    updateMany?: FightUpdateManyWithWhereWithoutFighterAInput | FightUpdateManyWithWhereWithoutFighterAInput[]
    deleteMany?: FightScalarWhereInput | FightScalarWhereInput[]
  }

  export type FightUncheckedUpdateManyWithoutFighterBNestedInput = {
    create?: XOR<FightCreateWithoutFighterBInput, FightUncheckedCreateWithoutFighterBInput> | FightCreateWithoutFighterBInput[] | FightUncheckedCreateWithoutFighterBInput[]
    connectOrCreate?: FightCreateOrConnectWithoutFighterBInput | FightCreateOrConnectWithoutFighterBInput[]
    upsert?: FightUpsertWithWhereUniqueWithoutFighterBInput | FightUpsertWithWhereUniqueWithoutFighterBInput[]
    createMany?: FightCreateManyFighterBInputEnvelope
    set?: FightWhereUniqueInput | FightWhereUniqueInput[]
    disconnect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    delete?: FightWhereUniqueInput | FightWhereUniqueInput[]
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    update?: FightUpdateWithWhereUniqueWithoutFighterBInput | FightUpdateWithWhereUniqueWithoutFighterBInput[]
    updateMany?: FightUpdateManyWithWhereWithoutFighterBInput | FightUpdateManyWithWhereWithoutFighterBInput[]
    deleteMany?: FightScalarWhereInput | FightScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTrackedFightersNestedInput = {
    create?: XOR<UserCreateWithoutTrackedFightersInput, UserUncheckedCreateWithoutTrackedFightersInput> | UserCreateWithoutTrackedFightersInput[] | UserUncheckedCreateWithoutTrackedFightersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTrackedFightersInput | UserCreateOrConnectWithoutTrackedFightersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTrackedFightersInput | UserUpsertWithWhereUniqueWithoutTrackedFightersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTrackedFightersInput | UserUpdateWithWhereUniqueWithoutTrackedFightersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTrackedFightersInput | UserUpdateManyWithWhereWithoutTrackedFightersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FighterCreateNestedManyWithoutGymInput = {
    create?: XOR<FighterCreateWithoutGymInput, FighterUncheckedCreateWithoutGymInput> | FighterCreateWithoutGymInput[] | FighterUncheckedCreateWithoutGymInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutGymInput | FighterCreateOrConnectWithoutGymInput[]
    createMany?: FighterCreateManyGymInputEnvelope
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
  }

  export type FighterUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<FighterCreateWithoutGymInput, FighterUncheckedCreateWithoutGymInput> | FighterCreateWithoutGymInput[] | FighterUncheckedCreateWithoutGymInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutGymInput | FighterCreateOrConnectWithoutGymInput[]
    createMany?: FighterCreateManyGymInputEnvelope
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
  }

  export type FighterUpdateManyWithoutGymNestedInput = {
    create?: XOR<FighterCreateWithoutGymInput, FighterUncheckedCreateWithoutGymInput> | FighterCreateWithoutGymInput[] | FighterUncheckedCreateWithoutGymInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutGymInput | FighterCreateOrConnectWithoutGymInput[]
    upsert?: FighterUpsertWithWhereUniqueWithoutGymInput | FighterUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: FighterCreateManyGymInputEnvelope
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    update?: FighterUpdateWithWhereUniqueWithoutGymInput | FighterUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: FighterUpdateManyWithWhereWithoutGymInput | FighterUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[]
  }

  export type FighterUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<FighterCreateWithoutGymInput, FighterUncheckedCreateWithoutGymInput> | FighterCreateWithoutGymInput[] | FighterUncheckedCreateWithoutGymInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutGymInput | FighterCreateOrConnectWithoutGymInput[]
    upsert?: FighterUpsertWithWhereUniqueWithoutGymInput | FighterUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: FighterCreateManyGymInputEnvelope
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    update?: FighterUpdateWithWhereUniqueWithoutGymInput | FighterUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: FighterUpdateManyWithWhereWithoutGymInput | FighterUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[]
  }

  export type FighterCreateNestedManyWithoutWeightClassInput = {
    create?: XOR<FighterCreateWithoutWeightClassInput, FighterUncheckedCreateWithoutWeightClassInput> | FighterCreateWithoutWeightClassInput[] | FighterUncheckedCreateWithoutWeightClassInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutWeightClassInput | FighterCreateOrConnectWithoutWeightClassInput[]
    createMany?: FighterCreateManyWeightClassInputEnvelope
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
  }

  export type FighterUncheckedCreateNestedManyWithoutWeightClassInput = {
    create?: XOR<FighterCreateWithoutWeightClassInput, FighterUncheckedCreateWithoutWeightClassInput> | FighterCreateWithoutWeightClassInput[] | FighterUncheckedCreateWithoutWeightClassInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutWeightClassInput | FighterCreateOrConnectWithoutWeightClassInput[]
    createMany?: FighterCreateManyWeightClassInputEnvelope
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
  }

  export type FighterUpdateManyWithoutWeightClassNestedInput = {
    create?: XOR<FighterCreateWithoutWeightClassInput, FighterUncheckedCreateWithoutWeightClassInput> | FighterCreateWithoutWeightClassInput[] | FighterUncheckedCreateWithoutWeightClassInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutWeightClassInput | FighterCreateOrConnectWithoutWeightClassInput[]
    upsert?: FighterUpsertWithWhereUniqueWithoutWeightClassInput | FighterUpsertWithWhereUniqueWithoutWeightClassInput[]
    createMany?: FighterCreateManyWeightClassInputEnvelope
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    update?: FighterUpdateWithWhereUniqueWithoutWeightClassInput | FighterUpdateWithWhereUniqueWithoutWeightClassInput[]
    updateMany?: FighterUpdateManyWithWhereWithoutWeightClassInput | FighterUpdateManyWithWhereWithoutWeightClassInput[]
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[]
  }

  export type FighterUncheckedUpdateManyWithoutWeightClassNestedInput = {
    create?: XOR<FighterCreateWithoutWeightClassInput, FighterUncheckedCreateWithoutWeightClassInput> | FighterCreateWithoutWeightClassInput[] | FighterUncheckedCreateWithoutWeightClassInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutWeightClassInput | FighterCreateOrConnectWithoutWeightClassInput[]
    upsert?: FighterUpsertWithWhereUniqueWithoutWeightClassInput | FighterUpsertWithWhereUniqueWithoutWeightClassInput[]
    createMany?: FighterCreateManyWeightClassInputEnvelope
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    update?: FighterUpdateWithWhereUniqueWithoutWeightClassInput | FighterUpdateWithWhereUniqueWithoutWeightClassInput[]
    updateMany?: FighterUpdateManyWithWhereWithoutWeightClassInput | FighterUpdateManyWithWhereWithoutWeightClassInput[]
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[]
  }

  export type FighterCreateNestedManyWithoutStylesInput = {
    create?: XOR<FighterCreateWithoutStylesInput, FighterUncheckedCreateWithoutStylesInput> | FighterCreateWithoutStylesInput[] | FighterUncheckedCreateWithoutStylesInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutStylesInput | FighterCreateOrConnectWithoutStylesInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
  }

  export type FighterUncheckedCreateNestedManyWithoutStylesInput = {
    create?: XOR<FighterCreateWithoutStylesInput, FighterUncheckedCreateWithoutStylesInput> | FighterCreateWithoutStylesInput[] | FighterUncheckedCreateWithoutStylesInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutStylesInput | FighterCreateOrConnectWithoutStylesInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
  }

  export type FighterUpdateManyWithoutStylesNestedInput = {
    create?: XOR<FighterCreateWithoutStylesInput, FighterUncheckedCreateWithoutStylesInput> | FighterCreateWithoutStylesInput[] | FighterUncheckedCreateWithoutStylesInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutStylesInput | FighterCreateOrConnectWithoutStylesInput[]
    upsert?: FighterUpsertWithWhereUniqueWithoutStylesInput | FighterUpsertWithWhereUniqueWithoutStylesInput[]
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    update?: FighterUpdateWithWhereUniqueWithoutStylesInput | FighterUpdateWithWhereUniqueWithoutStylesInput[]
    updateMany?: FighterUpdateManyWithWhereWithoutStylesInput | FighterUpdateManyWithWhereWithoutStylesInput[]
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[]
  }

  export type FighterUncheckedUpdateManyWithoutStylesNestedInput = {
    create?: XOR<FighterCreateWithoutStylesInput, FighterUncheckedCreateWithoutStylesInput> | FighterCreateWithoutStylesInput[] | FighterUncheckedCreateWithoutStylesInput[]
    connectOrCreate?: FighterCreateOrConnectWithoutStylesInput | FighterCreateOrConnectWithoutStylesInput[]
    upsert?: FighterUpsertWithWhereUniqueWithoutStylesInput | FighterUpsertWithWhereUniqueWithoutStylesInput[]
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[]
    update?: FighterUpdateWithWhereUniqueWithoutStylesInput | FighterUpdateWithWhereUniqueWithoutStylesInput[]
    updateMany?: FighterUpdateManyWithWhereWithoutStylesInput | FighterUpdateManyWithWhereWithoutStylesInput[]
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[]
  }

  export type FightCreateNestedManyWithoutEventInput = {
    create?: XOR<FightCreateWithoutEventInput, FightUncheckedCreateWithoutEventInput> | FightCreateWithoutEventInput[] | FightUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FightCreateOrConnectWithoutEventInput | FightCreateOrConnectWithoutEventInput[]
    createMany?: FightCreateManyEventInputEnvelope
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
  }

  export type FightUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<FightCreateWithoutEventInput, FightUncheckedCreateWithoutEventInput> | FightCreateWithoutEventInput[] | FightUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FightCreateOrConnectWithoutEventInput | FightCreateOrConnectWithoutEventInput[]
    createMany?: FightCreateManyEventInputEnvelope
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
  }

  export type FightUpdateManyWithoutEventNestedInput = {
    create?: XOR<FightCreateWithoutEventInput, FightUncheckedCreateWithoutEventInput> | FightCreateWithoutEventInput[] | FightUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FightCreateOrConnectWithoutEventInput | FightCreateOrConnectWithoutEventInput[]
    upsert?: FightUpsertWithWhereUniqueWithoutEventInput | FightUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: FightCreateManyEventInputEnvelope
    set?: FightWhereUniqueInput | FightWhereUniqueInput[]
    disconnect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    delete?: FightWhereUniqueInput | FightWhereUniqueInput[]
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    update?: FightUpdateWithWhereUniqueWithoutEventInput | FightUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FightUpdateManyWithWhereWithoutEventInput | FightUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FightScalarWhereInput | FightScalarWhereInput[]
  }

  export type FightUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<FightCreateWithoutEventInput, FightUncheckedCreateWithoutEventInput> | FightCreateWithoutEventInput[] | FightUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FightCreateOrConnectWithoutEventInput | FightCreateOrConnectWithoutEventInput[]
    upsert?: FightUpsertWithWhereUniqueWithoutEventInput | FightUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: FightCreateManyEventInputEnvelope
    set?: FightWhereUniqueInput | FightWhereUniqueInput[]
    disconnect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    delete?: FightWhereUniqueInput | FightWhereUniqueInput[]
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    update?: FightUpdateWithWhereUniqueWithoutEventInput | FightUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FightUpdateManyWithWhereWithoutEventInput | FightUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FightScalarWhereInput | FightScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutFightsInput = {
    create?: XOR<EventCreateWithoutFightsInput, EventUncheckedCreateWithoutFightsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFightsInput
    connect?: EventWhereUniqueInput
  }

  export type FighterCreateNestedOneWithoutFightsAInput = {
    create?: XOR<FighterCreateWithoutFightsAInput, FighterUncheckedCreateWithoutFightsAInput>
    connectOrCreate?: FighterCreateOrConnectWithoutFightsAInput
    connect?: FighterWhereUniqueInput
  }

  export type FighterCreateNestedOneWithoutFightsBInput = {
    create?: XOR<FighterCreateWithoutFightsBInput, FighterUncheckedCreateWithoutFightsBInput>
    connectOrCreate?: FighterCreateOrConnectWithoutFightsBInput
    connect?: FighterWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventUpdateOneRequiredWithoutFightsNestedInput = {
    create?: XOR<EventCreateWithoutFightsInput, EventUncheckedCreateWithoutFightsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFightsInput
    upsert?: EventUpsertWithoutFightsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFightsInput, EventUpdateWithoutFightsInput>, EventUncheckedUpdateWithoutFightsInput>
  }

  export type FighterUpdateOneRequiredWithoutFightsANestedInput = {
    create?: XOR<FighterCreateWithoutFightsAInput, FighterUncheckedCreateWithoutFightsAInput>
    connectOrCreate?: FighterCreateOrConnectWithoutFightsAInput
    upsert?: FighterUpsertWithoutFightsAInput
    connect?: FighterWhereUniqueInput
    update?: XOR<XOR<FighterUpdateToOneWithWhereWithoutFightsAInput, FighterUpdateWithoutFightsAInput>, FighterUncheckedUpdateWithoutFightsAInput>
  }

  export type FighterUpdateOneRequiredWithoutFightsBNestedInput = {
    create?: XOR<FighterCreateWithoutFightsBInput, FighterUncheckedCreateWithoutFightsBInput>
    connectOrCreate?: FighterCreateOrConnectWithoutFightsBInput
    upsert?: FighterUpsertWithoutFightsBInput
    connect?: FighterWhereUniqueInput
    update?: XOR<XOR<FighterUpdateToOneWithWhereWithoutFightsBInput, FighterUpdateWithoutFightsBInput>, FighterUncheckedUpdateWithoutFightsBInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    activeFrom?: Date | string
    activeUntil: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    activeFrom?: Date | string
    activeUntil: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FighterCreateWithoutTrackedByUsersInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClass?: WeightClassCreateNestedOneWithoutFightersInput
    gym?: GymCreateNestedOneWithoutFightersInput
    styles?: FightingStyleCreateNestedManyWithoutFightersInput
    fightsA?: FightCreateNestedManyWithoutFighterAInput
    fightsB?: FightCreateNestedManyWithoutFighterBInput
  }

  export type FighterUncheckedCreateWithoutTrackedByUsersInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClassId?: string | null
    gymId?: string | null
    styles?: FightingStyleUncheckedCreateNestedManyWithoutFightersInput
    fightsA?: FightUncheckedCreateNestedManyWithoutFighterAInput
    fightsB?: FightUncheckedCreateNestedManyWithoutFighterBInput
  }

  export type FighterCreateOrConnectWithoutTrackedByUsersInput = {
    where: FighterWhereUniqueInput
    create: XOR<FighterCreateWithoutTrackedByUsersInput, FighterUncheckedCreateWithoutTrackedByUsersInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: UuidFilter<"Session"> | string
    activeFrom?: DateTimeFilter<"Session"> | Date | string
    activeUntil?: DateTimeFilter<"Session"> | Date | string
    userId?: UuidFilter<"Session"> | string
  }

  export type FighterUpsertWithWhereUniqueWithoutTrackedByUsersInput = {
    where: FighterWhereUniqueInput
    update: XOR<FighterUpdateWithoutTrackedByUsersInput, FighterUncheckedUpdateWithoutTrackedByUsersInput>
    create: XOR<FighterCreateWithoutTrackedByUsersInput, FighterUncheckedCreateWithoutTrackedByUsersInput>
  }

  export type FighterUpdateWithWhereUniqueWithoutTrackedByUsersInput = {
    where: FighterWhereUniqueInput
    data: XOR<FighterUpdateWithoutTrackedByUsersInput, FighterUncheckedUpdateWithoutTrackedByUsersInput>
  }

  export type FighterUpdateManyWithWhereWithoutTrackedByUsersInput = {
    where: FighterScalarWhereInput
    data: XOR<FighterUpdateManyMutationInput, FighterUncheckedUpdateManyWithoutTrackedByUsersInput>
  }

  export type FighterScalarWhereInput = {
    AND?: FighterScalarWhereInput | FighterScalarWhereInput[]
    OR?: FighterScalarWhereInput[]
    NOT?: FighterScalarWhereInput | FighterScalarWhereInput[]
    id?: UuidFilter<"Fighter"> | string
    firstName?: StringFilter<"Fighter"> | string
    lastName?: StringFilter<"Fighter"> | string
    nickname?: StringNullableFilter<"Fighter"> | string | null
    wins?: IntFilter<"Fighter"> | number
    losses?: IntFilter<"Fighter"> | number
    draws?: IntFilter<"Fighter"> | number
    heightCm?: IntFilter<"Fighter"> | number
    reachCm?: IntFilter<"Fighter"> | number
    dob?: DateTimeFilter<"Fighter"> | Date | string
    bio?: StringNullableFilter<"Fighter"> | string | null
    imageUrl?: StringFilter<"Fighter"> | string
    weightClassId?: UuidNullableFilter<"Fighter"> | string | null
    gymId?: UuidNullableFilter<"Fighter"> | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    trackedFighters?: FighterCreateNestedManyWithoutTrackedByUsersInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    trackedFighters?: FighterUncheckedCreateNestedManyWithoutTrackedByUsersInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    trackedFighters?: FighterUpdateManyWithoutTrackedByUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    trackedFighters?: FighterUncheckedUpdateManyWithoutTrackedByUsersNestedInput
  }

  export type WeightClassCreateWithoutFightersInput = {
    id?: string
    name: string
    limitLb: number
  }

  export type WeightClassUncheckedCreateWithoutFightersInput = {
    id?: string
    name: string
    limitLb: number
  }

  export type WeightClassCreateOrConnectWithoutFightersInput = {
    where: WeightClassWhereUniqueInput
    create: XOR<WeightClassCreateWithoutFightersInput, WeightClassUncheckedCreateWithoutFightersInput>
  }

  export type GymCreateWithoutFightersInput = {
    id?: string
    name: string
    location?: string | null
  }

  export type GymUncheckedCreateWithoutFightersInput = {
    id?: string
    name: string
    location?: string | null
  }

  export type GymCreateOrConnectWithoutFightersInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutFightersInput, GymUncheckedCreateWithoutFightersInput>
  }

  export type FightingStyleCreateWithoutFightersInput = {
    id?: string
    name: string
  }

  export type FightingStyleUncheckedCreateWithoutFightersInput = {
    id?: string
    name: string
  }

  export type FightingStyleCreateOrConnectWithoutFightersInput = {
    where: FightingStyleWhereUniqueInput
    create: XOR<FightingStyleCreateWithoutFightersInput, FightingStyleUncheckedCreateWithoutFightersInput>
  }

  export type FightCreateWithoutFighterAInput = {
    id?: string
    isMainEvent?: boolean
    event: EventCreateNestedOneWithoutFightsInput
    fighterB: FighterCreateNestedOneWithoutFightsBInput
  }

  export type FightUncheckedCreateWithoutFighterAInput = {
    id?: string
    eventId: string
    fighterBId: string
    isMainEvent?: boolean
  }

  export type FightCreateOrConnectWithoutFighterAInput = {
    where: FightWhereUniqueInput
    create: XOR<FightCreateWithoutFighterAInput, FightUncheckedCreateWithoutFighterAInput>
  }

  export type FightCreateManyFighterAInputEnvelope = {
    data: FightCreateManyFighterAInput | FightCreateManyFighterAInput[]
    skipDuplicates?: boolean
  }

  export type FightCreateWithoutFighterBInput = {
    id?: string
    isMainEvent?: boolean
    event: EventCreateNestedOneWithoutFightsInput
    fighterA: FighterCreateNestedOneWithoutFightsAInput
  }

  export type FightUncheckedCreateWithoutFighterBInput = {
    id?: string
    eventId: string
    fighterAId: string
    isMainEvent?: boolean
  }

  export type FightCreateOrConnectWithoutFighterBInput = {
    where: FightWhereUniqueInput
    create: XOR<FightCreateWithoutFighterBInput, FightUncheckedCreateWithoutFighterBInput>
  }

  export type FightCreateManyFighterBInputEnvelope = {
    data: FightCreateManyFighterBInput | FightCreateManyFighterBInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTrackedFightersInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTrackedFightersInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTrackedFightersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrackedFightersInput, UserUncheckedCreateWithoutTrackedFightersInput>
  }

  export type WeightClassUpsertWithoutFightersInput = {
    update: XOR<WeightClassUpdateWithoutFightersInput, WeightClassUncheckedUpdateWithoutFightersInput>
    create: XOR<WeightClassCreateWithoutFightersInput, WeightClassUncheckedCreateWithoutFightersInput>
    where?: WeightClassWhereInput
  }

  export type WeightClassUpdateToOneWithWhereWithoutFightersInput = {
    where?: WeightClassWhereInput
    data: XOR<WeightClassUpdateWithoutFightersInput, WeightClassUncheckedUpdateWithoutFightersInput>
  }

  export type WeightClassUpdateWithoutFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limitLb?: IntFieldUpdateOperationsInput | number
  }

  export type WeightClassUncheckedUpdateWithoutFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    limitLb?: IntFieldUpdateOperationsInput | number
  }

  export type GymUpsertWithoutFightersInput = {
    update: XOR<GymUpdateWithoutFightersInput, GymUncheckedUpdateWithoutFightersInput>
    create: XOR<GymCreateWithoutFightersInput, GymUncheckedCreateWithoutFightersInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutFightersInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutFightersInput, GymUncheckedUpdateWithoutFightersInput>
  }

  export type GymUpdateWithoutFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GymUncheckedUpdateWithoutFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FightingStyleUpsertWithWhereUniqueWithoutFightersInput = {
    where: FightingStyleWhereUniqueInput
    update: XOR<FightingStyleUpdateWithoutFightersInput, FightingStyleUncheckedUpdateWithoutFightersInput>
    create: XOR<FightingStyleCreateWithoutFightersInput, FightingStyleUncheckedCreateWithoutFightersInput>
  }

  export type FightingStyleUpdateWithWhereUniqueWithoutFightersInput = {
    where: FightingStyleWhereUniqueInput
    data: XOR<FightingStyleUpdateWithoutFightersInput, FightingStyleUncheckedUpdateWithoutFightersInput>
  }

  export type FightingStyleUpdateManyWithWhereWithoutFightersInput = {
    where: FightingStyleScalarWhereInput
    data: XOR<FightingStyleUpdateManyMutationInput, FightingStyleUncheckedUpdateManyWithoutFightersInput>
  }

  export type FightingStyleScalarWhereInput = {
    AND?: FightingStyleScalarWhereInput | FightingStyleScalarWhereInput[]
    OR?: FightingStyleScalarWhereInput[]
    NOT?: FightingStyleScalarWhereInput | FightingStyleScalarWhereInput[]
    id?: UuidFilter<"FightingStyle"> | string
    name?: StringFilter<"FightingStyle"> | string
  }

  export type FightUpsertWithWhereUniqueWithoutFighterAInput = {
    where: FightWhereUniqueInput
    update: XOR<FightUpdateWithoutFighterAInput, FightUncheckedUpdateWithoutFighterAInput>
    create: XOR<FightCreateWithoutFighterAInput, FightUncheckedCreateWithoutFighterAInput>
  }

  export type FightUpdateWithWhereUniqueWithoutFighterAInput = {
    where: FightWhereUniqueInput
    data: XOR<FightUpdateWithoutFighterAInput, FightUncheckedUpdateWithoutFighterAInput>
  }

  export type FightUpdateManyWithWhereWithoutFighterAInput = {
    where: FightScalarWhereInput
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyWithoutFighterAInput>
  }

  export type FightScalarWhereInput = {
    AND?: FightScalarWhereInput | FightScalarWhereInput[]
    OR?: FightScalarWhereInput[]
    NOT?: FightScalarWhereInput | FightScalarWhereInput[]
    id?: UuidFilter<"Fight"> | string
    eventId?: UuidFilter<"Fight"> | string
    fighterAId?: UuidFilter<"Fight"> | string
    fighterBId?: UuidFilter<"Fight"> | string
    isMainEvent?: BoolFilter<"Fight"> | boolean
  }

  export type FightUpsertWithWhereUniqueWithoutFighterBInput = {
    where: FightWhereUniqueInput
    update: XOR<FightUpdateWithoutFighterBInput, FightUncheckedUpdateWithoutFighterBInput>
    create: XOR<FightCreateWithoutFighterBInput, FightUncheckedCreateWithoutFighterBInput>
  }

  export type FightUpdateWithWhereUniqueWithoutFighterBInput = {
    where: FightWhereUniqueInput
    data: XOR<FightUpdateWithoutFighterBInput, FightUncheckedUpdateWithoutFighterBInput>
  }

  export type FightUpdateManyWithWhereWithoutFighterBInput = {
    where: FightScalarWhereInput
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyWithoutFighterBInput>
  }

  export type UserUpsertWithWhereUniqueWithoutTrackedFightersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTrackedFightersInput, UserUncheckedUpdateWithoutTrackedFightersInput>
    create: XOR<UserCreateWithoutTrackedFightersInput, UserUncheckedCreateWithoutTrackedFightersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTrackedFightersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTrackedFightersInput, UserUncheckedUpdateWithoutTrackedFightersInput>
  }

  export type UserUpdateManyWithWhereWithoutTrackedFightersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTrackedFightersInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type FighterCreateWithoutGymInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClass?: WeightClassCreateNestedOneWithoutFightersInput
    styles?: FightingStyleCreateNestedManyWithoutFightersInput
    fightsA?: FightCreateNestedManyWithoutFighterAInput
    fightsB?: FightCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterUncheckedCreateWithoutGymInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClassId?: string | null
    styles?: FightingStyleUncheckedCreateNestedManyWithoutFightersInput
    fightsA?: FightUncheckedCreateNestedManyWithoutFighterAInput
    fightsB?: FightUncheckedCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserUncheckedCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterCreateOrConnectWithoutGymInput = {
    where: FighterWhereUniqueInput
    create: XOR<FighterCreateWithoutGymInput, FighterUncheckedCreateWithoutGymInput>
  }

  export type FighterCreateManyGymInputEnvelope = {
    data: FighterCreateManyGymInput | FighterCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type FighterUpsertWithWhereUniqueWithoutGymInput = {
    where: FighterWhereUniqueInput
    update: XOR<FighterUpdateWithoutGymInput, FighterUncheckedUpdateWithoutGymInput>
    create: XOR<FighterCreateWithoutGymInput, FighterUncheckedCreateWithoutGymInput>
  }

  export type FighterUpdateWithWhereUniqueWithoutGymInput = {
    where: FighterWhereUniqueInput
    data: XOR<FighterUpdateWithoutGymInput, FighterUncheckedUpdateWithoutGymInput>
  }

  export type FighterUpdateManyWithWhereWithoutGymInput = {
    where: FighterScalarWhereInput
    data: XOR<FighterUpdateManyMutationInput, FighterUncheckedUpdateManyWithoutGymInput>
  }

  export type FighterCreateWithoutWeightClassInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    gym?: GymCreateNestedOneWithoutFightersInput
    styles?: FightingStyleCreateNestedManyWithoutFightersInput
    fightsA?: FightCreateNestedManyWithoutFighterAInput
    fightsB?: FightCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterUncheckedCreateWithoutWeightClassInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    gymId?: string | null
    styles?: FightingStyleUncheckedCreateNestedManyWithoutFightersInput
    fightsA?: FightUncheckedCreateNestedManyWithoutFighterAInput
    fightsB?: FightUncheckedCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserUncheckedCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterCreateOrConnectWithoutWeightClassInput = {
    where: FighterWhereUniqueInput
    create: XOR<FighterCreateWithoutWeightClassInput, FighterUncheckedCreateWithoutWeightClassInput>
  }

  export type FighterCreateManyWeightClassInputEnvelope = {
    data: FighterCreateManyWeightClassInput | FighterCreateManyWeightClassInput[]
    skipDuplicates?: boolean
  }

  export type FighterUpsertWithWhereUniqueWithoutWeightClassInput = {
    where: FighterWhereUniqueInput
    update: XOR<FighterUpdateWithoutWeightClassInput, FighterUncheckedUpdateWithoutWeightClassInput>
    create: XOR<FighterCreateWithoutWeightClassInput, FighterUncheckedCreateWithoutWeightClassInput>
  }

  export type FighterUpdateWithWhereUniqueWithoutWeightClassInput = {
    where: FighterWhereUniqueInput
    data: XOR<FighterUpdateWithoutWeightClassInput, FighterUncheckedUpdateWithoutWeightClassInput>
  }

  export type FighterUpdateManyWithWhereWithoutWeightClassInput = {
    where: FighterScalarWhereInput
    data: XOR<FighterUpdateManyMutationInput, FighterUncheckedUpdateManyWithoutWeightClassInput>
  }

  export type FighterCreateWithoutStylesInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClass?: WeightClassCreateNestedOneWithoutFightersInput
    gym?: GymCreateNestedOneWithoutFightersInput
    fightsA?: FightCreateNestedManyWithoutFighterAInput
    fightsB?: FightCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterUncheckedCreateWithoutStylesInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClassId?: string | null
    gymId?: string | null
    fightsA?: FightUncheckedCreateNestedManyWithoutFighterAInput
    fightsB?: FightUncheckedCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserUncheckedCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterCreateOrConnectWithoutStylesInput = {
    where: FighterWhereUniqueInput
    create: XOR<FighterCreateWithoutStylesInput, FighterUncheckedCreateWithoutStylesInput>
  }

  export type FighterUpsertWithWhereUniqueWithoutStylesInput = {
    where: FighterWhereUniqueInput
    update: XOR<FighterUpdateWithoutStylesInput, FighterUncheckedUpdateWithoutStylesInput>
    create: XOR<FighterCreateWithoutStylesInput, FighterUncheckedCreateWithoutStylesInput>
  }

  export type FighterUpdateWithWhereUniqueWithoutStylesInput = {
    where: FighterWhereUniqueInput
    data: XOR<FighterUpdateWithoutStylesInput, FighterUncheckedUpdateWithoutStylesInput>
  }

  export type FighterUpdateManyWithWhereWithoutStylesInput = {
    where: FighterScalarWhereInput
    data: XOR<FighterUpdateManyMutationInput, FighterUncheckedUpdateManyWithoutStylesInput>
  }

  export type FightCreateWithoutEventInput = {
    id?: string
    isMainEvent?: boolean
    fighterA: FighterCreateNestedOneWithoutFightsAInput
    fighterB: FighterCreateNestedOneWithoutFightsBInput
  }

  export type FightUncheckedCreateWithoutEventInput = {
    id?: string
    fighterAId: string
    fighterBId: string
    isMainEvent?: boolean
  }

  export type FightCreateOrConnectWithoutEventInput = {
    where: FightWhereUniqueInput
    create: XOR<FightCreateWithoutEventInput, FightUncheckedCreateWithoutEventInput>
  }

  export type FightCreateManyEventInputEnvelope = {
    data: FightCreateManyEventInput | FightCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type FightUpsertWithWhereUniqueWithoutEventInput = {
    where: FightWhereUniqueInput
    update: XOR<FightUpdateWithoutEventInput, FightUncheckedUpdateWithoutEventInput>
    create: XOR<FightCreateWithoutEventInput, FightUncheckedCreateWithoutEventInput>
  }

  export type FightUpdateWithWhereUniqueWithoutEventInput = {
    where: FightWhereUniqueInput
    data: XOR<FightUpdateWithoutEventInput, FightUncheckedUpdateWithoutEventInput>
  }

  export type FightUpdateManyWithWhereWithoutEventInput = {
    where: FightScalarWhereInput
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutFightsInput = {
    id?: string
    name: string
    date: Date | string
    location?: string | null
  }

  export type EventUncheckedCreateWithoutFightsInput = {
    id?: string
    name: string
    date: Date | string
    location?: string | null
  }

  export type EventCreateOrConnectWithoutFightsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFightsInput, EventUncheckedCreateWithoutFightsInput>
  }

  export type FighterCreateWithoutFightsAInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClass?: WeightClassCreateNestedOneWithoutFightersInput
    gym?: GymCreateNestedOneWithoutFightersInput
    styles?: FightingStyleCreateNestedManyWithoutFightersInput
    fightsB?: FightCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterUncheckedCreateWithoutFightsAInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClassId?: string | null
    gymId?: string | null
    styles?: FightingStyleUncheckedCreateNestedManyWithoutFightersInput
    fightsB?: FightUncheckedCreateNestedManyWithoutFighterBInput
    trackedByUsers?: UserUncheckedCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterCreateOrConnectWithoutFightsAInput = {
    where: FighterWhereUniqueInput
    create: XOR<FighterCreateWithoutFightsAInput, FighterUncheckedCreateWithoutFightsAInput>
  }

  export type FighterCreateWithoutFightsBInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClass?: WeightClassCreateNestedOneWithoutFightersInput
    gym?: GymCreateNestedOneWithoutFightersInput
    styles?: FightingStyleCreateNestedManyWithoutFightersInput
    fightsA?: FightCreateNestedManyWithoutFighterAInput
    trackedByUsers?: UserCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterUncheckedCreateWithoutFightsBInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClassId?: string | null
    gymId?: string | null
    styles?: FightingStyleUncheckedCreateNestedManyWithoutFightersInput
    fightsA?: FightUncheckedCreateNestedManyWithoutFighterAInput
    trackedByUsers?: UserUncheckedCreateNestedManyWithoutTrackedFightersInput
  }

  export type FighterCreateOrConnectWithoutFightsBInput = {
    where: FighterWhereUniqueInput
    create: XOR<FighterCreateWithoutFightsBInput, FighterUncheckedCreateWithoutFightsBInput>
  }

  export type EventUpsertWithoutFightsInput = {
    update: XOR<EventUpdateWithoutFightsInput, EventUncheckedUpdateWithoutFightsInput>
    create: XOR<EventCreateWithoutFightsInput, EventUncheckedCreateWithoutFightsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFightsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFightsInput, EventUncheckedUpdateWithoutFightsInput>
  }

  export type EventUpdateWithoutFightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateWithoutFightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FighterUpsertWithoutFightsAInput = {
    update: XOR<FighterUpdateWithoutFightsAInput, FighterUncheckedUpdateWithoutFightsAInput>
    create: XOR<FighterCreateWithoutFightsAInput, FighterUncheckedCreateWithoutFightsAInput>
    where?: FighterWhereInput
  }

  export type FighterUpdateToOneWithWhereWithoutFightsAInput = {
    where?: FighterWhereInput
    data: XOR<FighterUpdateWithoutFightsAInput, FighterUncheckedUpdateWithoutFightsAInput>
  }

  export type FighterUpdateWithoutFightsAInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClass?: WeightClassUpdateOneWithoutFightersNestedInput
    gym?: GymUpdateOneWithoutFightersNestedInput
    styles?: FightingStyleUpdateManyWithoutFightersNestedInput
    fightsB?: FightUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUncheckedUpdateWithoutFightsAInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    styles?: FightingStyleUncheckedUpdateManyWithoutFightersNestedInput
    fightsB?: FightUncheckedUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUncheckedUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUpsertWithoutFightsBInput = {
    update: XOR<FighterUpdateWithoutFightsBInput, FighterUncheckedUpdateWithoutFightsBInput>
    create: XOR<FighterCreateWithoutFightsBInput, FighterUncheckedCreateWithoutFightsBInput>
    where?: FighterWhereInput
  }

  export type FighterUpdateToOneWithWhereWithoutFightsBInput = {
    where?: FighterWhereInput
    data: XOR<FighterUpdateWithoutFightsBInput, FighterUncheckedUpdateWithoutFightsBInput>
  }

  export type FighterUpdateWithoutFightsBInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClass?: WeightClassUpdateOneWithoutFightersNestedInput
    gym?: GymUpdateOneWithoutFightersNestedInput
    styles?: FightingStyleUpdateManyWithoutFightersNestedInput
    fightsA?: FightUpdateManyWithoutFighterANestedInput
    trackedByUsers?: UserUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUncheckedUpdateWithoutFightsBInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    styles?: FightingStyleUncheckedUpdateManyWithoutFightersNestedInput
    fightsA?: FightUncheckedUpdateManyWithoutFighterANestedInput
    trackedByUsers?: UserUncheckedUpdateManyWithoutTrackedFightersNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    activeFrom?: Date | string
    activeUntil: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    activeFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    activeUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FighterUpdateWithoutTrackedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClass?: WeightClassUpdateOneWithoutFightersNestedInput
    gym?: GymUpdateOneWithoutFightersNestedInput
    styles?: FightingStyleUpdateManyWithoutFightersNestedInput
    fightsA?: FightUpdateManyWithoutFighterANestedInput
    fightsB?: FightUpdateManyWithoutFighterBNestedInput
  }

  export type FighterUncheckedUpdateWithoutTrackedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    styles?: FightingStyleUncheckedUpdateManyWithoutFightersNestedInput
    fightsA?: FightUncheckedUpdateManyWithoutFighterANestedInput
    fightsB?: FightUncheckedUpdateManyWithoutFighterBNestedInput
  }

  export type FighterUncheckedUpdateManyWithoutTrackedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FightCreateManyFighterAInput = {
    id?: string
    eventId: string
    fighterBId: string
    isMainEvent?: boolean
  }

  export type FightCreateManyFighterBInput = {
    id?: string
    eventId: string
    fighterAId: string
    isMainEvent?: boolean
  }

  export type FightingStyleUpdateWithoutFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FightingStyleUncheckedUpdateWithoutFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FightingStyleUncheckedUpdateManyWithoutFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FightUpdateWithoutFighterAInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutFightsNestedInput
    fighterB?: FighterUpdateOneRequiredWithoutFightsBNestedInput
  }

  export type FightUncheckedUpdateWithoutFighterAInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    fighterBId?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FightUncheckedUpdateManyWithoutFighterAInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    fighterBId?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FightUpdateWithoutFighterBInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutFightsNestedInput
    fighterA?: FighterUpdateOneRequiredWithoutFightsANestedInput
  }

  export type FightUncheckedUpdateWithoutFighterBInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    fighterAId?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FightUncheckedUpdateManyWithoutFighterBInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    fighterAId?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpdateWithoutTrackedFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTrackedFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTrackedFightersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type FighterCreateManyGymInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    weightClassId?: string | null
  }

  export type FighterUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClass?: WeightClassUpdateOneWithoutFightersNestedInput
    styles?: FightingStyleUpdateManyWithoutFightersNestedInput
    fightsA?: FightUpdateManyWithoutFighterANestedInput
    fightsB?: FightUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
    styles?: FightingStyleUncheckedUpdateManyWithoutFightersNestedInput
    fightsA?: FightUncheckedUpdateManyWithoutFighterANestedInput
    fightsB?: FightUncheckedUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUncheckedUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FighterCreateManyWeightClassInput = {
    id?: string
    firstName: string
    lastName: string
    nickname?: string | null
    wins?: number
    losses?: number
    draws?: number
    heightCm: number
    reachCm: number
    dob: Date | string
    bio?: string | null
    imageUrl?: string
    gymId?: string | null
  }

  export type FighterUpdateWithoutWeightClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneWithoutFightersNestedInput
    styles?: FightingStyleUpdateManyWithoutFightersNestedInput
    fightsA?: FightUpdateManyWithoutFighterANestedInput
    fightsB?: FightUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUncheckedUpdateWithoutWeightClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    styles?: FightingStyleUncheckedUpdateManyWithoutFightersNestedInput
    fightsA?: FightUncheckedUpdateManyWithoutFighterANestedInput
    fightsB?: FightUncheckedUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUncheckedUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUncheckedUpdateManyWithoutWeightClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FighterUpdateWithoutStylesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClass?: WeightClassUpdateOneWithoutFightersNestedInput
    gym?: GymUpdateOneWithoutFightersNestedInput
    fightsA?: FightUpdateManyWithoutFighterANestedInput
    fightsB?: FightUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUncheckedUpdateWithoutStylesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    fightsA?: FightUncheckedUpdateManyWithoutFighterANestedInput
    fightsB?: FightUncheckedUpdateManyWithoutFighterBNestedInput
    trackedByUsers?: UserUncheckedUpdateManyWithoutTrackedFightersNestedInput
  }

  export type FighterUncheckedUpdateManyWithoutStylesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    heightCm?: IntFieldUpdateOperationsInput | number
    reachCm?: IntFieldUpdateOperationsInput | number
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    weightClassId?: NullableStringFieldUpdateOperationsInput | string | null
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FightCreateManyEventInput = {
    id?: string
    fighterAId: string
    fighterBId: string
    isMainEvent?: boolean
  }

  export type FightUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
    fighterA?: FighterUpdateOneRequiredWithoutFightsANestedInput
    fighterB?: FighterUpdateOneRequiredWithoutFightsBNestedInput
  }

  export type FightUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    fighterAId?: StringFieldUpdateOperationsInput | string
    fighterBId?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FightUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    fighterAId?: StringFieldUpdateOperationsInput | string
    fighterBId?: StringFieldUpdateOperationsInput | string
    isMainEvent?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}