import { defineStore } from "pinia";

import { sampleSize } from "lodash";

export const useProducts = defineStore("products", {
  state() {
    return {
      products: [
        {
          id: "0",
          name: "VOLKSWAGEN UP",
          description:
            "This amazing VW Up is just £20 to tax for the year and is capable of up to 62.8 mpg. It comes equipped with air-con to keep you cool during the hot summers, AUX connectivity to keep your devices fully charged, and a CD player for you to enjoy your favourite tunes.",
          price: "From 82 monthly or 5,000",
          imageUrl: "volkswagen-up.jpg",
          tags: [1, 5, 8],
        },
        {
          id: "1",
          name: "PEUGEOT 107",
          description:
            "This brilliant Peugeot 107 is just £20 to tax for the year and is capable of up to 62.7 mpg. It comes equipped with a CD-Player, auxiliary input so you can connect up your audio device and serenade the steering wheel to your favourite tunes, and it is a perfect car for a new driver who has recently passed their driving test or someone who is looking for a small town runaround .",
          price: "From 82 monthly or 5,000",
          imageUrl: "peugeot-107.jpg",
          tags: [1, 3, 8],
        },
        {
          id: "2",
          name: "CITROEN C1",
          description:
            "This compact Citroen C1 will cost you nothing to tax and is capable of up to 65.7 mpg. It comes equipped with a CD player and auxiliary input for you to enjoy your favourite tunes, beautiful paintwork along with head turning alloy wheels promise to keep you looking stylish and at the envy of your friends, and it is a perfect car for a new driver who has recently passed their driving test or someone who is looking for a small town runaround .",
          price: "From 82 monthly or 5,000",
          imageUrl: "citroen-c1.jpg",
          tags: [2, 4, 8],
        },
        {
          id: "3",
          name: "PEUGEOT 308",
          description:
            "This car is currently located at our Northampton store.",
          price: "From 82 monthly or 5,000",
          imageUrl: "peugeot-308.jpg",
          tags: [1, 7, 8],
        },
        {
          id: "4",
          name: "FIAT PANDA",
          description: "This car is currently located at our Doncaster store.",
          price: "From 82 monthly or 5,000",
          imageUrl: "fiat-panda.jpg",
          tags: [2, 3, 8],
        },
        {
          id: "5",
          name: "KIA PICANTO",
          description:
            "This appealing Kia Picanto will cost you nothing to tax and is capable of up to 67.3 mpg. It comes equipped with air-con to keep you cool during the hot summers, and USB connectivity to keep your devices fully charged.",
          price: "From 82 monthly or 5,000",
          imageUrl: "kia-picanto.jpg",
          tags: [2, 4, 8],
        },
        {
          id: "6",
          name: "VAUXHALL CORSA",
          description: "This car is currently located at our Wakefield store.",
          price: "From 82 monthly or 5,000",
          imageUrl: "vauxhall-corsa.jpg",
          tags: [1, 6, 8],
        },
        {
          id: "7",
          name: "KIA RIO",
          description: "This car is currently located at our Bristol store.",
          price: "From 82 monthly or 5,000",
          imageUrl: "kia-rio.jpg",
          tags: [1, 5, 8],
        },
        {
          id: "8",
          name: "SMART FORTWO COUPE",
          description:
            "This eye-catching Smart Fortwo will cost you nothing to tax and is capable of up to 65.7 mpg. It comes equipped with a lovely panoramic sunroof to keep you relaxed over the miles, Sat Nav to keep you on the right track, air-con to keep you cool during the hot summers, and beautiful paintwork and head turning alloy wheels to keep you looking the best you can.",
          price: "From 82 monthly or 5,000",
          imageUrl: "smart-fortwo-coupe.jpg",
          tags: [2, 7, 8],
        },
        {
          id: "9",
          name: "FORD KA",
          description:
            "Check out this funky Ford Ka. It comes kitted out with auxiliary input for hooking up your music device, air-con to keep you cool during the hot summers, a CD player for you to enjoy your favourite tunes, only £30 to pay per year in road tax due to the low emissions, and only £30 to pay per year in road tax due to the low emissions.",
          price: "From 82 monthly or 5,000",
          imageUrl: "ford-ka.jpg",
          tags: [1, 6, 8],
        },
        {
          id: "10",
          name: "VOLSKWAGEN BEETLE",
          description: "This car is currently located at our Bristol store.",
          price: "From 82 monthly or 5,000",
          imageUrl: "volkswagen-beetle.jpg",
          tags: [1, 4, 8],
        },
        {
          id: "11",
          name: "SKODA FABIA",
          description: "This car is currently located at our Bristol store.",
          price: "From 82 monthly or 5,000",
          imageUrl: "skoda-fabia.jpg",
          tags: [2, 5, 8],
        },
        {
          id: "12",
          name: "SUZUKI SWIFT",
          description:
            "You'll love cruising around town in this appealing Suzuki Swift. It has air-con to keep you cool during the hot summers, Bluetooth and DAB radio to keep you chatting and singing over the miles, and Sat Nav to effortlessly guide you to your destination.",
          price: "From 82 monthly or 5,000",
          imageUrl: "suzuki-swift.jpg",
          tags: [1, 3, 8],
        },
        {
          id: "13",
          name: "HYUNDAI 120",
          description: "This car is currently located at our Swindon store.",
          price: "From 82 monthly or 5,000",
          imageUrl: "hyundai-120.jpg",
          tags: [2, 5, 8],
        },
        {
          id: "14",
          name: "SEAT IBIZA",
          description:
            "You'll love cruising around town in this great value Seat Ibiza. It has air-con to keep you cool during the hot summers, auxiliary input so you can plug in your audio device and sing along to your favourite playlist, and beautiful paintwork and head turning alloy wheels to keep you looking the best you can.",
          price: "From 82 monthly or 5,000",
          imageUrl: "seat-ibiza.jpg",
          tags: [1, 6, 8],
        },
        {
          id: "15",
          name: "TOYOTA AYGO",
          description:
            "With low insurance, tax and great fuel economy, this Toyota Aygo makes a perfect car for a new driver, or just to be used as a runabout. It comes with auxiliary input so you can connect up your audio device and serenade the steering wheel to your favourite tunes, and USB connectivity to keep your devices fully charged.",
          price: "From 82 monthly or 5,000",
          imageUrl: "toyota-aygo.jpg",
          tags: [2, 5, 8],
        },
        {
          id: "16",
          name: "HONDA-JAZZ",
          description: "This car is currently located at our Bristol store.",
          price: "From 82 monthly or 5,000",
          imageUrl: "honda-jazz.jpg",
          tags: [2, 4, 8],
        },
        {
          id: "17",
          name: "SMART FORFOUR",
          description:
            "This amazing Smart Forfour will cost you nothing to tax and is capable of up to 67.3 mpg. It comes equipped with cruise control, parking sensors and a parking camera to keep you assisted with your journeys and arrivals, Bluetooth and USB connectivity to keep you connected and entertained whilst travelling , automatic lights for a helping hand over the miles, a glorious sunroof for you to relax beneath, and beautiful paintwork along with eye catching alloy wheels guarantee to keep you looking fashionable and chic whilst driving!.",
          price: "From 82 monthly or 5,000",
          imageUrl: "smart-forfour.jpg",
          tags: [2, 7, 8],
        },
        {
          id: "18",
          name: "NISSAN MICRA",
          description:
            "Youll love cruising around town in this great value Nissan Micra. It has keyless entry for that extra convenience, Sat Nav to keep you on the right track, cruise control and parking sensors for a helping hand when you need it most, beautiful paintwork and head turning alloy wheels to keep you looking the best you can, and only £30 to pay per year in road tax due to the low emissions.",
          price: "From 82 monthly or 5,000",
          imageUrl: "nissan-micra.jpg",
          tags: [2, 5, 8],
        },
      ],
      productsSections: [
        {
          title: "Check out this month's selection.",
          icon: { name: "trending-up" },
          itemCount: 10,
          id: "offer-month",
        },
        {
          title: "On sale",
          icon: { name: "discount", type: "solid" },
          itemCount: 8,
          id: "offer-special",
        },
      ],
    };
  },
  getters: {},
  actions: {
    getProductById(id) {
      return this.products.find((product) => product.id === id) ?? null;
    },
    getRandomProducts(size) {
      return sampleSize(this.products, size);
    },
    getProductsByCategory(categoryId) {
      if (categoryId === 0) {
        return this.products;
      }
      return this.products.filter((product) =>
        product.tags.includes(categoryId)
      );
    },
  },
});
