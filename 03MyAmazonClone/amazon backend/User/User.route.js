const express = require('express');
const userRouter = express.Router();
const User = require('./User.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = 'sdafsgfgsadasdjskjsdlaos4234$$$$asdsda';

userRouter.route('/userreg').post(async function (req, res) {
    let salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    let obj = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: secPassword
    }
    const user = await new User(obj);
    await user.save()
        .then((user) => {
            res.status(200).json({ success:true,user:'data saved'})
        }).catch(err => {
            res.status(500).json({success:false,error:`Data not saved ${err.massage}`});
        })
})

userRouter.route('/userlogin').post(async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const pwdData = await User.findOne({ email });
        if (!pwdData) {
            return res.status(400).send('Please Inter Valid Credential')
        }
        const comparePass = await bcrypt.compare(password, pwdData.password)
        if (!comparePass) {
            return res.status(400).send('Please Inter Valid Credential')
        }
        const data = {
            user: {
                id: pwdData.email
            }
        }
        const token = await jwt.sign(data, jwtSecret);
        return res.status(200).json({ success: true, token: token })
    } catch (error) {
        res.status(200).json({ success: false, error: 'Server Error' })
    }
})

module.exports = userRouter; 