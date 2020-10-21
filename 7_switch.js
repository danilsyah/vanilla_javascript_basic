const foo = "Papayas";
let namaBuah = "";
switch (foo) {
    case "Papayas":
        namaBuah = "papaya";
        console.log(namaBuah)
        break;
    case "salah":
        namaBuah = "salak";
        break;
    default:
        namaBuah = "semangka"
        break;

}

const nomor = 1;
function pilihBuah(nomor){
    switch (nomor) {
        case 1:
        case 2:
            return "salak";
        case 3:
            return "jambu";
        case 4:
            return "rambutan";
        default:
            return "ga ada pilihan";
    }
}

console.log(pilihBuah(1))