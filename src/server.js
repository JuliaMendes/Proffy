const proffys = [
  {
    name: "Diego Fernandes", 
    avatar:"https://github.com/diego3g.png",
    whatssap:"88774586",
    bio:" Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química",
    cost: "20",
    weekday:[0],
    time_from:[720],
    time_to: [1220]
  },
  {
    name: "Daniele Souza", 
    avatar:"https://github.com/diego3g.png",
    whatssap:"88774586",
    bio:" Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química",
    cost: "20",
    weekday:[1],
    time_from:[720],
    time_to: [1220]
  }
]

const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/", (req, res) => {
  return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, res) => {
  return res.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", (req, res) => {
  return res.sendFile(__dirname + "/views/give-classes.html")
})

.listen(5500)

