const express = require("express");
const empRoutes = express.Router();
let Emp = require('./emp.model.js')

empRoutes.route('/add').post(function(req, res) {
    let emp =new Emp(req.body);

    console.log(req.body);
    emp.save()
    .then(emp => {
        res.status(200).json({'emp':'emp added successfully'});
    })
    .catch(err => {
        res.status(400).send("Unable to save emp to database")
    });
});

// empRoutes.route('/np').get(function(req,res) {
//     Emp.find(function(err,emp) {
//         if(err) {
//             res.send(err);
//         } else {
//             res.send(emp);
//         }
//     });
// });

empRoutes.route('/np').get(function(req,res) {
    Emp.find()
        .then(emp => {
            res.send(emp);
        })
        .catch(err => {
            res.send(err);
        });
});

empRoutes.route('/edit/:scode').get(function(req,res) {
    let emp_ecode = req.params.scode;
    Emp.findById(emp_ecode, function(err,emp) {
        res.json(emp);
    });
})



// empRoutes.route('/update/:id').put(function(req,res) {
//     let emp = new Emp(req.body);
//     emp.save()
//     .then(emp => {
//         res.status(200).json({'emp':'employee updation successfully'})
//     })
//     .catch(err => {
//         res.status(400).json("unable to update the database ")
//     });
// });

empRoutes.route('/update/:id').put(function(req,res) {
    const emp_ecode = req.params.id;
    console.log(emp_ecode)
    const updateData = req.body;
    Emp.findOneAndUpdate({ emp_ecode: emp_ecode }, updateData)
      .then(emp => {
        if (!emp) {
          return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully' });
      })
      .catch(err => {
        res.status(500).json({ message: 'Unable to update the employee' });
      });
  });

// empRoutes.route('/delete/:id').delete(function(req,res) {
//     Emp.deleteOne({emp_ecode: req.params.id}, function(err, data) {
//         console.log(emp_ecode);
//         if(err) res.json(err);
//         else {
//             res.json('Employee Successfully removed');
//         }
//     });
// })

empRoutes.route('/delete/:id').delete(async function(req,res) {
    try {
        const result = await Emp.deleteOne({emp_ecode: req.params.id});
        console.log(result);
        res.json('Employee Successfully removed');
    } catch(err) {
        res.json(err);
    }
});

module.exports = empRoutes;
