const app = new Vue({
    el: '#app',
    data: {
        title: 'Todo List',
        newTodo: '',
        desc: '',
        number: 1,
        todos: [],
        descricao: [],
        valor: []
    },
    methods: {
        addTodo(){
            this.todos.push({
                
                title: this.newTodo,
                done: false,
            });
            this.newTodo = '';

            this.descricao.push({
                title1: this.desc,
                done: false,
            })
            this.desc = '';

            this.valor.push({
                title2: this.number,
                done: false,
                
            })
            this.number = '';
            console.log(number);
        },
        removeTodo(i,j){
            const iIndex = this.todos.indexOf(i);
            this.todos.splice(iIndex, 1);
            const jIndex = this.descricao.indexOf(j);
            this.descricao.splice(jIndex, 1);
            
        },
        allDone(){
        this.todos.forEach(todo => {
            todo.done = true;
          });
        }
    }

});