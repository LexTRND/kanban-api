/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ColumnInputType: { // input type
    color?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
  SubtaskInputType: { // input type
    body?: string | null; // String
    id?: string | null; // String
    status?: NexusGenEnums['Status'] | null; // Status
  }
}

export interface NexusGenEnums {
  Status: "complete" | "incomplete"
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
    color?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    tasks?: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
  }
  Mutation: {};
  Query: {};
  Subtask: { // root type
    body?: string | null; // String
    id?: string | null; // String
    status?: NexusGenEnums['Status'] | null; // Status
    taskId?: string | null; // String
  }
  Task: { // root type
    body?: string | null; // String
    columnId?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    subtasks?: Array<NexusGenRootTypes['Subtask'] | null> | null; // [Subtask]
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

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

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
    color: string | null; // String
    id: string | null; // String
    name: string | null; // String
    tasks: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
  }
  Mutation: { // field return type
    createBoard: NexusGenRootTypes['Board'] | null; // Board
    createColumn: NexusGenRootTypes['Board'] | null; // Board
    createSubtask: NexusGenRootTypes['Subtask']; // Subtask!
    createTask: NexusGenRootTypes['Board']; // Board!
    deleteBoard: NexusGenRootTypes['Board'] | null; // Board
    deleteColumn: NexusGenRootTypes['Board'] | null; // Board
    deleteSubtask: NexusGenRootTypes['Board'] | null; // Board
    deleteTask: NexusGenRootTypes['Board'] | null; // Board
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signUp: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateBoard: NexusGenRootTypes['Board'] | null; // Board
    updateColumn: NexusGenRootTypes['Column'] | null; // Column
    updateSubtask: NexusGenRootTypes['Board'] | null; // Board
    updateTask: NexusGenRootTypes['Board'] | null; // Board
    updateUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    board: NexusGenRootTypes['Board'] | null; // Board
    boards: NexusGenRootTypes['Board'][] | null; // [Board!]
    column: NexusGenRootTypes['Column'] | null; // Column
    columns: NexusGenRootTypes['Column'][] | null; // [Column!]
    subtask: NexusGenRootTypes['Subtask'] | null; // Subtask
    subtasks: NexusGenRootTypes['Subtask'][] | null; // [Subtask!]
    task: NexusGenRootTypes['Task'] | null; // Task
    tasks: NexusGenRootTypes['Task'][] | null; // [Task!]
    user: NexusGenRootTypes['User'] | null; // User
    userBoards: NexusGenRootTypes['Board'][] | null; // [Board!]
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Subtask: { // field return type
    body: string | null; // String
    id: string | null; // String
    status: NexusGenEnums['Status'] | null; // Status
    taskId: string | null; // String
  }
  Task: { // field return type
    body: string | null; // String
    columnId: string | null; // String
    id: string | null; // String
    name: string | null; // String
    subtasks: Array<NexusGenRootTypes['Subtask'] | null> | null; // [Subtask]
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
    color: 'String'
    id: 'String'
    name: 'String'
    tasks: 'Task'
  }
  Mutation: { // field return type name
    createBoard: 'Board'
    createColumn: 'Board'
    createSubtask: 'Subtask'
    createTask: 'Board'
    deleteBoard: 'Board'
    deleteColumn: 'Board'
    deleteSubtask: 'Board'
    deleteTask: 'Board'
    login: 'AuthPayload'
    signUp: 'AuthPayload'
    updateBoard: 'Board'
    updateColumn: 'Column'
    updateSubtask: 'Board'
    updateTask: 'Board'
    updateUser: 'User'
  }
  Query: { // field return type name
    board: 'Board'
    boards: 'Board'
    column: 'Column'
    columns: 'Column'
    subtask: 'Subtask'
    subtasks: 'Subtask'
    task: 'Task'
    tasks: 'Task'
    user: 'User'
    userBoards: 'Board'
    users: 'User'
  }
  Subtask: { // field return type name
    body: 'String'
    id: 'String'
    status: 'Status'
    taskId: 'String'
  }
  Task: { // field return type name
    body: 'String'
    columnId: 'String'
    id: 'String'
    name: 'String'
    subtasks: 'Subtask'
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
      columns?: Array<NexusGenInputs['ColumnInputType'] | null> | null; // [ColumnInputType]
      name?: string | null; // String
    }
    createColumn: { // args
      boardId?: string | null; // String
      color: string; // String!
      name: string; // String!
    }
    createSubtask: { // args
      body?: string | null; // String
      status?: NexusGenEnums['Status'] | null; // Status
      taskId?: string | null; // String
    }
    createTask: { // args
      boardId?: string | null; // String
      body?: string | null; // String
      columnId?: string | null; // String
      name?: string | null; // String
      subtasks?: Array<NexusGenInputs['SubtaskInputType'] | null> | null; // [SubtaskInputType]
    }
    deleteBoard: { // args
      boardId: string; // String!
    }
    deleteColumn: { // args
      boardId?: string | null; // String
      columnId?: string | null; // String
    }
    deleteSubtask: { // args
      boardId?: string | null; // String
      columnId?: string | null; // String
      subtaskId?: string | null; // String
      taskId?: string | null; // String
    }
    deleteTask: { // args
      boardId?: string | null; // String
      columnId?: string | null; // String
      taskId: string; // String!
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
      boardId: string; // String!
      columns?: Array<NexusGenInputs['ColumnInputType'] | null> | null; // [ColumnInputType]
      newName: string; // String!
    }
    updateColumn: { // args
      columnId: string; // String!
      newName: string; // String!
    }
    updateSubtask: { // args
      boardId?: string | null; // String
      columnId?: string | null; // String
      status?: NexusGenEnums['Status'] | null; // Status
      subtaskId?: string | null; // String
      taskId?: string | null; // String
    }
    updateTask: { // args
      boardId?: string | null; // String
      body?: string | null; // String
      columnId?: string | null; // String
      name?: string | null; // String
      subtasks?: Array<NexusGenInputs['SubtaskInputType'] | null> | null; // [SubtaskInputType]
      taskId?: string | null; // String
    }
    updateUser: { // args
      email: string; // String!
      password: string; // String!
    }
  }
  Query: {
    board: { // args
      id?: string | null; // String
    }
    column: { // args
      id?: string | null; // String
    }
    subtask: { // args
      id: string; // String!
    }
    subtasks: { // args
      taskId: string; // String!
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

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

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