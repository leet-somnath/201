/* eslint-disable space-in-parens */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const createTodoList = require("../todo");

describe("createTodoList", () => {
  let myTodoList;

  beforeAll(() => {
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;

    myTodoList = createTodoList();

    myTodoList.addItem({
      title: "Test todo",
      completed: false,
      dueDate: new Date(today.getTime() - 1 * oneDay).toLocaleDateString("en-CA"),
    });

    myTodoList.addItem({
      title: "Test todo2",
      completed: false,
      dueDate: new Date(today.getTime() + 1 * oneDay).toLocaleDateString("en-CA"),
    });

    myTodoList.addItem({
      title: "Test todo3",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Should add new todo", () => {
    const todoItemsCount = myTodoList.allItems.length;
    myTodoList.addItem({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(myTodoList.allItems.length).toBe(todoItemsCount + 1);
  });

  test("should mark a todo as complete", () => {
    expect(myTodoList.allItems[0].completed).toBe(false);
    myTodoList.markItemAsComplete(0);
    expect(myTodoList.allItems[0].completed).toBe(true);
  });

  test("checks return a list of overdue todos", () => {
    expect(myTodoList.getOverdueItems()).toEqual([]);
  });

  test("checks return a list of todos due today", () => {
    expect(myTodoList.getDueTodayItems()).toEqual([]);
  });

  test("checks return a list of todos due later", () => {
    expect(myTodoList.getDueLaterItems()).toEqual([]);
  });
});
