import Card from "./components/Card";

const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
    img: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwcmVzb3J0fGVufDB8MHwwfHx8Mg%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000,
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: "https://images.unsplash.com/photo-1587377758203-07b1d983923d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000,
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8MHwwfHx8Mg%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000,
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGphaXB1cnxlbnwwfDB8MHx8fDI%3D",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000,
  },
];

function App() {
  return (
    <>
      <div className="flex gap-2 mt-12 justify-center">
        {touristPlaces.map((place) => (
          <Card
            img={place.img}
            title={place.placeName}
            desc={place.desc}
            price={place.price}
            visit={place.whenToVisit}
            rating={place.ratings}
          />
        ))}
      </div>
    </>
  );
}
export default App;
