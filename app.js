const app = new Vue({
    el: '#app',
    data: {
        title: 'Todo List',
        newTodo: '',
        desc: '',
        number: 1,
        capacidade_maxima : 13,
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
                title2: this.number       
            })
           
        },
        removeTodo(i,j,k){
            const iIndex = this.todos.indexOf(i);
            this.todos.splice(iIndex, 1);
            const jIndex = this.descricao.indexOf(j);
            this.descricao.splice(jIndex, 1);
            const kIndex = this.valor.indexOf(k);
            this.valor.splice(kIndex, 1);
            
        },
        allDone(){
        this.todos.forEach(todo => {
            todo.done = true;
          });
        },

        compare( a, b ) {
            if ( a.title2 < b.title2){
              return 1;
            }
            if ( a.title2 > b.title2){
              return -1;
            }
            return 0;
          },
          
          knapSack(valor, capacidade_maxima){
            capacidade_maxima = 13
            valor = valor[i]
            dia = 1

            while (valor != 0){

                capacidade_dia = 0
                index = 0
                console.log("Dia: ", dia)
                while((valor) > 0  && capacidade_dia + valor[index] <= 13){
                    
                    capacidade_dia += valor[index]
                    console.log(" Peso: ", valor[index])
                    valor.pop(index)

                    dia += 1
                }
                }

          }
          
        
    }  
    

});