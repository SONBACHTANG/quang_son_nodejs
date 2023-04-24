const db = require('../../config/db/main');
const express = require('express');
const app = express();
const Users = require('../../models/Users');
app.use(express.json());
db.connect();

//[Post]/login
exports.create = async (req, res) => {
    const data = req.body;
    console.log(data)
    await Users.create({
        FirstName: data.firstname,
        LastName: data.lastname,
        Mobile: data.mobile,
        UserName: data.username,
        Password: data.password
    })

    return res.status(200).json({
        success: true,
        message:"Tạo tài khoản thành công",
        content: "Tạo tài khoản thành công"
    });
}

exports.getAll = async (req, res) => {
    const users = await Users.find({})
    .then((Users) => {
        return Users;
    }).catch((err) => {
    console.log(err);
        return {};
    });

    return res.status(200).json({
        success: true,
        message:"Lấy toàn bộ tài khoản thành công",
        content: users
    });
}