let nama = prompt('Masukkan nama kamu!');  
document.write(`<h1>${nama}</h1>`);

let nilai = prompt('Masukkan Nilai');

if (isNaN(nilai)) {
    alert("Nilai yang dimasukkan bukan angka.");
} else {
    nilai = parseFloat(nilai);  
    if (nilai < 0 || nilai > 100) {
        alert("Nilai harus berada dalam rentang 0-99.");
    } else if (nilai < 66) {
        document.write(`<h1>Selamat kamu mendapatkan nilai F-</h1>`);
    } else if (nilai < 76) {
        document.write(`<h1>Selamat kamu mendapatkan nilai F</h1>`);
    } else if (nilai < 81) {
        document.write(`<h1>Selamat kamu mendapatkan nilai E</h1>`);
    } else if (nilai < 86) {
        document.write(`<h1>Selamat kamu mendapatkan nilai D</h1>`);
    } else if (nilai < 91) {
        document.write(`<h1>Selamat kamu mendapatkan nilai C</h1>`);
    } else if (nilai < 96) {
        document.write(`<h1>Selamat kamu mendapatkan nilai B</h1>`);
    } else if (nilai < 100) {
        document.write(`<h1>Selamat kamu mendapatkan nilai A</h1>`);
    }
}
