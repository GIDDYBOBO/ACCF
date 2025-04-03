function updateProfileImage(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        document.getElementById('profile-image').src = e.target.result;
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  function updateDisplayName() {
    const firstname = document.getElementById('firstname').value;
    const surname = document.getElementById('surname').value;
    let displayName = "Your Name";
    
    if (firstname || surname) {
      displayName = `${firstname} ${surname}`.trim();
    }
    
    document.getElementById('display-name').textContent = displayName;
  }
  
  document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Profile saved successfully! May your light shine bright in our community.");
  });