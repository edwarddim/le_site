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
    f_name: {type: String, required: [true, "error"], minlength: [2, "error"]},
    l_name: {type: String, required: [true, "error"], minlength: [2, "error"]},
    email: {type: String, required: [true, "error"]},
    phone: {type: String, required: [true, "error"]},
    street_address: {type: String, required: [true, "error"], minlength: [2, "error"]},
    city: {type: String, required: [true, "error"], minlength: [2, "error"]},
    zip: {type: Number, required: [true, "error"],minlength:[5, "error"] ,maxlength:[5, "error"]},
    students : [StudentSchema]
})

var AdminSchema = mongoose.Schema({
    secretID:{type: String, default: "learningedgeSecretKey2018"},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

var ClassSchema = mongoose.Schema({
    title: {type: String, required: true},
    grade: {type: String, required: true},
    capacity: {type: Number, required:true},
    applied: [StudentSchema],
    accepted: [StudentSchema]
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
mongoose.model('Class', ClassSchema)
mongoose.model('Tuition', TuitionSchema)