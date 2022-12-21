const tireDiameter  = document.getElementById("tireDiameter")
const tireDiameter0  = document.getElementById("tireDiameter0")
const tireDiameter1  = document.getElementById("tireDiameter1")
const tireWidth     = document.getElementById("tireWidth")
const tireWidth0     = document.getElementById("tireWidth0")
const tireWidth1     = document.getElementById("tireWidth1")
const aspectRatio   = document.getElementById("aspectRatio")
const aspectRatio0   = document.getElementById("aspectRatio0")
const calcDiameter  = document.getElementById("calcDiameter")
const calcDiameter0  = document.getElementById("calcDiameter0")
const calcDiameter1  = document.getElementById("calcDiameter1")
const wheelDiameter = document.getElementById("wheelDiameter")
const tireWeight    = document.getElementById("tireWeight")
const space        = document.getElementById("space")
const space0        = document.getElementById("space0")
const wheelWeight   = document.getElementById("wheelWeight")

tireDiameter.style.display  ="inline"
tireDiameter0.style.display  ="inline"
tireDiameter1.style.display  ="inline"
tireWidth.style.display     ="none"
tireWidth0.style.display     ="none"
tireWidth1.style.display     ="none"
aspectRatio.style.display   ="none"
aspectRatio0.style.display   ="none"
calcDiameter.style.display  ="inline"
calcDiameter0.style.display  ="inline"
calcDiameter1.style.display  ="none"
space.style.display        ="none"
space0.style.display        ="none"

const tireDia = document.getElementById("tireDia")
const tireWid = document.getElementById("tireWid")
const aspRat  = document.getElementById("aspRat")
const tireWt  = document.getElementById("tireWt")
const calcDia = document.getElementById("calcDia")
const spc0    = document.getElementById("spc0")
const wheelDia= document.getElementById("wheelDia")
const wheelWt = document.getElementById("wheelWt")
const tireRes = document.getElementById("tireRes")
const wheelRes= document.getElementById("wheelRes") 
const totalRes= document.getElementById("totalRes")

const toolTip = document.getElementById("toolTip")
const tipText = document.getElementById("tipText")
const toolTip0= document.getElementById("toolTip0")
const tipText0= document.getElementById("tipText0")
const toolTip1= document.getElementById("toolTip1")
const tipText1= document.getElementById("tipText1")

tireDia.placeholder  = "input dia. (larger than wheel)"
tireWid.placeholder  = "input mm"
aspRat.placeholder   = "input %"
tireWt.placeholder   = "input wt."
wheelDia.placeholder = "input dia. (smaller than tire)"
wheelWt.placeholder  = "input wt."
tireRes.placeholder  = "need more input"
wheelRes.placeholder = "need more input"
totalRes.placeholder = "need more input"

tireDia.type = "number"
tireWid.type = "number"
calcDia.type = "checkbox"
spc0.type    = "checkbox"
aspRat.type  = "number"
tireWt.type  = "number"
wheelDia.type= "number"
wheelWt.type = "number"
tireRes.type = "number"
wheelRes.type= "number"
totalRes.type= "number"


tireDia.min  = 0
tireWid.min  = 0
aspRat.min   = 0
tireWt.min   = 0
wheelDia.min = 0
wheelWt.min  = 0

tireDia.max  = 100
tireWid.max  = 1000
aspRat.max   = 100
tireWt.max   = 100
wheelDia.max = 100
wheelWt.max  = 100


toolTip.addEventListener('mouseover',  () => tipText.style.display='inline', false) 
toolTip.addEventListener('mouseleave', () => tipText.style.display='none', false) 
toolTip0.addEventListener("mouseover", () => tipText0.style.display='inline', false)
toolTip0.addEventListener('mouseleave',() => tipText0.style.display="none", false)
toolTip1.addEventListener("mouseover", () => tipText1.style.display='inline', false)
toolTip1.addEventListener('mouseleave',() => tipText1.style.display="none", false)


tireDia.addEventListener("click", () => tireDia.value = null)
tireWid.addEventListener("click", () => tireWid.value = null)
aspRat.addEventListener("click", () => aspRat.value = null)
tireWt.addEventListener("click", () => tireWt.value = null)
wheelDia.addEventListener("click", () => wheelDia.value = null)
wheelWt.addEventListener("click", () => wheelWt.value = null)


tireDia.addEventListener("input", calculateTireInertia)
tireWid.addEventListener("input", calculateTireInertia)
aspRat.addEventListener("input", calculateTireInertia)
wheelDia.addEventListener("input", calculateWheelInertia) //wheelDia needs to calculate both inertias in the case that standard notation is used
wheelDia.addEventListener("input", calculateTireInertia) //wheelDia needs to calculate both inertias in the case that standard notation is used
tireWt.addEventListener("input", calculateTireInertia)
wheelWt.addEventListener("input", calculateWheelInertia)

tireDia.addEventListener("input", ()=> tireDia.validity.valid||(tireDia.value=''))
tireWid.addEventListener("input", ()=> tireWid.validity.valid||(tireWid.value=''))
aspRat.addEventListener("input", ()=> aspRat.validity.valid||(aspRat.value=''))
wheelDia.addEventListener("input", ()=> wheelDia.validity.valid||(wheelDia.value=''))
wheelDia.addEventListener("input", validateWheelSmallerThanTire) //also check wheel is smaller than tire
tireWt.addEventListener("input", ()=> tireWt.validity.valid||(tireWt.value=''))
wheelWt.addEventListener("input", ()=> wheelWt.validity.valid||(wheelWt.value=''))

function validateWheelSmallerThanTire() {
  if (tireDia.value)
   {wheelDia.value<tireDia.value||(wheelDia.value ='tire!fit')}
}

calcDia.addEventListener("change", displayTireSizeElements)
spc0.addEventListener("change", displayTireSizeElements)



function displayTireSizeElements() {
  tireDia.value = null
  tireWid.value = null
  aspRat.value = null
  tireRes.value=null
  totalRes.value=null
  if (aspectRatio.style.display === "none") {aspectRatio.style.display = "inline"} 
  else {aspectRatio.style.display = "none"} 
  if (aspectRatio0.style.display === "none") {aspectRatio0.style.display = "inline"} 
  else {aspectRatio0.style.display = "none"} 
  if (tireWidth.style.display === "none") {tireWidth.style.display = "inline"} 
  else {tireWidth.style.display = "none"} 
  if (tireWidth0.style.display === "none") {tireWidth0.style.display = "inline"} 
  else {tireWidth0.style.display = "none"} 
  if (tireWidth1.style.display === "none") {tireWidth1.style.display = "inline"} 
  else {tireWidth1.style.display = "none"} 
  if (tireDiameter.style.display === "none") {tireDiameter.style.display = "inline"} 
  else {tireDiameter.style.display = "none"}
  if (tireDiameter0.style.display === "none") {tireDiameter0.style.display = "inline"} 
  else {tireDiameter0.style.display = "none"}  
  if (tireDiameter1.style.display === "none") {tireDiameter1.style.display = "inline"} 
  else {tireDiameter1.style.display = "none"}
  if (calcDiameter.style.display === "none") {
    calcDia.checked = spc0.checked
    calcDiameter.style.display = "inline"
    calcDiameter0.style.display = "inline"
    calcDiameter1.style.display = "none"
  } else {
    calcDiameter.style.display = "none"
    calcDiameter0.style.display = "none"
    calcDiameter1.style.display = "inline"
  } 
  if (space0.style.display === "none") {
    spc0.checked=calcDia.checked
    space.style.display="inline"
    space0.style.display = "inline"
  } else {
    space.style.display = "none"
    space0.style.display = "none"
  } 
}

function calcTireDiaFromSize () {
  const sideWallHeight_in = (aspRat.value/100) * (tireWid.value/25.4)
  tireDia.value = (parseFloat(wheelDia.value) + 2*sideWallHeight_in)
  console.log("tire diameter in inches is " + tireDia.value)
}


function calculateTireInertia() {
  if (spc0.checked && tireWid.value && aspRat.value && wheelDia.value) {calcTireDiaFromSize()}
  if (tireDia.value && tireWt.value) {
  const tireRad_m = parseFloat(tireDia.value) * 0.0254/2;                           // console.log('tire radius in meters: ' + tireRad_m)
  const tireMass_kg = parseFloat(tireWt.value) * 0.453592;                          // console.log('tire mass in kilograms: ' + tireMass_kg)
  const treadInertia = 0.75 * tireMass_kg * tireRad_m * tireRad_m       // console.log('treadInertia in kg*m^2: ' + treadInertia)
  const wheelRad_m = (wheelDia.value) * 0.0254 / 2
  const sidewallInertia = 0.25 * (1/2) * tireMass_kg * (tireRad_m * tireRad_m + wheelRad_m * wheelRad_m)// console.log('sidewallInertia in kg*m^2: ' + sidewallInertia)
  tireRes.value = (treadInertia + sidewallInertia).toFixed(1)
  calculateTotalInertia()}
}


function calculateWheelInertia() {                                                          //console.log( (wheelDia.value))
  if (wheelDia.value && wheelWt.value) {
    const wheelRad_m = parseFloat(wheelDia.value) * 0.0254 / 2                                            //  console.log('wheel radius in meters: ' + wheelRad_m)
    const wheelMass_kg = parseFloat(wheelWt.value) * 0.453592                                             //console.log('tire mass in kilograms: ' + wheelMass_kg)
    const spokeInertia = 0.25 * (1/2) * wheelMass_kg * (wheelRad_m*wheelRad_m + 0.165 * 0.165)  //console.log("spokeInertia is " + spokeInertia)
    const hubInertia = 0.20 * (1/2) * wheelMass_kg * 0.165 * 0.165                              //console.log("hub inertia is " + hubInertia)
    const rimInertia = 0.55 * wheelMass_kg * wheelRad_m * wheelRad_m                            //console.log("RIM inertia is " + rimInertia)
    wheelRes.value = (rimInertia + spokeInertia + hubInertia).toFixed(1)
    calculateTotalInertia()}
}


function calculateTotalInertia() {
  let tireInertia = 0;
  let wheelInertia = 0;
  if (tireRes.value) {tireInertia = parseFloat(tireRes.value)}
  if (wheelRes.value) {wheelInertia = parseFloat(wheelRes.value)}
  const totalInertia = (tireInertia + wheelInertia).toFixed(1)

  totalRes.value = totalInertia
 
}

function validateFormData () {

}
