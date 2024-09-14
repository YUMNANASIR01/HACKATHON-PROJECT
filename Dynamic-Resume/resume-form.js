"use strict";
let form = document.getElementById("form");
function saveProfilePicture(fileInput) {
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imageUrl = event.target?.result;
            localStorage.setItem('from_image', imageUrl); // Save image as base64 URL
        };
        reader.readAsDataURL(file);
    }
}
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('from_name', document.getElementById("firstName").value);
    localStorage.setItem('from_jobtitle', document.getElementById("job").value);
    localStorage.setItem('from_phone', document.getElementById("phoneNo").value);
    localStorage.setItem('from_email', document.getElementById("email").value);
    localStorage.setItem('from_link', document.getElementById('linkedin').value);
    localStorage.setItem('from_degree', document.getElementById("degree").value);
    localStorage.setItem('from_institution', document.getElementById("institution").value);
    localStorage.setItem('from_graduation', document.getElementById("graduation").value);
    localStorage.setItem('from_skills', document.getElementById("skills").value);
    localStorage.setItem('from_company', document.getElementById("company").value);
    localStorage.setItem('from_startDate', document.getElementById("startDate").value);
    localStorage.setItem('from_endDate', document.getElementById("endDate").value);
    localStorage.setItem('from_description', document.getElementById("description").value);
    // Save profile picture
    saveProfilePicture(document.getElementById("file"));
    // Redirect to the resume page
    window.location.href = "./Dynamic.html";
});
