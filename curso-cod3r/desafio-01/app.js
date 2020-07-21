new Vue({
    el: '#desafio',
    data:{
        nome: 'Victor',
        idade: 25,
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    },
    methods:{
        multPor3() {
            return this.idade * 3
        }
    }
})