const createTodoList = () => {
  const allItems = [];

  const addItem = (todoItem) => {
      allItems.push(todoItem);
  };

  const markItemAsComplete = (index) => {
      if (allItems[index]) {
          allItems[index].completed = true;
      } else {
          console.error("Index not found in the todo list.");
      }
  };

  const getOverdueItems = () => {
      const overdueItems = [];
      const currentDate = new Date().toLocaleDateString("en-CA");

      for (let i = 0; i < allItems.length; i++) {
          if (allItems[i].dueDate < currentDate) {
              overdueItems.push(allItems[i]);
          }
      }

      return overdueItems;
  };

  const getDueTodayItems = () => {
      const today = new Date().toISOString().split("T")[0];
      return allItems.filter((item) => item.dueDate === today);
  };

  const getDueLaterItems = () => {
      const dueLaterItems = [];
      const currentDate = new Date().toLocaleDateString("en-CA");

      for (let i = 0; i < allItems.length; i++) {
          if (allItems[i].dueDate > currentDate) {
              dueLaterItems.push(allItems[i]);
          }
      }

      return dueLaterItems;
  };

  const convertToDisplayableList = (list) => {
      return list
          .map((item) => {
              let checkbox = item.completed ? "[x]" : "[ ]";
              const formattedDate =
                  item.dueDate !== new Date().toISOString().split("T")[0]
                      ? " " + item.dueDate
                      : "";
              return `${checkbox} ${item.title}${formattedDate}`;
          })
          .join("\n");
  };

  return {
      allItems,
      addItem,
      markItemAsComplete,
      getOverdueItems,
      getDueTodayItems,
      getDueLaterItems,
      convertToDisplayableList,
  };
};

module.exports = createTodoList;
