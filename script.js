function openLid() {
    const giftBox = document.querySelector('.gift-box');
    giftBox.classList.toggle('opened');
    
    // Show the birthday message after the box is opened
    const message = document.getElementById('message');
    if (giftBox.classList.contains('opened')) {
        message.style.opacity = '1';  // Fade in the message
        message.style.visibility = 'visible'; // Make message visible
    } else {
        message.style.opacity = '0';  // Hide message
        message.style.visibility = 'hidden'; // Make message invisible
    }
}
