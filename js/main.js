const { createApp } = Vue

createApp({
    data() {
        return {
            chiave: "valore",
            booleanApi: 'https://flynn.boolean.careers/exercises/api/random/boolean',
            mail: 'https://flynn.boolean.careers/exercises/api/random/mail',
            listaMail: [],
        }
    },
    methods: {

    },
    mounted() {
        console.log("Mounted iniziato");

        for (let i = 0; i <=10; i++) {
            axios.get( this.mail ).then((risposta) => {
                this.listaMail.push(risposta.data.response);
            });
            
        }

        console.log("Mounted terminato");
    }
}).mount('#app')