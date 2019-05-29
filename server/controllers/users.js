var mongoose = require('mongoose');
var User = mongoose.model('User');
var Student = mongoose.model('Student')
var Allergy = mongoose.model('Allergy')
var Tuition = mongoose.model('Tuition')

module.exports = {
    checker: function(req, res){
        User.find({uid: req.params.id}, function(err, data){
            if(err){
                res.json(err);
            }
            else if(data.length == 0){
                res.json(false);
            }
            else{
                res.json(true);
            }
        })
    },
    create: function(req, res){
        var newUser = new User(req.body)
        newUser.save(function(err){
            if(err){
                res.json(err)
            }
            else{
                res.json("Success on creating new user!")
            }
        })
    },
    getUser: function(req,res){
        User.find({uid: req.params.id}, function(err, data){
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
    updateUser: function(req, res){
        User.findOneAndUpdate({uid: req.params.id}, req.body,
        {runValidators:true},
        function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json("success")
            }
        });
    },
    addStudent: function(req, res){
        var newStud = new Student(req.body)
        newStud.save(function(err){
            if(err){
                res.json(err);
            }
            else{
                User.findOneAndUpdate({uid: req.params.id}, {$push: {students: newStud}}, function(data){
                    res.json(data)
                })
            }
        })
    },
    getAll: function(req, res){
        User.find({}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    },
    getStudent: function(req, res){
        User.findOne({uid: req.params.uid}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                for(let i =0; i < data['students'].length; i++){
                    if(data['students'][i]._id == req.params.id){
                        res.json(data['students'][i])
                    }
                }
            }
        })
    },
    getStudentOnly: function(req, res){
        Student.find({_id: req.params.id}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    },
    createAllergy: function(req, res){
        var newAllergy = new Allergy(req.body)
        newAllergy.save(function(err){
            if(err){
                res.json(err)
            }
            else{
                User.findOne({uid:req.params.uid}, function(err, data){
                    if(err){
                        res.json(err)
                    }
                    else{
                        for(let i =0; i < data['students'].length; i++){
                            if(data['students'][i]._id == req.params.id){
                                data['students'][i].allergies.push(newAllergy)
                            }
                        }
                        data.save(function(err, userData){
                            if(err){
                                res.json(err)
                            }
                            else{
                                Student.findOne({_id: req.params.id}, function(err, studData){
                                    studData.allergies.push(newAllergy);
                                    studData.save(function(err, data){
                                        if(err){
                                            res.json(err)
                                        }
                                        else{
                                            res.json(data)
                                        }
                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
    },
    updateStudent: function(req, res){
        User.findOne({uid:req.params.id}, function(err, data){
            for(let i =0; i < data['students'].length; i++){
                if(data['students'][i]._id == req.body._id){
                    data['students'][i] = req.body
                }
            }
            data.save(function(err, data){
                if(err){
                    res.json(err)
                }
                else{
                    Student.findOneAndUpdate( {_id:req.body._id} , req.body ,
                    {runValidators:true},
                    function(err, data){
                        if(err){
                            res.json(err)
                        }
                        else{
                            res.json(data)
                        }
                    })
                }
            })
        })
    },
    updateStudentOnly: function(req, res){
        Student.findOne({_id:req.params.id}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                data.notes = req.body.notes
                data.save(function(err, data){
                    if(err){
                        res.json(err)
                    }
                    else{
                        res.json(data)
                    }
                })
            }
        })
    },
    createClass: function(req, res){
        var newClass = new Class(req.body)
        newClass.save(function(err){
            if(err){
                res.json(err)
            }
            else{
                res.json("Creating Class Success")
            }
        })
    },
    allClass: function(req, res){
        Class.find({}, function(err, data){
            if(err){
                res.josn(err)
            }
            else{
                res.json(data)
            }
        })
    },
    getClass: function(req, res){
        Class.find({_id: req.params.id}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    },
    getAllStudents: function(req, res){
        Student.find({}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    },
    addStudentToClass: function(req, res){
        Class.findOneAndUpdate({_id:req.params.id}, {$push: {applied: req.body}}, function(err){
            if(err){
                res.json(err)
            }
            res.json("Add student to class successful")
        })
    },
    findStudentFirstName: function(req, res){
        req.params.f_name = '^'+req.params.f_name+'$';
        Student.find({f_name: {$regex: req.params.f_name, $options: 'i'}}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    },
    findStudentLastName: function(req, res){
        req.params.l_name = '^'+req.params.l_name+'$';
        Student.find({l_name: {$regex: req.params.l_name, $options: 'i'}}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    },
    acceptStudent: function(req, res){
        Class.update({_id:req.params.id}, {$pull: {applied:{_id: req.body._id}}} ,function(err, data){
            if(err){
                res.json(err)
            }
            else{
                Class.update({_id:req.params.id}, {$push: {accepted: req.body}}, function(err, data){
                    if(err){
                        res.json(err)
                    }
                    else{
                        res.json("Moved student from appiled to accpeted")
                    }
                })
            }
        })
    },
    unenrollStudent: function(req, res){
        Class.update({_id: req.params.id}, {$pull: {accepted: {_id: req.body._id}}}, function(err, data){
            if(err){
                res.json(err);
            }
            else{
                res.json("Unenrolled student succesfully")
            }
        })
    },
    deleteClass: function(req, res){
        Class.deleteOne({_id: req.params.id}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json('Deleted Class Succesfully')
            }
        })
    },
    savePicture: function(req, res){
        res.json('Arrived at controller function')
    },
    createTuition: function(req, res){
        var tuit = new Tuition(req.body)
        tuit.save(function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    },
    getAllTuition: function(req, res){
        Tuition.find({}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    },
    deleteTuition: function(req, res){
        Tuition.deleteOne({_id: req.params.id}, function(err, data){
            if(err){
                res.json(err);
            }
            else{
                res.json("Deleted Tuition Successfully")
            }
        })
    },
    createPolicy: function(req, res){
        var policy = new Policy(req.body);
        policy.save(function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data);
            }
        })
    },
    getPolicy: function(req, res){
        Policy.find({}, function(err, data){
            if(err){
                res.json(err);
            }
            else{
                res.json(data)
            }
        })
    },
    deletePolicy: function(req, res){
        Policy.deleteOne({_id:req.params.id}, function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json("Deleted Policy")
            }
        })
    },

};