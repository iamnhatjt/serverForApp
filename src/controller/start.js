const user = require('../model/user')
const data = require('../model/data')
const { findOne } = require('../model/data')
const jwt = require('jsonwebtoken')

const login = (req, res, next) => {
    user.findOne({
            username: req.body.username,
            password: req.body.password
        })
        .then(data => {
            if (data) {
                const tokenLogin = jwt.sign(data.id, 'nhatjt')
                res.cookie('tokenLogin', tokenLogin)
                res.json({ status: 'success', tokenLogin: tokenLogin, message: 'Đăng nhập thành công' })
            } else res.json({ status: 'fail', message: 'Thông tin đăng nhập chưa chính xác' })
        })
        .catch(err => {
            console.log('err: ', err)
            res.status(400).json('lỗi hệ thống')
        })
}

const register = (req, res, next) => {
    user.findOne({
            username: req.body.username
        })
        .then(data => {
            if (data)
                res.json({ status: 'fail', message: 'Tên đăng nhập đã có người khác sử dụng!' })
            else {
                user.create({
                    username: req.body.username,
                    password: req.body.password
                })
                res.json({ status: 'success', message: 'tạo tài khoản thành công!' })
            }
        })
        .catch(err => {
            console.log('err: ', err)
            res.status(400).json('lỗi hệ thống')
        })
}

module.exports = { login, register }