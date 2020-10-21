class Siswa {
    constructor(username, password, id_kelas){
        this.username = username;
        this.password = password;
        this.id_kelas = id_kelas;
    }

    gabung(){
        console.log(`${this.username} telah bergabung pada kelas ${this.id_kelas}`);
    }

    hitung(){
        console.log('hitunggg bro');
    }

}


// inheritance
class Langganan extends Siswa{
    constructor(username, paket, id_kelas){
        super(username, 323232, id_kelas);
        // super(id_kelas);
        this.paket = paket;
    }

    gabungPaket(){
        console.log('Hi ' + this.username + ' telah berlangganan ' +this.paket)
    }
}

// let tambahSiswa = new Siswa('danil syah', '3443221', 10);
// tambahSiswa.gabung();

let tambahLangganan = new Langganan('udin','Premuim', 32);
tambahLangganan.gabungPaket();
tambahLangganan.gabung();
tambahLangganan.hitung();
