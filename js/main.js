/*creare una todolist dove l'utente potrà:
scrivere in un input
premendo invio nell'input oppure cliccando sul submit, salvare nella lista la nuova nota
visualizzare tutte le note nel box sottostante
cancellare la nota, cliccando sulla X corrispondente */

new Vue({
    el:'#app',
    data:{
        boxInput:[],
        messag:'',
        
    },
    methods:{
        invio:function(){
            this.boxInput.push(this.messag)
        },
        delet:function(index){
            this.boxInput.splice(index, 1) 
        }
       
    }

})
