// ---- Clothing Images ----
import img1 from "./Kainene_African_Print_Maxi_Dress.jpg";
import img2 from "./XO_African_Print_Dress.jpg";
import img3 from "./Demi_Two-Piece_Cape_Dress_Set.jpg";
import img4 from "./Adina_Kente_African_Print_Floor_Length_Wrap_Dress.jpg";
import img5 from "./Ana_Top_and_Maxi_Skirt_Set.jpg";
import img6 from "./Maame_Kente_Corset_Dress.jpg";
import img7 from "./Ana_African_Print_Skater_Skirt.jpg";
import img8 from "./Teju_African_Print_Ankara_High-Low_Dress.jpg";
import img9 from "./Efya_Kente_High_Waisted_African_Print_Maxi_Skirt.jpg";
import img10 from "./Flare_Sleeved_African_Print_Bow_Crop_Top.jpg";
import img11 from "./Luna_Ankara_Crop_Top.jpg";
import img12 from "./Monochrome_Kaftan_Top_&_Shorts_Set.jpg";
import img13 from "./Tomiwa_African_Print_Zip_Up_Shirt.jpg";
import img14 from "./XO_Kaftan_Top.jpg";
import img15 from "./Fola_African_Print_Kaftan_Top.jpg";
import img16 from "./Femi_African_Print_Side_Panel_Shirt.jpg";
import img17 from "./Monochrome_Kaftan_Top.jpg";
import img18 from "./Tomiwa_African_Print_Trouser_Set.jpg";
import img19 from "./Nnamdi_African_Print_Kaftan_Top.jpg";
import img20 from "./Vero_African_Print_Kaftan_Top.jpg";
import img21 from "./Femi_African_Print_Trousers.jpg";
import img22 from "./Tomiwa_African_Print_Kaftan_Top.jpg";
import img23 from "./Tomiwa_Two_Tone_African_Print_Side_Panel_Shirt.jpg";
import img24 from "./Teju_African_Print_Kaftan_Top.jpg";
import img25 from "./XO_Shorts.jpg";
import img26 from "./Femi_African_Print_Button_Up_Shirt.jpg";

// ---- Head Wraps ----
import img27 from "./Kunmi_African_Print_Head_Wrap.jpg";
import img28 from "./Kente_African_Print_Head_Wrap.jpg";
import img29 from "./Abeni_African_Print_Head_Wrap.jpg";
import img30 from "./Demi_African_Print_Head_Wrap.jpg";
import img31 from "./Kola_African_Print_Head_Wrap.jpg";
import img32 from "./Nifemi_African_Print_Head_Wrap.jpg";
import img33 from "./Olu_African_Print_Head_Wrap.jpg";
import img34 from "./Enola_African_Print_Head_Wrap.jpg";

// ---- UI Assets ----
import search_icon from "./search_icon.jpg";
import star_dull_icon from "./star_dull_icon.jpg";
import star_icon from "./star_icon.jpg";
import stripe_logo from "./stripe_logo.jpg";
import logo from "./logo.jpg";
import cart_icon from "./cart_icon.jpg";
import bin_icon from "./bin_icon.jpg";
import dropdown_icon from "./dropdown_icon.jpg";
import exchange_icon from "./exchange_icon.jpg";
import profile_icon from "./profile_icon.jpg";
import quality_icon from "./quality_icon.jpg";
import support_img from "./support_img.jpg";
import menu_icon from "./menu_icon.jpg";
import contact_img from "./contact_img.jpg";
import razorpay_logo from "./razorpay_logo.jpg";
import cross_icon from "./cross_icon.jpg";
import about_img from "./about_img.jpg";

// ---- Export Assets ----
export const assets = {
  search_icon,
  star_dull_icon,
  star_icon,
  stripe_logo,
  logo,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  bin_icon,
  support_img,
  menu_icon,
  contact_img,
  razorpay_logo,
  cross_icon,
  about_img,
};

// ---- Products ----
export const products = [
  // ---- Women ----
  {
    _id: "p1",
    name: "Kainene Maxi Dress",
    price: 85,
    image: [img1],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p2",
    name: "XO African Print Dress",
    price: 75,
    image: [img2],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p3",
    name: "Demi Cape Dress Set",
    price: 95,
    image: [img3],
    category: "Women",
    subCategory: "Sets",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p4",
    name: "Adina Wrap Dress",
    price: 90,
    image: [img4],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p5",
    name: "Ana Top & Skirt Set",
    price: 80,
    image: [img5],
    category: "Women",
    subCategory: "Sets",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p6",
    name: "Maame Corset Dress",
    price: 88,
    image: [img6],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p7",
    name: "Ana Skater Skirt",
    price: 55,
    image: [img7],
    category: "Women",
    subCategory: "Skirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p8",
    name: "Teju High-Low Dress",
    price: 85,
    image: [img8],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p9",
    name: "Efya Maxi Skirt",
    price: 60,
    image: [img9],
    category: "Women",
    subCategory: "Skirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p10",
    name: "Flare Sleeve Crop Top",
    price: 45,
    image: [img10],
    category: "Women",
    subCategory: "Tops",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p11",
    name: "Luna Ankara Crop Top",
    price: 40,
    image: [img11],
    category: "Women",
    subCategory: "Tops",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p12",
    name: "Monochrome Kaftan Set",
    price: 70,
    image: [img12],
    category: "Men",
    subCategory: "Sets",
    sizes: ["S", "M", "L","XL"],
    date: Date.now(),
    bestseller: true,
  },

  // ---- Men ----
  {
    _id: "p13",
    name: "Tomiwa Zip Shirt",
    price: 60,
    image: [img13],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p14",
    name: "XO Kaftan Top",
    price: 55,
    image: [img14],
    category: "Men",
    subCategory: "Kaftans",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p15",
    name: "Fola Kaftan Top",
    price: 55,
    image: [img15],
    category: "Men",
    subCategory: "Kaftans",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p16",
    name: "Femi Panel Shirt",
    price: 65,
    image: [img16],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p17",
    name: "Monochrome Kaftan",
    price: 60,
    image: [img17],
    category: "Men",
    subCategory: "Kaftans",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p18",
    name: "Tomiwa Trouser Set",
    price: 95,
    image: [img18],
    category: "Men",
    subCategory: "Sets",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p19",
    name: "Nnamdi Kaftan",
    price: 58,
    image: [img19],
    category: "Men",
    subCategory: "Kaftans",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p20",
    name: "Vero Kaftan",
    price: 58,
    image: [img20],
    category: "Men",
    subCategory: "Kaftans",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p21",
    name: "Femi Trousers",
    price: 50,
    image: [img21],
    category: "Men",
    subCategory: "Trousers",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p22",
    name: "Tomiwa Kaftan",
    price: 60,
    image: [img22],
    category: "Men",
    subCategory: "Kaftans",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p23",
    name: "Tomiwa Two Tone Shirt",
    price: 65,
    image: [img23],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p24",
    name: "Teju Kaftan",
    price: 55,
    image: [img24],
    category: "Men",
    subCategory: "Kaftans",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p25",
    name: "XO Shorts",
    price: 35,
    image: [img25],
    category: "Men",
    subCategory: "Shorts",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p26",
    name: "Femi Button Shirt",
    price: 65,
    image: [img26],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },

  // ---- Accessories ----
  {
    _id: "p27",
    name: "Kunmi Head Wrap",
    price: 20,
    image: [img27],
    category: "Accessories",
    subCategory: "Head Wraps",
    sizes: ["One Size"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p28",
    name: "Kente Head Wrap",
    price: 20,
    image: [img28],
    category: "Accessories",
    subCategory: "Head Wraps",
    sizes: ["One Size"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p29",
    name: "Abeni Head Wrap",
    price: 20,
    image: [img29],
    category: "Accessories",
    subCategory: "Head Wraps",
    sizes: ["One Size"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p30",
    name: "Demi Head Wrap",
    price: 20,
    image: [img30],
    category: "Accessories",
    subCategory: "Head Wraps",
    sizes: ["One Size"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p31",
    name: "Kola Head Wrap",
    price: 20,
    image: [img31],
    category: "Accessories",
    subCategory: "Head Wraps",
    sizes: ["One Size"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p32",
    name: "Nifemi Head Wrap",
    price: 20,
    image: [img32],
    category: "Accessories",
    subCategory: "Head Wraps",
    sizes: ["One Size"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p33",
    name: "Olu Head Wrap",
    price: 20,
    image: [img33],
    category: "Accessories",
    subCategory: "Head Wraps",
    sizes: ["One Size"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p34",
    name: "Enola Head Wrap",
    price: 20,
    image: [img34],
    category: "Accessories",
    subCategory: "Head Wraps",
    sizes: ["One Size"],
    date: Date.now(),
    bestseller: false,
  },
];
