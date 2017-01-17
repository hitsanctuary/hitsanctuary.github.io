gear_loadout = function() {
	
}

kiki_helm = function() {
	$('#part_title').html('Helm')
	$('#select_gear').attr('value','helm')
	helm_pieces = '<option value="empty">Select Helm</option>'+
		'<option value="silver_fox_bead">Silver Fox Bead</option>'+
		'<option value="glorious_wreath">Glorious Wreath</option>'+
		'<option value="disciplinary_thorn">Disciplinary Thorn</option>'
	$('#select_gear').html(helm_pieces)
	gear_loadout()
}

kiki_spec = function() {
	console.log('Kiki has been summoned.')
	$('#helm').click(kiki_helm)
}

$(document).ready(kiki_spec)