
let usia = 25;
let hari = "senin";
let membawaMember = true;

let hargaDasar = 50000;
let hargaAkhir = hargaDasar;

if (usia < 5){
    hargaTiket = 0;
} else if
 (usia >= 5 && usia <= 12) {
    hargaTiket = hargaDasar * 0.5;
} else if (usia >= 60) {
    hargaTiket = hargaDasar * 0.7;
} else {
    hargaTiket = hargaDasar;
}

if 
(hari === "senin" || hari === "selasa" || hari === "rabu" || hari === "kamis") {
        hargaAkhir -= (hargaDasar * 0.10);
} else if 
    (hari === "jumat") {
} else if 
    (hari === "sabtu" , hari === "minggu") {
        hargaAkhir += (hargaDasar * 0.20); 
}
    
if (membawaMember) {
    hargaAkhir = hargaAkhir * 0.85;
    console.log("Harga akhir:", hargaAkhir);
}

console.log("Usia: " + usia + " tahun");
console.log("Hari: " + hari);
console.log("Status Member: " + (bawaKartuMember ? "true" : "false"));
console.log("Harga Tiket Akhir: Rp" + hargaAkhir);
