const vue = new Vue(
    {
    el: '#app',
    data: {
        newtodo :"",
        todos : ["magnà", "bere", "dormire"],
      
    },
    method: {
        addToDo() {
            this.todos.push(this.newtodo);
            this.newtodo="";
        },
    }
  }
);