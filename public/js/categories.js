
var malemaincategory = new Array();
malemaincategory['Head Neck And Throat'] = new Array('Face & Eyes','Forehead & head in general','Hair & scalp','Mouth & jaw','Nose ears throat & neck');
malemaincategory['Chest And Back'] = new Array('Back','Chest','Lateral Chest');
malemaincategory['Arms & shoulder'] = new Array('Arms General','Finger','Forearm & elbow','Hand & wrist','Upper arm & shoulder');
malemaincategory['Abdomen, pelvis & buttocks'] = new Array('Abdomen','Buttocks & rectum','Genitals & groin','Hips & hip joint','Pelvis');
malemaincategory['Legs'] = new Array('Foot','Legs general','Lower Leg and Ankle','Thigh & knee','Toes');

// City lists
var malecategory = new Array();
malecategory['Head Neck And Throat'] = new Array();
malecategory['Head Neck And Throat']['Face & Eyes']  = new Array('Blackhead','Bleeding in conjuctiva of eye','Blurred Vision','Burning eyes');
malecategory['Head Neck And Throat']['Forehead & head in general'] = new Array('Absence of Pulse', 'Aggressiveness','Difficulty in finding words');
malecategory['Head Neck And Throat']['Hair & scalp'] = new Array('Flaking Skin on head', 'Hair Loss','Itching on Skin');
malecategory['Head Neck And Throat']['Mouth & jaw'] = new Array('Bloody Cough', 'Blue Colored Cough','Cravings');
malecategory['Head Neck And Throat']['Nose ears throat & neck'] = new Array('Absence of Pulse', 'Burning in throat','Burning Nose');

malecategory['Chest And Back'] = new Array();
malecategory['Chest And Back']['Back'] = new Array('Back Deformity','Back Pain');
malecategory['Chest And Back']['Chest']       = new Array('Bloody Cough','Chest');
malecategory['Chest And Back']['Lateral Chest']         = new Array('Side Pain','Swollen Glands in Armpits');

malecategory['Arms & shoulder'] = new Array();
malecategory['Arms & shoulder']['Arms General'] = new Array('Agitation','Arm Swelling');
malecategory['Arms & shoulder']['Finger']    = new Array('Blue Colored Skin','Changes in Nails');
malecategory['Arms & shoulder']['Forearm & elbow']   = new Array('Arm Swelling','Hand Pain');
malecategory['Arms & shoulder']['Hand & wrist']   = new Array('Absence of Pulse','Agitation');
malecategory['Arms & shoulder']['Upper arm & shoulder']   = new Array('Arm Swelling');

malecategory['Abdomen, pelvis & buttocks'] = new Array();
malecategory['Abdomen, pelvis & buttocks']['Abdomen'] = new Array('Abdominal Gaurding','Abdominal Pain');
malecategory['Abdomen, pelvis & buttocks']['Buttocks & rectum']       = new Array('Black Stools','Blood in Stools');
malecategory['Abdomen, pelvis & buttocks']['Genitals & groin']         = new Array('Absence of pulse','Dark Urine');
malecategory['Abdomen, pelvis & buttocks']['Hips & hip joint']         = new Array('Bone Fracture','Difficulty with gait');
malecategory['Abdomen, pelvis & buttocks']['Pelvis']         = new Array('Dark Urine','Burning Sensation');

malecategory['Legs'] = new Array();
malecategory['Legs']['Foot'] = new Array('Agitation','Brittleness of Nails');
malecategory['Legs']['Legs general'] = new Array('Agitation','Bone Fracture');
malecategory['Legs']['Lower Leg and Ankle'] = new Array('Ankle deformity ','Ankle Swelling');
malecategory['Legs']['Thigh & knee'] = new Array('Absence of Pulse','knee Pain');
malecategory['Legs']['Toes'] = new Array('Tingling','Joint Pain');


function maleBodyPart() {
  maleSel = document.getElementById('bodypartname');
  maleSubList = malemaincategory[maleSel.value];
  changeSelectmale('affectedareaname', maleSubList, maleSubList);
  maleAffectedArea();
}
function maleAffectedArea() {
  maleSel = document.getElementById('bodypartname');
  maleSubSel = document.getElementById('affectedareaname');
  maleList = malecategory[maleSel.value][maleSubSel.value];
  changeSelectmale('symptomname', maleList, maleList);
}
function changeSelectmale(fieldIDmale, newOptionsmale, newValuesmale) {
  selectFieldmale = document.getElementById(fieldIDmale);
  selectFieldmale.options.length = 0;
  for (i=0; i<newOptionsmale.length; i++) {
    selectFieldmale.options[selectFieldmale.length] = new Option(newOptionsmale[i], newValuesmale[i]);
  }
}
// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEventmale(func) {
  var oldonloadmale = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonloadmale) {
        oldonloadmale();
      }
      func();
    }
  }
}
addLoadEventmale(function() {
  maleBodyPart();
});

// ///////////////////////////////////////////////////////////////
// / For Female


var femalemaincategory = new Array();
femalemaincategory['Head Neck And Throat'] = new Array('Face & Eyes','Forehead & head in general','Hair & scalp','Mouth & jaw','Nose ears throat & neck');
femalemaincategory['Chest And Back'] = new Array('Back','Chest','Lateral Chest');
femalemaincategory['Arms & shoulder'] = new Array('Arms General','Finger','Forearm & elbow','Hand & wrist','Upper arm & shoulder');
femalemaincategory['Abdomen, pelvis & buttocks'] = new Array('Abdomen','Buttocks & rectum','Genitals & groin','Hips & hip joint','Pelvis');
femalemaincategory['Legs'] = new Array('Foot','Legs general','Lower Leg and Ankle','Thigh & knee','Toes');

// City lists
var femalecategory = new Array();
femalecategory['Head Neck And Throat'] = new Array();
femalecategory['Head Neck And Throat']['Face & Eyes']  = new Array('Blackhead','Bleeding in conjuctiva of eye','Blurred Vision','Burning eyes');
femalecategory['Head Neck And Throat']['Forehead & head in general'] = new Array('Absence of Pulse', 'Aggressiveness','Difficulty in finding words');
femalecategory['Head Neck And Throat']['Hair & scalp'] = new Array('Flaking Skin on head', 'Hair Loss','Itching on Skin');
femalecategory['Head Neck And Throat']['Mouth & jaw'] = new Array('Bloody Cough', 'Blue Colored Cough','Cravings');
femalecategory['Head Neck And Throat']['Nose ears throat & neck'] = new Array('Absence of Pulse', 'Burning in throat','Burning Nose');

femalecategory['Chest And Back'] = new Array();
femalecategory['Chest And Back']['Back'] = new Array('Back Deformity','Back Pain');
femalecategory['Chest And Back']['Chest']       = new Array('Bloody Cough','Chest');
femalecategory['Chest And Back']['Lateral Chest']         = new Array('Side Pain','Swollen Glands in Armpits');

femalecategory['Arms & shoulder'] = new Array();
femalecategory['Arms & shoulder']['Arms General'] = new Array('Agitation','Arm Swelling');
femalecategory['Arms & shoulder']['Finger']    = new Array('Blue Colored Skin','Changes in Nails');
femalecategory['Arms & shoulder']['Forearm & elbow']   = new Array('Arm Swelling','Hand Pain');
femalecategory['Arms & shoulder']['Hand & wrist']   = new Array('Absence of Pulse','Agitation');
femalecategory['Arms & shoulder']['Upper arm & shoulder']   = new Array('Arm Swelling');

femalecategory['Abdomen, pelvis & buttocks'] = new Array();
femalecategory['Abdomen, pelvis & buttocks']['Abdomen'] = new Array('Abdominal Gaurding','Abdominal Pain');
femalecategory['Abdomen, pelvis & buttocks']['Buttocks & rectum']       = new Array('Diarrhea','Blood in Stools');
femalecategory['Abdomen, pelvis & buttocks']['Genitals & groin']         = new Array('Missed Period','Menstruation Disorder','Dark Urine');
femalecategory['Abdomen, pelvis & buttocks']['Hips & hip joint']         = new Array('Bone Fracture','Difficulty with gait');
femalecategory['Abdomen, pelvis & buttocks']['Pelvis']         = new Array('Dark Urine','Burning Sensation');

femalecategory['Legs'] = new Array();
femalecategory['Legs']['Foot'] = new Array('Agitation','Brittleness of Nails');
femalecategory['Legs']['Legs general'] = new Array('Agitation','Bone Fracture');
femalecategory['Legs']['Lower Leg and Ankle'] = new Array('Ankle deformity ','Ankle Swelling');
femalecategory['Legs']['Thigh & knee'] = new Array('Absence of Pulse','knee Pain');
femalecategory['Legs']['Toes'] = new Array('Tingling','Joint Pain');


function femaleBodyPart() {
 femaleSel = document.getElementById('bodypartfemale');
  femaleSubList = femalemaincategory[femaleSel.value];
  changeSelect('affectedareafemale', femaleSubList, femaleSubList);
  femaleAffectedArea();
}
function femaleAffectedArea() {
  femaleSel = document.getElementById('bodypartfemale');
 femaleSubSel = document.getElementById('affectedareafemale');
 femaleList = femalecategory[femaleSel.value][femaleSubSel.value];
  changeSelect('symptomfemale',femaleList, femaleList);
}
function changeSelect(fieldID, newOptions, newValues) {
  // alert(fieldID);
  selectField = document.getElementById(fieldID);
  selectField.options.length = 0;

  for (i=0; i<newOptions.length; i++) {
     selectField.options[ selectField.length] = new Option(newOptions[i], newValues[i]);
  }
}
// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(function() {
  femaleBodyPart();
});


