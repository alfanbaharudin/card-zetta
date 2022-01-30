const array1 = [1, 29, 88, 37, 22, '90'];

function result(array1) {
	let hasil = true;
  	for (let i = 0; i < array1.length; i++) {
	    if (array1[i] >= 91) {
	        hasil = false;
	        break;
	    }
	}
	return hasil;
}

console.log(result(array1));