export const todoUtil = function(elem){
  return $.ajax({
    url: "api/todos",
    type: "get",
    datatype: "json",
    success: function (data) {
      return data;
    }
  });
};


export const saveTodoUtil = function(elem) {
  return $.ajax({
    url: "api/todos",
    type: "post",
    datatype: "json",
    data: elem,
    success: function (data) {
      return data;
    }
  });
};

export const updateTodoUtil = function(elem) {
  return $.ajax({
    url: "api/todos",
    type: "put",
    datatype: "json",
    data: elem,
    success: function (data) {
      return data;
    }
  });
};

export const deleteTodoUtil = function(elem) {
  console.log("HERER11");
  console.log(elem);
  return $.ajax({
    url: `api/todos/${elem.id}`,
    type: "DELETE",
    data: elem,
    success: function (data) {
      return data;
    }
  });
};
