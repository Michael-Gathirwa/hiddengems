// Select modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

// Define gem data
const gemDetails = {
  "Karura Forest": {
    name: "Karura Forest",
    image: "images/karura.jpg",
    description: `
      Karura Forest is one of Nairobi's hidden treasures, offering a serene escape from the bustling city. 
      <ul>
        <li>Scenic nature trails for walking, running, and cycling.</li>
        <li>Beautiful waterfalls and picnic sites.</li>
        <li>Historical caves with cultural significance.</li>
        <li>Over 200 bird species and diverse flora and fauna.</li>
      </ul>
      <p><strong>Entrance Fee:</strong> Ksh 200 (Citizens), Ksh 600 (Residents), Ksh 1200 (Non-Residents).</p>
      <p><strong>Operating Hours:</strong> 6:00 AM - 6:00 PM, Daily.</p>
    `
  },
  "Matbronze Gallery": {
    name: "Matbronze Gallery",
    image: "images/matbronze.jpg",
    description: `
      Matbronze Gallery is a hidden art hub in Nairobi, showcasing exquisite bronze sculptures and unique designs.
      <ul>
        <li>A diverse collection of handcrafted bronze sculptures.</li>
        <li>An on-site café serving light meals and beverages.</li>
        <li>Workshops on bronze casting and art appreciation.</li>
      </ul>
      <p><strong>Opening Hours:</strong> 9:00 AM - 5:00 PM, Monday to Saturday.</p>
    `
  },
  "K1 Klub House": {
    name: "K1 Klub House ,Ojijo Road, Parklands, Nairobi",
    image: "images/K1.jpg",
    description: `
      K1 Klub House is a popular entertainment venue in Nairobi, offering a unique blend of music, food, and culture.
      <ul>
        <li>Unique eco-friendly products made from recycled materials.</li>
        <li>A vibrant space for art exhibitions and workshops.</li>
        <li>On-site shops featuring local handmade crafts.</li>
      </ul>
      <p><strong>Opening Hours:</strong> 10:00 AM - 6:00 PM, Tuesday to Sunday.</p>
    `
  }
};

// Add click event listeners to gems
document.querySelectorAll('.gem').forEach(gem => {
  gem.addEventListener('click', () => {
    const gemName = gem.getAttribute('data-name'); // Get the gem's name
    const gemData = gemDetails[gemName];          // Find the gem's details

    if (gemData) {
      modalImage.src = gemData.image;             // Update modal image
      modalTitle.textContent = gemData.name;      // Update modal title
      modalDescription.innerHTML = gemData.description; // Update modal description

      modal.style.display = 'flex';                // Show the modal (set display to 'flex')
    }
  });
});

// Close modal functionality
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';  // Close the modal (set display to 'none')
});

// Close the modal if user clicks outside of it
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';  // Close the modal if clicked outside
  }
});
