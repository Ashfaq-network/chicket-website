const CONFIG = {
  business: {
    name: 'Chicket',
    shortName: 'CHICKET',
    tagline: 'ALL ABOUT <span>HOMEMADE</span>',
    description: 'Fresh, homemade grilled chicken in Wellampitiya. Dubai-style flame-grilled chicken — open every evening from 3:30 PM.',
    logo: 'images/logo.jpg',
  },

  colors: {
    primary: '#E67E22',
    secondary: '#27AE60',
    accent: '#F1C40F',
    dark: '#2C3E50',
  },

  contact: {
    address: '360 Avissawella Road, Wellampitiya 10600 (Opposite Keells, at JDK Food Corner)',
    addressShort: '360 Avissawella Road, Wellampitiya',
    phone: '077 777 9789',
    phoneDigits: '0777779789',
    phoneFull: '+94777779789',
    whatsapp: '94777779789',
    hours: 'Open Daily · 3:30 PM – 12:45 AM',
    hoursLabel: '3:30 PM – 12:45 AM',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.452433418705!2d79.8856893!3d6.9350471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25917d90e3b6f%3A0xe3b9f7d3f5e5c!2s360%20Avissawella%20Rd%2C%20Wellampitiya!5e0!3m2!1sen!2slk!4v1',
    coordinates: { lat: 6.9350471, lng: 79.8856893 },
  },

  links: {
    uberEats: 'https://www.ubereats.com/lk/store/chicket-wellampitiya/a9GwMQy0UC2km_NTZzac7A',
    uberEatsText: 'Order on Uber Eats',
    instagram: 'https://www.instagram.com/the_chicket/',
  },

  menu: [
    {
      name: 'Grilled Chicken Delights',
      slug: 'grilled',
      items: [
        { name: 'Grill Feast (2 Person)', price: 1980, badge: 'Most Popular' },
        { name: 'Flame Platter (4 Person)', price: 3970, badge: '20% Off' },
      ],
    },
    {
      name: 'Starters',
      slug: 'starters',
      items: [
        { name: 'Golden Crunch Fries', price: 1280 },
        { name: 'Chicken Nuggets (8 pcs)', price: 1220 },
      ],
    },
    {
      name: 'Tasty Add Ons',
      slug: 'addons',
      items: [
        { name: 'Signature Roti', price: 250, badge: '87% love it' },
        { name: 'Signature Hummus', price: 150 },
        { name: 'Sauce & Mayonnaise', price: 240 },
      ],
    },
    {
      name: 'Drinks',
      slug: 'drinks',
      items: [
        { name: 'Lemon Juice (Regular)', price: 190 },
        { name: 'Lemon Juice (Large)', price: 220 },
        { name: 'Faluda', price: 260 },
        { name: 'Mineral Water (1L)', price: 150 },
      ],
    },
    {
      name: 'Desserts',
      slug: 'desserts',
      items: [
        { name: 'Chocolate Fudge Bliss', price: 395 },
      ],
    },
  ],

  featured: [
    { name: 'Grill Feast (2 Person)', description: 'Half flame-grilled chicken with one Signature Roti, hummus, and golden crunch fries. Our most-loved meal!', price: 'LKR 1,980', badge: 'Most Popular', image: 'images/gallery-4.jpg', alt: 'Grill Feast half chicken with sides' },
    { name: 'Flame Platter (4 Person)', description: 'Full flame-grilled chicken with two Signature Rotis, hummus, and golden crunch fries. Perfect for sharing!', price: 'LKR 3,970', badge: 'Family Deal', image: 'images/gallery-2.jpg', alt: 'Flame Platter full chicken feast' },
    { name: 'Signature Roti', description: 'Our homemade Signature Roti — soft, warm, and the perfect companion to any meal. 87% of customers love it!', price: 'LKR 250', badge: 'Customer Favorite', image: 'images/gallery-5.jpg', alt: 'Signature Roti' },
  ],

  testimonials: [
    { text: 'The Grill Feast is absolutely amazing! Half chicken with roti and hummus — best dinner in Wellampitiya.', author: 'Mohamed R.', stars: 5 },
    { text: 'Love their Signature Roti with hummus. Always fresh, always delicious. Highly recommend!', author: 'Sara F.', stars: 5 },
    { text: 'Best flame-grilled chicken in Colombo area. The Flame Platter is perfect for family dinners.', author: 'Nimal P.', stars: 5 },
    { text: 'Great food, generous portions, and the lemon juice is refreshing. My go-to spot in Wellampitiya!', author: 'Aisha K.', stars: 4 },
  ],

  gallery: [
    { src: 'images/gallery-3.jpg', alt: 'Chicket grilled chicken feast' },
    { src: 'images/gallery-6.jpg', alt: 'Grilled chicken combo at Chicket' },
    { src: 'images/gallery-7.jpg', alt: 'Fresh grilled chicken platter' },
    { src: 'images/gallery-8.jpg', alt: 'Flame-grilled chicken close-up' },
    { src: 'images/gallery-9.jpg', alt: 'Crispy roti and sides' },
  ],

  promoBanner: {
    html: '🔥 Order on Uber Eats — Get your favourites delivered! <a href="order.html">Order Now</a>',
  },

  aboutText: [
    'Chicket brings you the finest Dubai-style flame-grilled chicken in Wellampitiya. Every piece is marinated with our special blend of spices, grilled to perfection, and served with love.',
    'We\'re open every day from <strong>3:30 PM to 12:45 AM</strong>. Visit us at JDK Food Corner, opposite Keells, or order online for delivery.',
  ],

  structuredData: {
    restaurant: {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Chicket',
      description: 'Dubai-style flame-grilled chicken in Wellampitiya, Colombo. Halal, homemade, and fresh.',
      url: 'https://ashfaq-network.github.io/chicket-website',
      telephone: '+94777779789',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '360 Avissawella Road',
        addressLocality: 'Wellampitiya',
        addressCountry: 'LK',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 6.9350471, longitude: 79.8856893 },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '15:30',
        closes: '00:45',
      },
      servesCuisine: ['Grilled Chicken', 'Arabian', 'Fast Food'],
      priceRange: 'LKR 150 - 3970',
    },
  },
};
