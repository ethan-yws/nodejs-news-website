const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req, res) => {
    //res.render('news')

    try {
        const newsAPI = await axios.get('https://raddy.co.uk/wp-json/wp/v2/posts/')
        //console.log(newsAPI.data)
        res.render('news', { articles : newsAPI.data })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.log('Error', err.message)
        }
    }

})

module.exports = newsRouter