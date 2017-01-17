change_helm = function() {
	Kiki_Weapon = $('#select_gear :selected').val();
	if (Kiki_Weapon == 'silver_fox_bead') {
		weapon_att = 24976
		weapon_att_spd = 4.6
		weapon_crit = 12
		weapon_crit_dmg = 44.3
	}
	
	$('#attack').html(weapon_att)
}

kiki_helm = function() {
	$('#part_title').html('Helm')
	$('#select_gear').css('display','block')
	console.log('Pick your weapon.')
	helm_pieces = '<option value="empty">Select Helm</option>'+
		'<option value="silver_fox_bead">Silver Fox Bead</option>'+
		'<option value="glorious_wreath">Glorious Wreath</option>'+
		'<option value="disciplinary_thorn">Disciplinary Thorn</option>'
	$('#select_gear').html(helm_pieces)
	$('#select_gear :selected').change(change_helm)
}

kiki_spec = function() {
	console.log('Kiki has been summoned.')
	$('#helm').click(kiki_helm)
}

$(document).ready(kiki_spec)