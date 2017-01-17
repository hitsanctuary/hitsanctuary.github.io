finalize_base = function() {
	kiki_weapon_stats = $('#select_gear :selected').val();
	grade = $('#select_grade :selected').val();
	enhance = $('#select_enhance :selected').val();
	
	if (kiki_weapon_stats == 'silver_fox_bead') {
		if (grade == 'epic') {
			if (enhance == 1) {
				weapon_att = 5968
				weapon_att_spd = 3.3
				weapon_crit = 7.8
				weapon_crit_dmg = 36.2
			}
			if (enhance == 20) {
				weapon_att = 11440
				weapon_att_spd = 3.8
				weapon_crit = 9.6
				weapon_crit_dmg = 39.7
			}
		}
		if (grade == 'legendary') {
			weapon_att = 12304
			weapon_att_spd = 3.9
			weapon_crit = 9.8
			weapon_crit_dmg = 40
		}
		if (grade == 'immortal') {
			weapon_att = 24976
			weapon_att_spd = 4.6
			weapon_crit = 12
			weapon_crit_dmg = 44.3
		}
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
	$('#att_spd').html(weapon_att_spd)
	$('#crit').html(weapon_crit)
	$('#crit_dmg').html(weapon_crit_dmg)
	
	$('#select_enhance').css('display','block')
}
change_enhance = function(){
	$('#select_enhance').css('display','block')
	$('#select_enhance').change(finalize_base)
}

change_grade = function(){
	kiki_weapon_stats = $('#select_gear :selected').val();
	
	$('#select_grade').css('display','block')
	
	if (kiki_weapon_stats == 'silver_fox_bead') {
		$('option').each(
			function(){
				options = $(this).val()
				if (options == 'common') { $(this).css('display','none') }
				if (options == 'uncommon') { $(this).css('display','none') }
				if (options == 'rare') { $(this).css('display','none') }
				if (options == 'heroic') { $(this).css('display','none') }
				if (options == 'epic') { $(this).css('display','auto') }
				if (options == 'legendary') { $(this).css('display','auto') }
				if (options == 'immortal') { $(this).css('display','auto') }
			}
		)
	}
	$('#select_grade').change(change_enhance)
}

kiki_weapon = function() {
	$('#part_title').html('Weapon')
	console.log('Pick your weapon.')
	weapon_pieces = '<option value="empty">Select weapon</option>'+
		'<option value="silver_fox_bead">Silver Fox Bead</option>'+
		'<option value="glorious_wreath">Glorious Wreath</option>'+
		'<option value="disciplinary_thorn">Disciplinary Thorn</option>'
	$('#select_gear').html(weapon_pieces)
	$('#select_gear').change(change_grade)
	
	$('#select_gear').css('display','block')
}

kiki_spec = function() {
	console.log('Kiki has been summoned.')
	$('#weapon').click(kiki_weapon)
}

$(document).ready(kiki_spec)