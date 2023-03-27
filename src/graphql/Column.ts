import { objectType, extendType, nonNull, stringArg } from "nexus";

export const Column = objectType({
  name: "Column",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("boardId");
    t.list.field("tasks", {
      type: "Task",
    });
  },
});

export const ColumnQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("column", {
      type: "Column",
      args: {
        id: stringArg(),
      },
      resolve(_root, args, { db }) {
        return db.column.findUnique({
          where: {
            id: args.id!,
          },
        });
      },
    });
    t.list.nonNull.field("columns", {
      type: "Column",
      resolve(_root, _args, { db }) {
        return db.column.findMany({});
      },
    });
  },
});

export const ColumnMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createColumn", {
      type: "Board",
      args: {
        boardId: stringArg(),
        name: nonNull(stringArg()),
      },
      resolve(_, args, { db }) {
        return db.board.update({
          where: {
            id: args.boardId,
          },
          data: {
            columns: {
              create: {
                name: args.name,
              },
            },
          },
          include: {
            columns: {
              where: {
                name: args.name,
              },
            },
          },
        });
      },
    });
    t.field("updateColumn", {
      type: "Column",
      args: {
        columnId: nonNull(stringArg()),
        newName: nonNull(stringArg()),
      },
      resolve(_, { columnId, newName }, { db }) {
        return db.column.update({
          where: { id: columnId },
          data: {
            name: newName,
          },
        });
      },
    });
    t.field("deleteColumn", {
      type: "Column",
      args: {
        columnId: stringArg(),
      },
      resolve(_, { columnId }, { db }, __) {
        return db.column.delete({
          where: {
            id: columnId,
          },
        });
      },
    });
  },
});