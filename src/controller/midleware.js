const data = require('../model/data')
const jwt = require('jsonwebtoken')
const user = require('../model/user')

const middleware = (req, res, next) => {
    if (req.cookies.tokenLogin) {

        var token = jwt.verify(req.cookies.tokenLogin, 'nhatjt')
        user.findOne({
            _id: token
        }).then(data => {
            if (data) next()
            else {
                res.json({ status: 'fail', message: 'mã tokien sai' })
            }
        })
    } else {
        res.json({ status: 'fail', message: "bạn cần phải đăng nhập" })
    }
}

module.exports = middleware