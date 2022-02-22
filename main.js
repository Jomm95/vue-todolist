const vue = new Vue(
    {
    el: '#app',
    data: {
        newtodo :"",
        todos : [
            {
                text: "cucinare",
                done:false
            },
            {
                text: "fare la spesa",
                done:false
            },
            {
                text: "studiare",
                done:false
            },
            {
                text: "palestra",
                done:false
            }
        ]
      
    },
    methods: {
        addToDo(){
            if(this.newtodo.trim().length > 0){
                this.todos.push(
                    {
                        text: this.newtodo.trim(),
                        done: false,
                    }
                    )
                }
                this.newtodo="";
            
    },

        removeToDo(index) {
            this.todos.splice(index, 1);


        },

        throughLine (index){
            this.todos[index].done = !this.todos[index].done;
        },
    }
  }
);