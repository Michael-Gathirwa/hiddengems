// Select modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

// Define gem data
const gemDetails = {
  "urban": {
    name: "Urban Eatery",
    image: "UrE.jpg",
    description: `
      Offering an energized atmosphere in the heart of Nairobi, Urban Eatery consists of four different kitchens and our signature bar, with menus spanning from tasty early morning bites to more substantial evening feasts.
The high design and contemporary space brings together trendy dining which dovetails into our Urban lifestyles. 
We are a new experience - everyday ! 

      <p><strong>Operating Hours:</strong> Monday — Friday  7:00am-11:00pm</p>
      <p><strong>Operating Hours:</strong> Saturday — Sunday 9:00am-11:00pm</p> 
      <a href="https://www.instagram.com/urbaneaterynbo?igsh=MTNxZ2swYnhpY2pmNQ==" target="_blank"> <i class='bx bxl-instagram'></i> </a>
      <a href="mailto:gm@urbaneatery.co.ke,michaelgkiberenge@gmail.com?subject=Nairobi%20Hidden%20Gems&body=Hello%20There,%20I%20Would%20Like%20To%20Reserve%20A%20Table%20Please%20Let%20Me%20Know%20If%20This%20Is%20Possible.%20Thank%20You!."><i class='bx bxl-gmail'></i> </a>      
      <a href="https://wa.me/254737692622?text=Hello%20there!%20I%20Would%20Like%20To%20Reserve%20A%20Table%20Please%20Let%20Me%20Know%20If%20This%20Is%20Possible.%20Thank%20You!."><i class='bx bxl-whatsapp'></i> </a>`
      },
  "NSK": {
    name: "Nairobi Street Kitchen",
    image: "Nsk.jpg",
    description: `
      Whether it’s for a special celebration, drinks with friends, or a business lunch, the eclectic collection of Nairobi Street Kitchen restaurants, bars, and entertainment spaces set the perfect mood for any occasion
      <ul>
        <li>thrilling street-food market style experience where you can stroll through global food and drink offerings</li>
        <li>shop from artisanal merchants, or indulge your senses with our hosted live bands and thoughtfully curated local art selection</li>
      </ul>
      <p><strong>Operating Hours:</strong> 6:00 AM - 7:00 PM, Daily.</p>
      <a href="https://www.instagram.com/nairobi_street_kitchen?igsh=MXVtM28yNmZweHF5MQ==" target="_blank"> <i class='bx bxl-instagram'></i> </a>
      <a href="mailto:michaelgkiberenge@gmail.com?subject=Inquiry%20About%20Services&body=Hello, I came across your restaurant from nairobigems website and would like to inquire about..."><i class='bx bx-message-rounded-dots'></i> </a>
      <a href="https://wa.me/254745055831?text=Hi%20there!%20I%20wanted%20to%20recommend%20[Service%20or%20Business%20Name].%20They%20offer%20excellent%20[service/product]%20and%20I%20think%20you'd%20love%20it.%20Here%27s%20their%20contact%20info:%20[details]"><i class='bx bxl-whatsapp'></i> </a>
      
      `    
  },
  "Samurai": {
    name: "Black Samurai Lounge",
    image: "blacksl1.jpg",
    description: `
      a popular nightlife destination in Nairobi, offering a unique blend of music, decor, and atmosphere.
      <p><strong>Opening Hours:</strong> 9:00 AM - 5:00 PM, Monday to Saturday.</p>
      <a href="https://www.instagram.com/blacksamurailounge?igsh=YTAyNzJ0dHh3dGIw" target="_blank"> <i class='bx bxl-instagram'></i> </a>
     <a href="mailto:michaelgkiberenge@gmail.com?subject=Inquiry%20About%20Services&body=Hello, I came across your restaurant from nairobigems website and would like to inquire about..."><i class='bx bx-message-rounded-dots'></i> </a>
      <a href="https://wa.me/254745055831?text=Hi%20there!%20I%20wanted%20to%20recommend%20[Service%20or%20Business%20Name].%20They%20offer%20excellent%20[service/product]%20and%20I%20think%20you'd%20love%20it.%20Here%27s%20their%20contact%20info:%20[details]"><i class='bx bxl-whatsapp'></i> </a>
      
      `
  },
  "K1 Klub House": {
    name: "K1 Klub House ,Ojijo Road, Parklands, Nairobi",
    image: "K1.jpg",
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
    image: "yun.jpg",
    description: `
      Yunion is a restaurant that offers a fusion of gourmet dining and café vibe. It is described as a hotspot where creatives, artists, and others can blend work with relaxation. 
      <ul>
        <li>Yunion’s menu is a fusion of tasty dishes, and the restaurant also hosts exciting events.</li>
        <li>delightful fusion of tasty dishes and exciting events, with cosy seating and a welcoming atmosphere</li>
        <li>Yunion serves International cuisine.</li>
      </ul>
      <a href="https://www.instagram.com/yunionke?igsh=MXdnNWl0eGhhYWVscQ==" target="_blank"> <i class='bx bxl-instagram'></i> </a>
    `
  },
  "Mass": {
    name: "Mass House",
    image: "mass1.jpg",
    description: `
      Masshouse Live is Kenya’s top event destination, known for its electrifying energy and welcoming atmosphere. Our
venue is designed to host outstanding, unique events that stand out in every way.
      <li>Every aspect of Masshouse Live is crafted for an exceptional experience, ensuring each event is memorable. From
luxurious settings to top-tier service, we are dedicated to making every occasion special. At Masshouse, we create
moments that matter and celebrate each event with authenticity and care.</li>
<a href="https://www.instagram.com/masshouse_live?igsh=NjJiaHI1YTV4YWk1" target="_blank" > <i class='bx bxl-instagram'></i>    `
  },
"270°": {
    name: "270° Rooftop",
    image: "270.jpg",
    description: `Nairobi’s ultimate urban escape, where panoramic city views meet culinary excellence.
      <ul>
        <li>Savor a fusion of global flavors expertly crafted by top chefs</li>
        <li>As the sun sets, 270° Rooftop transforms into a vibrant social hub, with music and ambiance setting the stage for unforgettable nights under the stars</li>
      </ul>
      <p><strong>Opening Hours:</strong> 6:00 AM - 22:30 PM, Monday to Sunday.</p>
      <a href="https://www.instagram.com/270rooftop?igsh=YTcyOG0ybWNqem9w" target="_blank" > <i class='bx bxl-instagram'></i>    `
    
  },
  "Kahani": {
    name: "Kahani Restaurant",
    image: "Kahani.jpg",
    description: `
       Kahani Meaning ‘story’, is a modern Indian restaurant,takes you on a unique culinary journey that reimagines traditional Indian flavours with innovative techniques and presentations. Open from lunch to dinner, highlights include a High Chai and creative mixology infused with fragrant spices.

      <p><strong>Operating Hours:</strong> Monday — Friday  7:00am-11:00pm</p>
      <p><strong>Operating Hours:</strong> Saturday — Sunday 9:00am-11:00pm</p> 
      <a href="https://www.instagram.com/urbaneaterynbo?igsh=MTNxZ2swYnhpY2pmNQ==" target="_blank"> <i class='bx bxl-instagram'></i> </a>
      <a href="mailto:gm@urbaneatery.co.ke,michaelgkiberenge@gmail.com?subject=Nairobi%20Hidden%20Gems&body=Hello%20There,%20I%20Would%20Like%20To%20Reserve%20A%20Table%20Please%20Let%20Me%20Know%20If%20This%20Is%20Possible.%20Thank%20You!."><i class='bx bxl-gmail'></i> </a>      
      <a href="https://wa.me/254737692622?text=Hello%20there!%20I%20Would%20Like%20To%20Reserve%20A%20Table%20Please%20Let%20Me%20Know%20If%20This%20Is%20Possible.%20Thank%20You!."><i class='bx bxl-whatsapp'></i> </a>
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


