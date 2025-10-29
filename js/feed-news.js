/* Pembaruan tanggal 29.10.2025
Tambahkan gulir ke berita yang diperlukan */
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash; 
    if (hash.startsWith('#DKPost')) {
        const postId = hash.substring(8);
        const postElement = document.querySelector(`.card[data-id="${postId}"]`);
        if (postElement) {
            postElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
