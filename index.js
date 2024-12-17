// Select modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

// Define gem data
const gemDetails = {
  "Iced mint": {
    name: "Iced mint",
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
      <p><strong>Operating Hours:</strong> 6:00 AM - 7:00 PM, Daily.</p>
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
  },
  "Yunion": {
    name: "Yunion",
    image: "images/K1.jpg",
    description: `
      Yunion is a restaurant that offers a fusion of gourmet dining and café vibe. It is described as a hotspot where creatives, artists, and others can blend work with relaxation. 
      <ul>
        <li>Yunion’s menu is a fusion of tasty dishes, and the restaurant also hosts exciting events.</li>
        <li>delightful fusion of tasty dishes and exciting events, with cosy seating and a welcoming atmosphere</li>
        <li>Yunion serves International cuisine.</li>
      </ul>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAsRJREFUOE9tVE1IVFEU/r47qVEaFRRUm5BaRqsgxFxkzkjLaCHoaOP81CISQnERQT9EFARuQtI3Wb4JV60idAa0KC0CVy01ghYtIyFI/Hnv5L3v3TdvtLcYzp1z7jnfOd89H0EAYn6gP23pr3oKLOMjINVjGF2N1P7oIkMryB1LS4IioTcoWJMzRBFLFgR1ZjKHvIR3XonfTKoGi9ImEMAD/B+bnj8/OzH1nRSTWSe35Y2VzPZeBmSCQGPglKg3AWPBGiU9Um6Vx0uPbP9RslQhfQSCJRE0VivU4goK1E4VQFvFKX2M5q3dyXzPAMARCDYSvnfSS+wahMj1aPrbDJNYt+jzRbnoZuLkIZnreQxwKORyksBxCBYBTqg9+5c3Vn83KyJD4SAoFAkwEpgrO2675ivETKRy3aMCXLNE0ucw6X8A1CVQnQa8b6CaEh+tgDy0D4jAwoxTarVPRw8TqXxPUQT90fNYYyPreRuU4ViHn9bqm1IN639+AtgXTvRzxXFbNKwIWTKXHgf8nAFPrFQc90BHNv2WxMWA+zDaxylQngJs08kUsTjtuGdqCEjl089EULAo1upXmxrWdz8AeAMUBDOS976qK9DffEfIMYNF8KX83D1rXpG9nMqmx0Dk7VkgV33I1wR4H+AFgZql4J5ATpBSNHkEUJCFmWI4Mwsvme0bgfIHYnuyIoLeStF9Y0lJZtMFAqO6uyoBnJtx3PbqzAh05vpuCrwnup0YM9r8JVTLFL8ZwOH/LM7LslO6ov+P2uzo7zqqVN2SQPYGaCNeIzu+GYYP3abiuemxyfltADS6dJcAJQAJ20YkR+ayLlDd0q0tuFNx3Lt2VFpcTIDVtWS+uwXAIIQHd6paiE3wV5NQdl69jsdE70xjDtQkEBvbpim1Tc+CoYa8G2Gj2dNw2oHa7dCDmEgGZlgwktyYTG6Z/wCbGicxrZfmkgAAAABJRU5ErkJggg=="/>
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
