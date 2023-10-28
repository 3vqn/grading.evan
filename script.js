let namaKamu = prompt('Masukan nama anda.')
document.write(`Atas nama ${namaKamu} <br>`)
let lastGrade = parseFloat(prompt('Masukan nilai anda.'))

if (isNaN(lastGrade) || lastGrade < 0 || lastGrade > 100) {
    alert("Masukan angka yang valid dan dalam rentang 0-99.");
} else if (lastGrade >= 96) {
    document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade A`);
} else if (lastGrade >= 90) {
    document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade B`);
} else if (lastGrade >= 86) {
    document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade C`);
} else if (lastGrade >= 81) {
    document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade D`);
} else if (lastGrade >= 76) {
    document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade E`);
} else if (lastGrade >= 66) {
    document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade F`);
} else {
    document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade F-`);
}

// COMPLICATED VER (KINDA)
/*
    let namaKamu = prompt('Masukan nama anda.')
    document.write(`Atas nama ${namaKamu} <br>`)
    let lastGrade = parseFloat(prompt('Masukan nilai anda.'))

    if (isNaN(lastGrade)) {
        alert("Masukan angka yang valid.");
    } if (lastGrade < 0 || lastGrade > 100) {
        alert("Nilai harus dari 0-99.");
    } else if (lastGrade >= 96 && lastGrade <=99) {
        document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade A`);
    } else if (lastGrade >= 90 && lastGrade <= 95) {
        document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade B`);
    } else if (lastGrade >= 86 && lastGrade <= 90) {
        document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade C`);
    } else if (lastGrade >= 81 && lastGrade <= 86) {
        document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade D`);
    } else if (lastGrade >= 76 && lastGrade <= 81) {
        document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade E`);
    } else if (lastGrade >= 66 && lastGrade <= 76) {
        document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade F`);
    } else if (lastGrade >= 0 && lastGrade <= 66) {
        document.write(`Selamat anda mendapatkan nilai ${lastGrade} Grade F-`);
    }
*/
