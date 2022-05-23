let adrese = window.location.hash
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(',')
let vards = adrese[0]
let vecums = adrese[1]
let region = adrese[2]
console.log(adrese)

document.querySelector('.virsraksts').innerHTML = 'Sveiks '+vards+'!'

let atvertieLaukumi = []
let pedejieDivi = []
let laukumuSaturs = ['👽','🤠','👽','🤠','☠️','☠️']

function veiktGajienu(laukums)
{
    console.log('strādā')
    let atvertsJaunsLaukums = false

    if( atvertieLaukumi.indexOf(laukums) == -1 )
    {

    atvertsJaunsLaukums = true

    pedejieDivi.push(laukums)

    if(atvertsJaunsLaukums)
    {
    console.log('strada2')
    document.querySelector('#'+laukums+' div').style.visibility="visible";
        document.querySelector('#'+laukums+' div').style.opacity=1;

    }
    }
    else
    {
    atvertsJaunsLaukums = false
    console.log(atvertsJaunsLaukums)
    }
    if( pedejieDivi.length == 2 )
    {
    let atverts1 = pedejieDivi[0].replace('B','')
    let atverts2 = pedejieDivi[1].replace('B','')
    // console.log(atverts1)
    // console.log(atverts2)
    atverts1 = parseInt(atverts1,10)
    atverts2 = parseInt(atverts2,10)
    console.log(atverts1)
    console.log(atverts2)
    if( laukumuSaturs[atverts1] == laukumuSaturs[atverts2] )
    {
        console.log('Atverti vienadi')
        atvertieLaukumi.push( pedejieDivi[0],pedejieDivi[1] )
        pedejieDivi = []
    }
    else
    {
        console.log('Nav atverti vienadi')
        document.querySelector('#'+pedejieDivi[0]+' div').style.opacity=0.2
        document.querySelector('#'+pedejieDivi[1]+' div').style.opacity=0.2
        pedejieDivi = []
    }
    }
    console.log(pedejieDivi)
}