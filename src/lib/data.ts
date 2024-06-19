// import magmuugbottleImg from "@/../../public/img/bottel.png"
import magmuugbottleImg from "@/../../public/img/bottel_6x8.png"
import magmuugbottleCorpImg from "@/../../public/img/bottel.png"
import splashImg from "@/../../public/img/splash.png"
import manualImg from "@/../../public/img/manual.png"

export const headerlinks = [
  { name: "Home", hash: "/" },
  { name: "About", hash: "/about" },
  { name: "Contact", hash: "/contact" },
] as const

export const footerlinks = [
  { name: "Home", hash: "/" },
  { name: "About", hash: "/about" },
  { name: "Contact", hash: "/contact" },
  { name: "Terms & Conditions", hash: "/terms_conditions" },
  { name: "Shipping & Return Policy", hash: "/shipping_return-policy" },
  { name: "Privacy Policy", hash: "/privacy-policy" },
  { name: "FAQ", hash: "/faq" },
] as const

export const intro_content = {
  content: [
    "Hydration on the Go",
    "Never Put Your",
    "Phone Down Again"
  ],
  button: { text: "Read more", hash: "/about" },
  image: { src: magmuugbottleImg, alt: "Magmuug Bottle" },
  splash: { src: splashImg, alt: "Splash" },
} as const

export const shop_content = {
  title: "Now get Hydrated",
  discription: "Summer is almost over! Provide healthy hydration.",
  products: [
    {src: magmuugbottleCorpImg, alt: "Magmuug Bottle", name: "magmuug black edition", price: 120, discountedPrice: 100},
    {src: magmuugbottleCorpImg, alt: "Magmuug Bottle", name: "magmuug black edition", price: 120, discountedPrice: 100},
    {src: magmuugbottleCorpImg, alt: "Magmuug Bottle", name: "magmuug black edition", price: 120, discountedPrice: 100}
  ],
} as const

export const features_content = {
  left_content: { text: "STABLE WHEN FULL OR EMPTY"},
  top_right_content: { text1: "Compatible with ALL devices.", text2: "Due to our ring, every smartphone can be holded" },
  bottom_right_content: { text: "EASY CARRY", src: manualImg, alt: "Holding Bottle"}
} as const

export const info_content = [
  { title: "Description", text: "Mamgmuug bottle is made of stainless steel, it has the lid that makes the bottle perfect, powered with magnet to hold your phone in stable position, works with iphone magCase, and for android users we ship a ring that can be attached to your phone safely." },
  { title: "Material", text: "We use premium quality in our bottles, the steel is stainless, covered with detailed painting color, the lid is made of boiled recycle plastic and inside the lid we put our magic, we add the magnet to be able to hold your phone magically." },
  { title: "Delivery", text: "Usually the delivery take from 7-10 business days." },
  { title: "Introduction", text: "The magmuug bottle is new to the market, it is unique and modern, designed to fit our everyday needs." },
] as const

export const potential_content = {
  title: "Anywhere you want.",
  title2: "Anytime you want.",
  text: "Reach your full potential. Work out in your living room, a hotel room, the park, the gym, indoors, outdoors, all at the perfect angle. No more excuses!"
} as const