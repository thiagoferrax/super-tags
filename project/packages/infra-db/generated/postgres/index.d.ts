
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
 * Model SuperTag
 * 
 */
export type SuperTag = $Result.DefaultSelection<Prisma.$SuperTagPayload>
/**
 * Model Propriedade
 * 
 */
export type Propriedade = $Result.DefaultSelection<Prisma.$PropriedadePayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.superTag`: Exposes CRUD operations for the **SuperTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperTags
    * const superTags = await prisma.superTag.findMany()
    * ```
    */
  get superTag(): Prisma.SuperTagDelegate<ExtArgs>;

  /**
   * `prisma.propriedade`: Exposes CRUD operations for the **Propriedade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Propriedades
    * const propriedades = await prisma.propriedade.findMany()
    * ```
    */
  get propriedade(): Prisma.PropriedadeDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.19.0
   * Query Engine version: 5fe21811a6ba0b952a3bc71400666511fe3b902f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    SuperTag: 'SuperTag',
    Propriedade: 'Propriedade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "superTag" | "propriedade"
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
      SuperTag: {
        payload: Prisma.$SuperTagPayload<ExtArgs>
        fields: Prisma.SuperTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload>
          }
          findFirst: {
            args: Prisma.SuperTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload>
          }
          findMany: {
            args: Prisma.SuperTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload>[]
          }
          create: {
            args: Prisma.SuperTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload>
          }
          createMany: {
            args: Prisma.SuperTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuperTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload>[]
          }
          delete: {
            args: Prisma.SuperTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload>
          }
          update: {
            args: Prisma.SuperTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload>
          }
          deleteMany: {
            args: Prisma.SuperTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuperTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperTagPayload>
          }
          aggregate: {
            args: Prisma.SuperTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperTag>
          }
          groupBy: {
            args: Prisma.SuperTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperTagCountArgs<ExtArgs>
            result: $Utils.Optional<SuperTagCountAggregateOutputType> | number
          }
        }
      }
      Propriedade: {
        payload: Prisma.$PropriedadePayload<ExtArgs>
        fields: Prisma.PropriedadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropriedadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropriedadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          findFirst: {
            args: Prisma.PropriedadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropriedadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          findMany: {
            args: Prisma.PropriedadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>[]
          }
          create: {
            args: Prisma.PropriedadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          createMany: {
            args: Prisma.PropriedadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropriedadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>[]
          }
          delete: {
            args: Prisma.PropriedadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          update: {
            args: Prisma.PropriedadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          deleteMany: {
            args: Prisma.PropriedadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropriedadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropriedadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropriedadePayload>
          }
          aggregate: {
            args: Prisma.PropriedadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropriedade>
          }
          groupBy: {
            args: Prisma.PropriedadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropriedadeCountArgs<ExtArgs>
            result: $Utils.Optional<PropriedadeCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type SuperTagCountOutputType
   */

  export type SuperTagCountOutputType = {
    propriedade: number
  }

  export type SuperTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | SuperTagCountOutputTypeCountPropriedadeArgs
  }

  // Custom InputTypes
  /**
   * SuperTagCountOutputType without action
   */
  export type SuperTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTagCountOutputType
     */
    select?: SuperTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuperTagCountOutputType without action
   */
  export type SuperTagCountOutputTypeCountPropriedadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model SuperTag
   */

  export type AggregateSuperTag = {
    _count: SuperTagCountAggregateOutputType | null
    _avg: SuperTagAvgAggregateOutputType | null
    _sum: SuperTagSumAggregateOutputType | null
    _min: SuperTagMinAggregateOutputType | null
    _max: SuperTagMaxAggregateOutputType | null
  }

  export type SuperTagAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SuperTagSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SuperTagMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    icon: string | null
    userId: number | null
  }

  export type SuperTagMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    icon: string | null
    userId: number | null
  }

  export type SuperTagCountAggregateOutputType = {
    id: number
    titulo: number
    conteudo: number
    icon: number
    userId: number
    _all: number
  }


  export type SuperTagAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SuperTagSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SuperTagMinAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    icon?: true
    userId?: true
  }

  export type SuperTagMaxAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    icon?: true
    userId?: true
  }

  export type SuperTagCountAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    icon?: true
    userId?: true
    _all?: true
  }

  export type SuperTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperTag to aggregate.
     */
    where?: SuperTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperTags to fetch.
     */
    orderBy?: SuperTagOrderByWithRelationInput | SuperTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperTags
    **/
    _count?: true | SuperTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuperTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuperTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperTagMaxAggregateInputType
  }

  export type GetSuperTagAggregateType<T extends SuperTagAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperTag[P]>
      : GetScalarType<T[P], AggregateSuperTag[P]>
  }




  export type SuperTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperTagWhereInput
    orderBy?: SuperTagOrderByWithAggregationInput | SuperTagOrderByWithAggregationInput[]
    by: SuperTagScalarFieldEnum[] | SuperTagScalarFieldEnum
    having?: SuperTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperTagCountAggregateInputType | true
    _avg?: SuperTagAvgAggregateInputType
    _sum?: SuperTagSumAggregateInputType
    _min?: SuperTagMinAggregateInputType
    _max?: SuperTagMaxAggregateInputType
  }

  export type SuperTagGroupByOutputType = {
    id: number
    titulo: string
    conteudo: string
    icon: string
    userId: number
    _count: SuperTagCountAggregateOutputType | null
    _avg: SuperTagAvgAggregateOutputType | null
    _sum: SuperTagSumAggregateOutputType | null
    _min: SuperTagMinAggregateOutputType | null
    _max: SuperTagMaxAggregateOutputType | null
  }

  type GetSuperTagGroupByPayload<T extends SuperTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperTagGroupByOutputType[P]>
            : GetScalarType<T[P], SuperTagGroupByOutputType[P]>
        }
      >
    >


  export type SuperTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    icon?: boolean
    userId?: boolean
    propriedade?: boolean | SuperTag$propriedadeArgs<ExtArgs>
    _count?: boolean | SuperTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superTag"]>

  export type SuperTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    icon?: boolean
    userId?: boolean
  }, ExtArgs["result"]["superTag"]>

  export type SuperTagSelectScalar = {
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    icon?: boolean
    userId?: boolean
  }

  export type SuperTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propriedade?: boolean | SuperTag$propriedadeArgs<ExtArgs>
    _count?: boolean | SuperTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuperTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SuperTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperTag"
    objects: {
      propriedade: Prisma.$PropriedadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      conteudo: string
      icon: string
      userId: number
    }, ExtArgs["result"]["superTag"]>
    composites: {}
  }

  type SuperTagGetPayload<S extends boolean | null | undefined | SuperTagDefaultArgs> = $Result.GetResult<Prisma.$SuperTagPayload, S>

  type SuperTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SuperTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SuperTagCountAggregateInputType | true
    }

  export interface SuperTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperTag'], meta: { name: 'SuperTag' } }
    /**
     * Find zero or one SuperTag that matches the filter.
     * @param {SuperTagFindUniqueArgs} args - Arguments to find a SuperTag
     * @example
     * // Get one SuperTag
     * const superTag = await prisma.superTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperTagFindUniqueArgs>(args: SelectSubset<T, SuperTagFindUniqueArgs<ExtArgs>>): Prisma__SuperTagClient<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SuperTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SuperTagFindUniqueOrThrowArgs} args - Arguments to find a SuperTag
     * @example
     * // Get one SuperTag
     * const superTag = await prisma.superTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperTagFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperTagClient<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SuperTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperTagFindFirstArgs} args - Arguments to find a SuperTag
     * @example
     * // Get one SuperTag
     * const superTag = await prisma.superTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperTagFindFirstArgs>(args?: SelectSubset<T, SuperTagFindFirstArgs<ExtArgs>>): Prisma__SuperTagClient<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SuperTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperTagFindFirstOrThrowArgs} args - Arguments to find a SuperTag
     * @example
     * // Get one SuperTag
     * const superTag = await prisma.superTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperTagFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperTagClient<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SuperTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperTags
     * const superTags = await prisma.superTag.findMany()
     * 
     * // Get first 10 SuperTags
     * const superTags = await prisma.superTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superTagWithIdOnly = await prisma.superTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperTagFindManyArgs>(args?: SelectSubset<T, SuperTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SuperTag.
     * @param {SuperTagCreateArgs} args - Arguments to create a SuperTag.
     * @example
     * // Create one SuperTag
     * const SuperTag = await prisma.superTag.create({
     *   data: {
     *     // ... data to create a SuperTag
     *   }
     * })
     * 
     */
    create<T extends SuperTagCreateArgs>(args: SelectSubset<T, SuperTagCreateArgs<ExtArgs>>): Prisma__SuperTagClient<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SuperTags.
     * @param {SuperTagCreateManyArgs} args - Arguments to create many SuperTags.
     * @example
     * // Create many SuperTags
     * const superTag = await prisma.superTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperTagCreateManyArgs>(args?: SelectSubset<T, SuperTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuperTags and returns the data saved in the database.
     * @param {SuperTagCreateManyAndReturnArgs} args - Arguments to create many SuperTags.
     * @example
     * // Create many SuperTags
     * const superTag = await prisma.superTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuperTags and only return the `id`
     * const superTagWithIdOnly = await prisma.superTag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuperTagCreateManyAndReturnArgs>(args?: SelectSubset<T, SuperTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SuperTag.
     * @param {SuperTagDeleteArgs} args - Arguments to delete one SuperTag.
     * @example
     * // Delete one SuperTag
     * const SuperTag = await prisma.superTag.delete({
     *   where: {
     *     // ... filter to delete one SuperTag
     *   }
     * })
     * 
     */
    delete<T extends SuperTagDeleteArgs>(args: SelectSubset<T, SuperTagDeleteArgs<ExtArgs>>): Prisma__SuperTagClient<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SuperTag.
     * @param {SuperTagUpdateArgs} args - Arguments to update one SuperTag.
     * @example
     * // Update one SuperTag
     * const superTag = await prisma.superTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperTagUpdateArgs>(args: SelectSubset<T, SuperTagUpdateArgs<ExtArgs>>): Prisma__SuperTagClient<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SuperTags.
     * @param {SuperTagDeleteManyArgs} args - Arguments to filter SuperTags to delete.
     * @example
     * // Delete a few SuperTags
     * const { count } = await prisma.superTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperTagDeleteManyArgs>(args?: SelectSubset<T, SuperTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperTags
     * const superTag = await prisma.superTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperTagUpdateManyArgs>(args: SelectSubset<T, SuperTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuperTag.
     * @param {SuperTagUpsertArgs} args - Arguments to update or create a SuperTag.
     * @example
     * // Update or create a SuperTag
     * const superTag = await prisma.superTag.upsert({
     *   create: {
     *     // ... data to create a SuperTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperTag we want to update
     *   }
     * })
     */
    upsert<T extends SuperTagUpsertArgs>(args: SelectSubset<T, SuperTagUpsertArgs<ExtArgs>>): Prisma__SuperTagClient<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SuperTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperTagCountArgs} args - Arguments to filter SuperTags to count.
     * @example
     * // Count the number of SuperTags
     * const count = await prisma.superTag.count({
     *   where: {
     *     // ... the filter for the SuperTags we want to count
     *   }
     * })
    **/
    count<T extends SuperTagCountArgs>(
      args?: Subset<T, SuperTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperTagAggregateArgs>(args: Subset<T, SuperTagAggregateArgs>): Prisma.PrismaPromise<GetSuperTagAggregateType<T>>

    /**
     * Group by SuperTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperTagGroupByArgs} args - Group by arguments.
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
      T extends SuperTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperTagGroupByArgs['orderBy'] }
        : { orderBy?: SuperTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuperTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperTag model
   */
  readonly fields: SuperTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propriedade<T extends SuperTag$propriedadeArgs<ExtArgs> = {}>(args?: Subset<T, SuperTag$propriedadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SuperTag model
   */ 
  interface SuperTagFieldRefs {
    readonly id: FieldRef<"SuperTag", 'Int'>
    readonly titulo: FieldRef<"SuperTag", 'String'>
    readonly conteudo: FieldRef<"SuperTag", 'String'>
    readonly icon: FieldRef<"SuperTag", 'String'>
    readonly userId: FieldRef<"SuperTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SuperTag findUnique
   */
  export type SuperTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
    /**
     * Filter, which SuperTag to fetch.
     */
    where: SuperTagWhereUniqueInput
  }

  /**
   * SuperTag findUniqueOrThrow
   */
  export type SuperTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
    /**
     * Filter, which SuperTag to fetch.
     */
    where: SuperTagWhereUniqueInput
  }

  /**
   * SuperTag findFirst
   */
  export type SuperTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
    /**
     * Filter, which SuperTag to fetch.
     */
    where?: SuperTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperTags to fetch.
     */
    orderBy?: SuperTagOrderByWithRelationInput | SuperTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperTags.
     */
    cursor?: SuperTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperTags.
     */
    distinct?: SuperTagScalarFieldEnum | SuperTagScalarFieldEnum[]
  }

  /**
   * SuperTag findFirstOrThrow
   */
  export type SuperTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
    /**
     * Filter, which SuperTag to fetch.
     */
    where?: SuperTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperTags to fetch.
     */
    orderBy?: SuperTagOrderByWithRelationInput | SuperTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperTags.
     */
    cursor?: SuperTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperTags.
     */
    distinct?: SuperTagScalarFieldEnum | SuperTagScalarFieldEnum[]
  }

  /**
   * SuperTag findMany
   */
  export type SuperTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
    /**
     * Filter, which SuperTags to fetch.
     */
    where?: SuperTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperTags to fetch.
     */
    orderBy?: SuperTagOrderByWithRelationInput | SuperTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperTags.
     */
    cursor?: SuperTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperTags.
     */
    skip?: number
    distinct?: SuperTagScalarFieldEnum | SuperTagScalarFieldEnum[]
  }

  /**
   * SuperTag create
   */
  export type SuperTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
    /**
     * The data needed to create a SuperTag.
     */
    data: XOR<SuperTagCreateInput, SuperTagUncheckedCreateInput>
  }

  /**
   * SuperTag createMany
   */
  export type SuperTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperTags.
     */
    data: SuperTagCreateManyInput | SuperTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperTag createManyAndReturn
   */
  export type SuperTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SuperTags.
     */
    data: SuperTagCreateManyInput | SuperTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperTag update
   */
  export type SuperTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
    /**
     * The data needed to update a SuperTag.
     */
    data: XOR<SuperTagUpdateInput, SuperTagUncheckedUpdateInput>
    /**
     * Choose, which SuperTag to update.
     */
    where: SuperTagWhereUniqueInput
  }

  /**
   * SuperTag updateMany
   */
  export type SuperTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperTags.
     */
    data: XOR<SuperTagUpdateManyMutationInput, SuperTagUncheckedUpdateManyInput>
    /**
     * Filter which SuperTags to update
     */
    where?: SuperTagWhereInput
  }

  /**
   * SuperTag upsert
   */
  export type SuperTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
    /**
     * The filter to search for the SuperTag to update in case it exists.
     */
    where: SuperTagWhereUniqueInput
    /**
     * In case the SuperTag found by the `where` argument doesn't exist, create a new SuperTag with this data.
     */
    create: XOR<SuperTagCreateInput, SuperTagUncheckedCreateInput>
    /**
     * In case the SuperTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperTagUpdateInput, SuperTagUncheckedUpdateInput>
  }

  /**
   * SuperTag delete
   */
  export type SuperTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
    /**
     * Filter which SuperTag to delete.
     */
    where: SuperTagWhereUniqueInput
  }

  /**
   * SuperTag deleteMany
   */
  export type SuperTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperTags to delete
     */
    where?: SuperTagWhereInput
  }

  /**
   * SuperTag.propriedade
   */
  export type SuperTag$propriedadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    where?: PropriedadeWhereInput
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    cursor?: PropriedadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropriedadeScalarFieldEnum | PropriedadeScalarFieldEnum[]
  }

  /**
   * SuperTag without action
   */
  export type SuperTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperTag
     */
    select?: SuperTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperTagInclude<ExtArgs> | null
  }


  /**
   * Model Propriedade
   */

  export type AggregatePropriedade = {
    _count: PropriedadeCountAggregateOutputType | null
    _avg: PropriedadeAvgAggregateOutputType | null
    _sum: PropriedadeSumAggregateOutputType | null
    _min: PropriedadeMinAggregateOutputType | null
    _max: PropriedadeMaxAggregateOutputType | null
  }

  export type PropriedadeAvgAggregateOutputType = {
    id: number | null
    superTagId: number | null
  }

  export type PropriedadeSumAggregateOutputType = {
    id: number | null
    superTagId: number | null
  }

  export type PropriedadeMinAggregateOutputType = {
    id: number | null
    chave: string | null
    valor: string | null
    tipo: string | null
    superTagId: number | null
  }

  export type PropriedadeMaxAggregateOutputType = {
    id: number | null
    chave: string | null
    valor: string | null
    tipo: string | null
    superTagId: number | null
  }

  export type PropriedadeCountAggregateOutputType = {
    id: number
    chave: number
    valor: number
    tipo: number
    superTagId: number
    _all: number
  }


  export type PropriedadeAvgAggregateInputType = {
    id?: true
    superTagId?: true
  }

  export type PropriedadeSumAggregateInputType = {
    id?: true
    superTagId?: true
  }

  export type PropriedadeMinAggregateInputType = {
    id?: true
    chave?: true
    valor?: true
    tipo?: true
    superTagId?: true
  }

  export type PropriedadeMaxAggregateInputType = {
    id?: true
    chave?: true
    valor?: true
    tipo?: true
    superTagId?: true
  }

  export type PropriedadeCountAggregateInputType = {
    id?: true
    chave?: true
    valor?: true
    tipo?: true
    superTagId?: true
    _all?: true
  }

  export type PropriedadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propriedade to aggregate.
     */
    where?: PropriedadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propriedades to fetch.
     */
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropriedadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propriedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propriedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Propriedades
    **/
    _count?: true | PropriedadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropriedadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropriedadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropriedadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropriedadeMaxAggregateInputType
  }

  export type GetPropriedadeAggregateType<T extends PropriedadeAggregateArgs> = {
        [P in keyof T & keyof AggregatePropriedade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropriedade[P]>
      : GetScalarType<T[P], AggregatePropriedade[P]>
  }




  export type PropriedadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropriedadeWhereInput
    orderBy?: PropriedadeOrderByWithAggregationInput | PropriedadeOrderByWithAggregationInput[]
    by: PropriedadeScalarFieldEnum[] | PropriedadeScalarFieldEnum
    having?: PropriedadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropriedadeCountAggregateInputType | true
    _avg?: PropriedadeAvgAggregateInputType
    _sum?: PropriedadeSumAggregateInputType
    _min?: PropriedadeMinAggregateInputType
    _max?: PropriedadeMaxAggregateInputType
  }

  export type PropriedadeGroupByOutputType = {
    id: number
    chave: string
    valor: string
    tipo: string
    superTagId: number
    _count: PropriedadeCountAggregateOutputType | null
    _avg: PropriedadeAvgAggregateOutputType | null
    _sum: PropriedadeSumAggregateOutputType | null
    _min: PropriedadeMinAggregateOutputType | null
    _max: PropriedadeMaxAggregateOutputType | null
  }

  type GetPropriedadeGroupByPayload<T extends PropriedadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropriedadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropriedadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropriedadeGroupByOutputType[P]>
            : GetScalarType<T[P], PropriedadeGroupByOutputType[P]>
        }
      >
    >


  export type PropriedadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chave?: boolean
    valor?: boolean
    tipo?: boolean
    superTagId?: boolean
    tag?: boolean | SuperTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propriedade"]>

  export type PropriedadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chave?: boolean
    valor?: boolean
    tipo?: boolean
    superTagId?: boolean
    tag?: boolean | SuperTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propriedade"]>

  export type PropriedadeSelectScalar = {
    id?: boolean
    chave?: boolean
    valor?: boolean
    tipo?: boolean
    superTagId?: boolean
  }

  export type PropriedadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | SuperTagDefaultArgs<ExtArgs>
  }
  export type PropriedadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | SuperTagDefaultArgs<ExtArgs>
  }

  export type $PropriedadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Propriedade"
    objects: {
      tag: Prisma.$SuperTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chave: string
      valor: string
      tipo: string
      superTagId: number
    }, ExtArgs["result"]["propriedade"]>
    composites: {}
  }

  type PropriedadeGetPayload<S extends boolean | null | undefined | PropriedadeDefaultArgs> = $Result.GetResult<Prisma.$PropriedadePayload, S>

  type PropriedadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropriedadeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropriedadeCountAggregateInputType | true
    }

  export interface PropriedadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Propriedade'], meta: { name: 'Propriedade' } }
    /**
     * Find zero or one Propriedade that matches the filter.
     * @param {PropriedadeFindUniqueArgs} args - Arguments to find a Propriedade
     * @example
     * // Get one Propriedade
     * const propriedade = await prisma.propriedade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropriedadeFindUniqueArgs>(args: SelectSubset<T, PropriedadeFindUniqueArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Propriedade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropriedadeFindUniqueOrThrowArgs} args - Arguments to find a Propriedade
     * @example
     * // Get one Propriedade
     * const propriedade = await prisma.propriedade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropriedadeFindUniqueOrThrowArgs>(args: SelectSubset<T, PropriedadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Propriedade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeFindFirstArgs} args - Arguments to find a Propriedade
     * @example
     * // Get one Propriedade
     * const propriedade = await prisma.propriedade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropriedadeFindFirstArgs>(args?: SelectSubset<T, PropriedadeFindFirstArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Propriedade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeFindFirstOrThrowArgs} args - Arguments to find a Propriedade
     * @example
     * // Get one Propriedade
     * const propriedade = await prisma.propriedade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropriedadeFindFirstOrThrowArgs>(args?: SelectSubset<T, PropriedadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Propriedades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Propriedades
     * const propriedades = await prisma.propriedade.findMany()
     * 
     * // Get first 10 Propriedades
     * const propriedades = await prisma.propriedade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propriedadeWithIdOnly = await prisma.propriedade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropriedadeFindManyArgs>(args?: SelectSubset<T, PropriedadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Propriedade.
     * @param {PropriedadeCreateArgs} args - Arguments to create a Propriedade.
     * @example
     * // Create one Propriedade
     * const Propriedade = await prisma.propriedade.create({
     *   data: {
     *     // ... data to create a Propriedade
     *   }
     * })
     * 
     */
    create<T extends PropriedadeCreateArgs>(args: SelectSubset<T, PropriedadeCreateArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Propriedades.
     * @param {PropriedadeCreateManyArgs} args - Arguments to create many Propriedades.
     * @example
     * // Create many Propriedades
     * const propriedade = await prisma.propriedade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropriedadeCreateManyArgs>(args?: SelectSubset<T, PropriedadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Propriedades and returns the data saved in the database.
     * @param {PropriedadeCreateManyAndReturnArgs} args - Arguments to create many Propriedades.
     * @example
     * // Create many Propriedades
     * const propriedade = await prisma.propriedade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Propriedades and only return the `id`
     * const propriedadeWithIdOnly = await prisma.propriedade.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropriedadeCreateManyAndReturnArgs>(args?: SelectSubset<T, PropriedadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Propriedade.
     * @param {PropriedadeDeleteArgs} args - Arguments to delete one Propriedade.
     * @example
     * // Delete one Propriedade
     * const Propriedade = await prisma.propriedade.delete({
     *   where: {
     *     // ... filter to delete one Propriedade
     *   }
     * })
     * 
     */
    delete<T extends PropriedadeDeleteArgs>(args: SelectSubset<T, PropriedadeDeleteArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Propriedade.
     * @param {PropriedadeUpdateArgs} args - Arguments to update one Propriedade.
     * @example
     * // Update one Propriedade
     * const propriedade = await prisma.propriedade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropriedadeUpdateArgs>(args: SelectSubset<T, PropriedadeUpdateArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Propriedades.
     * @param {PropriedadeDeleteManyArgs} args - Arguments to filter Propriedades to delete.
     * @example
     * // Delete a few Propriedades
     * const { count } = await prisma.propriedade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropriedadeDeleteManyArgs>(args?: SelectSubset<T, PropriedadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propriedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Propriedades
     * const propriedade = await prisma.propriedade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropriedadeUpdateManyArgs>(args: SelectSubset<T, PropriedadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Propriedade.
     * @param {PropriedadeUpsertArgs} args - Arguments to update or create a Propriedade.
     * @example
     * // Update or create a Propriedade
     * const propriedade = await prisma.propriedade.upsert({
     *   create: {
     *     // ... data to create a Propriedade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Propriedade we want to update
     *   }
     * })
     */
    upsert<T extends PropriedadeUpsertArgs>(args: SelectSubset<T, PropriedadeUpsertArgs<ExtArgs>>): Prisma__PropriedadeClient<$Result.GetResult<Prisma.$PropriedadePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Propriedades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeCountArgs} args - Arguments to filter Propriedades to count.
     * @example
     * // Count the number of Propriedades
     * const count = await prisma.propriedade.count({
     *   where: {
     *     // ... the filter for the Propriedades we want to count
     *   }
     * })
    **/
    count<T extends PropriedadeCountArgs>(
      args?: Subset<T, PropriedadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropriedadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Propriedade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropriedadeAggregateArgs>(args: Subset<T, PropriedadeAggregateArgs>): Prisma.PrismaPromise<GetPropriedadeAggregateType<T>>

    /**
     * Group by Propriedade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropriedadeGroupByArgs} args - Group by arguments.
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
      T extends PropriedadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropriedadeGroupByArgs['orderBy'] }
        : { orderBy?: PropriedadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropriedadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropriedadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Propriedade model
   */
  readonly fields: PropriedadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Propriedade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropriedadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends SuperTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SuperTagDefaultArgs<ExtArgs>>): Prisma__SuperTagClient<$Result.GetResult<Prisma.$SuperTagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Propriedade model
   */ 
  interface PropriedadeFieldRefs {
    readonly id: FieldRef<"Propriedade", 'Int'>
    readonly chave: FieldRef<"Propriedade", 'String'>
    readonly valor: FieldRef<"Propriedade", 'String'>
    readonly tipo: FieldRef<"Propriedade", 'String'>
    readonly superTagId: FieldRef<"Propriedade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Propriedade findUnique
   */
  export type PropriedadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedade to fetch.
     */
    where: PropriedadeWhereUniqueInput
  }

  /**
   * Propriedade findUniqueOrThrow
   */
  export type PropriedadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedade to fetch.
     */
    where: PropriedadeWhereUniqueInput
  }

  /**
   * Propriedade findFirst
   */
  export type PropriedadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedade to fetch.
     */
    where?: PropriedadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propriedades to fetch.
     */
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propriedades.
     */
    cursor?: PropriedadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propriedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propriedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propriedades.
     */
    distinct?: PropriedadeScalarFieldEnum | PropriedadeScalarFieldEnum[]
  }

  /**
   * Propriedade findFirstOrThrow
   */
  export type PropriedadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedade to fetch.
     */
    where?: PropriedadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propriedades to fetch.
     */
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propriedades.
     */
    cursor?: PropriedadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propriedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propriedades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propriedades.
     */
    distinct?: PropriedadeScalarFieldEnum | PropriedadeScalarFieldEnum[]
  }

  /**
   * Propriedade findMany
   */
  export type PropriedadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter, which Propriedades to fetch.
     */
    where?: PropriedadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propriedades to fetch.
     */
    orderBy?: PropriedadeOrderByWithRelationInput | PropriedadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Propriedades.
     */
    cursor?: PropriedadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propriedades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propriedades.
     */
    skip?: number
    distinct?: PropriedadeScalarFieldEnum | PropriedadeScalarFieldEnum[]
  }

  /**
   * Propriedade create
   */
  export type PropriedadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Propriedade.
     */
    data: XOR<PropriedadeCreateInput, PropriedadeUncheckedCreateInput>
  }

  /**
   * Propriedade createMany
   */
  export type PropriedadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Propriedades.
     */
    data: PropriedadeCreateManyInput | PropriedadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Propriedade createManyAndReturn
   */
  export type PropriedadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Propriedades.
     */
    data: PropriedadeCreateManyInput | PropriedadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Propriedade update
   */
  export type PropriedadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Propriedade.
     */
    data: XOR<PropriedadeUpdateInput, PropriedadeUncheckedUpdateInput>
    /**
     * Choose, which Propriedade to update.
     */
    where: PropriedadeWhereUniqueInput
  }

  /**
   * Propriedade updateMany
   */
  export type PropriedadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Propriedades.
     */
    data: XOR<PropriedadeUpdateManyMutationInput, PropriedadeUncheckedUpdateManyInput>
    /**
     * Filter which Propriedades to update
     */
    where?: PropriedadeWhereInput
  }

  /**
   * Propriedade upsert
   */
  export type PropriedadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Propriedade to update in case it exists.
     */
    where: PropriedadeWhereUniqueInput
    /**
     * In case the Propriedade found by the `where` argument doesn't exist, create a new Propriedade with this data.
     */
    create: XOR<PropriedadeCreateInput, PropriedadeUncheckedCreateInput>
    /**
     * In case the Propriedade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropriedadeUpdateInput, PropriedadeUncheckedUpdateInput>
  }

  /**
   * Propriedade delete
   */
  export type PropriedadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
    /**
     * Filter which Propriedade to delete.
     */
    where: PropriedadeWhereUniqueInput
  }

  /**
   * Propriedade deleteMany
   */
  export type PropriedadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propriedades to delete
     */
    where?: PropriedadeWhereInput
  }

  /**
   * Propriedade without action
   */
  export type PropriedadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propriedade
     */
    select?: PropriedadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropriedadeInclude<ExtArgs> | null
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
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SuperTagScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    conteudo: 'conteudo',
    icon: 'icon',
    userId: 'userId'
  };

  export type SuperTagScalarFieldEnum = (typeof SuperTagScalarFieldEnum)[keyof typeof SuperTagScalarFieldEnum]


  export const PropriedadeScalarFieldEnum: {
    id: 'id',
    chave: 'chave',
    valor: 'valor',
    tipo: 'tipo',
    superTagId: 'superTagId'
  };

  export type PropriedadeScalarFieldEnum = (typeof PropriedadeScalarFieldEnum)[keyof typeof PropriedadeScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type SuperTagWhereInput = {
    AND?: SuperTagWhereInput | SuperTagWhereInput[]
    OR?: SuperTagWhereInput[]
    NOT?: SuperTagWhereInput | SuperTagWhereInput[]
    id?: IntFilter<"SuperTag"> | number
    titulo?: StringFilter<"SuperTag"> | string
    conteudo?: StringFilter<"SuperTag"> | string
    icon?: StringFilter<"SuperTag"> | string
    userId?: IntFilter<"SuperTag"> | number
    propriedade?: PropriedadeListRelationFilter
  }

  export type SuperTagOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    propriedade?: PropriedadeOrderByRelationAggregateInput
  }

  export type SuperTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuperTagWhereInput | SuperTagWhereInput[]
    OR?: SuperTagWhereInput[]
    NOT?: SuperTagWhereInput | SuperTagWhereInput[]
    titulo?: StringFilter<"SuperTag"> | string
    conteudo?: StringFilter<"SuperTag"> | string
    icon?: StringFilter<"SuperTag"> | string
    userId?: IntFilter<"SuperTag"> | number
    propriedade?: PropriedadeListRelationFilter
  }, "id">

  export type SuperTagOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    _count?: SuperTagCountOrderByAggregateInput
    _avg?: SuperTagAvgOrderByAggregateInput
    _max?: SuperTagMaxOrderByAggregateInput
    _min?: SuperTagMinOrderByAggregateInput
    _sum?: SuperTagSumOrderByAggregateInput
  }

  export type SuperTagScalarWhereWithAggregatesInput = {
    AND?: SuperTagScalarWhereWithAggregatesInput | SuperTagScalarWhereWithAggregatesInput[]
    OR?: SuperTagScalarWhereWithAggregatesInput[]
    NOT?: SuperTagScalarWhereWithAggregatesInput | SuperTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SuperTag"> | number
    titulo?: StringWithAggregatesFilter<"SuperTag"> | string
    conteudo?: StringWithAggregatesFilter<"SuperTag"> | string
    icon?: StringWithAggregatesFilter<"SuperTag"> | string
    userId?: IntWithAggregatesFilter<"SuperTag"> | number
  }

  export type PropriedadeWhereInput = {
    AND?: PropriedadeWhereInput | PropriedadeWhereInput[]
    OR?: PropriedadeWhereInput[]
    NOT?: PropriedadeWhereInput | PropriedadeWhereInput[]
    id?: IntFilter<"Propriedade"> | number
    chave?: StringFilter<"Propriedade"> | string
    valor?: StringFilter<"Propriedade"> | string
    tipo?: StringFilter<"Propriedade"> | string
    superTagId?: IntFilter<"Propriedade"> | number
    tag?: XOR<SuperTagRelationFilter, SuperTagWhereInput>
  }

  export type PropriedadeOrderByWithRelationInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    superTagId?: SortOrder
    tag?: SuperTagOrderByWithRelationInput
  }

  export type PropriedadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropriedadeWhereInput | PropriedadeWhereInput[]
    OR?: PropriedadeWhereInput[]
    NOT?: PropriedadeWhereInput | PropriedadeWhereInput[]
    chave?: StringFilter<"Propriedade"> | string
    valor?: StringFilter<"Propriedade"> | string
    tipo?: StringFilter<"Propriedade"> | string
    superTagId?: IntFilter<"Propriedade"> | number
    tag?: XOR<SuperTagRelationFilter, SuperTagWhereInput>
  }, "id">

  export type PropriedadeOrderByWithAggregationInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    superTagId?: SortOrder
    _count?: PropriedadeCountOrderByAggregateInput
    _avg?: PropriedadeAvgOrderByAggregateInput
    _max?: PropriedadeMaxOrderByAggregateInput
    _min?: PropriedadeMinOrderByAggregateInput
    _sum?: PropriedadeSumOrderByAggregateInput
  }

  export type PropriedadeScalarWhereWithAggregatesInput = {
    AND?: PropriedadeScalarWhereWithAggregatesInput | PropriedadeScalarWhereWithAggregatesInput[]
    OR?: PropriedadeScalarWhereWithAggregatesInput[]
    NOT?: PropriedadeScalarWhereWithAggregatesInput | PropriedadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Propriedade"> | number
    chave?: StringWithAggregatesFilter<"Propriedade"> | string
    valor?: StringWithAggregatesFilter<"Propriedade"> | string
    tipo?: StringWithAggregatesFilter<"Propriedade"> | string
    superTagId?: IntWithAggregatesFilter<"Propriedade"> | number
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SuperTagCreateInput = {
    titulo: string
    conteudo: string
    icon: string
    userId: number
    propriedade?: PropriedadeCreateNestedManyWithoutTagInput
  }

  export type SuperTagUncheckedCreateInput = {
    id?: number
    titulo: string
    conteudo: string
    icon: string
    userId: number
    propriedade?: PropriedadeUncheckedCreateNestedManyWithoutTagInput
  }

  export type SuperTagUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    propriedade?: PropriedadeUpdateManyWithoutTagNestedInput
  }

  export type SuperTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    propriedade?: PropriedadeUncheckedUpdateManyWithoutTagNestedInput
  }

  export type SuperTagCreateManyInput = {
    id?: number
    titulo: string
    conteudo: string
    icon: string
    userId: number
  }

  export type SuperTagUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SuperTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeCreateInput = {
    chave: string
    valor: string
    tipo: string
    tag: SuperTagCreateNestedOneWithoutPropriedadeInput
  }

  export type PropriedadeUncheckedCreateInput = {
    id?: number
    chave: string
    valor: string
    tipo: string
    superTagId: number
  }

  export type PropriedadeUpdateInput = {
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tag?: SuperTagUpdateOneRequiredWithoutPropriedadeNestedInput
  }

  export type PropriedadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    superTagId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeCreateManyInput = {
    id?: number
    chave: string
    valor: string
    tipo: string
    superTagId: number
  }

  export type PropriedadeUpdateManyMutationInput = {
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    superTagId?: IntFieldUpdateOperationsInput | number
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type PropriedadeListRelationFilter = {
    every?: PropriedadeWhereInput
    some?: PropriedadeWhereInput
    none?: PropriedadeWhereInput
  }

  export type PropriedadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuperTagCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type SuperTagAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SuperTagMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type SuperTagMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type SuperTagSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SuperTagRelationFilter = {
    is?: SuperTagWhereInput
    isNot?: SuperTagWhereInput
  }

  export type PropriedadeCountOrderByAggregateInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    superTagId?: SortOrder
  }

  export type PropriedadeAvgOrderByAggregateInput = {
    id?: SortOrder
    superTagId?: SortOrder
  }

  export type PropriedadeMaxOrderByAggregateInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    superTagId?: SortOrder
  }

  export type PropriedadeMinOrderByAggregateInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    superTagId?: SortOrder
  }

  export type PropriedadeSumOrderByAggregateInput = {
    id?: SortOrder
    superTagId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropriedadeCreateNestedManyWithoutTagInput = {
    create?: XOR<PropriedadeCreateWithoutTagInput, PropriedadeUncheckedCreateWithoutTagInput> | PropriedadeCreateWithoutTagInput[] | PropriedadeUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PropriedadeCreateOrConnectWithoutTagInput | PropriedadeCreateOrConnectWithoutTagInput[]
    createMany?: PropriedadeCreateManyTagInputEnvelope
    connect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
  }

  export type PropriedadeUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PropriedadeCreateWithoutTagInput, PropriedadeUncheckedCreateWithoutTagInput> | PropriedadeCreateWithoutTagInput[] | PropriedadeUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PropriedadeCreateOrConnectWithoutTagInput | PropriedadeCreateOrConnectWithoutTagInput[]
    createMany?: PropriedadeCreateManyTagInputEnvelope
    connect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
  }

  export type PropriedadeUpdateManyWithoutTagNestedInput = {
    create?: XOR<PropriedadeCreateWithoutTagInput, PropriedadeUncheckedCreateWithoutTagInput> | PropriedadeCreateWithoutTagInput[] | PropriedadeUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PropriedadeCreateOrConnectWithoutTagInput | PropriedadeCreateOrConnectWithoutTagInput[]
    upsert?: PropriedadeUpsertWithWhereUniqueWithoutTagInput | PropriedadeUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PropriedadeCreateManyTagInputEnvelope
    set?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    disconnect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    delete?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    connect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    update?: PropriedadeUpdateWithWhereUniqueWithoutTagInput | PropriedadeUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PropriedadeUpdateManyWithWhereWithoutTagInput | PropriedadeUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PropriedadeScalarWhereInput | PropriedadeScalarWhereInput[]
  }

  export type PropriedadeUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PropriedadeCreateWithoutTagInput, PropriedadeUncheckedCreateWithoutTagInput> | PropriedadeCreateWithoutTagInput[] | PropriedadeUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PropriedadeCreateOrConnectWithoutTagInput | PropriedadeCreateOrConnectWithoutTagInput[]
    upsert?: PropriedadeUpsertWithWhereUniqueWithoutTagInput | PropriedadeUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PropriedadeCreateManyTagInputEnvelope
    set?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    disconnect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    delete?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    connect?: PropriedadeWhereUniqueInput | PropriedadeWhereUniqueInput[]
    update?: PropriedadeUpdateWithWhereUniqueWithoutTagInput | PropriedadeUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PropriedadeUpdateManyWithWhereWithoutTagInput | PropriedadeUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PropriedadeScalarWhereInput | PropriedadeScalarWhereInput[]
  }

  export type SuperTagCreateNestedOneWithoutPropriedadeInput = {
    create?: XOR<SuperTagCreateWithoutPropriedadeInput, SuperTagUncheckedCreateWithoutPropriedadeInput>
    connectOrCreate?: SuperTagCreateOrConnectWithoutPropriedadeInput
    connect?: SuperTagWhereUniqueInput
  }

  export type SuperTagUpdateOneRequiredWithoutPropriedadeNestedInput = {
    create?: XOR<SuperTagCreateWithoutPropriedadeInput, SuperTagUncheckedCreateWithoutPropriedadeInput>
    connectOrCreate?: SuperTagCreateOrConnectWithoutPropriedadeInput
    upsert?: SuperTagUpsertWithoutPropriedadeInput
    connect?: SuperTagWhereUniqueInput
    update?: XOR<XOR<SuperTagUpdateToOneWithWhereWithoutPropriedadeInput, SuperTagUpdateWithoutPropriedadeInput>, SuperTagUncheckedUpdateWithoutPropriedadeInput>
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

  export type PropriedadeCreateWithoutTagInput = {
    chave: string
    valor: string
    tipo: string
  }

  export type PropriedadeUncheckedCreateWithoutTagInput = {
    id?: number
    chave: string
    valor: string
    tipo: string
  }

  export type PropriedadeCreateOrConnectWithoutTagInput = {
    where: PropriedadeWhereUniqueInput
    create: XOR<PropriedadeCreateWithoutTagInput, PropriedadeUncheckedCreateWithoutTagInput>
  }

  export type PropriedadeCreateManyTagInputEnvelope = {
    data: PropriedadeCreateManyTagInput | PropriedadeCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type PropriedadeUpsertWithWhereUniqueWithoutTagInput = {
    where: PropriedadeWhereUniqueInput
    update: XOR<PropriedadeUpdateWithoutTagInput, PropriedadeUncheckedUpdateWithoutTagInput>
    create: XOR<PropriedadeCreateWithoutTagInput, PropriedadeUncheckedCreateWithoutTagInput>
  }

  export type PropriedadeUpdateWithWhereUniqueWithoutTagInput = {
    where: PropriedadeWhereUniqueInput
    data: XOR<PropriedadeUpdateWithoutTagInput, PropriedadeUncheckedUpdateWithoutTagInput>
  }

  export type PropriedadeUpdateManyWithWhereWithoutTagInput = {
    where: PropriedadeScalarWhereInput
    data: XOR<PropriedadeUpdateManyMutationInput, PropriedadeUncheckedUpdateManyWithoutTagInput>
  }

  export type PropriedadeScalarWhereInput = {
    AND?: PropriedadeScalarWhereInput | PropriedadeScalarWhereInput[]
    OR?: PropriedadeScalarWhereInput[]
    NOT?: PropriedadeScalarWhereInput | PropriedadeScalarWhereInput[]
    id?: IntFilter<"Propriedade"> | number
    chave?: StringFilter<"Propriedade"> | string
    valor?: StringFilter<"Propriedade"> | string
    tipo?: StringFilter<"Propriedade"> | string
    superTagId?: IntFilter<"Propriedade"> | number
  }

  export type SuperTagCreateWithoutPropriedadeInput = {
    titulo: string
    conteudo: string
    icon: string
    userId: number
  }

  export type SuperTagUncheckedCreateWithoutPropriedadeInput = {
    id?: number
    titulo: string
    conteudo: string
    icon: string
    userId: number
  }

  export type SuperTagCreateOrConnectWithoutPropriedadeInput = {
    where: SuperTagWhereUniqueInput
    create: XOR<SuperTagCreateWithoutPropriedadeInput, SuperTagUncheckedCreateWithoutPropriedadeInput>
  }

  export type SuperTagUpsertWithoutPropriedadeInput = {
    update: XOR<SuperTagUpdateWithoutPropriedadeInput, SuperTagUncheckedUpdateWithoutPropriedadeInput>
    create: XOR<SuperTagCreateWithoutPropriedadeInput, SuperTagUncheckedCreateWithoutPropriedadeInput>
    where?: SuperTagWhereInput
  }

  export type SuperTagUpdateToOneWithWhereWithoutPropriedadeInput = {
    where?: SuperTagWhereInput
    data: XOR<SuperTagUpdateWithoutPropriedadeInput, SuperTagUncheckedUpdateWithoutPropriedadeInput>
  }

  export type SuperTagUpdateWithoutPropriedadeInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SuperTagUncheckedUpdateWithoutPropriedadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PropriedadeCreateManyTagInput = {
    id?: number
    chave: string
    valor: string
    tipo: string
  }

  export type PropriedadeUpdateWithoutTagInput = {
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type PropriedadeUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SuperTagCountOutputTypeDefaultArgs instead
     */
    export type SuperTagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuperTagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuperTagDefaultArgs instead
     */
    export type SuperTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuperTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropriedadeDefaultArgs instead
     */
    export type PropriedadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropriedadeDefaultArgs<ExtArgs>

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