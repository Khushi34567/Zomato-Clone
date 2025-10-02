const restaurant = [];
const images = ["first" ,"second","third","fourth","fifth","sixth","seven","eigth","ninth","tenth"];
const rest_name = [
  "Blue Juniper",
  "Saffron & Stone",
  "Harbor Lantern",
  "Green Fig Bistro",
  "Ember & Oak",
  "Lotus Pearl",
  "La Piraña",
  "Masa y Mar",
  "The Brass Fork",
  "Olive & Thyme",
  "Nori & Naan",
  "The Rolling Samosa",
  "Cielo Taquería",
  "Mama Rosa Trattoria",
  "The Velvet Kebab",
  "Sunset Pho",
  "Iron Skillet Social",
  "Bamboo Alley",
  "Starlight Diner",
  "Maple Grove Grill"
];
const food_type = [ "Chinese",
  "Italian",
  "Mexican",
  "Indian",
  "Japanese",
  "Thai",
  "French",
  "Greek",
  "Middle Eastern",
  "Korean"];
  const location = ["Chandni Chowk",
  "Connaught Place",
  "Hauz Khas",
  "Greater Kailash",
  "Vasant Vihar",
  "Lajpat Nagar",
  "Defence Colony",
  "Kashmiri Gate",
  "Jor Bagh",
  "Saket"]


for(let i=0;i<=100;i++){

    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] = rest_name[Math.floor(Math.random()*20)];
    obj["rating"] = (Math.random() * 5 + 1).toFixed(1);
    obj["food_type"] = food_type[Math.floor(Math.random()*10)];
    obj["price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["location"] = location [Math.floor(Math.random()*10)];
    obj["distance"] = (Math.random()*10+1).toFixed(1);
    
    obj['offers'] = (Math.floor(Math.random()*30));
    obj['alcohol'] = Math.random() > 0.7;
    obj['restaurant_open_time'] = (Math.floor(Math.random()*24));
    obj['restaurant_close_time'] =  (obj['restaurant_open_time']+12)%24;
    
    restaurant.push(obj);
}
//   // ... your loop that populates restaurant ...

// Convert to JSON string
const restaurantJson = JSON.stringify(restaurant, null, 2);
console.log(restaurantJson);
const fs = require('fs');
fs.writeFileSync('restaurants.json', restaurantJson, 'utf-8');
  