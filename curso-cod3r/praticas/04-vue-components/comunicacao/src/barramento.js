import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quantoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})