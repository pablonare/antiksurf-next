import card4Sept from "../../../assets/images/surftrips/cards/card-4sept.webp";
import card29Sept from "../../../assets/images/surftrips/cards/card-29sept.webp";
import card9Oct from "../../../assets/images/surftrips/cards/card-9oct.webp";
import card4Dec from "../../../assets/images/surftrips/cards/card-4dec.webp";

const trips = [
  {
    id: 1,
    image: card4Sept,
    alt: "trips.trip1.alt",
    date: "trips.trip1.date",
    title: "trips.trip1.title",
    price: "trips.trip1.price",
    meta: "trips.trip1.meta",
    status: "full",
    buttonText: "full",
    buttonLink: null,
  },
  {
    id: 2,
    image: card29Sept,
    alt: "trips.trip2.alt",
    date: "trips.trip2.date",
    title: "trips.trip2.title",
    price: null,
    meta: "trips.trip2.meta",
    status: "available",
    buttonText: "moreInfo",
    buttonLink: "https://www.itsonlywater.es/asilah",
  },
  {
    id: 3,
    image: card9Oct,
    alt: "trips.trip3.alt",
    date: "trips.trip3.date",
    title: "trips.trip3.title",
    price: "trips.trip3.price",
    meta: "trips.trip3.meta",
    status: "available",
    buttonText: "bookNow",
    buttonLink: "https://api.whatsapp.com/send/?phone=212644078565",
  },
  {
    id: 4,
    image: card4Dec,
    alt: "trips.trip4.alt",
    date: "trips.trip4.date",
    title: "trips.trip4.title",
    price: "trips.trip4.price",
    meta: "trips.trip4.meta",
    status: "available",
    buttonText: "bookNow",
    buttonLink: "https://api.whatsapp.com/send/?phone=212644078565",
  },
];

export default trips;