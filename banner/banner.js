img = new Array('1','2','3','4');

indice = 0;

setInterval("mudaImg()", 3000);
	
function mudaImg(i) {

	if (i == 0 || i == 1 || i == 2 || i == 3) {
		
		indice = i;
		
	} else {
		
		if (indice == img.length - 1) {
			
			indice = 0;
			
		} else {
			
			indice++;
			
		}
		
	}
	
	document.getElementById("banner_1").setAttribute("class", "");
	document.getElementById("banner_2").setAttribute("class", "");
	document.getElementById("banner_2").setAttribute("class", "");
	document.getElementById("banner_2").setAttribute("class", "");
	document.getElementById("banner_" + img[indice]).setAttribute("class", "hover");
	document.getElementById("banner").innerHTML = "<img src='banner/"+ img[indice] +".jpg' width='1000' height='300' border='0' alt='Banner'>";

}