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
                    isDone: true
                },
    
                {
                    element: 'Portare la macchina dal meccanico',
                    isDone: true
                },
            ]
        }
    },


    methods:{

    }

}).mount('#app')