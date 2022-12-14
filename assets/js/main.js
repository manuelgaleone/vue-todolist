/*
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

    - text, una stringa che indica il testo del todo
    - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
    Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
    Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
    Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

BONUS
    1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
    2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

//Import Vue
let { createApp } = Vue

  createApp({
    data() {
      return {
        isError: false,
        newTask: "",
        tasks: [
            {
            task:"Andare a fare la spesa"
            },
            {
            task:"Andare al Supermercato"
            },
            {
            task:"Zoom di lavoro"
            }
        ]
      }
    },
    methods: {
        addTask() {
            //Loggo e provo
            //console.log("Click")
            //Porto sopra l'ultima task
            this.tasks.unshift(this.newTask)

            //Svuoto l'input dopo l'inserimento
            this.newTask = ""

            //Errore
            if (this.newTask.length < 3) {
                this.isError = true
            } else {
                this.isError = false
                //Porto sopra l'ultima task
                this.tasks.unshift(this.newTask)
    
                //Svuoto l'input dopo l'inserimento
                this.newTask = ""
            }
        },
        //Delete task function
        deleteTask(index) {
            console.log("delete click")
            this.tasks.splice(index, 1)
        },
        
    }
  }).mount('#app')