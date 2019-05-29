var mongoose = require('mongoose');

var AllergySchema = mongoose.Schema({
    type: {type: String, required: true},
    severity: {type: String, required: true}
})

var StudentSchema = mongoose.Schema({
    f_name: {type: String, required: [true, "error"], minlength: [2, "error"]},
    l_name: {type: String, required: [true, "error"], minlength: [2, "error"]},
    parent_id: {type: String, required: true},
    grade: {type: String, required: [true, "error"]},
    notes: {type: String},

    street_address: {type: String, required: [true, "error"], minlength: [2, "error"]},
    city: {type: String, required: [true, "error"], minlength: [2, "error"]},
    zip: {type: Number, required: [true, "error"],minlength:[5, "error"] ,maxlength:[5, "error"]},
    phone: {type: Number, required: [true, "error"]},

    guardian1_name: {type: String, required: [true, "error"]},
    guardian1_email: {type: String, required: [true, "error"]},
    guardian1_cell: {type: String, required: [true, "error"]},

    guardian2_name: {type: String, required: [true, "error"]},
    guardian2_email: {type: String, required: [true, "error"]},
    guardian2_cell: {type: String, required: [true, "error"]},

    e_contact1_name: {type: String, required: [true, "error"]},
    e_contact1_relation: {type: String, required: [true, "error"]},
    e_contact1_phone: {type: String, required: [true, "error"]},

    e_contact2_name: {type: String},
    e_contact2_relation: {type: String},
    e_contact2_phone: {type: String},

    school: {type: String, required: [true, "error"]},
    allergies: [AllergySchema]
})

var UserSchema = mongoose.Schema({
    uid: {type: String},
    students : [StudentSchema]
})

var AdminSchema = mongoose.Schema({
    secretID:{type: String, default: "learningedgeSecretKey2018"},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

var ElementarySchema = mongoose.Schema({
    session: {type: String, require: true},
    title: {type: String, required: true},
    grade: {type: String, required: true},
    description: {type: String}
})

var MiddleSchoolSchema = mongoose.Schema({
    session: {type: String, require: true},
    title: {type: String, required: true},
    grade: {type: String, required: true},
    description: {type: String}
})

var HighSchoolSchema = mongoose.Schema({
    session: {type: String, require: true},
    title: {type: String, required: true},
    grade: {type: String, required: true},
    description: {type: String}
})

var TuitionSchema = mongoose.Schema({
    session: {type: String, required: true},
    year: {type: String, required: true},
    line1: {type: String},
    line2: {type: String},
    line3: {type: String},
    line4: {type: String},
    line5: {type: String},
    line6: {type: String},
    line7: {type: String},
    line8: {type: String},
    line9: {type: String},
    line10: {type: String},
    line11: {type: String},
    line12: {type: String},
    line13: {type: String},
    line14: {type: String},
    line15: {type: String},
    line16: {type: String},
    line17: {type: String},
    line18: {type: String},
    line19: {type: String},
    line20: {type: String},
    line21: {type: String},
    line22: {type: String},
    line23: {type: String},
    line24: {type: String},
    line25: {type: String},
    line26: {type: String},
    line27: {type: String},
    line28: {type: String},
    line29: {type: String},
    line30: {type: String}
})

mongoose.model('User', UserSchema)
mongoose.model('Student', StudentSchema)
mongoose.model('Allergy', AllergySchema)
mongoose.model('Admin', AdminSchema)
mongoose.model('Tuition', TuitionSchema)
mongoose.model('Elementary', ElementarySchema)
mongoose.model('MiddleSchool', MiddleSchoolSchema)
mongoose.model('HighSchool', HighSchoolSchema)