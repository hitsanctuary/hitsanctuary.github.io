//Update stats
	update_item = function() {
		$('#attack').html(weapon_att + jewel_1_att + jewel_2_att)
		$('#att_spd').html(weapon_att_spd + jewel_1_att_spd + jewel_2_att_spd)
		$('#crit').html(weapon_crit + jewel_1_crit + jewel_2_crit)
		$('#crit_dmg').html(weapon_crit_dmg + jewel_1_crit_dmg + jewel_2_crit_dmg)
	}
$(document).ready(
	function() {
		$('#finalize_item').click(update_item)
	}
)
	
//Adding Jewels to Item
add_jewel = function() {
	jewel_1 = $('#select_jewel_slot_1 :selected').val();
	jewel_1_type = $('#select_jewel_slot_1 :selected').html();
	jewel_2 = $('#select_jewel_slot_2 :selected').val();
	jewel_2_type = $('#select_jewel_slot_2 :selected').html();
	jewel_3 = $('#select_jewel_slot_3 :selected').val();
	jewel_3_type = $('#select_jewel_slot_3 :selected').html();
	//Setting Slot 1 Stats
	ruby_1 = function(){
		jewel_1_att = parseInt(jewel_1)
		jewel_1_att_spd = 0
		jewel_1_crit_dmg = 0
		jewel_1_crit = 0 
	}
	sapphire_1 = function(){
		jewel_1_att_spd = parseInt(jewel_1) 
		jewel_1_att = 0
		jewel_1_crit_dmg = 0
		jewel_1_crit = 0 
	}
	emerald_1 = function(){
		jewel_1_crit_dmg = parseInt(jewel_1) 
		jewel_1_att = 0
		jewel_1_att_spd = 0 
		jewel_1_crit = 0 
	}
	topaz_1 = function(){
		jewel_1_crit = parseInt(jewel_1) 
			jewel_1_crit_dmg = 0
			jewel_1_att = 0 
			jewel_1_att_spd = 0
	}
	//Setting Slot 2 Stats
	ruby_2 = function(){
		jewel_2_att = parseInt(jewel_2)
		jewel_2_att_spd = 0
		jewel_2_crit_dmg = 0
		jewel_2_crit = 0 
	}
	sapphire_2 = function(){
		jewel_2_att_spd = parseInt(jewel_2) 
		jewel_2_att = 0
		jewel_2_crit_dmg = 0
		jewel_2_crit = 0 
	}
	emerald_2 = function(){
		jewel_2_crit_dmg = parseInt(jewel_2) 
		jewel_2_att = 0
		jewel_2_att_spd = 0 
		jewel_2_crit = 0 
	}
	topaz_2 = function(){
		jewel_2_crit = parseInt(jewel_2) 
			jewel_2_crit_dmg = 0
			jewel_2_att = 0 
			jewel_2_att_spd = 0
	}
		//Jewel 1 Type
		if (jewel_1_type == 'Immortal Ruby'){ruby_1()}
		if (jewel_1_type == 'Legendary Ruby'){ruby_1()}
		if (jewel_1_type == 'Epic Ruby'){ruby_1()}
		if (jewel_1_type == 'Heroic Ruby'){ruby_1()}
		if (jewel_1_type == 'Rare Ruby'){ruby_1()}
		if (jewel_1_type == 'Uncommon Ruby'){ruby_1()}
		if (jewel_1_type == 'Immortal Sapphire'){sapphire_1()}
		if (jewel_1_type == 'Legendary Sapphire'){sapphire_1()}
		if (jewel_1_type == 'Epic Sapphire'){sapphire_1()}
		if (jewel_1_type == 'Heroic Sapphire'){sapphire_1()}
		if (jewel_1_type == 'Rare Sapphire'){sapphire_1()}
		if (jewel_1_type == 'Uncommon Sapphire'){sapphire_1()}
		if (jewel_1_type == 'Immortal Emerald'){emerald_1()}
		if (jewel_1_type == 'Legendary Emerald'){emerald_1()}
		if (jewel_1_type == 'Epic Emerald'){emerald_1()}
		if (jewel_1_type == 'Heroic Emerald'){emerald_1()}
		if (jewel_1_type == 'Rare Emerald'){emerald_1()}
		if (jewel_1_type == 'Uncommon Emerald'){emerald_1()}
		if (jewel_1_type == 'Immortal Topaz'){topaz_1()}
		if (jewel_1_type == 'Legendary Topaz'){topaz_1()}
		if (jewel_1_type == 'Epic Topaz'){topaz_1()}
		if (jewel_1_type == 'Heroic Topaz'){topaz_1()}
		if (jewel_1_type == 'Rare Topaz'){topaz_1()}
		if (jewel_1_type == 'Uncommon Topaz'){topaz_1()}
		//Jewel 2 Type
		if (jewel_2_type == 'Immortal Ruby'){ruby_2()}
		if (jewel_2_type == 'Legendary Ruby'){ruby_2()}
		if (jewel_2_type == 'Epic Ruby'){ruby_2()}
		if (jewel_2_type == 'Heroic Ruby'){ruby_2()}
		if (jewel_2_type == 'Rare Ruby'){ruby_2()}
		if (jewel_2_type == 'Uncommon Ruby'){ruby_2()}
		if (jewel_2_type == 'Immortal Sapphire'){sapphire_2()}
		if (jewel_2_type == 'Legendary Sapphire'){sapphire_2()}
		if (jewel_2_type == 'Epic Sapphire'){sapphire_2()}
		if (jewel_2_type == 'Heroic Sapphire'){sapphire_2()}
		if (jewel_2_type == 'Rare Sapphire'){sapphire_2()}
		if (jewel_2_type == 'Uncommon Sapphire'){sapphire_2()}
		if (jewel_2_type == 'Immortal Emerald'){emerald_2()}
		if (jewel_2_type == 'Legendary Emerald'){emerald_2()}
		if (jewel_2_type == 'Epic Emerald'){emerald_2()}
		if (jewel_2_type == 'Heroic Emerald'){emerald_2()}
		if (jewel_2_type == 'Rare Emerald'){emerald_2()}
		if (jewel_2_type == 'Uncommon Emerald'){emerald_2()}
		if (jewel_2_type == 'Immortal Topaz'){topaz_2()}
		if (jewel_2_type == 'Legendary Topaz'){topaz_2()}
		if (jewel_2_type == 'Epic Topaz'){topaz_2()}
		if (jewel_2_type == 'Heroic Topaz'){topaz_2()}
		if (jewel_2_type == 'Rare Topaz'){topaz_2()}
		if (jewel_2_type == 'Uncommon Topaz'){topaz_2()}
}
finalize_base = function() {
	$('#select_enhance').css('display','block')
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
			if (enhance == 1) {
				weapon_att = 12304
				weapon_att_spd = 3.9
				weapon_crit = 9.8
				weapon_crit_dmg = 40
			}
			if (enhance == 20) {
				weapon_att = 23248
				weapon_att_spd = 4.5
				weapon_crit = 11.9
				weapon_crit_dmg = 44.1
			}
		}
		if (grade == 'immortal') {
			if (enhance == 1) {
				weapon_att = 24976
				weapon_att_spd = 4.6
				weapon_crit = 12
				weapon_crit_dmg = 44.3
			}
			if (enhance == 20) {
				weapon_att = 46864
				weapon_att_spd = 5.4
				weapon_crit = 14.9
				weapon_crit_dmg = 49.8
			}
			if (enhance == 30) {
				weapon_att = 66448
				weapon_att_spd = 5.9
				weapon_crit = 16.4
				weapon_crit_dmg = 52.8
			}
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
	
	
}
change_enhance = function(){
	$('#select_enhance').css('display','block')
	grade = $('#select_grade :selected').val();
	
	if (grade == 'epic') {
			$('#select_enhance option').css('display','block')
			$('#select_enhance option').each(
				function(){ 
					options = $(this).val()
					if (options == '30') { $(this).css('display','none') }
				}
			)
	}
	if (grade == 'legendary') {
			$('#select_enhance option').css('display','block')
			$('#select_enhance option').each(
				function(){ 
					options = $(this).val()
					if (options == '30') { $(this).css('display','none') }
				}
			)
	}
	if (grade == 'immortal') {
			$('#select_enhance option').css('display','block')
			jewels = '<option value="Select Jewel Slot 1">Select Jewel Slot</option>'+
				'<option value="immortal_ruby">Immortal Ruby</option>'+
				'<option value="immortal_sapphire">Immortal Sapphire</option>'+
				'<option value="immortal_emerald">Immortal Emerald</option>'+
				'<option value="3.2">Immortal Topaz</option>'+
				'<option value="legendary_ruby">Legendary Ruby</option>'+
				'<option value="legendary_sapphire">Legendary Sapphire</option>'+
				'<option value="15">Legendary Emerald</option>'+
				'<option value="legendary_topaz">Legendary Topaz</option>'+
				'<option value="630">Epic Ruby</option>'+
				'<option value="2.4">Epic Sapphire</option>'+
				'<option value="13">Epic Emerald</option>'+
				'<option value="2.4">Epic Topaz</option>'+
				'<option value="310">Heroic Ruby</option>'+
				'<option value="2">Heroic Sapphire</option>'+
				'<option value="11">Heroic Emerald</option>'+
				'<option value="2">Heroic Topaz</option>'+
				'<option value="150">Rare Ruby</option>'+
				'<option value="1.6">Rare Sapphire</option>'+
				'<option value="9">Rare Emerald</option>'+
				'<option value="1.6">Rare Topaz</option>'+
				'<option value="70">Uncommon Ruby</option>'+
				'<option value="1.3">Uncommon Sapphire</option>'+
				'<option value="5">Uncommon Emerald</option>'+
				'<option value="1.3">Uncommon Topaz</option>'
			$('#select_jewel_slot_1').html(jewels)
			$('#select_jewel_slot_1').css('display','block')
			$('#select_jewel_slot_1').change(add_jewel)
			$('#select_jewel_slot_2').html(jewels)
			$('#select_jewel_slot_2').css('display','block')
			$('#select_jewel_slot_2').change(add_jewel)
			$('#select_jewel_slot_3').html(jewels)
			$('#select_jewel_slot_3').css('display','block')
			$('#select_jewel_slot_3').change(add_jewel)
	}
	$('#select_enhance').change(finalize_base)
	finalize_base()
}

change_grade = function(){
	kiki_weapon_stats = $('#select_gear :selected').val();
	
	$('#select_grade').css('display','block')
	
	if (kiki_weapon_stats == 'silver_fox_bead' || 'glorious_wreath' || 'disciplinary_thorn') {
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
	//Setting up blank values
	weapon_att = 0
	weapon_att_spd = 0
	weapon_crit = 
	weapon_crit_dmg = 0
	jewel_1_att = 0
	jewel_1_att_spd = 0
	jewel_1_crit = 0
	jewel_1_crit_dmg = 0
	jewel_2_att = 0
	jewel_2_att_spd = 0
	jewel_2_crit = 0
	jewel_2_crit_dmg = 0
}

$(document).ready(kiki_spec)