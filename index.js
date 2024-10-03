document.getElementById('wishBtn').addEventListener('click', function() {
    const img = document.querySelector('img');
    const audio = document.getElementById('birthdaySong');
  
    img.classList.toggle('show');  // Toggle the image display
    audio.play();  // Play the birthday song
  });
  