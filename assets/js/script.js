const { createApp } = Vue  

createApp({

    data(){
        todoElements: [
            {
                task: 'Andare in palestra',
                isDone: true
            },

            {
                task: 'Finire gli esercizi',
                isDone: true
            },

            {
                task: 'Giocare a tennis', 
                isDone: true
            },

            {
                task: 'Portare la macchina dal meccanico',
                isDone: true
            },
        ]
    },


    methods:{

    }

}).mount('#app')