// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var symptomsSchema = mongoose.Schema({

    userid :String,
    temperatures : String,
    sleep : String,
    exercise : String,
    general_energy_level : String,
    energy_level_after_eating : String,
    Appetite : String,
    Crave_Taste : String,
    Avoid_Taste : String,
    Digestion : String,
    Stools : String,
    What_color_are_your_stool :String,
    Number_of_daily_bowel_movements : String,
    Urine : String,
    What_color_is_your_urine : String,
    How_often_do_you_urinate_in_a_day : String,
    ReproductionMen : String,
    Have_a_genital_discharge_What_color : String,
    How_often_do_you_engage_in_sex : String,
    ReproductionWomen : String,
    Clots : String,
    How_long_is_your_menstrual_cycle_days : String,
    Is_it_regular :String,
    How_long_is_your_menstrual_flow : String,
    What_color_is_your_menstrual_flow : String,
    Do_You_use_birth_control_pills_How_long : String,
    How_many_pregnancies_have_you_had : String,
    How_many_children_have_you_borne : String,
    How_many_miscarriages : String,
    How_many_abortions : String,
    Respiration : String,
    cough : String,
    Pain : String,
    Headaches :String,
    Eyes : String,
    noise_in_ears : String,
    Ears : String,
    Mouth : String,
    Teeth : String,
    Throat : String,
    Nose : String,
    Muscles : String,
    Muscle_weakness_Where : String,
    Muscle_tension_Where : String,
    Emotional_Mental_Thinking : String,
    emotions_predominant : String,
    Miscellaneous : String,
    feeling_of_heaviness : String,
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Symptoms', symptomsSchema);