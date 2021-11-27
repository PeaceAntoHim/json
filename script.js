//   Cara JSON.stringify

// let mahasiswa = {
//     nama: "Frans Sebastian",
//     nrp: "05221545132",
//     email: "franssebastian15@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa)); 


//  Cara JSON.parse (vanila javascript)

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

//      Cara Ajax jquery

$.getJSON('coba.json', function(data) {
    console.log(data)
});