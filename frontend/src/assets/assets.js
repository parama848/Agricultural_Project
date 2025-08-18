import let1 from '../assets/let1.png'
import let2 from '../assets/let2.png'
import let3 from '../assets/let3.png'
import let4 from '../assets/let4.png'
import let5 from '../assets/let5.png'
import let6 from '../assets/let6.png'
import let7 from '../assets/let7.png'
import let8 from '../assets/let8.png'
import let9 from '../assets/let9.png'
import veg1 from '../assets/veg1.png';
import veg2 from '../assets/veg2.png';
import veg3 from '../assets/veg3.png';
import veg4 from '../assets/veg4.png';
import veg5 from '../assets/veg5.png';
import veg6 from '../assets/veg6.png';
import veg7 from '../assets/veg7.png';
import veg8 from '../assets/veg8.png';
import veg9 from '../assets/veg9.png';
import veg10 from '../assets/veg10.png';
import veg11 from '../assets/veg11.png';
import veg12 from '../assets/veg12.png';


import logo from './logo.png' 
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import cash_logo from './cash_logo.png'
import farmer1 from './farmer_img1.png'
import farmer2 from './farmer_img2.png'
import farmer3 from './farmer_img3.png'
import farmer4 from './farmer_img4.png'
import cart_img from './cart_img.png'



export const assets = {
    logo,
    hero_img,
    cart_icon,
    cart_img,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    cash_logo,
    farmer1,
    farmer2,
    farmer3,
    farmer4,
    
}

export const agriProducts = [
  {
    _id: "let001",
    name: "Wild Amaranth/Chinese Spinach",
    description: " Nutritious leafy green, mild in taste, rich in iron and fiber.",
    pricePerKg: 20,
    image: [let1],
    category: "Lettuce",
    type: "Leafy Vegetable",
    availableQuantityKg: 50,
    nativeLanguageName: "அரைக்கீரை",
    seller: "Farmer A",
    location: "Madurai",
    dateHarvested: 1716634345448,
    organic: true,
    bestseller: true
  },
  {
    _id: "let002",
    name: "Spinach",
    description: "Soft, nutrient-rich greens packed with iron, calcium, and essential vitamins.",
    pricePerKg: 20,
    image: [let2],
    category: "Lettuce",
    type: "Leafy Vegetable",
    availableQuantityKg: 60,
    nativeLanguageName: "பசலைக்கீரை",
    seller: "Farmer B",
    location: "Salem",
    dateHarvested: 1716624345448,
    organic: true,
    bestseller: true
  },
  {
    _id: "let003",
    name: "Drumstick Leaves",
    description: "Superfood leaves rich in protein, boosts immunity, and strengthens bones naturally.",
    pricePerKg: 20,
    image: [let3],
    category: "Lettuce",
    type: "Leafy Vegetable",
    availableQuantityKg: 80,
    nativeLanguageName: "முருங்கைக்கீரை",
    seller: "Farmer C",
    location: "Erode",
    dateHarvested: 1716628345448,
    organic: false,
    bestseller: true
  },
  {
    _id: "let004",
    name: "Black Nightshade Leaves",
    description: " Medicinal greens that cure ulcers, detox liver, and cool the body.",
    pricePerKg: 20,
    image: [let4],
    category: "Lettuce",
    type: "Medicinal Leafy Vegetable",
    availableQuantityKg: 80,
    nativeLanguageName: "மணத்தக்காளி கீரை",
    seller: "Farmer C",
    location: "Erode",
    dateHarvested: 1716628345448,
    organic: false,
    bestseller: true
  },
  {
    _id: "let005",
    name: "Mint Leaves",
    description: "Fragrant herbal leaves that aid digestion, cool the body, and refresh.",
    pricePerKg: 20,
    image: [let5],
    category: "Lettuce",
    type: "Herb",
    availableQuantityKg: 80,
    nativeLanguageName: "புதினா கீரை",
    seller: "Farmer C",
    location: "Erode",
    dateHarvested: 1716628345448,
    organic: false,
    bestseller: true
  },
  {
    _id: "let006",
    name: "Balloon Vine Leaves",
    description: "Used in traditional medicine to relieve joint pain and improve bone strength.",
    pricePerKg: 20,
    image: [let6],
    category: "Lettuce",
    type: "Medicinal Leaf",
    availableQuantityKg: 80,
    nativeLanguageName: "முடக்கத்தான் கீரை",
    seller: "Farmer C",
    location: "Erode",
    dateHarvested: 1716628345448,
    organic: false,
    bestseller: true
  },
  {
    _id: "let007",
    name: "Solanum Trilobatum Leaves",
    description: " Medicinal thorny leaf used for asthma, cough, and respiratory relief.",
    pricePerKg: 20,
    image: [let7],
    category: "Lettuce",
    type: "Medicinal Plant",
    availableQuantityKg: 80,
    nativeLanguageName: "தூதுவளை கீரை",
    seller: "Farmer C",
    location: "Erode",
    dateHarvested: 1716628345448,
    organic: false,
    bestseller: false
  },
  {
    _id: "let008",
    name: "Coriander Leaves",
    description: "Aromatic herb used for flavoring, improves digestion and detoxifies the body naturally.",
    pricePerKg: 20,
    image: [let8],
    category: "Leafy Vegetables",
    type: "Spinach",
    availableQuantityKg: 100,
    nativeLanguageName: "கொத்தமல்லி கீரை",
    seller: "Farmer D",
    location: "Coimbatore",
    dateHarvested: 1716629345448,
    organic: true,
    bestseller: true
  },
  {
    _id: "let009",
    name: "Palak Leaves / Indian Spinach",
    description: "Nutritious green rich in iron and vitamins, used in soups and gravies.",
    pricePerKg: 20,
    image: [let9],
    category: "Leafy",
    type: "Spinach",
    availableQuantityKg: 100,
    nativeLanguageName: "பாலக் கீரை",
    seller: "Farmer D",
    location: "Coimbatore",
    dateHarvested: 1716629345448,
    organic: true,
    bestseller: true
  },
  {
    _id: "veg001",
    name: "Tomato",
    description: "Juicy and tangy, used in a variety of dishes.",
    pricePerKg: 25,
    image: [veg1],
    category: "Vegetables",
    type: "Tomato",
    availableQuantityKg: 200,
    nativeLanguageName: "தக்காளி",
    seller: "Farmer E",
    location: "Trichy",
    dateHarvested: 1716630345448,
    organic: true,
    bestseller: true
  },
  {
    _id: "veg002",
    name: "Carrot",
    description: "Crunchy and sweet, rich in Vitamin A.",
    pricePerKg: 30,
    image: [veg2],
    category: "Vegetables",
    type: "Carrot",
    availableQuantityKg: 120,
    nativeLanguageName: "காரட்",
    seller: "Farmer F",
    location: "Theni",
    dateHarvested: 1716631345448,
    organic: true,
    bestseller: true
  },
  {
    _id: "veg003",
    name: "",
    description: "Earthy taste, excellent for salads and juices.",
    pricePerKg: 28,
    image: [veg3],
    category: "Vegetables",
    type: "Beetroot",
    availableQuantityKg: 70,
    nativeLanguageName: "பீட்ரூட்",
    seller: "Farmer G",
    location: "Dindigul",
    dateHarvested: 1716632345448,
    organic: true,
    bestseller: true
  },
   {
    _id: "veg004",
    name: "Cabbage",
    description: "Compact and leafy, perfect for stir-fries and curries.",
    pricePerKg: 22,
    image: [veg4],
    category: "Vegetables",
    type: "Cabbage",
    availableQuantityKg: 90,
    nativeLanguageName: "முட்டைகோஸ்",
    seller: "Farmer H",
    location: "Tiruvannamalai",
    dateHarvested: 1716633345448,
    organic: true,
    bestseller: false
  },
  {
    _id: "veg005",
    name: "Onion",
    description: "Essential for Indian cooking, adds flavor and aroma.",
    pricePerKg: 18,
    image: [veg5],
    category: "Vegetables",
    type: "Onion",
    availableQuantityKg: 300,
    nativeLanguageName: "வெங்காயம்",
    seller: "Farmer I",
    location: "Tiruvannamalai",
    dateHarvested: 1716634345448,
    organic: false,
    bestseller: true 
  },
  {
    _id: "veg006",
    name: "Potato",
    description: "Versatile root used in countless dishes.",
    pricePerKg: 20,
    image: [veg6],
    category: "Vegetables",
    type: "Potato",
    availableQuantityKg: 250,
    nativeLanguageName: "உருளைக்கிழங்கு",
    seller: "Farmer J",
    location: "Tiruvannamalai",
    dateHarvested: 1716635345448,
    organic: false,
    bestseller: true
  },
  {
    _id: "veg007",
    name: "Cauliflower",
    description: "White, crunchy florets, loved in curries and fries.",
    pricePerKg: 35,
    image: [veg7],
    category: "Vegetables",
    type: "Cauliflower",
    availableQuantityKg: 110,
    nativeLanguageName: "பூக்கோசு",
    seller: "Farmer K",
    location: "Tiruvannamalai",
    dateHarvested: 1716636345448,
    organic: true,
    bestseller: false
  },
  {
    _id: "veg008",
    name: "Brinjal",
    description: "Spongy vegetable used in curries and bharta.",
    pricePerKg: 26,
    image: [veg8],
    category: "Vegetables",
    type: "Brinjal",
    availableQuantityKg: 95,
    nativeLanguageName: "கத்திரிக்காய்",
    seller: "Farmer L",
    location: "Tiruvannamalai",
    dateHarvested: 1716637345448,
    organic: true,
    bestseller: true
  },
  {
    _id: "veg009",
    name: "Ridge Gourd",
    description: "Long, green and mildly sweet vegetable.",
    pricePerKg: 24,
    image: [veg9],
    category: "Vegetables",
    type: "Ridge Gourd",
    availableQuantityKg: 85,
    nativeLanguageName: "பீர்க்கங்காய்",
    seller: "Farmer M",
    location: "Tiruvannamalai",
    dateHarvested: 1716638345448,
    organic: false,
    bestseller: false
  },
  {
    _id: "veg010",
    name: "Bitter Gourd",
    description: "Bitter vegetable with medicinal benefits.",
    pricePerKg: 33,
    image: [veg10],
    category: "Vegetables",
    type: "Bitter Gourd",
    availableQuantityKg: 70,
    nativeLanguageName: "பாகற்காய்",
    seller: "Farmer N",
    location: "Tiruvannamalai",
    dateHarvested: 1716639345448,
    organic: true,
    bestseller: false
  },
  {
    _id: "veg011",
    name: "Lady Finger",
    description: "Slim and green, loved in South Indian dishes.",
    pricePerKg: 28,
    image: [veg11],
    category: "Vegetables",
    type: "Okra",
    availableQuantityKg: 150,
    nativeLanguageName: "வெண்டைக்காய்",
    seller: "Farmer O",
    location: "Tiruvannamalai",
    dateHarvested: 1716640345448,
    organic: false,
    bestseller: true
  },
  {
    _id: "veg012",
    name: "Drumstick",
    description: "Popular in sambar and soups, rich in iron.",
    pricePerKg: 42,
    image: [veg12],
    category: "Vegetables",
    type: "Drumstick",
    availableQuantityKg: 180,
    nativeLanguageName: "முருங்கைக்காய்",
    seller: "Farmer P",
    location: "Tiruvannamalai",
    dateHarvested: 1716641345448,
    organic: true,
    bestseller: true
  }
]   

