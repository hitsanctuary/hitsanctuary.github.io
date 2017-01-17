change_weapon = function() {
	kiki_weapon_stats = $('#select_gear :selected').val();
	if (kiki_weapon_stats == 'silver_fox_bead') {
		weapon_att = 24976
		weapon_att_spd = 4.6
		weapon_crit = 12
		weapon_crit_dmg = 44.3
	}
	if (kiki_weapon_stats == 'glorious_wreath') {
		weapon_att = 27469
		weapon_att_spd = 4.6
		weapon_crit = 8
		weapon_crit_dmg = 44.3
	}
	if (kiki_weapon_stats == 'disciplinary_thorn') {
		weapon_att = 27469
		weapon_att_spd = 4.6
		weapon_crit = 12
		weapon_crit_dmg = 34.5
	}
	
	$('#attack').html(weapon_att)
}

kiki_weapon = function() {
	$('#part_title').html('Weapon')
	$('#select_gear').css('display','block')
	console.log('Pick your weapon.')
	weapon_pieces = '<option value="empty">Select weapon</option>'+
		'<option value="silver_fox_bead">Silver Fox Bead</option>'+
		'<option value="glorious_wreath">Glorious Wreath</option>'+
		'<option value="disciplinary_thorn">Disciplinary Thorn</option>'
	$('#select_gear').html(weapon_pieces)
	$('#select_gear').change(change_weapon)
}

kiki_spec = function() {
	console.log('Kiki has been summoned.')
	$('#weapon').click(kiki_weapon)
}

$(document).ready(kiki_spec)