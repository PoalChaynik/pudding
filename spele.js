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
    //atvertieLaukumi += laukums
    }
    else
    {
    atvertsJaunsLaukums = false
    console.log(atvertsJaunsLaukums)
    }
    //console.log(atvertieLaukumi)
    console.log(pedejieDivi)
}