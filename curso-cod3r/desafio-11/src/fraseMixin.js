export default{
    computed: {
		fraseComVirgulas(){
			return this.frase.replace(/\s/g, ',')
		},
		fraseComTamanho(){
			return this.palavra.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	},
}