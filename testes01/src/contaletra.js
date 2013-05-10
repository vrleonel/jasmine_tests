/**
 * Script Name
 */

var contaLetra = function(num){
	nomes = {
		'0': 'zero',
		'1':'um',
		'2':'dois',
		'3':'três',
		'4':'quatro',
		'5':'cinco',
		'6':'seis',
		'7':'sete',
		'8':'oito',
		'9':'nove',
		'10':'dez',
		'30':'trinta'
	};
	
	if( nomes[num] === undefined){
		console.log();
		nums = num.toString().split('');
		multi = 0;
		$.each(nums, function(i, val){
			if(i == 0){
				str = nomes[val*10];
			}else{
				str += 'e' + nomes[val];
			}
		});
		return(str.length);
	}else{

		return nomes[num].length;
	}
}	

