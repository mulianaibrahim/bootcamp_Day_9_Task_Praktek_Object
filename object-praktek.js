const mobilferrari = {
    banDepanKiri: 'r17',
    banDepanKanan: 'r17',
    banBelakangKiri: 'r17',
    banBelakangKanan: 'r17',
    merek: 'ferrari',
    cc: '5000',
    tipe: 'sport',
    warna: 'merah',
    'panjang mobil': '200cm',
};

const key = 'merek';
console.log(mobilferrari[key]); // buat ngambil
console.log(mobilferrari.tipe); // cara 2 buat ngambil
mobilferrari.lebar = '180'; // buat ganti dadta pada sebuah key
mobilferrari['lebar'] = '170cm'; // buat ganti data sebuah key
delete mobilferrari.tipe // buat hapus
console.log(mobilferrari);
