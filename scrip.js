// 1. Pilih tombol dari HTML berdasarkan ID-nya yang bernama 'sapaButton'
// PERBAIKAN: Mengganti tanda (-) dengan (=) dan merapikan tulisan 'document.getElementById'
const tombolSapa = document.getElementById('sapaButton');

// 2. Tambahkan 'event listener' untuk mendeteksi aksi 'click' pada tombol
// PERBAIKAN: Menghapus huruf 'a' pada 'tombolaSapa' menjadi 'tombolSapa'
tombolSapa.addEventListener('click', function() {
    // 3. Jalankan kode ini ketika tombol di-klik (menampilkan notifikasi peringatan/pop-up)
    alert('Halo! Terima kasih sudah berkunjung!');
});
