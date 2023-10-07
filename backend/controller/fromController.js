const Form1 = require('../models/form1Model.js')


exports.form1Controller = async (req, res) => {
    try {
        const { componyName, title, appLink, location, jobType, department, choice, technology } = req.body
        const data = await Form1.create({
            componyName, title, appLink, location, jobType, department, choice, technology
        })

        res.status(200).json({
            message: 'form1Controller Success',
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: `form1Controller Error`,
            error
        })
    }
}