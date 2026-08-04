import card4Sept from "../../../assets/images/surftrips/cards/card-4sept.webp";
import card29Sept from "../../../assets/images/surftrips/cards/card-29sept.webp";
import card9Oct from "../../../assets/images/surftrips/cards/card-9oct.webp";
import card4Dec from "../../../assets/images/surftrips/cards/card-4dec.webp";

const trips = [
  {
    id: 1,
    image: card4Sept,
    alt: "Trip cover for September 4–7, 2026",
    date: "September 4–7, 2026",
    title: "Trip Antik",
    price: "475€ before August 1 • 545€ regular",
    meta: "4 days · Currently full",
    status: "full",
    buttonText: "Full",
    buttonLink: null,
  },
  {
    id: 2,
    image: card29Sept,
    alt: "Trip cover for September 29 – October 4, 2026",
    date: "September 29 – October 4, 2026",
    title: "Trip Antik × It's Only Water",
    price: null,
    meta: "6 days · Available spots",
    status: "available",
    buttonText: "More Info",
    buttonLink: "https://www.itsonlywater.es/asilah",
  },
  {
    id: 3,
    image: card9Oct,
    alt: "Trip cover for October 9–12, 2026",
    date: "October 9–12, 2026",
    title: "Trip Antik",
    price: "475€ before August 1 • 545€ regular",
    meta: "4 days · Available spots",
    status: "available",
    buttonText: "Book Now",
    buttonLink: "https://api.whatsapp.com/send/?phone=212644078565",
  },
  {
    id: 4,
    image: card4Dec,
    alt: "Trip cover for December 4–8, 2026",
    date: "December 4–8, 2026",
    title: "Trip Antik",
    price: "580€ before October 1 • 650€ regular",
    meta: "5 days · Available spots",
    status: "available",
    buttonText: "Book Now",
    buttonLink: "https://api.whatsapp.com/send/?phone=212644078565",
  },
];

export default trips;