const {https} = require('firebase-funtions')
const { default: next}= require('next')

const isDev = process.env.NODE_ENV !=='production'

const server = next({
    dev: isDev,
    conf: {distDir: '.next'}
})

const nextjsHandle = server.getRequestHandler();

exports.nextjsServer = https.onRequest((req, res) => {
    return server.prepare().then(() => {
        return nextjsHandle(req, res)
    })
})