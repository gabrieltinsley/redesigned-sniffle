import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

const db = new sqlite3.Database(':memory:')

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    try {
        console.log('GET called')
        res.sendFile(__dirname + '/views/index.html')
    } catch (err) {
        res.status(404).send('Page not found')
    }
})

app.listen(3000, function () {
    console.log('Listening on port 3000...')
})

// import express from 'express'
// import sql from 'sqlite3'

// const sqlite3 = sql.verbose()

// const db = new sqlite3.Database(':memory:')

// const app = express()
// app.use(express.static('public'))
// app.set('views', 'views')
// app.set('view engine', 'pug')
// app.use(express.urlencoded({ extended: false }))

// app.get('/', function (req, res) {
//     try {
//         console.log('GET called')
//         res.render('index')
//     } catch (err) {
//         res.status(404).send('Page not found')
//     }
// })

// /* Start the web server */
// app.listen(3000, function () {
//     console.log('Listening on port 3000...')
// })