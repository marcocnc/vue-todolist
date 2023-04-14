const { createApp } = Vue  

createApp({

    data(){
        return{
            todoElements: [
                {
                    element: 'Andare in palestra',
                    isDone: true
                },
    
                {
                    element: 'Finire gli esercizi',
                    isDone: true
                },
    
                {
                    element: 'Giocare a tennis', 
                    isDone: false
                },
    
                {
                    element: 'Portare la macchina dal meccanico',
                    isDone: true
                },
            ]
        }
    },


    methods:{
        deleteTask(element){
            console.log('Rimosso');
            this.todoElements.splice(element, 1)
        }
    }

}).mount('#app')