

function changeStyle(){
	var input_width_val = document.getElementById('width').value
	var input_height_val = document.getElementById('height').value
	var input_bgColor_val = document.getElementById('bgColor').value
	var position = document.getElementById('position').value
	var top = document.getElementById('top').value
	var left = document.getElementById('left').value
	var transition = document.getElementById('transition').value


	//var bgimage = document.getElementById('bgimage').value
	var input_bcolor_val = document.getElementById('bcolor').value
	var input_bwidth_val = document.getElementById('bwidth').value




	document.getElementById('kvadrat').style.width = input_width_val
	document.getElementById('kvadrat').style.height = input_height_val
	document.getElementById('kvadrat').style.background = input_bgColor_val
	document.getElementById('kvadrat').style.position = position
	document.getElementById('kvadrat').style.top = top
	document.getElementById('kvadrat').style.left = left
	document.getElementById('kvadrat').style.transition = transition




	//document.getElementById('kvadrat').style.backgroundImage = bgimage
	document.getElementById('kvadrat').style.borderColor = input_bcolor_val
	document.getElementById('kvadrat').style.borderWidth = input_bwidth_val

}



