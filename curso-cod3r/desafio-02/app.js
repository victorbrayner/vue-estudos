new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Alerta!')
        },
        exibirValor(event){
            this.valor = event.target.value
        }
    }
})