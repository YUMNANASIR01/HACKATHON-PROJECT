let form = document.getElementById("form") as HTMLFormElement;

function saveProfilePicture(fileInput: HTMLInputElement) {
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imageUrl = event.target?.result as string;
            localStorage.setItem('from_image', imageUrl); // Save image as base64 URL
        };
        reader.readAsDataURL(file);
    }
}

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Save form data to local storage
    localStorage.setItem('from_name', (document.getElementById("firstName") as HTMLInputElement).value);
    localStorage.setItem('from_jobtitle', (document.getElementById("job") as HTMLInputElement).value);
    localStorage.setItem('from_phone', (document.getElementById("phoneNo") as HTMLInputElement).value);
    localStorage.setItem('from_email', (document.getElementById("email") as HTMLInputElement).value);
    localStorage.setItem('from_link', (document.getElementById('linkedin') as HTMLInputElement).value);
    localStorage.setItem('from_degree', (document.getElementById("degree") as HTMLInputElement).value);
    localStorage.setItem('from_institution', (document.getElementById("institution") as HTMLInputElement).value);
    localStorage.setItem('from_graduation', (document.getElementById("graduation") as HTMLInputElement).value);
    localStorage.setItem('from_skills', (document.getElementById("skills") as HTMLInputElement).value);
    localStorage.setItem('from_company', (document.getElementById("company") as HTMLInputElement).value);
    localStorage.setItem('from_startDate', (document.getElementById("startDate") as HTMLInputElement).value);
    localStorage.setItem('from_endDate', (document.getElementById("endDate") as HTMLInputElement).value);
    localStorage.setItem('from_description', (document.getElementById("description") as HTMLTextAreaElement).value);

    // Save profile picture
    saveProfilePicture(document.getElementById("file") as HTMLInputElement);

    // Redirect to the resume page
    window.location.href = "./Dynamic.html";

  
});