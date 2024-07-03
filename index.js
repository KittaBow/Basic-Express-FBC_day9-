const express = require('express')

const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static("public"))


app.get('/', (req, res) => {
  let person = {
    name: "Kitta",
    email: "Kittaya.393@gmail.com",
    tel: "1234"    
  }
  res.render('index',{person})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
