const Database = require('./db')
const createProffy = require('./createProffy')

Database.then((db) => {

  proffyValue = {
  name: "Diego Fernandes", 
  avatar:"https://github.com/diego3g.png",
  whatsapp:"88774586",
  bio:" Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
  
}

classValue = {
  subject: "Química",
  cost: "20",
  
}

classScheduleValue = [
  {
    weekday: 1,
    time_from: 720,
    time_to: 1220
  },
  {
    weekday: 0,
    time_from: 520,
    time_to: 1220

  }
]

//createProffy(db, {proffyValue, classValue, classScheduleValue})

})