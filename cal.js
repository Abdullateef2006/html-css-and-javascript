function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
}
function cleardisp(){
    form.displayResult.value = null
}

function cos() {
	form.displayResult.value = Math.cos(form.displayResult.value  * Math.PI / 180);
}

function sin() {
	form.displayResult.value = Math.sin(form.displayResult.value  * Math.PI / 180);
}
function tan() {
	form.displayResult.value = Math.tan(form.displayResult.value  * Math.PI / 180);
}
function log() {
	form.displayResult.value = Math.log(form.displayResult.value);
}
function root() {
	form.displayResult.value = Math.sqrt(form.displayResult.value);
}
function cuberoot() {
	form.displayResult.value = Math.cbrt(form.displayResult.value);
}

function power() {
	form.displayResult.value =  Math.pow(form.displayResult.value,2);
}
function power3() {
	form.displayResult.value =  Math.pow(form.displayResult.value,3);
}
function pi() {
	form.displayResult.value = (form.displayResult.value  * Math.PI );
} 
function sinh() {
	form.displayResult.value = Math.asin(form.displayResult.value);
}
function cosh() {
	form.displayResult.value = Math.acos(form.displayResult.value);
}
function tanh() {
	form.displayResult.value = Math.atan(form.displayResult.value);
}
