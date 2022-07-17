const express = require('express')
const app = express()
const port = process.env.CDN_PORT || 80

app.use(express.static(__dirname + '/public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})