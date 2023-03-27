/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Board: { // root type
    authorId?: string | null; // String
    columns?: Array<NexusGenRootTypes['Column'] | null> | null; // [Column]
    id?: string | null; // String
    name?: string | null; // String
  }
  Column: { // root type
    boardId?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    tasks?: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
  }
  Mutation: {};
  Query: {};
  Task: { // root type
    body?: string | null; // String
    columnId?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
  User: { // root type
    boards?: Array<NexusGenRootTypes['Board'] | null> | null; // [Board]
    email?: string | null; // String
    firstName?: string | null; // String
    id?: string | null; // String
    lastName?: string | null; // String
    password?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Board: { // field return type
    authorId: string | null; // String
    columns: Array<NexusGenRootTypes['Column'] | null> | null; // [Column]
    id: string | null; // String
    name: string | null; // String
  }
  Column: { // field return type
    boardId: string | null; // String
    id: string | null; // String
    name: string | null; // String
    tasks: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
  }
  Mutation: { // field return type
    createBoard: NexusGenRootTypes['User'] | null; // User
    createColumn: NexusGenRootTypes['Board'] | null; // Board
    createTask: NexusGenRootTypes['Column']; // Column!
    createUser: NexusGenRootTypes['User']; // User!
    deleteBoard: NexusGenRootTypes['Board'] | null; // Board
    deleteColumn: NexusGenRootTypes['Column'] | null; // Column
    deleteTask: NexusGenRootTypes['Task'] | null; // Task
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signUp: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateBoard: NexusGenRootTypes['Board'] | null; // Board
    updateColumn: NexusGenRootTypes['Column'] | null; // Column
    updateTask: NexusGenRootTypes['Task'] | null; // Task
    updateUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    board: NexusGenRootTypes['Board'] | null; // Board
    boards: NexusGenRootTypes['Board'][] | null; // [Board!]
    column: NexusGenRootTypes['Column'] | null; // Column
    columns: NexusGenRootTypes['Column'][] | null; // [Column!]
    task: NexusGenRootTypes['Task'] | null; // Task
    tasks: NexusGenRootTypes['Task'][] | null; // [Task!]
    user: NexusGenRootTypes['User'] | null; // User
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Task: { // field return type
    body: string | null; // String
    columnId: string | null; // String
    id: string | null; // String
    name: string | null; // String
  }
  User: { // field return type
    boards: Array<NexusGenRootTypes['Board'] | null> | null; // [Board]
    email: string | null; // String
    firstName: string | null; // String
    id: string | null; // String
    lastName: string | null; // String
    password: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Board: { // field return type name
    authorId: 'String'
    columns: 'Column'
    id: 'String'
    name: 'String'
  }
  Column: { // field return type name
    boardId: 'String'
    id: 'String'
    name: 'String'
    tasks: 'Task'
  }
  Mutation: { // field return type name
    createBoard: 'User'
    createColumn: 'Board'
    createTask: 'Column'
    createUser: 'User'
    deleteBoard: 'Board'
    deleteColumn: 'Column'
    deleteTask: 'Task'
    login: 'AuthPayload'
    signUp: 'AuthPayload'
    updateBoard: 'Board'
    updateColumn: 'Column'
    updateTask: 'Task'
    updateUser: 'User'
  }
  Query: { // field return type name
    board: 'Board'
    boards: 'Board'
    column: 'Column'
    columns: 'Column'
    task: 'Task'
    tasks: 'Task'
    user: 'User'
    users: 'User'
  }
  Task: { // field return type name
    body: 'String'
    columnId: 'String'
    id: 'String'
    name: 'String'
  }
  User: { // field return type name
    boards: 'Board'
    email: 'String'
    firstName: 'String'
    id: 'String'
    lastName: 'String'
    password: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createBoard: { // args
      name?: string | null; // String
    }
    createColumn: { // args
      boardId?: string | null; // String
      name: string; // String!
    }
    createTask: { // args
      body?: string | null; // String
      columnId?: string | null; // String
      name?: string | null; // String
    }
    createUser: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
    }
    deleteBoard: { // args
      id: string; // String!
    }
    deleteColumn: { // args
      columnId?: string | null; // String
    }
    deleteTask: { // args
      id: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signUp: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
    }
    updateBoard: { // args
      id: string; // String!
      newName: string; // String!
    }
    updateColumn: { // args
      columnId: string; // String!
      newName: string; // String!
    }
    updateTask: { // args
      body?: string | null; // String
      name?: string | null; // String
      taskId?: string | null; // String
    }
    updateUser: { // args
      newEmail: string; // String!
      oldEmail: string; // String!
    }
  }
  Query: {
    board: { // args
      id?: string | null; // String
    }
    column: { // args
      id?: string | null; // String
    }
    task: { // args
      id: string; // String!
    }
    user: { // args
      email?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}