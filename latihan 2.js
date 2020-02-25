

function clean (){
	document.form.hasil.value = "";
	document.form.bil1.value = "";
	document.form.bil2.value = "";
}
function back(){
	const exp = document.form.hasil.value;
	document.form.hasil.value = exp.substring(0,exp.length-1);
}
function plus(num3){
	num1 = Number(document.form.bil1.value)
	num2 = Number(document.form.bil2.value)
	num3 = num1+num2;
	document.form.hasil.value = num3;
	if (isNaN(num3)) {
	
		document.form.hasil.value = "Inputan Harus Berupa Angka !!!!!!!"
	}
	
	else{

		document.form.hasil.value
	
	
	}
}
function minus(){
	num1 = Number(document.form.bil1.value)
	num2 = Number(document.form.bil2.value)
	num3 = num1-num2;
	document.form.hasil.value = num3;
	if (isNaN(num3)) {
	
		document.form.hasil.value = "Inputan Harus Berupa Angka !!!!!!!"
	}
	
	else{

		document.form.hasil.value
	
	
	}
}
function multi(){
	num1 = Number(document.form.bil1.value)
	num2 = Number(document.form.bil2.value)
	num3 = num1*num2;
	document.form.hasil.value = num3;
	if (isNaN(num3)) {
	
		document.form.hasil.value = "Inputan Harus Berupa Angka !!!!!!!"
	}
	
	else{

		document.form.hasil.value
	
	
	}
}
function devide(){
	num1 = Number(document.form.bil1.value)
	num2 = Number(document.form.bil2.value)
	num3 = num1/num2;
	document.form.hasil.value = num3;
	if (isNaN(num3)) {
	
		document.form.hasil.value = "Inputan Harus Berupa Angka !!!!!!!"
	}
	
	else{

		document.form.hasil.value
	
	
	}
}