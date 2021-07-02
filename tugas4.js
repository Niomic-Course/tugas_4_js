function tinggiBadanSiswa(x, y, z) {
    let pertama = null;
    let kedua = null;
    let ketiga = null;

    if (x > y) {
        if (x > z) {
            pertama = 'saddam';
        } else {
            kedua = 'saddam';
        }
    } else {
        if (x < z) {
            ketiga = 'saddam';
        } else {
            kedua = 'saddam';
        }
    }

    if (y > z) {
        if (y > x) {
            pertama = 'rahmat';
        } else {
            kedua = 'rahmat';
        }
    } else {
        if (y < x) {
            ketiga = 'rahmat';
        } else {
            kedua = 'rahmat';
        }
    }

    if (z > x) {
        if (z > y) {
            pertama = 'fuad';
        } else {
            kedua = 'fuad';
        }
    } else {
        if (z < y) {
            ketiga = 'fuad';
        } else {
            kedua = 'fuad';
        }
    }

    console.log(`Yang tertinggi adalah: ${pertama}`);
    console.log('Urutan tertinggi:')
    console.log(`1. ${pertama}`);
    console.log(`2. ${kedua}`);
    console.log(`3. ${ketiga}`);
}

const saddam = 168;
const rahmat = 170;
const fuad = 165;

tinggiBadanSiswa(saddam, rahmat, fuad);
