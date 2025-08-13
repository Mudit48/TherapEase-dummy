const express = require("express")
const { engine } = require('express-handlebars');

const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const port = 3000

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/profile/:name', (req, res) => {
    res.render('profile',
        {
            user : req.params.name
        }
    )
})



app.listen(port, () => {
    console.log('Server is running on http://localhost:3000')
})