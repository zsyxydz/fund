const path = require('path')
const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const rfs = require('rotating-file-stream')

const logDirectory = path.join(__dirname, 'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory,
})

const app = express()
const PORT = process.env.PORT || 8081
//端口？？？？？？
app.use(morgan('combined', { stream: accessLogStream }))

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.info(`server listening on port ${PORT}`)
})
