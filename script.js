const modal = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Modal open karne ke liye
openModalBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    if(name === "") {
        alert("Please fill out the form first!");
    } else {
        modal.style.display = 'flex';
    }
});

// Modal close karne ke liye (Cancel button)
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Confirm submission
confirmBtn.addEventListener('click', () => {
    alert("Form Submitted Successfully!");
    modal.style.display = 'none';
    document.getElementById('mainForm').reset();
});

// Modal ke bahar click karne se band ho jaye
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};