
const buttons = document.querySelectorAll('.toggle-btn');
const sections : any = {
    'toggle-objective': document.getElementById('objective-section'),
    'toggle-education': document.getElementById('education-section'),
    'toggle-skills': document.getElementById('skills-section'),
    'toggle-work-experience': document.getElementById('work-experience-section'),
};

// Add event listeners to each button for toggling
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const targetId = (event.target as HTMLElement).id;
        const section = sections[targetId];
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    });
});
