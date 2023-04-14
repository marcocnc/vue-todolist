const { createApp } = Vue  

createApp({

    data(){
        return{
            todoElements: [
                {
                    element: 'Andare in palestra',
                    isDone: false
                },
    
                {
                    element: 'Finire gli esercizi',
                    isDone: false
                },
    
                {
                    element: 'Giocare a tennis', 
                    isDone: false
                },
    
                {
                    element: 'Portare la macchina dal meccanico',
                    isDone: false
                },
            ],
            warnMsg : '',
            newTodo : '',
            noTaskMsg: ''
        }
    },


    methods:{

        // questa funzione cancella la task intercettando l'indice dell'array todoElements
        deleteTask(index){
            console.log('Rimosso');
            
            if(this.todoElements[index].isDone == false){
                this.showWarnText()
            }else{
                this.todoElements.splice(index, 1)

            }
        },

        showWarnText(){
            this.warnMsg = "Attenzione: non puoi cancellare la task se non l'hai portata a termine"
        },

        addNewTask(){
           // si crea un nuovo oggetto
           const newTask = {
                element: this.newTodo,
                isDone: false
           }

           // pusha il nuovo oggetto nell'array
           this.todoElements.unshift(newTask);

           // si resetta newTodo
           this.newTodo = ''
        },


        
    }

}).mount('#app')