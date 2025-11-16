// Fix Date 16.11.2025
document.addEventListener('DOMContentLoaded', () => {
    const likeLinks = document.querySelectorAll('a.item-likes-count');
    const commentLinks = document.querySelectorAll('a.item-comments-count');
    const allLinks = [...likeLinks, ...commentLinks];
    allLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });
});
