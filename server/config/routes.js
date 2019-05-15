const users = require('./../controllers/users.js');
const multer = require('multer')
const fs = require('fs')
const Media = require('../models/media.js')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'public/src/assets/uploads/img')
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
});
const upload = multer({storage:storage});


module.exports = function(app){
    console.log(app);
    app.get('/api/usercheck/:id', users.checker)

    app.get('/api/user/:id', users.getUser);
    app.put('/api/user/:id', users.updateUser);
    app.post('/api/user/:id/addstudent', users.addStudent)
    app.post('/api/user/create', users.create)
    app.get('/api/user/all', users.getAll)

    app.get('/api/student/all', users.getAllStudents)
    app.get('/api/student/firstname/:f_name', users.findStudentFirstName)
    app.get('/api/student/lastname/:l_name', users.findStudentLastName)
    app.get('/api/student/:id/:uid', users.getStudent)
    app.get('/api/student/:id', users.getStudentOnly)
    app.put('/api/student/:id/updatestudent', users.updateStudentOnly)
    app.post('/api/student/:id/updatestudent', users.updateStudent)

    app.post('/api/allergy/:uid/:id/create', users.createAllergy)

    app.get('/api/class', users.allClass)
    app.post('/api/class', users.createClass)
    app.get('/api/class/:id', users.getClass)
    app.post('/api/class/:id', users.addStudentToClass)

    app.post('/api/admin/frontpicture', upload.single('frontPicture'), (req, res, next)=>{
        let newfile = new Media({
            filePath: 'assets\/uploads\/img\/' + req.file.filename,
            fileName: req.file.filename,
            imageTitle: req.file.filename,
            imageAlt: req.file.filename,
            fileType: req.file.mimetype,
            fileSize: req.file.size,
            fileDestination: "Front"
        });
        Media.addNewFile(newfile, (err, result)=>{
            if(err) {
                res.status(500).json({ success: false, msg: 'Image Not added to DB. Error: ' + err });
            }
            else {
                res.status(200).json({ success: true, msg: 'Image Added to DB! ' + result });
            }
        })
    });
    app.get('/api/admin/frontpicture', (req, res, next)=>{
        Media.find({fileDestination: "Front"}, (err, data)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    });
    app.post('/api/admin/gallerypicture', upload.single('galleryPicture'), (req, res, next)=>{
        let newfile = new Media({
            filePath: 'assets\/uploads\/img\/' + req.file.filename,
            fileName: req.file.filename,
            imageTitle: req.file.filename,
            imageAlt: req.file.filename,
            fileType: req.file.mimetype,
            fileSize: req.file.size,
            fileDestination: "Gallery"
        });
        Media.addNewFile(newfile, (err, result)=>{
            if(err) {
                res.status(500).json({ success: false, msg: 'Image Not added to DB. Error: ' + err });
            }
            else {
                res.status(200).json({ success: true, msg: 'Image Added to DB! ' + result });
            }
        })
    });
    app.get('/api/admin/gallerypicture', (req, res, next)=>{
        Media.find({fileDestination: "Gallery"}, (err, data)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
    });
    app.delete('/api/admin/picture/:id', (req, res)=>{
        const id = req.params.id;
        Media.findOne({_id: id}, (err, data)=>{
            var filePath = data.filePath;
            Media.deleteOne({_id:id}, (err, data)=>{
                if(err){
                    res.json(err)
                }
                else{
                    fs.unlink('public\/src\/' + filePath, () => {
                        res.status(200).json({ success: true, msg: 'File Removed From Database. ' + data });
                    });
                };
            });
        })
    })
    app.post('/api/admin/class/:id', users.acceptStudent)
    app.post('/api/admin/class/:id/unenroll', users.unenrollStudent)
    app.get('/api/admin/class/:id/delete', users.deleteClass)
    app.get('/api/admin/tuition', users.getAllTuition)
    app.post('/api/admin/tuition', users.createTuition)
    app.delete('/api/admin/tuition/:id', users.deleteTuition)
    app.post('/api/admin/policy', users.createPolicy)
    app.get('/api/admin/policy', users.getPolicy)
    app.get('/api/admin/policy/:id', users.deletePolicy)
}