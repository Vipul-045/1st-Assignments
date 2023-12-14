/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class todo {
  constructor(){
    this.todos=[];
  }

  add(todo){
    this.todos.push(todo);
  }

  remove(index){
    if(0<=index && index<this.todos.length){
      this.todos.splice(index, 1);
    }
    else{
      console.log("Index element not found");
    }
  }

  update(index, updatedTodo){
    if(0 <= index && index < this.todos.length){
      this.todos[index] = updatedTodo;
    }
    else{
      console.log("No element on this Index")
    }
  }

  getAll(){
    return this.todos;
  }

  get(index){
    if(0<=index && index<this.todos.length){
      return this.todos[index];
    }else{
      console.log("index not present")
      return null;
    }
  }

  clear(){
    this.todos = [];
  }

}

const todolist = new todo();

todolist.add("Do coding");
todolist.add("Complete Assingments");
todolist.add("Complete Theory");

console.log("Your todo list is", todolist.getAll());

todolist.remove(0)
  console.log("Remaining elements after removing index 0 is ", todolist.getAll());


todolist.update(1, "Assignments Completed")
  console.log("Updated todo at index 1 is ", todolist.get(1));

todolist.clear();
console.log("Todo list has became empty now", todolist.getAll())



module.exports = todo;
