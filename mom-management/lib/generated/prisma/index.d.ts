
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MeetingMember
 * 
 */
export type MeetingMember = $Result.DefaultSelection<Prisma.$MeetingMemberPayload>
/**
 * Model MeetingType
 * 
 */
export type MeetingType = $Result.DefaultSelection<Prisma.$MeetingTypePayload>
/**
 * Model Meetings
 * 
 */
export type Meetings = $Result.DefaultSelection<Prisma.$MeetingsPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model UserActivity
 * 
 */
export type UserActivity = $Result.DefaultSelection<Prisma.$UserActivityPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model departments
 * 
 */
export type departments = $Result.DefaultSelection<Prisma.$departmentsPayload>
/**
 * Model venues
 * 
 */
export type venues = $Result.DefaultSelection<Prisma.$venuesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more MeetingMembers
 * const meetingMembers = await prisma.meetingMember.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more MeetingMembers
   * const meetingMembers = await prisma.meetingMember.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.meetingMember`: Exposes CRUD operations for the **MeetingMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeetingMembers
    * const meetingMembers = await prisma.meetingMember.findMany()
    * ```
    */
  get meetingMember(): Prisma.MeetingMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingType`: Exposes CRUD operations for the **MeetingType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeetingTypes
    * const meetingTypes = await prisma.meetingType.findMany()
    * ```
    */
  get meetingType(): Prisma.MeetingTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetings`: Exposes CRUD operations for the **Meetings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meetings.findMany()
    * ```
    */
  get meetings(): Prisma.MeetingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userActivity`: Exposes CRUD operations for the **UserActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserActivities
    * const userActivities = await prisma.userActivity.findMany()
    * ```
    */
  get userActivity(): Prisma.UserActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.departmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venues`: Exposes CRUD operations for the **venues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venues.findMany()
    * ```
    */
  get venues(): Prisma.venuesDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    MeetingMember: 'MeetingMember',
    MeetingType: 'MeetingType',
    Meetings: 'Meetings',
    Staff: 'Staff',
    UserActivity: 'UserActivity',
    Attendance: 'Attendance',
    departments: 'departments',
    venues: 'venues'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "meetingMember" | "meetingType" | "meetings" | "staff" | "userActivity" | "attendance" | "departments" | "venues"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MeetingMember: {
        payload: Prisma.$MeetingMemberPayload<ExtArgs>
        fields: Prisma.MeetingMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload>
          }
          findFirst: {
            args: Prisma.MeetingMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload>
          }
          findMany: {
            args: Prisma.MeetingMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload>[]
          }
          create: {
            args: Prisma.MeetingMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload>
          }
          createMany: {
            args: Prisma.MeetingMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload>[]
          }
          delete: {
            args: Prisma.MeetingMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload>
          }
          update: {
            args: Prisma.MeetingMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload>
          }
          deleteMany: {
            args: Prisma.MeetingMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload>[]
          }
          upsert: {
            args: Prisma.MeetingMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingMemberPayload>
          }
          aggregate: {
            args: Prisma.MeetingMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingMember>
          }
          groupBy: {
            args: Prisma.MeetingMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingMemberCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingMemberCountAggregateOutputType> | number
          }
        }
      }
      MeetingType: {
        payload: Prisma.$MeetingTypePayload<ExtArgs>
        fields: Prisma.MeetingTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload>
          }
          findFirst: {
            args: Prisma.MeetingTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload>
          }
          findMany: {
            args: Prisma.MeetingTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload>[]
          }
          create: {
            args: Prisma.MeetingTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload>
          }
          createMany: {
            args: Prisma.MeetingTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload>[]
          }
          delete: {
            args: Prisma.MeetingTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload>
          }
          update: {
            args: Prisma.MeetingTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload>
          }
          deleteMany: {
            args: Prisma.MeetingTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload>[]
          }
          upsert: {
            args: Prisma.MeetingTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingTypePayload>
          }
          aggregate: {
            args: Prisma.MeetingTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingType>
          }
          groupBy: {
            args: Prisma.MeetingTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingTypeCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingTypeCountAggregateOutputType> | number
          }
        }
      }
      Meetings: {
        payload: Prisma.$MeetingsPayload<ExtArgs>
        fields: Prisma.MeetingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          findFirst: {
            args: Prisma.MeetingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          findMany: {
            args: Prisma.MeetingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>[]
          }
          create: {
            args: Prisma.MeetingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          createMany: {
            args: Prisma.MeetingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>[]
          }
          delete: {
            args: Prisma.MeetingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          update: {
            args: Prisma.MeetingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          deleteMany: {
            args: Prisma.MeetingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>[]
          }
          upsert: {
            args: Prisma.MeetingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingsPayload>
          }
          aggregate: {
            args: Prisma.MeetingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetings>
          }
          groupBy: {
            args: Prisma.MeetingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingsCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingsCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      UserActivity: {
        payload: Prisma.$UserActivityPayload<ExtArgs>
        fields: Prisma.UserActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          findFirst: {
            args: Prisma.UserActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          findMany: {
            args: Prisma.UserActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>[]
          }
          create: {
            args: Prisma.UserActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          createMany: {
            args: Prisma.UserActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>[]
          }
          delete: {
            args: Prisma.UserActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          update: {
            args: Prisma.UserActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          deleteMany: {
            args: Prisma.UserActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>[]
          }
          upsert: {
            args: Prisma.UserActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          aggregate: {
            args: Prisma.UserActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserActivity>
          }
          groupBy: {
            args: Prisma.UserActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserActivityCountArgs<ExtArgs>
            result: $Utils.Optional<UserActivityCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      departments: {
        payload: Prisma.$departmentsPayload<ExtArgs>
        fields: Prisma.departmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findFirst: {
            args: Prisma.departmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findMany: {
            args: Prisma.departmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          create: {
            args: Prisma.departmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          createMany: {
            args: Prisma.departmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.departmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          delete: {
            args: Prisma.departmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          update: {
            args: Prisma.departmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          deleteMany: {
            args: Prisma.departmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.departmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          upsert: {
            args: Prisma.departmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.departmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      venues: {
        payload: Prisma.$venuesPayload<ExtArgs>
        fields: Prisma.venuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.venuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.venuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          findFirst: {
            args: Prisma.venuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.venuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          findMany: {
            args: Prisma.venuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>[]
          }
          create: {
            args: Prisma.venuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          createMany: {
            args: Prisma.venuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.venuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>[]
          }
          delete: {
            args: Prisma.venuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          update: {
            args: Prisma.venuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          deleteMany: {
            args: Prisma.venuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.venuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.venuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>[]
          }
          upsert: {
            args: Prisma.venuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          aggregate: {
            args: Prisma.VenuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenues>
          }
          groupBy: {
            args: Prisma.venuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.venuesCountArgs<ExtArgs>
            result: $Utils.Optional<VenuesCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    meetingMember?: MeetingMemberOmit
    meetingType?: MeetingTypeOmit
    meetings?: MeetingsOmit
    staff?: StaffOmit
    userActivity?: UserActivityOmit
    attendance?: AttendanceOmit
    departments?: departmentsOmit
    venues?: venuesOmit
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
   * Count Type MeetingTypeCountOutputType
   */

  export type MeetingTypeCountOutputType = {
    Meetings: number
  }

  export type MeetingTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meetings?: boolean | MeetingTypeCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * MeetingTypeCountOutputType without action
   */
  export type MeetingTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingTypeCountOutputType
     */
    select?: MeetingTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingTypeCountOutputType without action
   */
  export type MeetingTypeCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingsWhereInput
  }


  /**
   * Count Type MeetingsCountOutputType
   */

  export type MeetingsCountOutputType = {
    MeetingMember: number
  }

  export type MeetingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetingMember?: boolean | MeetingsCountOutputTypeCountMeetingMemberArgs
  }

  // Custom InputTypes
  /**
   * MeetingsCountOutputType without action
   */
  export type MeetingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingsCountOutputType
     */
    select?: MeetingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingsCountOutputType without action
   */
  export type MeetingsCountOutputTypeCountMeetingMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingMemberWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    MeetingMember: number
    UserActivity: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetingMember?: boolean | StaffCountOutputTypeCountMeetingMemberArgs
    UserActivity?: boolean | StaffCountOutputTypeCountUserActivityArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountMeetingMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingMemberWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountUserActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MeetingMember
   */

  export type AggregateMeetingMember = {
    _count: MeetingMemberCountAggregateOutputType | null
    _avg: MeetingMemberAvgAggregateOutputType | null
    _sum: MeetingMemberSumAggregateOutputType | null
    _min: MeetingMemberMinAggregateOutputType | null
    _max: MeetingMemberMaxAggregateOutputType | null
  }

  export type MeetingMemberAvgAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
  }

  export type MeetingMemberSumAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
  }

  export type MeetingMemberMinAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
    IsPresent: boolean | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingMemberMaxAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
    IsPresent: boolean | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingMemberCountAggregateOutputType = {
    MeetingMemberID: number
    MeetingID: number
    StaffID: number
    IsPresent: number
    Remarks: number
    Created: number
    Modified: number
    _all: number
  }


  export type MeetingMemberAvgAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
  }

  export type MeetingMemberSumAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
  }

  export type MeetingMemberMinAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
    IsPresent?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingMemberMaxAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
    IsPresent?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingMemberCountAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
    IsPresent?: true
    Remarks?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type MeetingMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingMember to aggregate.
     */
    where?: MeetingMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingMembers to fetch.
     */
    orderBy?: MeetingMemberOrderByWithRelationInput | MeetingMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeetingMembers
    **/
    _count?: true | MeetingMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMemberMaxAggregateInputType
  }

  export type GetMeetingMemberAggregateType<T extends MeetingMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingMember[P]>
      : GetScalarType<T[P], AggregateMeetingMember[P]>
  }




  export type MeetingMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingMemberWhereInput
    orderBy?: MeetingMemberOrderByWithAggregationInput | MeetingMemberOrderByWithAggregationInput[]
    by: MeetingMemberScalarFieldEnum[] | MeetingMemberScalarFieldEnum
    having?: MeetingMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingMemberCountAggregateInputType | true
    _avg?: MeetingMemberAvgAggregateInputType
    _sum?: MeetingMemberSumAggregateInputType
    _min?: MeetingMemberMinAggregateInputType
    _max?: MeetingMemberMaxAggregateInputType
  }

  export type MeetingMemberGroupByOutputType = {
    MeetingMemberID: number
    MeetingID: number
    StaffID: number
    IsPresent: boolean
    Remarks: string | null
    Created: Date
    Modified: Date
    _count: MeetingMemberCountAggregateOutputType | null
    _avg: MeetingMemberAvgAggregateOutputType | null
    _sum: MeetingMemberSumAggregateOutputType | null
    _min: MeetingMemberMinAggregateOutputType | null
    _max: MeetingMemberMaxAggregateOutputType | null
  }

  type GetMeetingMemberGroupByPayload<T extends MeetingMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingMemberGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingMemberGroupByOutputType[P]>
        }
      >
    >


  export type MeetingMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingMemberID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Meetings?: boolean | MeetingsDefaultArgs<ExtArgs>
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingMember"]>

  export type MeetingMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingMemberID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Meetings?: boolean | MeetingsDefaultArgs<ExtArgs>
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingMember"]>

  export type MeetingMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingMemberID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Meetings?: boolean | MeetingsDefaultArgs<ExtArgs>
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingMember"]>

  export type MeetingMemberSelectScalar = {
    MeetingMemberID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type MeetingMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MeetingMemberID" | "MeetingID" | "StaffID" | "IsPresent" | "Remarks" | "Created" | "Modified", ExtArgs["result"]["meetingMember"]>
  export type MeetingMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meetings?: boolean | MeetingsDefaultArgs<ExtArgs>
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type MeetingMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meetings?: boolean | MeetingsDefaultArgs<ExtArgs>
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type MeetingMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meetings?: boolean | MeetingsDefaultArgs<ExtArgs>
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }

  export type $MeetingMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeetingMember"
    objects: {
      Meetings: Prisma.$MeetingsPayload<ExtArgs>
      Staff: Prisma.$StaffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MeetingMemberID: number
      MeetingID: number
      StaffID: number
      IsPresent: boolean
      Remarks: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["meetingMember"]>
    composites: {}
  }

  type MeetingMemberGetPayload<S extends boolean | null | undefined | MeetingMemberDefaultArgs> = $Result.GetResult<Prisma.$MeetingMemberPayload, S>

  type MeetingMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingMemberCountAggregateInputType | true
    }

  export interface MeetingMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeetingMember'], meta: { name: 'MeetingMember' } }
    /**
     * Find zero or one MeetingMember that matches the filter.
     * @param {MeetingMemberFindUniqueArgs} args - Arguments to find a MeetingMember
     * @example
     * // Get one MeetingMember
     * const meetingMember = await prisma.meetingMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingMemberFindUniqueArgs>(args: SelectSubset<T, MeetingMemberFindUniqueArgs<ExtArgs>>): Prisma__MeetingMemberClient<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeetingMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingMemberFindUniqueOrThrowArgs} args - Arguments to find a MeetingMember
     * @example
     * // Get one MeetingMember
     * const meetingMember = await prisma.meetingMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingMemberClient<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingMemberFindFirstArgs} args - Arguments to find a MeetingMember
     * @example
     * // Get one MeetingMember
     * const meetingMember = await prisma.meetingMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingMemberFindFirstArgs>(args?: SelectSubset<T, MeetingMemberFindFirstArgs<ExtArgs>>): Prisma__MeetingMemberClient<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingMemberFindFirstOrThrowArgs} args - Arguments to find a MeetingMember
     * @example
     * // Get one MeetingMember
     * const meetingMember = await prisma.meetingMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingMemberClient<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeetingMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeetingMembers
     * const meetingMembers = await prisma.meetingMember.findMany()
     * 
     * // Get first 10 MeetingMembers
     * const meetingMembers = await prisma.meetingMember.findMany({ take: 10 })
     * 
     * // Only select the `MeetingMemberID`
     * const meetingMemberWithMeetingMemberIDOnly = await prisma.meetingMember.findMany({ select: { MeetingMemberID: true } })
     * 
     */
    findMany<T extends MeetingMemberFindManyArgs>(args?: SelectSubset<T, MeetingMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeetingMember.
     * @param {MeetingMemberCreateArgs} args - Arguments to create a MeetingMember.
     * @example
     * // Create one MeetingMember
     * const MeetingMember = await prisma.meetingMember.create({
     *   data: {
     *     // ... data to create a MeetingMember
     *   }
     * })
     * 
     */
    create<T extends MeetingMemberCreateArgs>(args: SelectSubset<T, MeetingMemberCreateArgs<ExtArgs>>): Prisma__MeetingMemberClient<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeetingMembers.
     * @param {MeetingMemberCreateManyArgs} args - Arguments to create many MeetingMembers.
     * @example
     * // Create many MeetingMembers
     * const meetingMember = await prisma.meetingMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingMemberCreateManyArgs>(args?: SelectSubset<T, MeetingMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeetingMembers and returns the data saved in the database.
     * @param {MeetingMemberCreateManyAndReturnArgs} args - Arguments to create many MeetingMembers.
     * @example
     * // Create many MeetingMembers
     * const meetingMember = await prisma.meetingMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeetingMembers and only return the `MeetingMemberID`
     * const meetingMemberWithMeetingMemberIDOnly = await prisma.meetingMember.createManyAndReturn({
     *   select: { MeetingMemberID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeetingMember.
     * @param {MeetingMemberDeleteArgs} args - Arguments to delete one MeetingMember.
     * @example
     * // Delete one MeetingMember
     * const MeetingMember = await prisma.meetingMember.delete({
     *   where: {
     *     // ... filter to delete one MeetingMember
     *   }
     * })
     * 
     */
    delete<T extends MeetingMemberDeleteArgs>(args: SelectSubset<T, MeetingMemberDeleteArgs<ExtArgs>>): Prisma__MeetingMemberClient<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeetingMember.
     * @param {MeetingMemberUpdateArgs} args - Arguments to update one MeetingMember.
     * @example
     * // Update one MeetingMember
     * const meetingMember = await prisma.meetingMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingMemberUpdateArgs>(args: SelectSubset<T, MeetingMemberUpdateArgs<ExtArgs>>): Prisma__MeetingMemberClient<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeetingMembers.
     * @param {MeetingMemberDeleteManyArgs} args - Arguments to filter MeetingMembers to delete.
     * @example
     * // Delete a few MeetingMembers
     * const { count } = await prisma.meetingMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingMemberDeleteManyArgs>(args?: SelectSubset<T, MeetingMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeetingMembers
     * const meetingMember = await prisma.meetingMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingMemberUpdateManyArgs>(args: SelectSubset<T, MeetingMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingMembers and returns the data updated in the database.
     * @param {MeetingMemberUpdateManyAndReturnArgs} args - Arguments to update many MeetingMembers.
     * @example
     * // Update many MeetingMembers
     * const meetingMember = await prisma.meetingMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeetingMembers and only return the `MeetingMemberID`
     * const meetingMemberWithMeetingMemberIDOnly = await prisma.meetingMember.updateManyAndReturn({
     *   select: { MeetingMemberID: true },
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
    updateManyAndReturn<T extends MeetingMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeetingMember.
     * @param {MeetingMemberUpsertArgs} args - Arguments to update or create a MeetingMember.
     * @example
     * // Update or create a MeetingMember
     * const meetingMember = await prisma.meetingMember.upsert({
     *   create: {
     *     // ... data to create a MeetingMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeetingMember we want to update
     *   }
     * })
     */
    upsert<T extends MeetingMemberUpsertArgs>(args: SelectSubset<T, MeetingMemberUpsertArgs<ExtArgs>>): Prisma__MeetingMemberClient<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeetingMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingMemberCountArgs} args - Arguments to filter MeetingMembers to count.
     * @example
     * // Count the number of MeetingMembers
     * const count = await prisma.meetingMember.count({
     *   where: {
     *     // ... the filter for the MeetingMembers we want to count
     *   }
     * })
    **/
    count<T extends MeetingMemberCountArgs>(
      args?: Subset<T, MeetingMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeetingMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeetingMemberAggregateArgs>(args: Subset<T, MeetingMemberAggregateArgs>): Prisma.PrismaPromise<GetMeetingMemberAggregateType<T>>

    /**
     * Group by MeetingMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingMemberGroupByArgs} args - Group by arguments.
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
      T extends MeetingMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingMemberGroupByArgs['orderBy'] }
        : { orderBy?: MeetingMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeetingMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeetingMember model
   */
  readonly fields: MeetingMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeetingMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Meetings<T extends MeetingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingsDefaultArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MeetingMember model
   */
  interface MeetingMemberFieldRefs {
    readonly MeetingMemberID: FieldRef<"MeetingMember", 'Int'>
    readonly MeetingID: FieldRef<"MeetingMember", 'Int'>
    readonly StaffID: FieldRef<"MeetingMember", 'Int'>
    readonly IsPresent: FieldRef<"MeetingMember", 'Boolean'>
    readonly Remarks: FieldRef<"MeetingMember", 'String'>
    readonly Created: FieldRef<"MeetingMember", 'DateTime'>
    readonly Modified: FieldRef<"MeetingMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeetingMember findUnique
   */
  export type MeetingMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    /**
     * Filter, which MeetingMember to fetch.
     */
    where: MeetingMemberWhereUniqueInput
  }

  /**
   * MeetingMember findUniqueOrThrow
   */
  export type MeetingMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    /**
     * Filter, which MeetingMember to fetch.
     */
    where: MeetingMemberWhereUniqueInput
  }

  /**
   * MeetingMember findFirst
   */
  export type MeetingMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    /**
     * Filter, which MeetingMember to fetch.
     */
    where?: MeetingMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingMembers to fetch.
     */
    orderBy?: MeetingMemberOrderByWithRelationInput | MeetingMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingMembers.
     */
    cursor?: MeetingMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingMembers.
     */
    distinct?: MeetingMemberScalarFieldEnum | MeetingMemberScalarFieldEnum[]
  }

  /**
   * MeetingMember findFirstOrThrow
   */
  export type MeetingMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    /**
     * Filter, which MeetingMember to fetch.
     */
    where?: MeetingMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingMembers to fetch.
     */
    orderBy?: MeetingMemberOrderByWithRelationInput | MeetingMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingMembers.
     */
    cursor?: MeetingMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingMembers.
     */
    distinct?: MeetingMemberScalarFieldEnum | MeetingMemberScalarFieldEnum[]
  }

  /**
   * MeetingMember findMany
   */
  export type MeetingMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    /**
     * Filter, which MeetingMembers to fetch.
     */
    where?: MeetingMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingMembers to fetch.
     */
    orderBy?: MeetingMemberOrderByWithRelationInput | MeetingMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeetingMembers.
     */
    cursor?: MeetingMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingMembers.
     */
    distinct?: MeetingMemberScalarFieldEnum | MeetingMemberScalarFieldEnum[]
  }

  /**
   * MeetingMember create
   */
  export type MeetingMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a MeetingMember.
     */
    data: XOR<MeetingMemberCreateInput, MeetingMemberUncheckedCreateInput>
  }

  /**
   * MeetingMember createMany
   */
  export type MeetingMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeetingMembers.
     */
    data: MeetingMemberCreateManyInput | MeetingMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingMember createManyAndReturn
   */
  export type MeetingMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * The data used to create many MeetingMembers.
     */
    data: MeetingMemberCreateManyInput | MeetingMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingMember update
   */
  export type MeetingMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a MeetingMember.
     */
    data: XOR<MeetingMemberUpdateInput, MeetingMemberUncheckedUpdateInput>
    /**
     * Choose, which MeetingMember to update.
     */
    where: MeetingMemberWhereUniqueInput
  }

  /**
   * MeetingMember updateMany
   */
  export type MeetingMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeetingMembers.
     */
    data: XOR<MeetingMemberUpdateManyMutationInput, MeetingMemberUncheckedUpdateManyInput>
    /**
     * Filter which MeetingMembers to update
     */
    where?: MeetingMemberWhereInput
    /**
     * Limit how many MeetingMembers to update.
     */
    limit?: number
  }

  /**
   * MeetingMember updateManyAndReturn
   */
  export type MeetingMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * The data used to update MeetingMembers.
     */
    data: XOR<MeetingMemberUpdateManyMutationInput, MeetingMemberUncheckedUpdateManyInput>
    /**
     * Filter which MeetingMembers to update
     */
    where?: MeetingMemberWhereInput
    /**
     * Limit how many MeetingMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingMember upsert
   */
  export type MeetingMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the MeetingMember to update in case it exists.
     */
    where: MeetingMemberWhereUniqueInput
    /**
     * In case the MeetingMember found by the `where` argument doesn't exist, create a new MeetingMember with this data.
     */
    create: XOR<MeetingMemberCreateInput, MeetingMemberUncheckedCreateInput>
    /**
     * In case the MeetingMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingMemberUpdateInput, MeetingMemberUncheckedUpdateInput>
  }

  /**
   * MeetingMember delete
   */
  export type MeetingMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    /**
     * Filter which MeetingMember to delete.
     */
    where: MeetingMemberWhereUniqueInput
  }

  /**
   * MeetingMember deleteMany
   */
  export type MeetingMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingMembers to delete
     */
    where?: MeetingMemberWhereInput
    /**
     * Limit how many MeetingMembers to delete.
     */
    limit?: number
  }

  /**
   * MeetingMember without action
   */
  export type MeetingMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
  }


  /**
   * Model MeetingType
   */

  export type AggregateMeetingType = {
    _count: MeetingTypeCountAggregateOutputType | null
    _avg: MeetingTypeAvgAggregateOutputType | null
    _sum: MeetingTypeSumAggregateOutputType | null
    _min: MeetingTypeMinAggregateOutputType | null
    _max: MeetingTypeMaxAggregateOutputType | null
  }

  export type MeetingTypeAvgAggregateOutputType = {
    MeetingTypeID: number | null
  }

  export type MeetingTypeSumAggregateOutputType = {
    MeetingTypeID: number | null
  }

  export type MeetingTypeMinAggregateOutputType = {
    MeetingTypeID: number | null
    MeetingTypeName: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingTypeMaxAggregateOutputType = {
    MeetingTypeID: number | null
    MeetingTypeName: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingTypeCountAggregateOutputType = {
    MeetingTypeID: number
    MeetingTypeName: number
    Remarks: number
    Created: number
    Modified: number
    _all: number
  }


  export type MeetingTypeAvgAggregateInputType = {
    MeetingTypeID?: true
  }

  export type MeetingTypeSumAggregateInputType = {
    MeetingTypeID?: true
  }

  export type MeetingTypeMinAggregateInputType = {
    MeetingTypeID?: true
    MeetingTypeName?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingTypeMaxAggregateInputType = {
    MeetingTypeID?: true
    MeetingTypeName?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingTypeCountAggregateInputType = {
    MeetingTypeID?: true
    MeetingTypeName?: true
    Remarks?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type MeetingTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingType to aggregate.
     */
    where?: MeetingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingTypes to fetch.
     */
    orderBy?: MeetingTypeOrderByWithRelationInput | MeetingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeetingTypes
    **/
    _count?: true | MeetingTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingTypeMaxAggregateInputType
  }

  export type GetMeetingTypeAggregateType<T extends MeetingTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingType[P]>
      : GetScalarType<T[P], AggregateMeetingType[P]>
  }




  export type MeetingTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingTypeWhereInput
    orderBy?: MeetingTypeOrderByWithAggregationInput | MeetingTypeOrderByWithAggregationInput[]
    by: MeetingTypeScalarFieldEnum[] | MeetingTypeScalarFieldEnum
    having?: MeetingTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingTypeCountAggregateInputType | true
    _avg?: MeetingTypeAvgAggregateInputType
    _sum?: MeetingTypeSumAggregateInputType
    _min?: MeetingTypeMinAggregateInputType
    _max?: MeetingTypeMaxAggregateInputType
  }

  export type MeetingTypeGroupByOutputType = {
    MeetingTypeID: number
    MeetingTypeName: string
    Remarks: string | null
    Created: Date
    Modified: Date
    _count: MeetingTypeCountAggregateOutputType | null
    _avg: MeetingTypeAvgAggregateOutputType | null
    _sum: MeetingTypeSumAggregateOutputType | null
    _min: MeetingTypeMinAggregateOutputType | null
    _max: MeetingTypeMaxAggregateOutputType | null
  }

  type GetMeetingTypeGroupByPayload<T extends MeetingTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingTypeGroupByOutputType[P]>
        }
      >
    >


  export type MeetingTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingTypeID?: boolean
    MeetingTypeName?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Meetings?: boolean | MeetingType$MeetingsArgs<ExtArgs>
    _count?: boolean | MeetingTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingType"]>

  export type MeetingTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingTypeID?: boolean
    MeetingTypeName?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
  }, ExtArgs["result"]["meetingType"]>

  export type MeetingTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingTypeID?: boolean
    MeetingTypeName?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
  }, ExtArgs["result"]["meetingType"]>

  export type MeetingTypeSelectScalar = {
    MeetingTypeID?: boolean
    MeetingTypeName?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type MeetingTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MeetingTypeID" | "MeetingTypeName" | "Remarks" | "Created" | "Modified", ExtArgs["result"]["meetingType"]>
  export type MeetingTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Meetings?: boolean | MeetingType$MeetingsArgs<ExtArgs>
    _count?: boolean | MeetingTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MeetingTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MeetingTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeetingType"
    objects: {
      Meetings: Prisma.$MeetingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MeetingTypeID: number
      MeetingTypeName: string
      Remarks: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["meetingType"]>
    composites: {}
  }

  type MeetingTypeGetPayload<S extends boolean | null | undefined | MeetingTypeDefaultArgs> = $Result.GetResult<Prisma.$MeetingTypePayload, S>

  type MeetingTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingTypeCountAggregateInputType | true
    }

  export interface MeetingTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeetingType'], meta: { name: 'MeetingType' } }
    /**
     * Find zero or one MeetingType that matches the filter.
     * @param {MeetingTypeFindUniqueArgs} args - Arguments to find a MeetingType
     * @example
     * // Get one MeetingType
     * const meetingType = await prisma.meetingType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingTypeFindUniqueArgs>(args: SelectSubset<T, MeetingTypeFindUniqueArgs<ExtArgs>>): Prisma__MeetingTypeClient<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeetingType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingTypeFindUniqueOrThrowArgs} args - Arguments to find a MeetingType
     * @example
     * // Get one MeetingType
     * const meetingType = await prisma.meetingType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingTypeClient<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingTypeFindFirstArgs} args - Arguments to find a MeetingType
     * @example
     * // Get one MeetingType
     * const meetingType = await prisma.meetingType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingTypeFindFirstArgs>(args?: SelectSubset<T, MeetingTypeFindFirstArgs<ExtArgs>>): Prisma__MeetingTypeClient<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingTypeFindFirstOrThrowArgs} args - Arguments to find a MeetingType
     * @example
     * // Get one MeetingType
     * const meetingType = await prisma.meetingType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingTypeClient<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeetingTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeetingTypes
     * const meetingTypes = await prisma.meetingType.findMany()
     * 
     * // Get first 10 MeetingTypes
     * const meetingTypes = await prisma.meetingType.findMany({ take: 10 })
     * 
     * // Only select the `MeetingTypeID`
     * const meetingTypeWithMeetingTypeIDOnly = await prisma.meetingType.findMany({ select: { MeetingTypeID: true } })
     * 
     */
    findMany<T extends MeetingTypeFindManyArgs>(args?: SelectSubset<T, MeetingTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeetingType.
     * @param {MeetingTypeCreateArgs} args - Arguments to create a MeetingType.
     * @example
     * // Create one MeetingType
     * const MeetingType = await prisma.meetingType.create({
     *   data: {
     *     // ... data to create a MeetingType
     *   }
     * })
     * 
     */
    create<T extends MeetingTypeCreateArgs>(args: SelectSubset<T, MeetingTypeCreateArgs<ExtArgs>>): Prisma__MeetingTypeClient<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeetingTypes.
     * @param {MeetingTypeCreateManyArgs} args - Arguments to create many MeetingTypes.
     * @example
     * // Create many MeetingTypes
     * const meetingType = await prisma.meetingType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingTypeCreateManyArgs>(args?: SelectSubset<T, MeetingTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeetingTypes and returns the data saved in the database.
     * @param {MeetingTypeCreateManyAndReturnArgs} args - Arguments to create many MeetingTypes.
     * @example
     * // Create many MeetingTypes
     * const meetingType = await prisma.meetingType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeetingTypes and only return the `MeetingTypeID`
     * const meetingTypeWithMeetingTypeIDOnly = await prisma.meetingType.createManyAndReturn({
     *   select: { MeetingTypeID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeetingType.
     * @param {MeetingTypeDeleteArgs} args - Arguments to delete one MeetingType.
     * @example
     * // Delete one MeetingType
     * const MeetingType = await prisma.meetingType.delete({
     *   where: {
     *     // ... filter to delete one MeetingType
     *   }
     * })
     * 
     */
    delete<T extends MeetingTypeDeleteArgs>(args: SelectSubset<T, MeetingTypeDeleteArgs<ExtArgs>>): Prisma__MeetingTypeClient<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeetingType.
     * @param {MeetingTypeUpdateArgs} args - Arguments to update one MeetingType.
     * @example
     * // Update one MeetingType
     * const meetingType = await prisma.meetingType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingTypeUpdateArgs>(args: SelectSubset<T, MeetingTypeUpdateArgs<ExtArgs>>): Prisma__MeetingTypeClient<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeetingTypes.
     * @param {MeetingTypeDeleteManyArgs} args - Arguments to filter MeetingTypes to delete.
     * @example
     * // Delete a few MeetingTypes
     * const { count } = await prisma.meetingType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingTypeDeleteManyArgs>(args?: SelectSubset<T, MeetingTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeetingTypes
     * const meetingType = await prisma.meetingType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingTypeUpdateManyArgs>(args: SelectSubset<T, MeetingTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingTypes and returns the data updated in the database.
     * @param {MeetingTypeUpdateManyAndReturnArgs} args - Arguments to update many MeetingTypes.
     * @example
     * // Update many MeetingTypes
     * const meetingType = await prisma.meetingType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeetingTypes and only return the `MeetingTypeID`
     * const meetingTypeWithMeetingTypeIDOnly = await prisma.meetingType.updateManyAndReturn({
     *   select: { MeetingTypeID: true },
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
    updateManyAndReturn<T extends MeetingTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeetingType.
     * @param {MeetingTypeUpsertArgs} args - Arguments to update or create a MeetingType.
     * @example
     * // Update or create a MeetingType
     * const meetingType = await prisma.meetingType.upsert({
     *   create: {
     *     // ... data to create a MeetingType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeetingType we want to update
     *   }
     * })
     */
    upsert<T extends MeetingTypeUpsertArgs>(args: SelectSubset<T, MeetingTypeUpsertArgs<ExtArgs>>): Prisma__MeetingTypeClient<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeetingTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingTypeCountArgs} args - Arguments to filter MeetingTypes to count.
     * @example
     * // Count the number of MeetingTypes
     * const count = await prisma.meetingType.count({
     *   where: {
     *     // ... the filter for the MeetingTypes we want to count
     *   }
     * })
    **/
    count<T extends MeetingTypeCountArgs>(
      args?: Subset<T, MeetingTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeetingType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeetingTypeAggregateArgs>(args: Subset<T, MeetingTypeAggregateArgs>): Prisma.PrismaPromise<GetMeetingTypeAggregateType<T>>

    /**
     * Group by MeetingType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingTypeGroupByArgs} args - Group by arguments.
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
      T extends MeetingTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingTypeGroupByArgs['orderBy'] }
        : { orderBy?: MeetingTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeetingTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeetingType model
   */
  readonly fields: MeetingTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeetingType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Meetings<T extends MeetingType$MeetingsArgs<ExtArgs> = {}>(args?: Subset<T, MeetingType$MeetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MeetingType model
   */
  interface MeetingTypeFieldRefs {
    readonly MeetingTypeID: FieldRef<"MeetingType", 'Int'>
    readonly MeetingTypeName: FieldRef<"MeetingType", 'String'>
    readonly Remarks: FieldRef<"MeetingType", 'String'>
    readonly Created: FieldRef<"MeetingType", 'DateTime'>
    readonly Modified: FieldRef<"MeetingType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeetingType findUnique
   */
  export type MeetingTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingType to fetch.
     */
    where: MeetingTypeWhereUniqueInput
  }

  /**
   * MeetingType findUniqueOrThrow
   */
  export type MeetingTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingType to fetch.
     */
    where: MeetingTypeWhereUniqueInput
  }

  /**
   * MeetingType findFirst
   */
  export type MeetingTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingType to fetch.
     */
    where?: MeetingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingTypes to fetch.
     */
    orderBy?: MeetingTypeOrderByWithRelationInput | MeetingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingTypes.
     */
    cursor?: MeetingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingTypes.
     */
    distinct?: MeetingTypeScalarFieldEnum | MeetingTypeScalarFieldEnum[]
  }

  /**
   * MeetingType findFirstOrThrow
   */
  export type MeetingTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingType to fetch.
     */
    where?: MeetingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingTypes to fetch.
     */
    orderBy?: MeetingTypeOrderByWithRelationInput | MeetingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingTypes.
     */
    cursor?: MeetingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingTypes.
     */
    distinct?: MeetingTypeScalarFieldEnum | MeetingTypeScalarFieldEnum[]
  }

  /**
   * MeetingType findMany
   */
  export type MeetingTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
    /**
     * Filter, which MeetingTypes to fetch.
     */
    where?: MeetingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingTypes to fetch.
     */
    orderBy?: MeetingTypeOrderByWithRelationInput | MeetingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeetingTypes.
     */
    cursor?: MeetingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingTypes.
     */
    distinct?: MeetingTypeScalarFieldEnum | MeetingTypeScalarFieldEnum[]
  }

  /**
   * MeetingType create
   */
  export type MeetingTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a MeetingType.
     */
    data: XOR<MeetingTypeCreateInput, MeetingTypeUncheckedCreateInput>
  }

  /**
   * MeetingType createMany
   */
  export type MeetingTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeetingTypes.
     */
    data: MeetingTypeCreateManyInput | MeetingTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingType createManyAndReturn
   */
  export type MeetingTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * The data used to create many MeetingTypes.
     */
    data: MeetingTypeCreateManyInput | MeetingTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingType update
   */
  export type MeetingTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a MeetingType.
     */
    data: XOR<MeetingTypeUpdateInput, MeetingTypeUncheckedUpdateInput>
    /**
     * Choose, which MeetingType to update.
     */
    where: MeetingTypeWhereUniqueInput
  }

  /**
   * MeetingType updateMany
   */
  export type MeetingTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeetingTypes.
     */
    data: XOR<MeetingTypeUpdateManyMutationInput, MeetingTypeUncheckedUpdateManyInput>
    /**
     * Filter which MeetingTypes to update
     */
    where?: MeetingTypeWhereInput
    /**
     * Limit how many MeetingTypes to update.
     */
    limit?: number
  }

  /**
   * MeetingType updateManyAndReturn
   */
  export type MeetingTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * The data used to update MeetingTypes.
     */
    data: XOR<MeetingTypeUpdateManyMutationInput, MeetingTypeUncheckedUpdateManyInput>
    /**
     * Filter which MeetingTypes to update
     */
    where?: MeetingTypeWhereInput
    /**
     * Limit how many MeetingTypes to update.
     */
    limit?: number
  }

  /**
   * MeetingType upsert
   */
  export type MeetingTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the MeetingType to update in case it exists.
     */
    where: MeetingTypeWhereUniqueInput
    /**
     * In case the MeetingType found by the `where` argument doesn't exist, create a new MeetingType with this data.
     */
    create: XOR<MeetingTypeCreateInput, MeetingTypeUncheckedCreateInput>
    /**
     * In case the MeetingType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingTypeUpdateInput, MeetingTypeUncheckedUpdateInput>
  }

  /**
   * MeetingType delete
   */
  export type MeetingTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
    /**
     * Filter which MeetingType to delete.
     */
    where: MeetingTypeWhereUniqueInput
  }

  /**
   * MeetingType deleteMany
   */
  export type MeetingTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingTypes to delete
     */
    where?: MeetingTypeWhereInput
    /**
     * Limit how many MeetingTypes to delete.
     */
    limit?: number
  }

  /**
   * MeetingType.Meetings
   */
  export type MeetingType$MeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    where?: MeetingsWhereInput
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    cursor?: MeetingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * MeetingType without action
   */
  export type MeetingTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingType
     */
    select?: MeetingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingType
     */
    omit?: MeetingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingTypeInclude<ExtArgs> | null
  }


  /**
   * Model Meetings
   */

  export type AggregateMeetings = {
    _count: MeetingsCountAggregateOutputType | null
    _avg: MeetingsAvgAggregateOutputType | null
    _sum: MeetingsSumAggregateOutputType | null
    _min: MeetingsMinAggregateOutputType | null
    _max: MeetingsMaxAggregateOutputType | null
  }

  export type MeetingsAvgAggregateOutputType = {
    MeetingID: number | null
    MeetingTypeID: number | null
  }

  export type MeetingsSumAggregateOutputType = {
    MeetingID: number | null
    MeetingTypeID: number | null
  }

  export type MeetingsMinAggregateOutputType = {
    MeetingID: number | null
    MeetingDate: Date | null
    MeetingTypeID: number | null
    MeetingDescription: string | null
    DocumentPath: string | null
    Created: Date | null
    Modified: Date | null
    IsCancelled: boolean | null
    CancellationDateTime: Date | null
    CancellationReason: string | null
  }

  export type MeetingsMaxAggregateOutputType = {
    MeetingID: number | null
    MeetingDate: Date | null
    MeetingTypeID: number | null
    MeetingDescription: string | null
    DocumentPath: string | null
    Created: Date | null
    Modified: Date | null
    IsCancelled: boolean | null
    CancellationDateTime: Date | null
    CancellationReason: string | null
  }

  export type MeetingsCountAggregateOutputType = {
    MeetingID: number
    MeetingDate: number
    MeetingTypeID: number
    MeetingDescription: number
    DocumentPath: number
    Created: number
    Modified: number
    IsCancelled: number
    CancellationDateTime: number
    CancellationReason: number
    _all: number
  }


  export type MeetingsAvgAggregateInputType = {
    MeetingID?: true
    MeetingTypeID?: true
  }

  export type MeetingsSumAggregateInputType = {
    MeetingID?: true
    MeetingTypeID?: true
  }

  export type MeetingsMinAggregateInputType = {
    MeetingID?: true
    MeetingDate?: true
    MeetingTypeID?: true
    MeetingDescription?: true
    DocumentPath?: true
    Created?: true
    Modified?: true
    IsCancelled?: true
    CancellationDateTime?: true
    CancellationReason?: true
  }

  export type MeetingsMaxAggregateInputType = {
    MeetingID?: true
    MeetingDate?: true
    MeetingTypeID?: true
    MeetingDescription?: true
    DocumentPath?: true
    Created?: true
    Modified?: true
    IsCancelled?: true
    CancellationDateTime?: true
    CancellationReason?: true
  }

  export type MeetingsCountAggregateInputType = {
    MeetingID?: true
    MeetingDate?: true
    MeetingTypeID?: true
    MeetingDescription?: true
    DocumentPath?: true
    Created?: true
    Modified?: true
    IsCancelled?: true
    CancellationDateTime?: true
    CancellationReason?: true
    _all?: true
  }

  export type MeetingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to aggregate.
     */
    where?: MeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingsMaxAggregateInputType
  }

  export type GetMeetingsAggregateType<T extends MeetingsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetings[P]>
      : GetScalarType<T[P], AggregateMeetings[P]>
  }




  export type MeetingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingsWhereInput
    orderBy?: MeetingsOrderByWithAggregationInput | MeetingsOrderByWithAggregationInput[]
    by: MeetingsScalarFieldEnum[] | MeetingsScalarFieldEnum
    having?: MeetingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingsCountAggregateInputType | true
    _avg?: MeetingsAvgAggregateInputType
    _sum?: MeetingsSumAggregateInputType
    _min?: MeetingsMinAggregateInputType
    _max?: MeetingsMaxAggregateInputType
  }

  export type MeetingsGroupByOutputType = {
    MeetingID: number
    MeetingDate: Date
    MeetingTypeID: number
    MeetingDescription: string | null
    DocumentPath: string | null
    Created: Date
    Modified: Date
    IsCancelled: boolean
    CancellationDateTime: Date | null
    CancellationReason: string | null
    _count: MeetingsCountAggregateOutputType | null
    _avg: MeetingsAvgAggregateOutputType | null
    _sum: MeetingsSumAggregateOutputType | null
    _min: MeetingsMinAggregateOutputType | null
    _max: MeetingsMaxAggregateOutputType | null
  }

  type GetMeetingsGroupByPayload<T extends MeetingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingsGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingsGroupByOutputType[P]>
        }
      >
    >


  export type MeetingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingID?: boolean
    MeetingDate?: boolean
    MeetingTypeID?: boolean
    MeetingDescription?: boolean
    DocumentPath?: boolean
    Created?: boolean
    Modified?: boolean
    IsCancelled?: boolean
    CancellationDateTime?: boolean
    CancellationReason?: boolean
    MeetingMember?: boolean | Meetings$MeetingMemberArgs<ExtArgs>
    MeetingType?: boolean | MeetingTypeDefaultArgs<ExtArgs>
    _count?: boolean | MeetingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetings"]>

  export type MeetingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingID?: boolean
    MeetingDate?: boolean
    MeetingTypeID?: boolean
    MeetingDescription?: boolean
    DocumentPath?: boolean
    Created?: boolean
    Modified?: boolean
    IsCancelled?: boolean
    CancellationDateTime?: boolean
    CancellationReason?: boolean
    MeetingType?: boolean | MeetingTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetings"]>

  export type MeetingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingID?: boolean
    MeetingDate?: boolean
    MeetingTypeID?: boolean
    MeetingDescription?: boolean
    DocumentPath?: boolean
    Created?: boolean
    Modified?: boolean
    IsCancelled?: boolean
    CancellationDateTime?: boolean
    CancellationReason?: boolean
    MeetingType?: boolean | MeetingTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetings"]>

  export type MeetingsSelectScalar = {
    MeetingID?: boolean
    MeetingDate?: boolean
    MeetingTypeID?: boolean
    MeetingDescription?: boolean
    DocumentPath?: boolean
    Created?: boolean
    Modified?: boolean
    IsCancelled?: boolean
    CancellationDateTime?: boolean
    CancellationReason?: boolean
  }

  export type MeetingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MeetingID" | "MeetingDate" | "MeetingTypeID" | "MeetingDescription" | "DocumentPath" | "Created" | "Modified" | "IsCancelled" | "CancellationDateTime" | "CancellationReason", ExtArgs["result"]["meetings"]>
  export type MeetingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetingMember?: boolean | Meetings$MeetingMemberArgs<ExtArgs>
    MeetingType?: boolean | MeetingTypeDefaultArgs<ExtArgs>
    _count?: boolean | MeetingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetingType?: boolean | MeetingTypeDefaultArgs<ExtArgs>
  }
  export type MeetingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetingType?: boolean | MeetingTypeDefaultArgs<ExtArgs>
  }

  export type $MeetingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meetings"
    objects: {
      MeetingMember: Prisma.$MeetingMemberPayload<ExtArgs>[]
      MeetingType: Prisma.$MeetingTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MeetingID: number
      MeetingDate: Date
      MeetingTypeID: number
      MeetingDescription: string | null
      DocumentPath: string | null
      Created: Date
      Modified: Date
      IsCancelled: boolean
      CancellationDateTime: Date | null
      CancellationReason: string | null
    }, ExtArgs["result"]["meetings"]>
    composites: {}
  }

  type MeetingsGetPayload<S extends boolean | null | undefined | MeetingsDefaultArgs> = $Result.GetResult<Prisma.$MeetingsPayload, S>

  type MeetingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingsCountAggregateInputType | true
    }

  export interface MeetingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meetings'], meta: { name: 'Meetings' } }
    /**
     * Find zero or one Meetings that matches the filter.
     * @param {MeetingsFindUniqueArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingsFindUniqueArgs>(args: SelectSubset<T, MeetingsFindUniqueArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meetings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingsFindUniqueOrThrowArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingsFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsFindFirstArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingsFindFirstArgs>(args?: SelectSubset<T, MeetingsFindFirstArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsFindFirstOrThrowArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingsFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meetings.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meetings.findMany({ take: 10 })
     * 
     * // Only select the `MeetingID`
     * const meetingsWithMeetingIDOnly = await prisma.meetings.findMany({ select: { MeetingID: true } })
     * 
     */
    findMany<T extends MeetingsFindManyArgs>(args?: SelectSubset<T, MeetingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meetings.
     * @param {MeetingsCreateArgs} args - Arguments to create a Meetings.
     * @example
     * // Create one Meetings
     * const Meetings = await prisma.meetings.create({
     *   data: {
     *     // ... data to create a Meetings
     *   }
     * })
     * 
     */
    create<T extends MeetingsCreateArgs>(args: SelectSubset<T, MeetingsCreateArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingsCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meetings = await prisma.meetings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingsCreateManyArgs>(args?: SelectSubset<T, MeetingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingsCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meetings = await prisma.meetings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `MeetingID`
     * const meetingsWithMeetingIDOnly = await prisma.meetings.createManyAndReturn({
     *   select: { MeetingID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingsCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meetings.
     * @param {MeetingsDeleteArgs} args - Arguments to delete one Meetings.
     * @example
     * // Delete one Meetings
     * const Meetings = await prisma.meetings.delete({
     *   where: {
     *     // ... filter to delete one Meetings
     *   }
     * })
     * 
     */
    delete<T extends MeetingsDeleteArgs>(args: SelectSubset<T, MeetingsDeleteArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meetings.
     * @param {MeetingsUpdateArgs} args - Arguments to update one Meetings.
     * @example
     * // Update one Meetings
     * const meetings = await prisma.meetings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingsUpdateArgs>(args: SelectSubset<T, MeetingsUpdateArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingsDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meetings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingsDeleteManyArgs>(args?: SelectSubset<T, MeetingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meetings = await prisma.meetings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingsUpdateManyArgs>(args: SelectSubset<T, MeetingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingsUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meetings = await prisma.meetings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `MeetingID`
     * const meetingsWithMeetingIDOnly = await prisma.meetings.updateManyAndReturn({
     *   select: { MeetingID: true },
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
    updateManyAndReturn<T extends MeetingsUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meetings.
     * @param {MeetingsUpsertArgs} args - Arguments to update or create a Meetings.
     * @example
     * // Update or create a Meetings
     * const meetings = await prisma.meetings.upsert({
     *   create: {
     *     // ... data to create a Meetings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meetings we want to update
     *   }
     * })
     */
    upsert<T extends MeetingsUpsertArgs>(args: SelectSubset<T, MeetingsUpsertArgs<ExtArgs>>): Prisma__MeetingsClient<$Result.GetResult<Prisma.$MeetingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meetings.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingsCountArgs>(
      args?: Subset<T, MeetingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeetingsAggregateArgs>(args: Subset<T, MeetingsAggregateArgs>): Prisma.PrismaPromise<GetMeetingsAggregateType<T>>

    /**
     * Group by Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsGroupByArgs} args - Group by arguments.
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
      T extends MeetingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingsGroupByArgs['orderBy'] }
        : { orderBy?: MeetingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeetingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meetings model
   */
  readonly fields: MeetingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meetings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MeetingMember<T extends Meetings$MeetingMemberArgs<ExtArgs> = {}>(args?: Subset<T, Meetings$MeetingMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MeetingType<T extends MeetingTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingTypeDefaultArgs<ExtArgs>>): Prisma__MeetingTypeClient<$Result.GetResult<Prisma.$MeetingTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Meetings model
   */
  interface MeetingsFieldRefs {
    readonly MeetingID: FieldRef<"Meetings", 'Int'>
    readonly MeetingDate: FieldRef<"Meetings", 'DateTime'>
    readonly MeetingTypeID: FieldRef<"Meetings", 'Int'>
    readonly MeetingDescription: FieldRef<"Meetings", 'String'>
    readonly DocumentPath: FieldRef<"Meetings", 'String'>
    readonly Created: FieldRef<"Meetings", 'DateTime'>
    readonly Modified: FieldRef<"Meetings", 'DateTime'>
    readonly IsCancelled: FieldRef<"Meetings", 'Boolean'>
    readonly CancellationDateTime: FieldRef<"Meetings", 'DateTime'>
    readonly CancellationReason: FieldRef<"Meetings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Meetings findUnique
   */
  export type MeetingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where: MeetingsWhereUniqueInput
  }

  /**
   * Meetings findUniqueOrThrow
   */
  export type MeetingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where: MeetingsWhereUniqueInput
  }

  /**
   * Meetings findFirst
   */
  export type MeetingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * Meetings findFirstOrThrow
   */
  export type MeetingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * Meetings findMany
   */
  export type MeetingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingsOrderByWithRelationInput | MeetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * Meetings create
   */
  export type MeetingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Meetings.
     */
    data: XOR<MeetingsCreateInput, MeetingsUncheckedCreateInput>
  }

  /**
   * Meetings createMany
   */
  export type MeetingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingsCreateManyInput | MeetingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meetings createManyAndReturn
   */
  export type MeetingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingsCreateManyInput | MeetingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meetings update
   */
  export type MeetingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Meetings.
     */
    data: XOR<MeetingsUpdateInput, MeetingsUncheckedUpdateInput>
    /**
     * Choose, which Meetings to update.
     */
    where: MeetingsWhereUniqueInput
  }

  /**
   * Meetings updateMany
   */
  export type MeetingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingsUpdateManyMutationInput, MeetingsUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingsWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meetings updateManyAndReturn
   */
  export type MeetingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingsUpdateManyMutationInput, MeetingsUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingsWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meetings upsert
   */
  export type MeetingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Meetings to update in case it exists.
     */
    where: MeetingsWhereUniqueInput
    /**
     * In case the Meetings found by the `where` argument doesn't exist, create a new Meetings with this data.
     */
    create: XOR<MeetingsCreateInput, MeetingsUncheckedCreateInput>
    /**
     * In case the Meetings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingsUpdateInput, MeetingsUncheckedUpdateInput>
  }

  /**
   * Meetings delete
   */
  export type MeetingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
    /**
     * Filter which Meetings to delete.
     */
    where: MeetingsWhereUniqueInput
  }

  /**
   * Meetings deleteMany
   */
  export type MeetingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingsWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meetings.MeetingMember
   */
  export type Meetings$MeetingMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    where?: MeetingMemberWhereInput
    orderBy?: MeetingMemberOrderByWithRelationInput | MeetingMemberOrderByWithRelationInput[]
    cursor?: MeetingMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingMemberScalarFieldEnum | MeetingMemberScalarFieldEnum[]
  }

  /**
   * Meetings without action
   */
  export type MeetingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meetings
     */
    select?: MeetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meetings
     */
    omit?: MeetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingsInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    StaffID: number | null
  }

  export type StaffSumAggregateOutputType = {
    StaffID: number | null
  }

  export type StaffMinAggregateOutputType = {
    StaffID: number | null
    StaffName: string | null
    MobileNo: string | null
    EmailAddress: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    Password: string | null
    Role: string | null
    LastLogin: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    StaffID: number | null
    StaffName: string | null
    MobileNo: string | null
    EmailAddress: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    Password: string | null
    Role: string | null
    LastLogin: Date | null
  }

  export type StaffCountAggregateOutputType = {
    StaffID: number
    StaffName: number
    MobileNo: number
    EmailAddress: number
    Remarks: number
    Created: number
    Modified: number
    Password: number
    Role: number
    LastLogin: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    StaffID?: true
  }

  export type StaffSumAggregateInputType = {
    StaffID?: true
  }

  export type StaffMinAggregateInputType = {
    StaffID?: true
    StaffName?: true
    MobileNo?: true
    EmailAddress?: true
    Remarks?: true
    Created?: true
    Modified?: true
    Password?: true
    Role?: true
    LastLogin?: true
  }

  export type StaffMaxAggregateInputType = {
    StaffID?: true
    StaffName?: true
    MobileNo?: true
    EmailAddress?: true
    Remarks?: true
    Created?: true
    Modified?: true
    Password?: true
    Role?: true
    LastLogin?: true
  }

  export type StaffCountAggregateInputType = {
    StaffID?: true
    StaffName?: true
    MobileNo?: true
    EmailAddress?: true
    Remarks?: true
    Created?: true
    Modified?: true
    Password?: true
    Role?: true
    LastLogin?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    StaffID: number
    StaffName: string
    MobileNo: string | null
    EmailAddress: string | null
    Remarks: string | null
    Created: Date
    Modified: Date
    Password: string | null
    Role: string | null
    LastLogin: Date | null
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StaffID?: boolean
    StaffName?: boolean
    MobileNo?: boolean
    EmailAddress?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Password?: boolean
    Role?: boolean
    LastLogin?: boolean
    MeetingMember?: boolean | Staff$MeetingMemberArgs<ExtArgs>
    UserActivity?: boolean | Staff$UserActivityArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StaffID?: boolean
    StaffName?: boolean
    MobileNo?: boolean
    EmailAddress?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Password?: boolean
    Role?: boolean
    LastLogin?: boolean
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StaffID?: boolean
    StaffName?: boolean
    MobileNo?: boolean
    EmailAddress?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Password?: boolean
    Role?: boolean
    LastLogin?: boolean
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    StaffID?: boolean
    StaffName?: boolean
    MobileNo?: boolean
    EmailAddress?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    Password?: boolean
    Role?: boolean
    LastLogin?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"StaffID" | "StaffName" | "MobileNo" | "EmailAddress" | "Remarks" | "Created" | "Modified" | "Password" | "Role" | "LastLogin", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetingMember?: boolean | Staff$MeetingMemberArgs<ExtArgs>
    UserActivity?: boolean | Staff$UserActivityArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      MeetingMember: Prisma.$MeetingMemberPayload<ExtArgs>[]
      UserActivity: Prisma.$UserActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      StaffID: number
      StaffName: string
      MobileNo: string | null
      EmailAddress: string | null
      Remarks: string | null
      Created: Date
      Modified: Date
      Password: string | null
      Role: string | null
      LastLogin: Date | null
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `StaffID`
     * const staffWithStaffIDOnly = await prisma.staff.findMany({ select: { StaffID: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `StaffID`
     * const staffWithStaffIDOnly = await prisma.staff.createManyAndReturn({
     *   select: { StaffID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `StaffID`
     * const staffWithStaffIDOnly = await prisma.staff.updateManyAndReturn({
     *   select: { StaffID: true },
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
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
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
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MeetingMember<T extends Staff$MeetingMemberArgs<ExtArgs> = {}>(args?: Subset<T, Staff$MeetingMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserActivity<T extends Staff$UserActivityArgs<ExtArgs> = {}>(args?: Subset<T, Staff$UserActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly StaffID: FieldRef<"Staff", 'Int'>
    readonly StaffName: FieldRef<"Staff", 'String'>
    readonly MobileNo: FieldRef<"Staff", 'String'>
    readonly EmailAddress: FieldRef<"Staff", 'String'>
    readonly Remarks: FieldRef<"Staff", 'String'>
    readonly Created: FieldRef<"Staff", 'DateTime'>
    readonly Modified: FieldRef<"Staff", 'DateTime'>
    readonly Password: FieldRef<"Staff", 'String'>
    readonly Role: FieldRef<"Staff", 'String'>
    readonly LastLogin: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.MeetingMember
   */
  export type Staff$MeetingMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingMember
     */
    select?: MeetingMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingMember
     */
    omit?: MeetingMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingMemberInclude<ExtArgs> | null
    where?: MeetingMemberWhereInput
    orderBy?: MeetingMemberOrderByWithRelationInput | MeetingMemberOrderByWithRelationInput[]
    cursor?: MeetingMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingMemberScalarFieldEnum | MeetingMemberScalarFieldEnum[]
  }

  /**
   * Staff.UserActivity
   */
  export type Staff$UserActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    where?: UserActivityWhereInput
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    cursor?: UserActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model UserActivity
   */

  export type AggregateUserActivity = {
    _count: UserActivityCountAggregateOutputType | null
    _avg: UserActivityAvgAggregateOutputType | null
    _sum: UserActivitySumAggregateOutputType | null
    _min: UserActivityMinAggregateOutputType | null
    _max: UserActivityMaxAggregateOutputType | null
  }

  export type UserActivityAvgAggregateOutputType = {
    ActivityID: number | null
    StaffID: number | null
  }

  export type UserActivitySumAggregateOutputType = {
    ActivityID: number | null
    StaffID: number | null
  }

  export type UserActivityMinAggregateOutputType = {
    ActivityID: number | null
    StaffID: number | null
    ActivityType: string | null
    Timestamp: Date | null
  }

  export type UserActivityMaxAggregateOutputType = {
    ActivityID: number | null
    StaffID: number | null
    ActivityType: string | null
    Timestamp: Date | null
  }

  export type UserActivityCountAggregateOutputType = {
    ActivityID: number
    StaffID: number
    ActivityType: number
    Timestamp: number
    _all: number
  }


  export type UserActivityAvgAggregateInputType = {
    ActivityID?: true
    StaffID?: true
  }

  export type UserActivitySumAggregateInputType = {
    ActivityID?: true
    StaffID?: true
  }

  export type UserActivityMinAggregateInputType = {
    ActivityID?: true
    StaffID?: true
    ActivityType?: true
    Timestamp?: true
  }

  export type UserActivityMaxAggregateInputType = {
    ActivityID?: true
    StaffID?: true
    ActivityType?: true
    Timestamp?: true
  }

  export type UserActivityCountAggregateInputType = {
    ActivityID?: true
    StaffID?: true
    ActivityType?: true
    Timestamp?: true
    _all?: true
  }

  export type UserActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActivity to aggregate.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserActivities
    **/
    _count?: true | UserActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserActivityMaxAggregateInputType
  }

  export type GetUserActivityAggregateType<T extends UserActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserActivity[P]>
      : GetScalarType<T[P], AggregateUserActivity[P]>
  }




  export type UserActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActivityWhereInput
    orderBy?: UserActivityOrderByWithAggregationInput | UserActivityOrderByWithAggregationInput[]
    by: UserActivityScalarFieldEnum[] | UserActivityScalarFieldEnum
    having?: UserActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserActivityCountAggregateInputType | true
    _avg?: UserActivityAvgAggregateInputType
    _sum?: UserActivitySumAggregateInputType
    _min?: UserActivityMinAggregateInputType
    _max?: UserActivityMaxAggregateInputType
  }

  export type UserActivityGroupByOutputType = {
    ActivityID: number
    StaffID: number
    ActivityType: string
    Timestamp: Date
    _count: UserActivityCountAggregateOutputType | null
    _avg: UserActivityAvgAggregateOutputType | null
    _sum: UserActivitySumAggregateOutputType | null
    _min: UserActivityMinAggregateOutputType | null
    _max: UserActivityMaxAggregateOutputType | null
  }

  type GetUserActivityGroupByPayload<T extends UserActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserActivityGroupByOutputType[P]>
            : GetScalarType<T[P], UserActivityGroupByOutputType[P]>
        }
      >
    >


  export type UserActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ActivityID?: boolean
    StaffID?: boolean
    ActivityType?: boolean
    Timestamp?: boolean
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type UserActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ActivityID?: boolean
    StaffID?: boolean
    ActivityType?: boolean
    Timestamp?: boolean
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type UserActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ActivityID?: boolean
    StaffID?: boolean
    ActivityType?: boolean
    Timestamp?: boolean
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type UserActivitySelectScalar = {
    ActivityID?: boolean
    StaffID?: boolean
    ActivityType?: boolean
    Timestamp?: boolean
  }

  export type UserActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ActivityID" | "StaffID" | "ActivityType" | "Timestamp", ExtArgs["result"]["userActivity"]>
  export type UserActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type UserActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type UserActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | StaffDefaultArgs<ExtArgs>
  }

  export type $UserActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserActivity"
    objects: {
      Staff: Prisma.$StaffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ActivityID: number
      StaffID: number
      ActivityType: string
      Timestamp: Date
    }, ExtArgs["result"]["userActivity"]>
    composites: {}
  }

  type UserActivityGetPayload<S extends boolean | null | undefined | UserActivityDefaultArgs> = $Result.GetResult<Prisma.$UserActivityPayload, S>

  type UserActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserActivityCountAggregateInputType | true
    }

  export interface UserActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserActivity'], meta: { name: 'UserActivity' } }
    /**
     * Find zero or one UserActivity that matches the filter.
     * @param {UserActivityFindUniqueArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserActivityFindUniqueArgs>(args: SelectSubset<T, UserActivityFindUniqueArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserActivityFindUniqueOrThrowArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, UserActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityFindFirstArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserActivityFindFirstArgs>(args?: SelectSubset<T, UserActivityFindFirstArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityFindFirstOrThrowArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, UserActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserActivities
     * const userActivities = await prisma.userActivity.findMany()
     * 
     * // Get first 10 UserActivities
     * const userActivities = await prisma.userActivity.findMany({ take: 10 })
     * 
     * // Only select the `ActivityID`
     * const userActivityWithActivityIDOnly = await prisma.userActivity.findMany({ select: { ActivityID: true } })
     * 
     */
    findMany<T extends UserActivityFindManyArgs>(args?: SelectSubset<T, UserActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserActivity.
     * @param {UserActivityCreateArgs} args - Arguments to create a UserActivity.
     * @example
     * // Create one UserActivity
     * const UserActivity = await prisma.userActivity.create({
     *   data: {
     *     // ... data to create a UserActivity
     *   }
     * })
     * 
     */
    create<T extends UserActivityCreateArgs>(args: SelectSubset<T, UserActivityCreateArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserActivities.
     * @param {UserActivityCreateManyArgs} args - Arguments to create many UserActivities.
     * @example
     * // Create many UserActivities
     * const userActivity = await prisma.userActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserActivityCreateManyArgs>(args?: SelectSubset<T, UserActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserActivities and returns the data saved in the database.
     * @param {UserActivityCreateManyAndReturnArgs} args - Arguments to create many UserActivities.
     * @example
     * // Create many UserActivities
     * const userActivity = await prisma.userActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserActivities and only return the `ActivityID`
     * const userActivityWithActivityIDOnly = await prisma.userActivity.createManyAndReturn({
     *   select: { ActivityID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, UserActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserActivity.
     * @param {UserActivityDeleteArgs} args - Arguments to delete one UserActivity.
     * @example
     * // Delete one UserActivity
     * const UserActivity = await prisma.userActivity.delete({
     *   where: {
     *     // ... filter to delete one UserActivity
     *   }
     * })
     * 
     */
    delete<T extends UserActivityDeleteArgs>(args: SelectSubset<T, UserActivityDeleteArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserActivity.
     * @param {UserActivityUpdateArgs} args - Arguments to update one UserActivity.
     * @example
     * // Update one UserActivity
     * const userActivity = await prisma.userActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserActivityUpdateArgs>(args: SelectSubset<T, UserActivityUpdateArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserActivities.
     * @param {UserActivityDeleteManyArgs} args - Arguments to filter UserActivities to delete.
     * @example
     * // Delete a few UserActivities
     * const { count } = await prisma.userActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserActivityDeleteManyArgs>(args?: SelectSubset<T, UserActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserActivities
     * const userActivity = await prisma.userActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserActivityUpdateManyArgs>(args: SelectSubset<T, UserActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActivities and returns the data updated in the database.
     * @param {UserActivityUpdateManyAndReturnArgs} args - Arguments to update many UserActivities.
     * @example
     * // Update many UserActivities
     * const userActivity = await prisma.userActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserActivities and only return the `ActivityID`
     * const userActivityWithActivityIDOnly = await prisma.userActivity.updateManyAndReturn({
     *   select: { ActivityID: true },
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
    updateManyAndReturn<T extends UserActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, UserActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserActivity.
     * @param {UserActivityUpsertArgs} args - Arguments to update or create a UserActivity.
     * @example
     * // Update or create a UserActivity
     * const userActivity = await prisma.userActivity.upsert({
     *   create: {
     *     // ... data to create a UserActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserActivity we want to update
     *   }
     * })
     */
    upsert<T extends UserActivityUpsertArgs>(args: SelectSubset<T, UserActivityUpsertArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityCountArgs} args - Arguments to filter UserActivities to count.
     * @example
     * // Count the number of UserActivities
     * const count = await prisma.userActivity.count({
     *   where: {
     *     // ... the filter for the UserActivities we want to count
     *   }
     * })
    **/
    count<T extends UserActivityCountArgs>(
      args?: Subset<T, UserActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserActivityAggregateArgs>(args: Subset<T, UserActivityAggregateArgs>): Prisma.PrismaPromise<GetUserActivityAggregateType<T>>

    /**
     * Group by UserActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityGroupByArgs} args - Group by arguments.
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
      T extends UserActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserActivityGroupByArgs['orderBy'] }
        : { orderBy?: UserActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserActivity model
   */
  readonly fields: UserActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserActivity model
   */
  interface UserActivityFieldRefs {
    readonly ActivityID: FieldRef<"UserActivity", 'Int'>
    readonly StaffID: FieldRef<"UserActivity", 'Int'>
    readonly ActivityType: FieldRef<"UserActivity", 'String'>
    readonly Timestamp: FieldRef<"UserActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserActivity findUnique
   */
  export type UserActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity findUniqueOrThrow
   */
  export type UserActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity findFirst
   */
  export type UserActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActivities.
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActivities.
     */
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * UserActivity findFirstOrThrow
   */
  export type UserActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActivities.
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActivities.
     */
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * UserActivity findMany
   */
  export type UserActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivities to fetch.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserActivities.
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActivities.
     */
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * UserActivity create
   */
  export type UserActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a UserActivity.
     */
    data: XOR<UserActivityCreateInput, UserActivityUncheckedCreateInput>
  }

  /**
   * UserActivity createMany
   */
  export type UserActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserActivities.
     */
    data: UserActivityCreateManyInput | UserActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserActivity createManyAndReturn
   */
  export type UserActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * The data used to create many UserActivities.
     */
    data: UserActivityCreateManyInput | UserActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserActivity update
   */
  export type UserActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a UserActivity.
     */
    data: XOR<UserActivityUpdateInput, UserActivityUncheckedUpdateInput>
    /**
     * Choose, which UserActivity to update.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity updateMany
   */
  export type UserActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserActivities.
     */
    data: XOR<UserActivityUpdateManyMutationInput, UserActivityUncheckedUpdateManyInput>
    /**
     * Filter which UserActivities to update
     */
    where?: UserActivityWhereInput
    /**
     * Limit how many UserActivities to update.
     */
    limit?: number
  }

  /**
   * UserActivity updateManyAndReturn
   */
  export type UserActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * The data used to update UserActivities.
     */
    data: XOR<UserActivityUpdateManyMutationInput, UserActivityUncheckedUpdateManyInput>
    /**
     * Filter which UserActivities to update
     */
    where?: UserActivityWhereInput
    /**
     * Limit how many UserActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserActivity upsert
   */
  export type UserActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the UserActivity to update in case it exists.
     */
    where: UserActivityWhereUniqueInput
    /**
     * In case the UserActivity found by the `where` argument doesn't exist, create a new UserActivity with this data.
     */
    create: XOR<UserActivityCreateInput, UserActivityUncheckedCreateInput>
    /**
     * In case the UserActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserActivityUpdateInput, UserActivityUncheckedUpdateInput>
  }

  /**
   * UserActivity delete
   */
  export type UserActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter which UserActivity to delete.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity deleteMany
   */
  export type UserActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActivities to delete
     */
    where?: UserActivityWhereInput
    /**
     * Limit how many UserActivities to delete.
     */
    limit?: number
  }

  /**
   * UserActivity without action
   */
  export type UserActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivity
     */
    omit?: UserActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    AttendanceID: number | null
    StaffID: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    AttendanceID: number | null
    StaffID: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    AttendanceID: number | null
    MeetingID: string | null
    MeetingDescription: string | null
    MeetingDate: Date | null
    MeetingTypeName: string | null
    StaffID: number | null
    StaffName: string | null
    IsPresent: boolean | null
    Remarks: string | null
    CreatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    AttendanceID: number | null
    MeetingID: string | null
    MeetingDescription: string | null
    MeetingDate: Date | null
    MeetingTypeName: string | null
    StaffID: number | null
    StaffName: string | null
    IsPresent: boolean | null
    Remarks: string | null
    CreatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    AttendanceID: number
    MeetingID: number
    MeetingDescription: number
    MeetingDate: number
    MeetingTypeName: number
    StaffID: number
    StaffName: number
    IsPresent: number
    Remarks: number
    CreatedAt: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    AttendanceID?: true
    StaffID?: true
  }

  export type AttendanceSumAggregateInputType = {
    AttendanceID?: true
    StaffID?: true
  }

  export type AttendanceMinAggregateInputType = {
    AttendanceID?: true
    MeetingID?: true
    MeetingDescription?: true
    MeetingDate?: true
    MeetingTypeName?: true
    StaffID?: true
    StaffName?: true
    IsPresent?: true
    Remarks?: true
    CreatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    AttendanceID?: true
    MeetingID?: true
    MeetingDescription?: true
    MeetingDate?: true
    MeetingTypeName?: true
    StaffID?: true
    StaffName?: true
    IsPresent?: true
    Remarks?: true
    CreatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    AttendanceID?: true
    MeetingID?: true
    MeetingDescription?: true
    MeetingDate?: true
    MeetingTypeName?: true
    StaffID?: true
    StaffName?: true
    IsPresent?: true
    Remarks?: true
    CreatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    AttendanceID: number
    MeetingID: string
    MeetingDescription: string | null
    MeetingDate: Date | null
    MeetingTypeName: string | null
    StaffID: number
    StaffName: string
    IsPresent: boolean | null
    Remarks: string | null
    CreatedAt: Date | null
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AttendanceID?: boolean
    MeetingID?: boolean
    MeetingDescription?: boolean
    MeetingDate?: boolean
    MeetingTypeName?: boolean
    StaffID?: boolean
    StaffName?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AttendanceID?: boolean
    MeetingID?: boolean
    MeetingDescription?: boolean
    MeetingDate?: boolean
    MeetingTypeName?: boolean
    StaffID?: boolean
    StaffName?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AttendanceID?: boolean
    MeetingID?: boolean
    MeetingDescription?: boolean
    MeetingDate?: boolean
    MeetingTypeName?: boolean
    StaffID?: boolean
    StaffName?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    AttendanceID?: boolean
    MeetingID?: boolean
    MeetingDescription?: boolean
    MeetingDate?: boolean
    MeetingTypeName?: boolean
    StaffID?: boolean
    StaffName?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    CreatedAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"AttendanceID" | "MeetingID" | "MeetingDescription" | "MeetingDate" | "MeetingTypeName" | "StaffID" | "StaffName" | "IsPresent" | "Remarks" | "CreatedAt", ExtArgs["result"]["attendance"]>

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      AttendanceID: number
      MeetingID: string
      MeetingDescription: string | null
      MeetingDate: Date | null
      MeetingTypeName: string | null
      StaffID: number
      StaffName: string
      IsPresent: boolean | null
      Remarks: string | null
      CreatedAt: Date | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `AttendanceID`
     * const attendanceWithAttendanceIDOnly = await prisma.attendance.findMany({ select: { AttendanceID: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `AttendanceID`
     * const attendanceWithAttendanceIDOnly = await prisma.attendance.createManyAndReturn({
     *   select: { AttendanceID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `AttendanceID`
     * const attendanceWithAttendanceIDOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { AttendanceID: true },
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly AttendanceID: FieldRef<"Attendance", 'Int'>
    readonly MeetingID: FieldRef<"Attendance", 'String'>
    readonly MeetingDescription: FieldRef<"Attendance", 'String'>
    readonly MeetingDate: FieldRef<"Attendance", 'DateTime'>
    readonly MeetingTypeName: FieldRef<"Attendance", 'String'>
    readonly StaffID: FieldRef<"Attendance", 'Int'>
    readonly StaffName: FieldRef<"Attendance", 'String'>
    readonly IsPresent: FieldRef<"Attendance", 'Boolean'>
    readonly Remarks: FieldRef<"Attendance", 'String'>
    readonly CreatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
  }


  /**
   * Model departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsAvgAggregateOutputType = {
    department_id: number | null
  }

  export type DepartmentsSumAggregateOutputType = {
    department_id: number | null
  }

  export type DepartmentsMinAggregateOutputType = {
    department_id: number | null
    department_name: string | null
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    department_id: number | null
    department_name: string | null
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DepartmentsCountAggregateOutputType = {
    department_id: number
    department_name: number
    remarks: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DepartmentsAvgAggregateInputType = {
    department_id?: true
  }

  export type DepartmentsSumAggregateInputType = {
    department_id?: true
  }

  export type DepartmentsMinAggregateInputType = {
    department_id?: true
    department_name?: true
    remarks?: true
    created_at?: true
    updated_at?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    department_id?: true
    department_name?: true
    remarks?: true
    created_at?: true
    updated_at?: true
  }

  export type DepartmentsCountAggregateInputType = {
    department_id?: true
    department_name?: true
    remarks?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to aggregate.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type departmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentsWhereInput
    orderBy?: departmentsOrderByWithAggregationInput | departmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: departmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _avg?: DepartmentsAvgAggregateInputType
    _sum?: DepartmentsSumAggregateInputType
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    department_id: number
    department_name: string
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends departmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type departmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    department_id?: boolean
    department_name?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    department_id?: boolean
    department_name?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    department_id?: boolean
    department_name?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectScalar = {
    department_id?: boolean
    department_name?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type departmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"department_id" | "department_name" | "remarks" | "created_at" | "updated_at", ExtArgs["result"]["departments"]>

  export type $departmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "departments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      department_id: number
      department_name: string
      remarks: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type departmentsGetPayload<S extends boolean | null | undefined | departmentsDefaultArgs> = $Result.GetResult<Prisma.$departmentsPayload, S>

  type departmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface departmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['departments'], meta: { name: 'departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {departmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentsFindUniqueArgs>(args: SelectSubset<T, departmentsFindUniqueArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentsFindFirstArgs>(args?: SelectSubset<T, departmentsFindFirstArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `department_id`
     * const departmentsWithDepartment_idOnly = await prisma.departments.findMany({ select: { department_id: true } })
     * 
     */
    findMany<T extends departmentsFindManyArgs>(args?: SelectSubset<T, departmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departments.
     * @param {departmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends departmentsCreateArgs>(args: SelectSubset<T, departmentsCreateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentsCreateManyArgs>(args?: SelectSubset<T, departmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {departmentsCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `department_id`
     * const departmentsWithDepartment_idOnly = await prisma.departments.createManyAndReturn({
     *   select: { department_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends departmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, departmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departments.
     * @param {departmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends departmentsDeleteArgs>(args: SelectSubset<T, departmentsDeleteArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departments.
     * @param {departmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentsUpdateArgs>(args: SelectSubset<T, departmentsUpdateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentsDeleteManyArgs>(args?: SelectSubset<T, departmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentsUpdateManyArgs>(args: SelectSubset<T, departmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {departmentsUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `department_id`
     * const departmentsWithDepartment_idOnly = await prisma.departments.updateManyAndReturn({
     *   select: { department_id: true },
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
    updateManyAndReturn<T extends departmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, departmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departments.
     * @param {departmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends departmentsUpsertArgs>(args: SelectSubset<T, departmentsUpsertArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentsCountArgs>(
      args?: Subset<T, departmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsGroupByArgs} args - Group by arguments.
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
      T extends departmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentsGroupByArgs['orderBy'] }
        : { orderBy?: departmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, departmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the departments model
   */
  readonly fields: departmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the departments model
   */
  interface departmentsFieldRefs {
    readonly department_id: FieldRef<"departments", 'Int'>
    readonly department_name: FieldRef<"departments", 'String'>
    readonly remarks: FieldRef<"departments", 'String'>
    readonly created_at: FieldRef<"departments", 'DateTime'>
    readonly updated_at: FieldRef<"departments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * departments findUnique
   */
  export type departmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findUniqueOrThrow
   */
  export type departmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findFirst
   */
  export type departmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findFirstOrThrow
   */
  export type departmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findMany
   */
  export type departmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments create
   */
  export type departmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data needed to create a departments.
     */
    data: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
  }

  /**
   * departments createMany
   */
  export type departmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments createManyAndReturn
   */
  export type departmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments update
   */
  export type departmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data needed to update a departments.
     */
    data: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
    /**
     * Choose, which departments to update.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments updateMany
   */
  export type departmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * departments updateManyAndReturn
   */
  export type departmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * departments upsert
   */
  export type departmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The filter to search for the departments to update in case it exists.
     */
    where: departmentsWhereUniqueInput
    /**
     * In case the departments found by the `where` argument doesn't exist, create a new departments with this data.
     */
    create: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
    /**
     * In case the departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
  }

  /**
   * departments delete
   */
  export type departmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Filter which departments to delete.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments deleteMany
   */
  export type departmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * departments without action
   */
  export type departmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
  }


  /**
   * Model venues
   */

  export type AggregateVenues = {
    _count: VenuesCountAggregateOutputType | null
    _avg: VenuesAvgAggregateOutputType | null
    _sum: VenuesSumAggregateOutputType | null
    _min: VenuesMinAggregateOutputType | null
    _max: VenuesMaxAggregateOutputType | null
  }

  export type VenuesAvgAggregateOutputType = {
    capacity: number | null
  }

  export type VenuesSumAggregateOutputType = {
    capacity: number | null
  }

  export type VenuesMinAggregateOutputType = {
    venue_id: string | null
    venue_name: string | null
    capacity: number | null
    location: string | null
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VenuesMaxAggregateOutputType = {
    venue_id: string | null
    venue_name: string | null
    capacity: number | null
    location: string | null
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VenuesCountAggregateOutputType = {
    venue_id: number
    venue_name: number
    capacity: number
    location: number
    remarks: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VenuesAvgAggregateInputType = {
    capacity?: true
  }

  export type VenuesSumAggregateInputType = {
    capacity?: true
  }

  export type VenuesMinAggregateInputType = {
    venue_id?: true
    venue_name?: true
    capacity?: true
    location?: true
    remarks?: true
    created_at?: true
    updated_at?: true
  }

  export type VenuesMaxAggregateInputType = {
    venue_id?: true
    venue_name?: true
    capacity?: true
    location?: true
    remarks?: true
    created_at?: true
    updated_at?: true
  }

  export type VenuesCountAggregateInputType = {
    venue_id?: true
    venue_name?: true
    capacity?: true
    location?: true
    remarks?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VenuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which venues to aggregate.
     */
    where?: venuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venuesOrderByWithRelationInput | venuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: venuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned venues
    **/
    _count?: true | VenuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenuesMaxAggregateInputType
  }

  export type GetVenuesAggregateType<T extends VenuesAggregateArgs> = {
        [P in keyof T & keyof AggregateVenues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenues[P]>
      : GetScalarType<T[P], AggregateVenues[P]>
  }




  export type venuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: venuesWhereInput
    orderBy?: venuesOrderByWithAggregationInput | venuesOrderByWithAggregationInput[]
    by: VenuesScalarFieldEnum[] | VenuesScalarFieldEnum
    having?: venuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenuesCountAggregateInputType | true
    _avg?: VenuesAvgAggregateInputType
    _sum?: VenuesSumAggregateInputType
    _min?: VenuesMinAggregateInputType
    _max?: VenuesMaxAggregateInputType
  }

  export type VenuesGroupByOutputType = {
    venue_id: string
    venue_name: string
    capacity: number
    location: string | null
    remarks: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: VenuesCountAggregateOutputType | null
    _avg: VenuesAvgAggregateOutputType | null
    _sum: VenuesSumAggregateOutputType | null
    _min: VenuesMinAggregateOutputType | null
    _max: VenuesMaxAggregateOutputType | null
  }

  type GetVenuesGroupByPayload<T extends venuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenuesGroupByOutputType[P]>
            : GetScalarType<T[P], VenuesGroupByOutputType[P]>
        }
      >
    >


  export type venuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venue_id?: boolean
    venue_name?: boolean
    capacity?: boolean
    location?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["venues"]>

  export type venuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venue_id?: boolean
    venue_name?: boolean
    capacity?: boolean
    location?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["venues"]>

  export type venuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venue_id?: boolean
    venue_name?: boolean
    capacity?: boolean
    location?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["venues"]>

  export type venuesSelectScalar = {
    venue_id?: boolean
    venue_name?: boolean
    capacity?: boolean
    location?: boolean
    remarks?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type venuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"venue_id" | "venue_name" | "capacity" | "location" | "remarks" | "created_at" | "updated_at", ExtArgs["result"]["venues"]>

  export type $venuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "venues"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      venue_id: string
      venue_name: string
      capacity: number
      location: string | null
      remarks: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["venues"]>
    composites: {}
  }

  type venuesGetPayload<S extends boolean | null | undefined | venuesDefaultArgs> = $Result.GetResult<Prisma.$venuesPayload, S>

  type venuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<venuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenuesCountAggregateInputType | true
    }

  export interface venuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['venues'], meta: { name: 'venues' } }
    /**
     * Find zero or one Venues that matches the filter.
     * @param {venuesFindUniqueArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends venuesFindUniqueArgs>(args: SelectSubset<T, venuesFindUniqueArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {venuesFindUniqueOrThrowArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends venuesFindUniqueOrThrowArgs>(args: SelectSubset<T, venuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesFindFirstArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends venuesFindFirstArgs>(args?: SelectSubset<T, venuesFindFirstArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesFindFirstOrThrowArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends venuesFindFirstOrThrowArgs>(args?: SelectSubset<T, venuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venues.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venues.findMany({ take: 10 })
     * 
     * // Only select the `venue_id`
     * const venuesWithVenue_idOnly = await prisma.venues.findMany({ select: { venue_id: true } })
     * 
     */
    findMany<T extends venuesFindManyArgs>(args?: SelectSubset<T, venuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venues.
     * @param {venuesCreateArgs} args - Arguments to create a Venues.
     * @example
     * // Create one Venues
     * const Venues = await prisma.venues.create({
     *   data: {
     *     // ... data to create a Venues
     *   }
     * })
     * 
     */
    create<T extends venuesCreateArgs>(args: SelectSubset<T, venuesCreateArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {venuesCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venues = await prisma.venues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends venuesCreateManyArgs>(args?: SelectSubset<T, venuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {venuesCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venues = await prisma.venues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `venue_id`
     * const venuesWithVenue_idOnly = await prisma.venues.createManyAndReturn({
     *   select: { venue_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends venuesCreateManyAndReturnArgs>(args?: SelectSubset<T, venuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venues.
     * @param {venuesDeleteArgs} args - Arguments to delete one Venues.
     * @example
     * // Delete one Venues
     * const Venues = await prisma.venues.delete({
     *   where: {
     *     // ... filter to delete one Venues
     *   }
     * })
     * 
     */
    delete<T extends venuesDeleteArgs>(args: SelectSubset<T, venuesDeleteArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venues.
     * @param {venuesUpdateArgs} args - Arguments to update one Venues.
     * @example
     * // Update one Venues
     * const venues = await prisma.venues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends venuesUpdateArgs>(args: SelectSubset<T, venuesUpdateArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {venuesDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends venuesDeleteManyArgs>(args?: SelectSubset<T, venuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venues = await prisma.venues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends venuesUpdateManyArgs>(args: SelectSubset<T, venuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {venuesUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venues = await prisma.venues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `venue_id`
     * const venuesWithVenue_idOnly = await prisma.venues.updateManyAndReturn({
     *   select: { venue_id: true },
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
    updateManyAndReturn<T extends venuesUpdateManyAndReturnArgs>(args: SelectSubset<T, venuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venues.
     * @param {venuesUpsertArgs} args - Arguments to update or create a Venues.
     * @example
     * // Update or create a Venues
     * const venues = await prisma.venues.upsert({
     *   create: {
     *     // ... data to create a Venues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venues we want to update
     *   }
     * })
     */
    upsert<T extends venuesUpsertArgs>(args: SelectSubset<T, venuesUpsertArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venues.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends venuesCountArgs>(
      args?: Subset<T, venuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenuesAggregateArgs>(args: Subset<T, VenuesAggregateArgs>): Prisma.PrismaPromise<GetVenuesAggregateType<T>>

    /**
     * Group by Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesGroupByArgs} args - Group by arguments.
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
      T extends venuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: venuesGroupByArgs['orderBy'] }
        : { orderBy?: venuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, venuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the venues model
   */
  readonly fields: venuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for venues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__venuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the venues model
   */
  interface venuesFieldRefs {
    readonly venue_id: FieldRef<"venues", 'String'>
    readonly venue_name: FieldRef<"venues", 'String'>
    readonly capacity: FieldRef<"venues", 'Int'>
    readonly location: FieldRef<"venues", 'String'>
    readonly remarks: FieldRef<"venues", 'String'>
    readonly created_at: FieldRef<"venues", 'DateTime'>
    readonly updated_at: FieldRef<"venues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * venues findUnique
   */
  export type venuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where: venuesWhereUniqueInput
  }

  /**
   * venues findUniqueOrThrow
   */
  export type venuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where: venuesWhereUniqueInput
  }

  /**
   * venues findFirst
   */
  export type venuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where?: venuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venuesOrderByWithRelationInput | venuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for venues.
     */
    cursor?: venuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of venues.
     */
    distinct?: VenuesScalarFieldEnum | VenuesScalarFieldEnum[]
  }

  /**
   * venues findFirstOrThrow
   */
  export type venuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where?: venuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venuesOrderByWithRelationInput | venuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for venues.
     */
    cursor?: venuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of venues.
     */
    distinct?: VenuesScalarFieldEnum | VenuesScalarFieldEnum[]
  }

  /**
   * venues findMany
   */
  export type venuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where?: venuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venuesOrderByWithRelationInput | venuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing venues.
     */
    cursor?: venuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of venues.
     */
    distinct?: VenuesScalarFieldEnum | VenuesScalarFieldEnum[]
  }

  /**
   * venues create
   */
  export type venuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The data needed to create a venues.
     */
    data: XOR<venuesCreateInput, venuesUncheckedCreateInput>
  }

  /**
   * venues createMany
   */
  export type venuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many venues.
     */
    data: venuesCreateManyInput | venuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * venues createManyAndReturn
   */
  export type venuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The data used to create many venues.
     */
    data: venuesCreateManyInput | venuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * venues update
   */
  export type venuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The data needed to update a venues.
     */
    data: XOR<venuesUpdateInput, venuesUncheckedUpdateInput>
    /**
     * Choose, which venues to update.
     */
    where: venuesWhereUniqueInput
  }

  /**
   * venues updateMany
   */
  export type venuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update venues.
     */
    data: XOR<venuesUpdateManyMutationInput, venuesUncheckedUpdateManyInput>
    /**
     * Filter which venues to update
     */
    where?: venuesWhereInput
    /**
     * Limit how many venues to update.
     */
    limit?: number
  }

  /**
   * venues updateManyAndReturn
   */
  export type venuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The data used to update venues.
     */
    data: XOR<venuesUpdateManyMutationInput, venuesUncheckedUpdateManyInput>
    /**
     * Filter which venues to update
     */
    where?: venuesWhereInput
    /**
     * Limit how many venues to update.
     */
    limit?: number
  }

  /**
   * venues upsert
   */
  export type venuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The filter to search for the venues to update in case it exists.
     */
    where: venuesWhereUniqueInput
    /**
     * In case the venues found by the `where` argument doesn't exist, create a new venues with this data.
     */
    create: XOR<venuesCreateInput, venuesUncheckedCreateInput>
    /**
     * In case the venues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<venuesUpdateInput, venuesUncheckedUpdateInput>
  }

  /**
   * venues delete
   */
  export type venuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter which venues to delete.
     */
    where: venuesWhereUniqueInput
  }

  /**
   * venues deleteMany
   */
  export type venuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which venues to delete
     */
    where?: venuesWhereInput
    /**
     * Limit how many venues to delete.
     */
    limit?: number
  }

  /**
   * venues without action
   */
  export type venuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
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


  export const MeetingMemberScalarFieldEnum: {
    MeetingMemberID: 'MeetingMemberID',
    MeetingID: 'MeetingID',
    StaffID: 'StaffID',
    IsPresent: 'IsPresent',
    Remarks: 'Remarks',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type MeetingMemberScalarFieldEnum = (typeof MeetingMemberScalarFieldEnum)[keyof typeof MeetingMemberScalarFieldEnum]


  export const MeetingTypeScalarFieldEnum: {
    MeetingTypeID: 'MeetingTypeID',
    MeetingTypeName: 'MeetingTypeName',
    Remarks: 'Remarks',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type MeetingTypeScalarFieldEnum = (typeof MeetingTypeScalarFieldEnum)[keyof typeof MeetingTypeScalarFieldEnum]


  export const MeetingsScalarFieldEnum: {
    MeetingID: 'MeetingID',
    MeetingDate: 'MeetingDate',
    MeetingTypeID: 'MeetingTypeID',
    MeetingDescription: 'MeetingDescription',
    DocumentPath: 'DocumentPath',
    Created: 'Created',
    Modified: 'Modified',
    IsCancelled: 'IsCancelled',
    CancellationDateTime: 'CancellationDateTime',
    CancellationReason: 'CancellationReason'
  };

  export type MeetingsScalarFieldEnum = (typeof MeetingsScalarFieldEnum)[keyof typeof MeetingsScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    StaffID: 'StaffID',
    StaffName: 'StaffName',
    MobileNo: 'MobileNo',
    EmailAddress: 'EmailAddress',
    Remarks: 'Remarks',
    Created: 'Created',
    Modified: 'Modified',
    Password: 'Password',
    Role: 'Role',
    LastLogin: 'LastLogin'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const UserActivityScalarFieldEnum: {
    ActivityID: 'ActivityID',
    StaffID: 'StaffID',
    ActivityType: 'ActivityType',
    Timestamp: 'Timestamp'
  };

  export type UserActivityScalarFieldEnum = (typeof UserActivityScalarFieldEnum)[keyof typeof UserActivityScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    AttendanceID: 'AttendanceID',
    MeetingID: 'MeetingID',
    MeetingDescription: 'MeetingDescription',
    MeetingDate: 'MeetingDate',
    MeetingTypeName: 'MeetingTypeName',
    StaffID: 'StaffID',
    StaffName: 'StaffName',
    IsPresent: 'IsPresent',
    Remarks: 'Remarks',
    CreatedAt: 'CreatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    department_id: 'department_id',
    department_name: 'department_name',
    remarks: 'remarks',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const VenuesScalarFieldEnum: {
    venue_id: 'venue_id',
    venue_name: 'venue_name',
    capacity: 'capacity',
    location: 'location',
    remarks: 'remarks',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VenuesScalarFieldEnum = (typeof VenuesScalarFieldEnum)[keyof typeof VenuesScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type MeetingMemberWhereInput = {
    AND?: MeetingMemberWhereInput | MeetingMemberWhereInput[]
    OR?: MeetingMemberWhereInput[]
    NOT?: MeetingMemberWhereInput | MeetingMemberWhereInput[]
    MeetingMemberID?: IntFilter<"MeetingMember"> | number
    MeetingID?: IntFilter<"MeetingMember"> | number
    StaffID?: IntFilter<"MeetingMember"> | number
    IsPresent?: BoolFilter<"MeetingMember"> | boolean
    Remarks?: StringNullableFilter<"MeetingMember"> | string | null
    Created?: DateTimeFilter<"MeetingMember"> | Date | string
    Modified?: DateTimeFilter<"MeetingMember"> | Date | string
    Meetings?: XOR<MeetingsScalarRelationFilter, MeetingsWhereInput>
    Staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }

  export type MeetingMemberOrderByWithRelationInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Meetings?: MeetingsOrderByWithRelationInput
    Staff?: StaffOrderByWithRelationInput
  }

  export type MeetingMemberWhereUniqueInput = Prisma.AtLeast<{
    MeetingMemberID?: number
    AND?: MeetingMemberWhereInput | MeetingMemberWhereInput[]
    OR?: MeetingMemberWhereInput[]
    NOT?: MeetingMemberWhereInput | MeetingMemberWhereInput[]
    MeetingID?: IntFilter<"MeetingMember"> | number
    StaffID?: IntFilter<"MeetingMember"> | number
    IsPresent?: BoolFilter<"MeetingMember"> | boolean
    Remarks?: StringNullableFilter<"MeetingMember"> | string | null
    Created?: DateTimeFilter<"MeetingMember"> | Date | string
    Modified?: DateTimeFilter<"MeetingMember"> | Date | string
    Meetings?: XOR<MeetingsScalarRelationFilter, MeetingsWhereInput>
    Staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }, "MeetingMemberID">

  export type MeetingMemberOrderByWithAggregationInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: MeetingMemberCountOrderByAggregateInput
    _avg?: MeetingMemberAvgOrderByAggregateInput
    _max?: MeetingMemberMaxOrderByAggregateInput
    _min?: MeetingMemberMinOrderByAggregateInput
    _sum?: MeetingMemberSumOrderByAggregateInput
  }

  export type MeetingMemberScalarWhereWithAggregatesInput = {
    AND?: MeetingMemberScalarWhereWithAggregatesInput | MeetingMemberScalarWhereWithAggregatesInput[]
    OR?: MeetingMemberScalarWhereWithAggregatesInput[]
    NOT?: MeetingMemberScalarWhereWithAggregatesInput | MeetingMemberScalarWhereWithAggregatesInput[]
    MeetingMemberID?: IntWithAggregatesFilter<"MeetingMember"> | number
    MeetingID?: IntWithAggregatesFilter<"MeetingMember"> | number
    StaffID?: IntWithAggregatesFilter<"MeetingMember"> | number
    IsPresent?: BoolWithAggregatesFilter<"MeetingMember"> | boolean
    Remarks?: StringNullableWithAggregatesFilter<"MeetingMember"> | string | null
    Created?: DateTimeWithAggregatesFilter<"MeetingMember"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"MeetingMember"> | Date | string
  }

  export type MeetingTypeWhereInput = {
    AND?: MeetingTypeWhereInput | MeetingTypeWhereInput[]
    OR?: MeetingTypeWhereInput[]
    NOT?: MeetingTypeWhereInput | MeetingTypeWhereInput[]
    MeetingTypeID?: IntFilter<"MeetingType"> | number
    MeetingTypeName?: StringFilter<"MeetingType"> | string
    Remarks?: StringNullableFilter<"MeetingType"> | string | null
    Created?: DateTimeFilter<"MeetingType"> | Date | string
    Modified?: DateTimeFilter<"MeetingType"> | Date | string
    Meetings?: MeetingsListRelationFilter
  }

  export type MeetingTypeOrderByWithRelationInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Meetings?: MeetingsOrderByRelationAggregateInput
  }

  export type MeetingTypeWhereUniqueInput = Prisma.AtLeast<{
    MeetingTypeID?: number
    AND?: MeetingTypeWhereInput | MeetingTypeWhereInput[]
    OR?: MeetingTypeWhereInput[]
    NOT?: MeetingTypeWhereInput | MeetingTypeWhereInput[]
    MeetingTypeName?: StringFilter<"MeetingType"> | string
    Remarks?: StringNullableFilter<"MeetingType"> | string | null
    Created?: DateTimeFilter<"MeetingType"> | Date | string
    Modified?: DateTimeFilter<"MeetingType"> | Date | string
    Meetings?: MeetingsListRelationFilter
  }, "MeetingTypeID">

  export type MeetingTypeOrderByWithAggregationInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: MeetingTypeCountOrderByAggregateInput
    _avg?: MeetingTypeAvgOrderByAggregateInput
    _max?: MeetingTypeMaxOrderByAggregateInput
    _min?: MeetingTypeMinOrderByAggregateInput
    _sum?: MeetingTypeSumOrderByAggregateInput
  }

  export type MeetingTypeScalarWhereWithAggregatesInput = {
    AND?: MeetingTypeScalarWhereWithAggregatesInput | MeetingTypeScalarWhereWithAggregatesInput[]
    OR?: MeetingTypeScalarWhereWithAggregatesInput[]
    NOT?: MeetingTypeScalarWhereWithAggregatesInput | MeetingTypeScalarWhereWithAggregatesInput[]
    MeetingTypeID?: IntWithAggregatesFilter<"MeetingType"> | number
    MeetingTypeName?: StringWithAggregatesFilter<"MeetingType"> | string
    Remarks?: StringNullableWithAggregatesFilter<"MeetingType"> | string | null
    Created?: DateTimeWithAggregatesFilter<"MeetingType"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"MeetingType"> | Date | string
  }

  export type MeetingsWhereInput = {
    AND?: MeetingsWhereInput | MeetingsWhereInput[]
    OR?: MeetingsWhereInput[]
    NOT?: MeetingsWhereInput | MeetingsWhereInput[]
    MeetingID?: IntFilter<"Meetings"> | number
    MeetingDate?: DateTimeFilter<"Meetings"> | Date | string
    MeetingTypeID?: IntFilter<"Meetings"> | number
    MeetingDescription?: StringNullableFilter<"Meetings"> | string | null
    DocumentPath?: StringNullableFilter<"Meetings"> | string | null
    Created?: DateTimeFilter<"Meetings"> | Date | string
    Modified?: DateTimeFilter<"Meetings"> | Date | string
    IsCancelled?: BoolFilter<"Meetings"> | boolean
    CancellationDateTime?: DateTimeNullableFilter<"Meetings"> | Date | string | null
    CancellationReason?: StringNullableFilter<"Meetings"> | string | null
    MeetingMember?: MeetingMemberListRelationFilter
    MeetingType?: XOR<MeetingTypeScalarRelationFilter, MeetingTypeWhereInput>
  }

  export type MeetingsOrderByWithRelationInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrderInput | SortOrder
    DocumentPath?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrderInput | SortOrder
    CancellationReason?: SortOrderInput | SortOrder
    MeetingMember?: MeetingMemberOrderByRelationAggregateInput
    MeetingType?: MeetingTypeOrderByWithRelationInput
  }

  export type MeetingsWhereUniqueInput = Prisma.AtLeast<{
    MeetingID?: number
    AND?: MeetingsWhereInput | MeetingsWhereInput[]
    OR?: MeetingsWhereInput[]
    NOT?: MeetingsWhereInput | MeetingsWhereInput[]
    MeetingDate?: DateTimeFilter<"Meetings"> | Date | string
    MeetingTypeID?: IntFilter<"Meetings"> | number
    MeetingDescription?: StringNullableFilter<"Meetings"> | string | null
    DocumentPath?: StringNullableFilter<"Meetings"> | string | null
    Created?: DateTimeFilter<"Meetings"> | Date | string
    Modified?: DateTimeFilter<"Meetings"> | Date | string
    IsCancelled?: BoolFilter<"Meetings"> | boolean
    CancellationDateTime?: DateTimeNullableFilter<"Meetings"> | Date | string | null
    CancellationReason?: StringNullableFilter<"Meetings"> | string | null
    MeetingMember?: MeetingMemberListRelationFilter
    MeetingType?: XOR<MeetingTypeScalarRelationFilter, MeetingTypeWhereInput>
  }, "MeetingID">

  export type MeetingsOrderByWithAggregationInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrderInput | SortOrder
    DocumentPath?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrderInput | SortOrder
    CancellationReason?: SortOrderInput | SortOrder
    _count?: MeetingsCountOrderByAggregateInput
    _avg?: MeetingsAvgOrderByAggregateInput
    _max?: MeetingsMaxOrderByAggregateInput
    _min?: MeetingsMinOrderByAggregateInput
    _sum?: MeetingsSumOrderByAggregateInput
  }

  export type MeetingsScalarWhereWithAggregatesInput = {
    AND?: MeetingsScalarWhereWithAggregatesInput | MeetingsScalarWhereWithAggregatesInput[]
    OR?: MeetingsScalarWhereWithAggregatesInput[]
    NOT?: MeetingsScalarWhereWithAggregatesInput | MeetingsScalarWhereWithAggregatesInput[]
    MeetingID?: IntWithAggregatesFilter<"Meetings"> | number
    MeetingDate?: DateTimeWithAggregatesFilter<"Meetings"> | Date | string
    MeetingTypeID?: IntWithAggregatesFilter<"Meetings"> | number
    MeetingDescription?: StringNullableWithAggregatesFilter<"Meetings"> | string | null
    DocumentPath?: StringNullableWithAggregatesFilter<"Meetings"> | string | null
    Created?: DateTimeWithAggregatesFilter<"Meetings"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"Meetings"> | Date | string
    IsCancelled?: BoolWithAggregatesFilter<"Meetings"> | boolean
    CancellationDateTime?: DateTimeNullableWithAggregatesFilter<"Meetings"> | Date | string | null
    CancellationReason?: StringNullableWithAggregatesFilter<"Meetings"> | string | null
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    StaffID?: IntFilter<"Staff"> | number
    StaffName?: StringFilter<"Staff"> | string
    MobileNo?: StringNullableFilter<"Staff"> | string | null
    EmailAddress?: StringNullableFilter<"Staff"> | string | null
    Remarks?: StringNullableFilter<"Staff"> | string | null
    Created?: DateTimeFilter<"Staff"> | Date | string
    Modified?: DateTimeFilter<"Staff"> | Date | string
    Password?: StringNullableFilter<"Staff"> | string | null
    Role?: StringNullableFilter<"Staff"> | string | null
    LastLogin?: DateTimeNullableFilter<"Staff"> | Date | string | null
    MeetingMember?: MeetingMemberListRelationFilter
    UserActivity?: UserActivityListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrderInput | SortOrder
    EmailAddress?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Password?: SortOrderInput | SortOrder
    Role?: SortOrderInput | SortOrder
    LastLogin?: SortOrderInput | SortOrder
    MeetingMember?: MeetingMemberOrderByRelationAggregateInput
    UserActivity?: UserActivityOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    StaffID?: number
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    StaffName?: StringFilter<"Staff"> | string
    MobileNo?: StringNullableFilter<"Staff"> | string | null
    EmailAddress?: StringNullableFilter<"Staff"> | string | null
    Remarks?: StringNullableFilter<"Staff"> | string | null
    Created?: DateTimeFilter<"Staff"> | Date | string
    Modified?: DateTimeFilter<"Staff"> | Date | string
    Password?: StringNullableFilter<"Staff"> | string | null
    Role?: StringNullableFilter<"Staff"> | string | null
    LastLogin?: DateTimeNullableFilter<"Staff"> | Date | string | null
    MeetingMember?: MeetingMemberListRelationFilter
    UserActivity?: UserActivityListRelationFilter
  }, "StaffID">

  export type StaffOrderByWithAggregationInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrderInput | SortOrder
    EmailAddress?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Password?: SortOrderInput | SortOrder
    Role?: SortOrderInput | SortOrder
    LastLogin?: SortOrderInput | SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    StaffID?: IntWithAggregatesFilter<"Staff"> | number
    StaffName?: StringWithAggregatesFilter<"Staff"> | string
    MobileNo?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    EmailAddress?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    Remarks?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    Created?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    Password?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    Role?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    LastLogin?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null
  }

  export type UserActivityWhereInput = {
    AND?: UserActivityWhereInput | UserActivityWhereInput[]
    OR?: UserActivityWhereInput[]
    NOT?: UserActivityWhereInput | UserActivityWhereInput[]
    ActivityID?: IntFilter<"UserActivity"> | number
    StaffID?: IntFilter<"UserActivity"> | number
    ActivityType?: StringFilter<"UserActivity"> | string
    Timestamp?: DateTimeFilter<"UserActivity"> | Date | string
    Staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }

  export type UserActivityOrderByWithRelationInput = {
    ActivityID?: SortOrder
    StaffID?: SortOrder
    ActivityType?: SortOrder
    Timestamp?: SortOrder
    Staff?: StaffOrderByWithRelationInput
  }

  export type UserActivityWhereUniqueInput = Prisma.AtLeast<{
    ActivityID?: number
    AND?: UserActivityWhereInput | UserActivityWhereInput[]
    OR?: UserActivityWhereInput[]
    NOT?: UserActivityWhereInput | UserActivityWhereInput[]
    StaffID?: IntFilter<"UserActivity"> | number
    ActivityType?: StringFilter<"UserActivity"> | string
    Timestamp?: DateTimeFilter<"UserActivity"> | Date | string
    Staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }, "ActivityID">

  export type UserActivityOrderByWithAggregationInput = {
    ActivityID?: SortOrder
    StaffID?: SortOrder
    ActivityType?: SortOrder
    Timestamp?: SortOrder
    _count?: UserActivityCountOrderByAggregateInput
    _avg?: UserActivityAvgOrderByAggregateInput
    _max?: UserActivityMaxOrderByAggregateInput
    _min?: UserActivityMinOrderByAggregateInput
    _sum?: UserActivitySumOrderByAggregateInput
  }

  export type UserActivityScalarWhereWithAggregatesInput = {
    AND?: UserActivityScalarWhereWithAggregatesInput | UserActivityScalarWhereWithAggregatesInput[]
    OR?: UserActivityScalarWhereWithAggregatesInput[]
    NOT?: UserActivityScalarWhereWithAggregatesInput | UserActivityScalarWhereWithAggregatesInput[]
    ActivityID?: IntWithAggregatesFilter<"UserActivity"> | number
    StaffID?: IntWithAggregatesFilter<"UserActivity"> | number
    ActivityType?: StringWithAggregatesFilter<"UserActivity"> | string
    Timestamp?: DateTimeWithAggregatesFilter<"UserActivity"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    AttendanceID?: IntFilter<"Attendance"> | number
    MeetingID?: StringFilter<"Attendance"> | string
    MeetingDescription?: StringNullableFilter<"Attendance"> | string | null
    MeetingDate?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    MeetingTypeName?: StringNullableFilter<"Attendance"> | string | null
    StaffID?: IntFilter<"Attendance"> | number
    StaffName?: StringFilter<"Attendance"> | string
    IsPresent?: BoolNullableFilter<"Attendance"> | boolean | null
    Remarks?: StringNullableFilter<"Attendance"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
  }

  export type AttendanceOrderByWithRelationInput = {
    AttendanceID?: SortOrder
    MeetingID?: SortOrder
    MeetingDescription?: SortOrderInput | SortOrder
    MeetingDate?: SortOrderInput | SortOrder
    MeetingTypeName?: SortOrderInput | SortOrder
    StaffID?: SortOrder
    StaffName?: SortOrder
    IsPresent?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    AttendanceID?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    MeetingID?: StringFilter<"Attendance"> | string
    MeetingDescription?: StringNullableFilter<"Attendance"> | string | null
    MeetingDate?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    MeetingTypeName?: StringNullableFilter<"Attendance"> | string | null
    StaffID?: IntFilter<"Attendance"> | number
    StaffName?: StringFilter<"Attendance"> | string
    IsPresent?: BoolNullableFilter<"Attendance"> | boolean | null
    Remarks?: StringNullableFilter<"Attendance"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
  }, "AttendanceID">

  export type AttendanceOrderByWithAggregationInput = {
    AttendanceID?: SortOrder
    MeetingID?: SortOrder
    MeetingDescription?: SortOrderInput | SortOrder
    MeetingDate?: SortOrderInput | SortOrder
    MeetingTypeName?: SortOrderInput | SortOrder
    StaffID?: SortOrder
    StaffName?: SortOrder
    IsPresent?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    AttendanceID?: IntWithAggregatesFilter<"Attendance"> | number
    MeetingID?: StringWithAggregatesFilter<"Attendance"> | string
    MeetingDescription?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    MeetingDate?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    MeetingTypeName?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    StaffID?: IntWithAggregatesFilter<"Attendance"> | number
    StaffName?: StringWithAggregatesFilter<"Attendance"> | string
    IsPresent?: BoolNullableWithAggregatesFilter<"Attendance"> | boolean | null
    Remarks?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
  }

  export type departmentsWhereInput = {
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    department_id?: IntFilter<"departments"> | number
    department_name?: StringFilter<"departments"> | string
    remarks?: StringNullableFilter<"departments"> | string | null
    created_at?: DateTimeNullableFilter<"departments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"departments"> | Date | string | null
  }

  export type departmentsOrderByWithRelationInput = {
    department_id?: SortOrder
    department_name?: SortOrder
    remarks?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type departmentsWhereUniqueInput = Prisma.AtLeast<{
    department_id?: number
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    department_name?: StringFilter<"departments"> | string
    remarks?: StringNullableFilter<"departments"> | string | null
    created_at?: DateTimeNullableFilter<"departments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"departments"> | Date | string | null
  }, "department_id">

  export type departmentsOrderByWithAggregationInput = {
    department_id?: SortOrder
    department_name?: SortOrder
    remarks?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: departmentsCountOrderByAggregateInput
    _avg?: departmentsAvgOrderByAggregateInput
    _max?: departmentsMaxOrderByAggregateInput
    _min?: departmentsMinOrderByAggregateInput
    _sum?: departmentsSumOrderByAggregateInput
  }

  export type departmentsScalarWhereWithAggregatesInput = {
    AND?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    OR?: departmentsScalarWhereWithAggregatesInput[]
    NOT?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    department_id?: IntWithAggregatesFilter<"departments"> | number
    department_name?: StringWithAggregatesFilter<"departments"> | string
    remarks?: StringNullableWithAggregatesFilter<"departments"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"departments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"departments"> | Date | string | null
  }

  export type venuesWhereInput = {
    AND?: venuesWhereInput | venuesWhereInput[]
    OR?: venuesWhereInput[]
    NOT?: venuesWhereInput | venuesWhereInput[]
    venue_id?: StringFilter<"venues"> | string
    venue_name?: StringFilter<"venues"> | string
    capacity?: IntFilter<"venues"> | number
    location?: StringNullableFilter<"venues"> | string | null
    remarks?: StringNullableFilter<"venues"> | string | null
    created_at?: DateTimeNullableFilter<"venues"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"venues"> | Date | string | null
  }

  export type venuesOrderByWithRelationInput = {
    venue_id?: SortOrder
    venue_name?: SortOrder
    capacity?: SortOrder
    location?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type venuesWhereUniqueInput = Prisma.AtLeast<{
    venue_id?: string
    AND?: venuesWhereInput | venuesWhereInput[]
    OR?: venuesWhereInput[]
    NOT?: venuesWhereInput | venuesWhereInput[]
    venue_name?: StringFilter<"venues"> | string
    capacity?: IntFilter<"venues"> | number
    location?: StringNullableFilter<"venues"> | string | null
    remarks?: StringNullableFilter<"venues"> | string | null
    created_at?: DateTimeNullableFilter<"venues"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"venues"> | Date | string | null
  }, "venue_id">

  export type venuesOrderByWithAggregationInput = {
    venue_id?: SortOrder
    venue_name?: SortOrder
    capacity?: SortOrder
    location?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: venuesCountOrderByAggregateInput
    _avg?: venuesAvgOrderByAggregateInput
    _max?: venuesMaxOrderByAggregateInput
    _min?: venuesMinOrderByAggregateInput
    _sum?: venuesSumOrderByAggregateInput
  }

  export type venuesScalarWhereWithAggregatesInput = {
    AND?: venuesScalarWhereWithAggregatesInput | venuesScalarWhereWithAggregatesInput[]
    OR?: venuesScalarWhereWithAggregatesInput[]
    NOT?: venuesScalarWhereWithAggregatesInput | venuesScalarWhereWithAggregatesInput[]
    venue_id?: StringWithAggregatesFilter<"venues"> | string
    venue_name?: StringWithAggregatesFilter<"venues"> | string
    capacity?: IntWithAggregatesFilter<"venues"> | number
    location?: StringNullableWithAggregatesFilter<"venues"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"venues"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"venues"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"venues"> | Date | string | null
  }

  export type MeetingMemberCreateInput = {
    IsPresent?: boolean
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Meetings: MeetingsCreateNestedOneWithoutMeetingMemberInput
    Staff: StaffCreateNestedOneWithoutMeetingMemberInput
  }

  export type MeetingMemberUncheckedCreateInput = {
    MeetingMemberID?: number
    MeetingID: number
    StaffID: number
    IsPresent?: boolean
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type MeetingMemberUpdateInput = {
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Meetings?: MeetingsUpdateOneRequiredWithoutMeetingMemberNestedInput
    Staff?: StaffUpdateOneRequiredWithoutMeetingMemberNestedInput
  }

  export type MeetingMemberUncheckedUpdateInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingMemberCreateManyInput = {
    MeetingMemberID?: number
    MeetingID: number
    StaffID: number
    IsPresent?: boolean
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type MeetingMemberUpdateManyMutationInput = {
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingMemberUncheckedUpdateManyInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingTypeCreateInput = {
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Meetings?: MeetingsCreateNestedManyWithoutMeetingTypeInput
  }

  export type MeetingTypeUncheckedCreateInput = {
    MeetingTypeID?: number
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Meetings?: MeetingsUncheckedCreateNestedManyWithoutMeetingTypeInput
  }

  export type MeetingTypeUpdateInput = {
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Meetings?: MeetingsUpdateManyWithoutMeetingTypeNestedInput
  }

  export type MeetingTypeUncheckedUpdateInput = {
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Meetings?: MeetingsUncheckedUpdateManyWithoutMeetingTypeNestedInput
  }

  export type MeetingTypeCreateManyInput = {
    MeetingTypeID?: number
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type MeetingTypeUpdateManyMutationInput = {
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingTypeUncheckedUpdateManyInput = {
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingsCreateInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string
    Modified?: Date | string
    IsCancelled?: boolean
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    MeetingMember?: MeetingMemberCreateNestedManyWithoutMeetingsInput
    MeetingType: MeetingTypeCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingsUncheckedCreateInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string
    Modified?: Date | string
    IsCancelled?: boolean
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    MeetingMember?: MeetingMemberUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingsUpdateInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCancelled?: BoolFieldUpdateOperationsInput | boolean
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingMember?: MeetingMemberUpdateManyWithoutMeetingsNestedInput
    MeetingType?: MeetingTypeUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingsUncheckedUpdateInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCancelled?: BoolFieldUpdateOperationsInput | boolean
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingMember?: MeetingMemberUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingsCreateManyInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string
    Modified?: Date | string
    IsCancelled?: boolean
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
  }

  export type MeetingsUpdateManyMutationInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCancelled?: BoolFieldUpdateOperationsInput | boolean
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeetingsUncheckedUpdateManyInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCancelled?: BoolFieldUpdateOperationsInput | boolean
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffCreateInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Password?: string | null
    Role?: string | null
    LastLogin?: Date | string | null
    MeetingMember?: MeetingMemberCreateNestedManyWithoutStaffInput
    UserActivity?: UserActivityCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Password?: string | null
    Role?: string | null
    LastLogin?: Date | string | null
    MeetingMember?: MeetingMemberUncheckedCreateNestedManyWithoutStaffInput
    UserActivity?: UserActivityUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MeetingMember?: MeetingMemberUpdateManyWithoutStaffNestedInput
    UserActivity?: UserActivityUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MeetingMember?: MeetingMemberUncheckedUpdateManyWithoutStaffNestedInput
    UserActivity?: UserActivityUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Password?: string | null
    Role?: string | null
    LastLogin?: Date | string | null
  }

  export type StaffUpdateManyMutationInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffUncheckedUpdateManyInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserActivityCreateInput = {
    ActivityType: string
    Timestamp?: Date | string
    Staff: StaffCreateNestedOneWithoutUserActivityInput
  }

  export type UserActivityUncheckedCreateInput = {
    ActivityID?: number
    StaffID: number
    ActivityType: string
    Timestamp?: Date | string
  }

  export type UserActivityUpdateInput = {
    ActivityType?: StringFieldUpdateOperationsInput | string
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Staff?: StaffUpdateOneRequiredWithoutUserActivityNestedInput
  }

  export type UserActivityUncheckedUpdateInput = {
    ActivityID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    ActivityType?: StringFieldUpdateOperationsInput | string
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityCreateManyInput = {
    ActivityID?: number
    StaffID: number
    ActivityType: string
    Timestamp?: Date | string
  }

  export type UserActivityUpdateManyMutationInput = {
    ActivityType?: StringFieldUpdateOperationsInput | string
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUncheckedUpdateManyInput = {
    ActivityID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    ActivityType?: StringFieldUpdateOperationsInput | string
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    MeetingID: string
    MeetingDescription?: string | null
    MeetingDate?: Date | string | null
    MeetingTypeName?: string | null
    StaffID: number
    StaffName: string
    IsPresent?: boolean | null
    Remarks?: string | null
    CreatedAt?: Date | string | null
  }

  export type AttendanceUncheckedCreateInput = {
    AttendanceID?: number
    MeetingID: string
    MeetingDescription?: string | null
    MeetingDate?: Date | string | null
    MeetingTypeName?: string | null
    StaffID: number
    StaffName: string
    IsPresent?: boolean | null
    Remarks?: string | null
    CreatedAt?: Date | string | null
  }

  export type AttendanceUpdateInput = {
    MeetingID?: StringFieldUpdateOperationsInput | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MeetingTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateInput = {
    AttendanceID?: IntFieldUpdateOperationsInput | number
    MeetingID?: StringFieldUpdateOperationsInput | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MeetingTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateManyInput = {
    AttendanceID?: number
    MeetingID: string
    MeetingDescription?: string | null
    MeetingDate?: Date | string | null
    MeetingTypeName?: string | null
    StaffID: number
    StaffName: string
    IsPresent?: boolean | null
    Remarks?: string | null
    CreatedAt?: Date | string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    MeetingID?: StringFieldUpdateOperationsInput | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MeetingTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    AttendanceID?: IntFieldUpdateOperationsInput | number
    MeetingID?: StringFieldUpdateOperationsInput | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MeetingTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departmentsCreateInput = {
    department_name: string
    remarks?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type departmentsUncheckedCreateInput = {
    department_id?: number
    department_name: string
    remarks?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type departmentsUpdateInput = {
    department_name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departmentsUncheckedUpdateInput = {
    department_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departmentsCreateManyInput = {
    department_id?: number
    department_name: string
    remarks?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type departmentsUpdateManyMutationInput = {
    department_name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departmentsUncheckedUpdateManyInput = {
    department_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type venuesCreateInput = {
    venue_id: string
    venue_name: string
    capacity: number
    location?: string | null
    remarks?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type venuesUncheckedCreateInput = {
    venue_id: string
    venue_name: string
    capacity: number
    location?: string | null
    remarks?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type venuesUpdateInput = {
    venue_id?: StringFieldUpdateOperationsInput | string
    venue_name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type venuesUncheckedUpdateInput = {
    venue_id?: StringFieldUpdateOperationsInput | string
    venue_name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type venuesCreateManyInput = {
    venue_id: string
    venue_name: string
    capacity: number
    location?: string | null
    remarks?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type venuesUpdateManyMutationInput = {
    venue_id?: StringFieldUpdateOperationsInput | string
    venue_name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type venuesUncheckedUpdateManyInput = {
    venue_id?: StringFieldUpdateOperationsInput | string
    venue_name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MeetingsScalarRelationFilter = {
    is?: MeetingsWhereInput
    isNot?: MeetingsWhereInput
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MeetingMemberCountOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type MeetingMemberAvgOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
  }

  export type MeetingMemberMaxOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type MeetingMemberMinOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type MeetingMemberSumOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MeetingsListRelationFilter = {
    every?: MeetingsWhereInput
    some?: MeetingsWhereInput
    none?: MeetingsWhereInput
  }

  export type MeetingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingTypeCountOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type MeetingTypeAvgOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
  }

  export type MeetingTypeMaxOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type MeetingTypeMinOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type MeetingTypeSumOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MeetingMemberListRelationFilter = {
    every?: MeetingMemberWhereInput
    some?: MeetingMemberWhereInput
    none?: MeetingMemberWhereInput
  }

  export type MeetingTypeScalarRelationFilter = {
    is?: MeetingTypeWhereInput
    isNot?: MeetingTypeWhereInput
  }

  export type MeetingMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingsCountOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrder
    DocumentPath?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrder
    CancellationReason?: SortOrder
  }

  export type MeetingsAvgOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingTypeID?: SortOrder
  }

  export type MeetingsMaxOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrder
    DocumentPath?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrder
    CancellationReason?: SortOrder
  }

  export type MeetingsMinOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    MeetingDescription?: SortOrder
    DocumentPath?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrder
    CancellationReason?: SortOrder
  }

  export type MeetingsSumOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingTypeID?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserActivityListRelationFilter = {
    every?: UserActivityWhereInput
    some?: UserActivityWhereInput
    none?: UserActivityWhereInput
  }

  export type UserActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffCountOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrder
    EmailAddress?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    LastLogin?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    StaffID?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrder
    EmailAddress?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    LastLogin?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrder
    EmailAddress?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    LastLogin?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    StaffID?: SortOrder
  }

  export type UserActivityCountOrderByAggregateInput = {
    ActivityID?: SortOrder
    StaffID?: SortOrder
    ActivityType?: SortOrder
    Timestamp?: SortOrder
  }

  export type UserActivityAvgOrderByAggregateInput = {
    ActivityID?: SortOrder
    StaffID?: SortOrder
  }

  export type UserActivityMaxOrderByAggregateInput = {
    ActivityID?: SortOrder
    StaffID?: SortOrder
    ActivityType?: SortOrder
    Timestamp?: SortOrder
  }

  export type UserActivityMinOrderByAggregateInput = {
    ActivityID?: SortOrder
    StaffID?: SortOrder
    ActivityType?: SortOrder
    Timestamp?: SortOrder
  }

  export type UserActivitySumOrderByAggregateInput = {
    ActivityID?: SortOrder
    StaffID?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AttendanceCountOrderByAggregateInput = {
    AttendanceID?: SortOrder
    MeetingID?: SortOrder
    MeetingDescription?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeName?: SortOrder
    StaffID?: SortOrder
    StaffName?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    CreatedAt?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    AttendanceID?: SortOrder
    StaffID?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    AttendanceID?: SortOrder
    MeetingID?: SortOrder
    MeetingDescription?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeName?: SortOrder
    StaffID?: SortOrder
    StaffName?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    CreatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    AttendanceID?: SortOrder
    MeetingID?: SortOrder
    MeetingDescription?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeName?: SortOrder
    StaffID?: SortOrder
    StaffName?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    CreatedAt?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    AttendanceID?: SortOrder
    StaffID?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type departmentsCountOrderByAggregateInput = {
    department_id?: SortOrder
    department_name?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type departmentsAvgOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type departmentsMaxOrderByAggregateInput = {
    department_id?: SortOrder
    department_name?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type departmentsMinOrderByAggregateInput = {
    department_id?: SortOrder
    department_name?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type departmentsSumOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type venuesCountOrderByAggregateInput = {
    venue_id?: SortOrder
    venue_name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type venuesAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type venuesMaxOrderByAggregateInput = {
    venue_id?: SortOrder
    venue_name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type venuesMinOrderByAggregateInput = {
    venue_id?: SortOrder
    venue_name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    remarks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type venuesSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type MeetingsCreateNestedOneWithoutMeetingMemberInput = {
    create?: XOR<MeetingsCreateWithoutMeetingMemberInput, MeetingsUncheckedCreateWithoutMeetingMemberInput>
    connectOrCreate?: MeetingsCreateOrConnectWithoutMeetingMemberInput
    connect?: MeetingsWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutMeetingMemberInput = {
    create?: XOR<StaffCreateWithoutMeetingMemberInput, StaffUncheckedCreateWithoutMeetingMemberInput>
    connectOrCreate?: StaffCreateOrConnectWithoutMeetingMemberInput
    connect?: StaffWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MeetingsUpdateOneRequiredWithoutMeetingMemberNestedInput = {
    create?: XOR<MeetingsCreateWithoutMeetingMemberInput, MeetingsUncheckedCreateWithoutMeetingMemberInput>
    connectOrCreate?: MeetingsCreateOrConnectWithoutMeetingMemberInput
    upsert?: MeetingsUpsertWithoutMeetingMemberInput
    connect?: MeetingsWhereUniqueInput
    update?: XOR<XOR<MeetingsUpdateToOneWithWhereWithoutMeetingMemberInput, MeetingsUpdateWithoutMeetingMemberInput>, MeetingsUncheckedUpdateWithoutMeetingMemberInput>
  }

  export type StaffUpdateOneRequiredWithoutMeetingMemberNestedInput = {
    create?: XOR<StaffCreateWithoutMeetingMemberInput, StaffUncheckedCreateWithoutMeetingMemberInput>
    connectOrCreate?: StaffCreateOrConnectWithoutMeetingMemberInput
    upsert?: StaffUpsertWithoutMeetingMemberInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutMeetingMemberInput, StaffUpdateWithoutMeetingMemberInput>, StaffUncheckedUpdateWithoutMeetingMemberInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MeetingsCreateNestedManyWithoutMeetingTypeInput = {
    create?: XOR<MeetingsCreateWithoutMeetingTypeInput, MeetingsUncheckedCreateWithoutMeetingTypeInput> | MeetingsCreateWithoutMeetingTypeInput[] | MeetingsUncheckedCreateWithoutMeetingTypeInput[]
    connectOrCreate?: MeetingsCreateOrConnectWithoutMeetingTypeInput | MeetingsCreateOrConnectWithoutMeetingTypeInput[]
    createMany?: MeetingsCreateManyMeetingTypeInputEnvelope
    connect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
  }

  export type MeetingsUncheckedCreateNestedManyWithoutMeetingTypeInput = {
    create?: XOR<MeetingsCreateWithoutMeetingTypeInput, MeetingsUncheckedCreateWithoutMeetingTypeInput> | MeetingsCreateWithoutMeetingTypeInput[] | MeetingsUncheckedCreateWithoutMeetingTypeInput[]
    connectOrCreate?: MeetingsCreateOrConnectWithoutMeetingTypeInput | MeetingsCreateOrConnectWithoutMeetingTypeInput[]
    createMany?: MeetingsCreateManyMeetingTypeInputEnvelope
    connect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MeetingsUpdateManyWithoutMeetingTypeNestedInput = {
    create?: XOR<MeetingsCreateWithoutMeetingTypeInput, MeetingsUncheckedCreateWithoutMeetingTypeInput> | MeetingsCreateWithoutMeetingTypeInput[] | MeetingsUncheckedCreateWithoutMeetingTypeInput[]
    connectOrCreate?: MeetingsCreateOrConnectWithoutMeetingTypeInput | MeetingsCreateOrConnectWithoutMeetingTypeInput[]
    upsert?: MeetingsUpsertWithWhereUniqueWithoutMeetingTypeInput | MeetingsUpsertWithWhereUniqueWithoutMeetingTypeInput[]
    createMany?: MeetingsCreateManyMeetingTypeInputEnvelope
    set?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    disconnect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    delete?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    connect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    update?: MeetingsUpdateWithWhereUniqueWithoutMeetingTypeInput | MeetingsUpdateWithWhereUniqueWithoutMeetingTypeInput[]
    updateMany?: MeetingsUpdateManyWithWhereWithoutMeetingTypeInput | MeetingsUpdateManyWithWhereWithoutMeetingTypeInput[]
    deleteMany?: MeetingsScalarWhereInput | MeetingsScalarWhereInput[]
  }

  export type MeetingsUncheckedUpdateManyWithoutMeetingTypeNestedInput = {
    create?: XOR<MeetingsCreateWithoutMeetingTypeInput, MeetingsUncheckedCreateWithoutMeetingTypeInput> | MeetingsCreateWithoutMeetingTypeInput[] | MeetingsUncheckedCreateWithoutMeetingTypeInput[]
    connectOrCreate?: MeetingsCreateOrConnectWithoutMeetingTypeInput | MeetingsCreateOrConnectWithoutMeetingTypeInput[]
    upsert?: MeetingsUpsertWithWhereUniqueWithoutMeetingTypeInput | MeetingsUpsertWithWhereUniqueWithoutMeetingTypeInput[]
    createMany?: MeetingsCreateManyMeetingTypeInputEnvelope
    set?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    disconnect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    delete?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    connect?: MeetingsWhereUniqueInput | MeetingsWhereUniqueInput[]
    update?: MeetingsUpdateWithWhereUniqueWithoutMeetingTypeInput | MeetingsUpdateWithWhereUniqueWithoutMeetingTypeInput[]
    updateMany?: MeetingsUpdateManyWithWhereWithoutMeetingTypeInput | MeetingsUpdateManyWithWhereWithoutMeetingTypeInput[]
    deleteMany?: MeetingsScalarWhereInput | MeetingsScalarWhereInput[]
  }

  export type MeetingMemberCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<MeetingMemberCreateWithoutMeetingsInput, MeetingMemberUncheckedCreateWithoutMeetingsInput> | MeetingMemberCreateWithoutMeetingsInput[] | MeetingMemberUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: MeetingMemberCreateOrConnectWithoutMeetingsInput | MeetingMemberCreateOrConnectWithoutMeetingsInput[]
    createMany?: MeetingMemberCreateManyMeetingsInputEnvelope
    connect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
  }

  export type MeetingTypeCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<MeetingTypeCreateWithoutMeetingsInput, MeetingTypeUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: MeetingTypeCreateOrConnectWithoutMeetingsInput
    connect?: MeetingTypeWhereUniqueInput
  }

  export type MeetingMemberUncheckedCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<MeetingMemberCreateWithoutMeetingsInput, MeetingMemberUncheckedCreateWithoutMeetingsInput> | MeetingMemberCreateWithoutMeetingsInput[] | MeetingMemberUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: MeetingMemberCreateOrConnectWithoutMeetingsInput | MeetingMemberCreateOrConnectWithoutMeetingsInput[]
    createMany?: MeetingMemberCreateManyMeetingsInputEnvelope
    connect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MeetingMemberUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<MeetingMemberCreateWithoutMeetingsInput, MeetingMemberUncheckedCreateWithoutMeetingsInput> | MeetingMemberCreateWithoutMeetingsInput[] | MeetingMemberUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: MeetingMemberCreateOrConnectWithoutMeetingsInput | MeetingMemberCreateOrConnectWithoutMeetingsInput[]
    upsert?: MeetingMemberUpsertWithWhereUniqueWithoutMeetingsInput | MeetingMemberUpsertWithWhereUniqueWithoutMeetingsInput[]
    createMany?: MeetingMemberCreateManyMeetingsInputEnvelope
    set?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    disconnect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    delete?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    connect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    update?: MeetingMemberUpdateWithWhereUniqueWithoutMeetingsInput | MeetingMemberUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: MeetingMemberUpdateManyWithWhereWithoutMeetingsInput | MeetingMemberUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: MeetingMemberScalarWhereInput | MeetingMemberScalarWhereInput[]
  }

  export type MeetingTypeUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<MeetingTypeCreateWithoutMeetingsInput, MeetingTypeUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: MeetingTypeCreateOrConnectWithoutMeetingsInput
    upsert?: MeetingTypeUpsertWithoutMeetingsInput
    connect?: MeetingTypeWhereUniqueInput
    update?: XOR<XOR<MeetingTypeUpdateToOneWithWhereWithoutMeetingsInput, MeetingTypeUpdateWithoutMeetingsInput>, MeetingTypeUncheckedUpdateWithoutMeetingsInput>
  }

  export type MeetingMemberUncheckedUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<MeetingMemberCreateWithoutMeetingsInput, MeetingMemberUncheckedCreateWithoutMeetingsInput> | MeetingMemberCreateWithoutMeetingsInput[] | MeetingMemberUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: MeetingMemberCreateOrConnectWithoutMeetingsInput | MeetingMemberCreateOrConnectWithoutMeetingsInput[]
    upsert?: MeetingMemberUpsertWithWhereUniqueWithoutMeetingsInput | MeetingMemberUpsertWithWhereUniqueWithoutMeetingsInput[]
    createMany?: MeetingMemberCreateManyMeetingsInputEnvelope
    set?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    disconnect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    delete?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    connect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    update?: MeetingMemberUpdateWithWhereUniqueWithoutMeetingsInput | MeetingMemberUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: MeetingMemberUpdateManyWithWhereWithoutMeetingsInput | MeetingMemberUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: MeetingMemberScalarWhereInput | MeetingMemberScalarWhereInput[]
  }

  export type MeetingMemberCreateNestedManyWithoutStaffInput = {
    create?: XOR<MeetingMemberCreateWithoutStaffInput, MeetingMemberUncheckedCreateWithoutStaffInput> | MeetingMemberCreateWithoutStaffInput[] | MeetingMemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: MeetingMemberCreateOrConnectWithoutStaffInput | MeetingMemberCreateOrConnectWithoutStaffInput[]
    createMany?: MeetingMemberCreateManyStaffInputEnvelope
    connect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
  }

  export type UserActivityCreateNestedManyWithoutStaffInput = {
    create?: XOR<UserActivityCreateWithoutStaffInput, UserActivityUncheckedCreateWithoutStaffInput> | UserActivityCreateWithoutStaffInput[] | UserActivityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutStaffInput | UserActivityCreateOrConnectWithoutStaffInput[]
    createMany?: UserActivityCreateManyStaffInputEnvelope
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
  }

  export type MeetingMemberUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<MeetingMemberCreateWithoutStaffInput, MeetingMemberUncheckedCreateWithoutStaffInput> | MeetingMemberCreateWithoutStaffInput[] | MeetingMemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: MeetingMemberCreateOrConnectWithoutStaffInput | MeetingMemberCreateOrConnectWithoutStaffInput[]
    createMany?: MeetingMemberCreateManyStaffInputEnvelope
    connect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
  }

  export type UserActivityUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<UserActivityCreateWithoutStaffInput, UserActivityUncheckedCreateWithoutStaffInput> | UserActivityCreateWithoutStaffInput[] | UserActivityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutStaffInput | UserActivityCreateOrConnectWithoutStaffInput[]
    createMany?: UserActivityCreateManyStaffInputEnvelope
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
  }

  export type MeetingMemberUpdateManyWithoutStaffNestedInput = {
    create?: XOR<MeetingMemberCreateWithoutStaffInput, MeetingMemberUncheckedCreateWithoutStaffInput> | MeetingMemberCreateWithoutStaffInput[] | MeetingMemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: MeetingMemberCreateOrConnectWithoutStaffInput | MeetingMemberCreateOrConnectWithoutStaffInput[]
    upsert?: MeetingMemberUpsertWithWhereUniqueWithoutStaffInput | MeetingMemberUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: MeetingMemberCreateManyStaffInputEnvelope
    set?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    disconnect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    delete?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    connect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    update?: MeetingMemberUpdateWithWhereUniqueWithoutStaffInput | MeetingMemberUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: MeetingMemberUpdateManyWithWhereWithoutStaffInput | MeetingMemberUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: MeetingMemberScalarWhereInput | MeetingMemberScalarWhereInput[]
  }

  export type UserActivityUpdateManyWithoutStaffNestedInput = {
    create?: XOR<UserActivityCreateWithoutStaffInput, UserActivityUncheckedCreateWithoutStaffInput> | UserActivityCreateWithoutStaffInput[] | UserActivityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutStaffInput | UserActivityCreateOrConnectWithoutStaffInput[]
    upsert?: UserActivityUpsertWithWhereUniqueWithoutStaffInput | UserActivityUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: UserActivityCreateManyStaffInputEnvelope
    set?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    disconnect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    delete?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    update?: UserActivityUpdateWithWhereUniqueWithoutStaffInput | UserActivityUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: UserActivityUpdateManyWithWhereWithoutStaffInput | UserActivityUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
  }

  export type MeetingMemberUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<MeetingMemberCreateWithoutStaffInput, MeetingMemberUncheckedCreateWithoutStaffInput> | MeetingMemberCreateWithoutStaffInput[] | MeetingMemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: MeetingMemberCreateOrConnectWithoutStaffInput | MeetingMemberCreateOrConnectWithoutStaffInput[]
    upsert?: MeetingMemberUpsertWithWhereUniqueWithoutStaffInput | MeetingMemberUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: MeetingMemberCreateManyStaffInputEnvelope
    set?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    disconnect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    delete?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    connect?: MeetingMemberWhereUniqueInput | MeetingMemberWhereUniqueInput[]
    update?: MeetingMemberUpdateWithWhereUniqueWithoutStaffInput | MeetingMemberUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: MeetingMemberUpdateManyWithWhereWithoutStaffInput | MeetingMemberUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: MeetingMemberScalarWhereInput | MeetingMemberScalarWhereInput[]
  }

  export type UserActivityUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<UserActivityCreateWithoutStaffInput, UserActivityUncheckedCreateWithoutStaffInput> | UserActivityCreateWithoutStaffInput[] | UserActivityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutStaffInput | UserActivityCreateOrConnectWithoutStaffInput[]
    upsert?: UserActivityUpsertWithWhereUniqueWithoutStaffInput | UserActivityUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: UserActivityCreateManyStaffInputEnvelope
    set?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    disconnect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    delete?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    update?: UserActivityUpdateWithWhereUniqueWithoutStaffInput | UserActivityUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: UserActivityUpdateManyWithWhereWithoutStaffInput | UserActivityUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
  }

  export type StaffCreateNestedOneWithoutUserActivityInput = {
    create?: XOR<StaffCreateWithoutUserActivityInput, StaffUncheckedCreateWithoutUserActivityInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserActivityInput
    connect?: StaffWhereUniqueInput
  }

  export type StaffUpdateOneRequiredWithoutUserActivityNestedInput = {
    create?: XOR<StaffCreateWithoutUserActivityInput, StaffUncheckedCreateWithoutUserActivityInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserActivityInput
    upsert?: StaffUpsertWithoutUserActivityInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserActivityInput, StaffUpdateWithoutUserActivityInput>, StaffUncheckedUpdateWithoutUserActivityInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MeetingsCreateWithoutMeetingMemberInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string
    Modified?: Date | string
    IsCancelled?: boolean
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    MeetingType: MeetingTypeCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingsUncheckedCreateWithoutMeetingMemberInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string
    Modified?: Date | string
    IsCancelled?: boolean
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
  }

  export type MeetingsCreateOrConnectWithoutMeetingMemberInput = {
    where: MeetingsWhereUniqueInput
    create: XOR<MeetingsCreateWithoutMeetingMemberInput, MeetingsUncheckedCreateWithoutMeetingMemberInput>
  }

  export type StaffCreateWithoutMeetingMemberInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Password?: string | null
    Role?: string | null
    LastLogin?: Date | string | null
    UserActivity?: UserActivityCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutMeetingMemberInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Password?: string | null
    Role?: string | null
    LastLogin?: Date | string | null
    UserActivity?: UserActivityUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutMeetingMemberInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutMeetingMemberInput, StaffUncheckedCreateWithoutMeetingMemberInput>
  }

  export type MeetingsUpsertWithoutMeetingMemberInput = {
    update: XOR<MeetingsUpdateWithoutMeetingMemberInput, MeetingsUncheckedUpdateWithoutMeetingMemberInput>
    create: XOR<MeetingsCreateWithoutMeetingMemberInput, MeetingsUncheckedCreateWithoutMeetingMemberInput>
    where?: MeetingsWhereInput
  }

  export type MeetingsUpdateToOneWithWhereWithoutMeetingMemberInput = {
    where?: MeetingsWhereInput
    data: XOR<MeetingsUpdateWithoutMeetingMemberInput, MeetingsUncheckedUpdateWithoutMeetingMemberInput>
  }

  export type MeetingsUpdateWithoutMeetingMemberInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCancelled?: BoolFieldUpdateOperationsInput | boolean
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingType?: MeetingTypeUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingsUncheckedUpdateWithoutMeetingMemberInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCancelled?: BoolFieldUpdateOperationsInput | boolean
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffUpsertWithoutMeetingMemberInput = {
    update: XOR<StaffUpdateWithoutMeetingMemberInput, StaffUncheckedUpdateWithoutMeetingMemberInput>
    create: XOR<StaffCreateWithoutMeetingMemberInput, StaffUncheckedCreateWithoutMeetingMemberInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutMeetingMemberInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutMeetingMemberInput, StaffUncheckedUpdateWithoutMeetingMemberInput>
  }

  export type StaffUpdateWithoutMeetingMemberInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserActivity?: UserActivityUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutMeetingMemberInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserActivity?: UserActivityUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type MeetingsCreateWithoutMeetingTypeInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string
    Modified?: Date | string
    IsCancelled?: boolean
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    MeetingMember?: MeetingMemberCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingsUncheckedCreateWithoutMeetingTypeInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string
    Modified?: Date | string
    IsCancelled?: boolean
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    MeetingMember?: MeetingMemberUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingsCreateOrConnectWithoutMeetingTypeInput = {
    where: MeetingsWhereUniqueInput
    create: XOR<MeetingsCreateWithoutMeetingTypeInput, MeetingsUncheckedCreateWithoutMeetingTypeInput>
  }

  export type MeetingsCreateManyMeetingTypeInputEnvelope = {
    data: MeetingsCreateManyMeetingTypeInput | MeetingsCreateManyMeetingTypeInput[]
    skipDuplicates?: boolean
  }

  export type MeetingsUpsertWithWhereUniqueWithoutMeetingTypeInput = {
    where: MeetingsWhereUniqueInput
    update: XOR<MeetingsUpdateWithoutMeetingTypeInput, MeetingsUncheckedUpdateWithoutMeetingTypeInput>
    create: XOR<MeetingsCreateWithoutMeetingTypeInput, MeetingsUncheckedCreateWithoutMeetingTypeInput>
  }

  export type MeetingsUpdateWithWhereUniqueWithoutMeetingTypeInput = {
    where: MeetingsWhereUniqueInput
    data: XOR<MeetingsUpdateWithoutMeetingTypeInput, MeetingsUncheckedUpdateWithoutMeetingTypeInput>
  }

  export type MeetingsUpdateManyWithWhereWithoutMeetingTypeInput = {
    where: MeetingsScalarWhereInput
    data: XOR<MeetingsUpdateManyMutationInput, MeetingsUncheckedUpdateManyWithoutMeetingTypeInput>
  }

  export type MeetingsScalarWhereInput = {
    AND?: MeetingsScalarWhereInput | MeetingsScalarWhereInput[]
    OR?: MeetingsScalarWhereInput[]
    NOT?: MeetingsScalarWhereInput | MeetingsScalarWhereInput[]
    MeetingID?: IntFilter<"Meetings"> | number
    MeetingDate?: DateTimeFilter<"Meetings"> | Date | string
    MeetingTypeID?: IntFilter<"Meetings"> | number
    MeetingDescription?: StringNullableFilter<"Meetings"> | string | null
    DocumentPath?: StringNullableFilter<"Meetings"> | string | null
    Created?: DateTimeFilter<"Meetings"> | Date | string
    Modified?: DateTimeFilter<"Meetings"> | Date | string
    IsCancelled?: BoolFilter<"Meetings"> | boolean
    CancellationDateTime?: DateTimeNullableFilter<"Meetings"> | Date | string | null
    CancellationReason?: StringNullableFilter<"Meetings"> | string | null
  }

  export type MeetingMemberCreateWithoutMeetingsInput = {
    IsPresent?: boolean
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Staff: StaffCreateNestedOneWithoutMeetingMemberInput
  }

  export type MeetingMemberUncheckedCreateWithoutMeetingsInput = {
    MeetingMemberID?: number
    StaffID: number
    IsPresent?: boolean
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type MeetingMemberCreateOrConnectWithoutMeetingsInput = {
    where: MeetingMemberWhereUniqueInput
    create: XOR<MeetingMemberCreateWithoutMeetingsInput, MeetingMemberUncheckedCreateWithoutMeetingsInput>
  }

  export type MeetingMemberCreateManyMeetingsInputEnvelope = {
    data: MeetingMemberCreateManyMeetingsInput | MeetingMemberCreateManyMeetingsInput[]
    skipDuplicates?: boolean
  }

  export type MeetingTypeCreateWithoutMeetingsInput = {
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type MeetingTypeUncheckedCreateWithoutMeetingsInput = {
    MeetingTypeID?: number
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type MeetingTypeCreateOrConnectWithoutMeetingsInput = {
    where: MeetingTypeWhereUniqueInput
    create: XOR<MeetingTypeCreateWithoutMeetingsInput, MeetingTypeUncheckedCreateWithoutMeetingsInput>
  }

  export type MeetingMemberUpsertWithWhereUniqueWithoutMeetingsInput = {
    where: MeetingMemberWhereUniqueInput
    update: XOR<MeetingMemberUpdateWithoutMeetingsInput, MeetingMemberUncheckedUpdateWithoutMeetingsInput>
    create: XOR<MeetingMemberCreateWithoutMeetingsInput, MeetingMemberUncheckedCreateWithoutMeetingsInput>
  }

  export type MeetingMemberUpdateWithWhereUniqueWithoutMeetingsInput = {
    where: MeetingMemberWhereUniqueInput
    data: XOR<MeetingMemberUpdateWithoutMeetingsInput, MeetingMemberUncheckedUpdateWithoutMeetingsInput>
  }

  export type MeetingMemberUpdateManyWithWhereWithoutMeetingsInput = {
    where: MeetingMemberScalarWhereInput
    data: XOR<MeetingMemberUpdateManyMutationInput, MeetingMemberUncheckedUpdateManyWithoutMeetingsInput>
  }

  export type MeetingMemberScalarWhereInput = {
    AND?: MeetingMemberScalarWhereInput | MeetingMemberScalarWhereInput[]
    OR?: MeetingMemberScalarWhereInput[]
    NOT?: MeetingMemberScalarWhereInput | MeetingMemberScalarWhereInput[]
    MeetingMemberID?: IntFilter<"MeetingMember"> | number
    MeetingID?: IntFilter<"MeetingMember"> | number
    StaffID?: IntFilter<"MeetingMember"> | number
    IsPresent?: BoolFilter<"MeetingMember"> | boolean
    Remarks?: StringNullableFilter<"MeetingMember"> | string | null
    Created?: DateTimeFilter<"MeetingMember"> | Date | string
    Modified?: DateTimeFilter<"MeetingMember"> | Date | string
  }

  export type MeetingTypeUpsertWithoutMeetingsInput = {
    update: XOR<MeetingTypeUpdateWithoutMeetingsInput, MeetingTypeUncheckedUpdateWithoutMeetingsInput>
    create: XOR<MeetingTypeCreateWithoutMeetingsInput, MeetingTypeUncheckedCreateWithoutMeetingsInput>
    where?: MeetingTypeWhereInput
  }

  export type MeetingTypeUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: MeetingTypeWhereInput
    data: XOR<MeetingTypeUpdateWithoutMeetingsInput, MeetingTypeUncheckedUpdateWithoutMeetingsInput>
  }

  export type MeetingTypeUpdateWithoutMeetingsInput = {
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingTypeUncheckedUpdateWithoutMeetingsInput = {
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingMemberCreateWithoutStaffInput = {
    IsPresent?: boolean
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Meetings: MeetingsCreateNestedOneWithoutMeetingMemberInput
  }

  export type MeetingMemberUncheckedCreateWithoutStaffInput = {
    MeetingMemberID?: number
    MeetingID: number
    IsPresent?: boolean
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type MeetingMemberCreateOrConnectWithoutStaffInput = {
    where: MeetingMemberWhereUniqueInput
    create: XOR<MeetingMemberCreateWithoutStaffInput, MeetingMemberUncheckedCreateWithoutStaffInput>
  }

  export type MeetingMemberCreateManyStaffInputEnvelope = {
    data: MeetingMemberCreateManyStaffInput | MeetingMemberCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type UserActivityCreateWithoutStaffInput = {
    ActivityType: string
    Timestamp?: Date | string
  }

  export type UserActivityUncheckedCreateWithoutStaffInput = {
    ActivityID?: number
    ActivityType: string
    Timestamp?: Date | string
  }

  export type UserActivityCreateOrConnectWithoutStaffInput = {
    where: UserActivityWhereUniqueInput
    create: XOR<UserActivityCreateWithoutStaffInput, UserActivityUncheckedCreateWithoutStaffInput>
  }

  export type UserActivityCreateManyStaffInputEnvelope = {
    data: UserActivityCreateManyStaffInput | UserActivityCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type MeetingMemberUpsertWithWhereUniqueWithoutStaffInput = {
    where: MeetingMemberWhereUniqueInput
    update: XOR<MeetingMemberUpdateWithoutStaffInput, MeetingMemberUncheckedUpdateWithoutStaffInput>
    create: XOR<MeetingMemberCreateWithoutStaffInput, MeetingMemberUncheckedCreateWithoutStaffInput>
  }

  export type MeetingMemberUpdateWithWhereUniqueWithoutStaffInput = {
    where: MeetingMemberWhereUniqueInput
    data: XOR<MeetingMemberUpdateWithoutStaffInput, MeetingMemberUncheckedUpdateWithoutStaffInput>
  }

  export type MeetingMemberUpdateManyWithWhereWithoutStaffInput = {
    where: MeetingMemberScalarWhereInput
    data: XOR<MeetingMemberUpdateManyMutationInput, MeetingMemberUncheckedUpdateManyWithoutStaffInput>
  }

  export type UserActivityUpsertWithWhereUniqueWithoutStaffInput = {
    where: UserActivityWhereUniqueInput
    update: XOR<UserActivityUpdateWithoutStaffInput, UserActivityUncheckedUpdateWithoutStaffInput>
    create: XOR<UserActivityCreateWithoutStaffInput, UserActivityUncheckedCreateWithoutStaffInput>
  }

  export type UserActivityUpdateWithWhereUniqueWithoutStaffInput = {
    where: UserActivityWhereUniqueInput
    data: XOR<UserActivityUpdateWithoutStaffInput, UserActivityUncheckedUpdateWithoutStaffInput>
  }

  export type UserActivityUpdateManyWithWhereWithoutStaffInput = {
    where: UserActivityScalarWhereInput
    data: XOR<UserActivityUpdateManyMutationInput, UserActivityUncheckedUpdateManyWithoutStaffInput>
  }

  export type UserActivityScalarWhereInput = {
    AND?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
    OR?: UserActivityScalarWhereInput[]
    NOT?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
    ActivityID?: IntFilter<"UserActivity"> | number
    StaffID?: IntFilter<"UserActivity"> | number
    ActivityType?: StringFilter<"UserActivity"> | string
    Timestamp?: DateTimeFilter<"UserActivity"> | Date | string
  }

  export type StaffCreateWithoutUserActivityInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Password?: string | null
    Role?: string | null
    LastLogin?: Date | string | null
    MeetingMember?: MeetingMemberCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutUserActivityInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
    Password?: string | null
    Role?: string | null
    LastLogin?: Date | string | null
    MeetingMember?: MeetingMemberUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutUserActivityInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutUserActivityInput, StaffUncheckedCreateWithoutUserActivityInput>
  }

  export type StaffUpsertWithoutUserActivityInput = {
    update: XOR<StaffUpdateWithoutUserActivityInput, StaffUncheckedUpdateWithoutUserActivityInput>
    create: XOR<StaffCreateWithoutUserActivityInput, StaffUncheckedCreateWithoutUserActivityInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutUserActivityInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutUserActivityInput, StaffUncheckedUpdateWithoutUserActivityInput>
  }

  export type StaffUpdateWithoutUserActivityInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MeetingMember?: MeetingMemberUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutUserActivityInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MeetingMember?: MeetingMemberUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type MeetingsCreateManyMeetingTypeInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string
    Modified?: Date | string
    IsCancelled?: boolean
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
  }

  export type MeetingsUpdateWithoutMeetingTypeInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCancelled?: BoolFieldUpdateOperationsInput | boolean
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingMember?: MeetingMemberUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingsUncheckedUpdateWithoutMeetingTypeInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCancelled?: BoolFieldUpdateOperationsInput | boolean
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingMember?: MeetingMemberUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingsUncheckedUpdateManyWithoutMeetingTypeInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCancelled?: BoolFieldUpdateOperationsInput | boolean
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeetingMemberCreateManyMeetingsInput = {
    MeetingMemberID?: number
    StaffID: number
    IsPresent?: boolean
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type MeetingMemberUpdateWithoutMeetingsInput = {
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Staff?: StaffUpdateOneRequiredWithoutMeetingMemberNestedInput
  }

  export type MeetingMemberUncheckedUpdateWithoutMeetingsInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingMemberUncheckedUpdateManyWithoutMeetingsInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingMemberCreateManyStaffInput = {
    MeetingMemberID?: number
    MeetingID: number
    IsPresent?: boolean
    Remarks?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type UserActivityCreateManyStaffInput = {
    ActivityID?: number
    ActivityType: string
    Timestamp?: Date | string
  }

  export type MeetingMemberUpdateWithoutStaffInput = {
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Meetings?: MeetingsUpdateOneRequiredWithoutMeetingMemberNestedInput
  }

  export type MeetingMemberUncheckedUpdateWithoutStaffInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingMemberUncheckedUpdateManyWithoutStaffInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUpdateWithoutStaffInput = {
    ActivityType?: StringFieldUpdateOperationsInput | string
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUncheckedUpdateWithoutStaffInput = {
    ActivityID?: IntFieldUpdateOperationsInput | number
    ActivityType?: StringFieldUpdateOperationsInput | string
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUncheckedUpdateManyWithoutStaffInput = {
    ActivityID?: IntFieldUpdateOperationsInput | number
    ActivityType?: StringFieldUpdateOperationsInput | string
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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