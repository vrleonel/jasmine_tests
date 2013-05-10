var lista  = {
    '0':'zero',
    '1':'um',
    '2':'dois',
    '3':'tres',
    '4':'quatro',
    '5':'cinco',
    '6':'seis',
    '7':'sete',
    '8':'oito',
    '9':'nove',
    '10':'dez',
    '11': 'onze',
    '12': 'doze',
    '13': 'treze',
    '14': 'quatorze',
    '15': 'quinze',
    '16': 'dezesseis',
    '17': 'dezessete',
    '18': 'dezoito',
    '20': 'vinte',
    '30': 'trinta',
    '40': 'quarenta',
    '50': 'cinquenta',
    '60': 'sessenta',
    '70': 'setenta',
    '80': 'oitenta',
    '90': 'noventa',
    '100':'cento'
}

function contaLetra (num){
    console.log(lista[num])

    var str = "";

    if(lista[num] === undefined){
        var val = num.toString().split('');
        len = val.length - 1;
        e_concat = "";

        $.each(val, function(i, val){
            n =  val * Math.pow(10, len--);
            str +=  n === 0 ? "" : e_concat + lista[n];
            console.log('n = ', lista[n]);
            e_concat = "e";

        });

        return str.length;


    } else {
        if(num === 100 ){
            return "cem".length;
        }else{
            return lista[num].length;
        }
    }

}
