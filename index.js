const tireDiameter  = document.getElementById("tireDiameter")
const tireWidth     = document.getElementById("tireWidth")
const aspectRatio   = document.getElementById("aspectRatio")
const calcDiameter  = document.getElementById("calcDiameter")
const wheelDiameter = document.getElementById("wheelDiameter")
const tireWeight    = document.getElementById("tireWeight")
const space0        = document.getElementById("space0")
const wheelWeight   = document.getElementById("wheelWeight")

tireDiameter.style.display  ="block"
tireWidth.style.display     ="none"
aspectRatio.style.display   ="none"
calcDiameter.style.display  ="block"
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

tireDia.placeholder  = "input dia."
tireWid.placeholder  = "input mm"
aspRat.placeholder   = "input %"
tireWt.placeholder   = "input wt."
wheelDia.placeholder = "input dia."
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
tireWid.max  = 100
aspRat.max   = 100
tireWt.max   = 100
wheelDia.max = 100
wheelWt.max  = 100


toolTip.addEventListener('mouseover',  () => tipText.style.display='block', false) 
toolTip.addEventListener('mouseleave', () => tipText.style.display='none', false) 
toolTip0.addEventListener("mouseover", () => tipText0.style.display='block', false)
toolTip0.addEventListener('mouseleave',() => tipText0.style.display="none", false)
toolTip1.addEventListener("mouseover", () => tipText1.style.display='block', false)
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
wheelDia.addEventListener("input", calculateTireInertia)
tireWt.addEventListener("input", calculateTireInertia)
wheelWt.addEventListener("input", calculateWheelInertia)

calcDia.addEventListener("change", displayTireSizeElements)
spc0.addEventListener("change", displayTireSizeElements)



function displayTireSizeElements() {
  tireDia.value = null
  tireWid.value = null
  aspRat.value = null
  tireRes.value=null
  totalRes.value=null
  if (aspectRatio.style.display === "none") {aspectRatio.style.display = "block"} 
  else {aspectRatio.style.display = "none"} 
  if (tireWidth.style.display === "none") {tireWidth.style.display = "block"} 
  else {tireWidth.style.display = "none"} 
  if (tireDiameter.style.display === "none") {tireDiameter.style.display = "block"} 
  else {tireDiameter.style.display = "none"} 
  if (calcDiameter.style.display === "none") {
    calcDia.checked = spc0.checked
    calcDiameter.style.display = "block"
  } else {calcDiameter.style.display = "none"} 
  if (space0.style.display === "none") {
    spc0.checked=calcDia.checked
    space0.style.display = "block"
  } else {space0.style.display = "none"} 
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

 