import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [53363],
    products: [
      {
        name: "Crewneck T-Shirt",
        id: 53362,
        featured: true,
        price: 9.5,
        color: "white",
        size: "small",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash",
          additional: "Some colors feature different-colored yarns for a heathered effect."
        },
        images: [
          '53362-1.jpg',
          '53362-2.jpg',
          '53362-3.jpg',
        ]
      },
      {
        name: "Cardigan Sweater",
        id: 53363,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "women",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Sweaters",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53363-1.jpg',
          '53363-2.jpg',
          '53363-3.jpg',
          '53363-4.jpg',
          '53363-5.jpg',
        ]
      },
      {
        name: "Slim Fit Jeans",
        id: 53364,
        featured: true,
        price: 29.5,
        color: "navy",
        size: {
          waist: 32,
          length: 32,
        },
        gender: "men",
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Pants",
        details: {
          material: "denim",
          fit: "slim",
          maintenance: "machine wash cold with like colors, air dry",
          additional: ""
        },
        images: [
          '53364-1.jpg',
          '53364-2.jpg',
          '53364-3.jpg',
          '53364-4.jpg',
          '53364-5.jpg',
        ]
      },
      {
        name: "Floral Ruffle Wrap Dress",
        id: 53365,
        featured: true,
        price: 129,
        color: "navy",
        size: 6,
        gender: "women",
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Dresses",
        details: {
          material: "nylon",
          fit: "Fitted through the chest and waist, flare skirt.",
          maintenance: "machine wash cold with like colors, air dry",
          additional: "Wrap waist with internal button closure for an extra secure fit."
        },
        images: [
          '53365-1.jpg',
          '53365-2.jpg',
          '53365-3.jpg',
        ]
      },
      {
        name: "SUPIMA® Cotton Polka Dot T-Shirt",
        id: 53366,
        featured: false,
        price: 20.7,
        color: "white",
        size: "small",
        gender: "women",
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "Fitted shoulders and chest, straight through the waist and hip.",
          maintenance: "machine wash warm with like colors, tumble dry low",
          additional: "Crew neck. Short sleeves with fixed, rolled cuffs."
        },
        images: [
          '53366-1.jpg',
          '53366-2.jpg',
          '53366-3.jpg',
        ]
      },
      {
        name: "Luxury-Touch Palm Print Polo",
        id: 53367,
        featured: false,
        price: 49.5,
        color: "navy",
        size: "medium",
        gender: "men",
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "A little room through the chest, arms and waist.",
          maintenance: "machine wash warm with like colors, tumble dry low",
          additional: "Rib-knit polo collar. Short sleeves with rib-knit trim."
        },
        images: [
          '53367-1.jpg',
          '53367-2.jpg',
          '53367-3.jpg',
        ]
      },
      {
        name: "9-inch Core Temp Aiden Slim Short",
        id: 53368,
        featured: false,
        price: 69.5,
        color: "green",
        size: {
          waist: 32
        },
        gender: "men",
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shorts",
        details: {
          material: "cotton",
          fit: "Sits at the waist, slim through the thigh.",
          maintenance: "machine wash warm with like colors, tumble dry low",
          additional: "9-inch inseam"
        },
        images: [
          '53368-1.jpg',
          '53368-2.jpg',
          '53368-3.jpg',
        ]
      },
      {
        name: "Bare High Block-Heel Sandal",
        id: 53369,
        featured: false,
        price: 128.5,
        color: "black",
        size: 8,
        gender: "women",
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shoes",
        details: {
          material: "leather",
          fit: "Breathable synthetic lining. Insole with added stability in the heel.",
          maintenance: "",
          additional: "3.3-inch heel height"
        },
        images: [
          '53369-1.jpg',
          '53369-2.jpg',
          '53369-3.jpg',
        ]
      },
      {
        name: "Nicklas Suede Sneaker",
        id: 53370,
        featured: false,
        price: 114.99,
        color: "navy",
        size: 10,
        gender: "men",
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shoes",
        details: {
          material: "suede",
          fit: "Our Advanced Comfort Technology insoles include shock absorption in the heel, arch support and breathable flex on the toe pads.",
          maintenance: "",
          additional: "Flat laces"
        },
        images: [
          '53370-1.jpg',
          '53370-2.jpg',
          '53370-3.jpg',
        ]
      },
      {
        name: "Thane Leather Trainer Sneaker",
        id: 53371,
        featured: false,
        price: 148.00,
        color: "white",
        size: 11,
        gender: "men",
        quantity: 9,
        dateAdded: "Wed Mar 26 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shoes",
        details: {
          material: "suede",
          fit: "Designed with lightweight, durable OrthoLite® performance insoles for breathable cushioning that wicks away moisture for the ultimate in comfort. Plus, these sneakers were also designed with Outlast® temperature-regulating technology, originally developed for NASA, for optimal thermal comfort.",
          maintenance: "",
          additional: "Flat laces"
        },
        images: [
          '53371-1.jpg',
          '53371-2.jpg',
          '53371-3.jpg',
        ]
      },
      {
        name: "Aiden Slim Authentic Chino",
        id: 53372,
        featured: false,
        price: 89.50,
        color: "khaki",
        size: {
          waist: 36
        },
        gender: "men",
        quantity: 9,
        dateAdded: "Wed Mar 26 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Pants",
        details: {
          material: "cotton",
          fit: "Our latest take on the timeless chino, made modern with ultra-soft, Italian stretch fabric for comfort, and garment dyed for an authentic, color-washed look.",
          maintenance: "Machine wash.",
          additional: "Imported"
        },
        images: [
          '53372-1.jpg',
          '53372-2.jpg',
          '53372-3.jpg',
        ]
      },
      {
        name: "Untucked Slim-Fit Luxe Poplin Shirt",
        id: 53373,
        featured: false,
        price: 69.50,
        color: "red",
        size: "large",
        gender: "men",
        quantity: 9,
        dateAdded: "Wed Mar 27 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "A customer favorite, our Luxe Poplin shirts are specially washed for that perfectly soft, already worn-in feel that stays crisp and polished looking. This 100% cotton fabric is engineered to move with you and has a natural flexibility due to the unique construction of its yarn.",
          maintenance: "Machine wash.",
          additional: "Imported"
        },
        images: [
          '53373-1.jpg',
          '53373-2.jpg',
          '53373-3.jpg',
        ]
      },
      {
        name: "Logan Trouser-Fit Washable Wool-Blend Pant",
        id: 53374,
        featured: false,
        price: 108,
        color: "black",
        size: "4",
        gender: "women",
        quantity: 9,
        dateAdded: "Wed Mar 29 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Pants",
        details: {
          material: "cotton",
          fit: "Our menswear-inspired trouser",
          maintenance: "Machine wash.",
          additional: "Made in Italy by renowned Italian Mill Marzotto, this innovative fabric is formulated with extra stretch for all-day comfort - and it is machine washable for exceptionally easy care."
        },
        images: [
          '53374-1.jpg',
          '53374-2.jpg',
          '53374-3.jpg',
        ]
      },
    ]
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(Number(payload))
    },
    removeFromCart(state, payload) {
      let indexToDelete = state.cart.indexOf(Number(payload));
      state.cart.splice(indexToDelete, 1)
    },
    decrementProductInventory(state, payload) {
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity--;
    },
    incrementProductInventory(state, payload) {
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity++;
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload),
        commit('decrementProductInventory', payload)
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('incrementProductInventory', payload)
    }
  },
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0]
    },
    cartItems: (state) => {
      return state.cart.map(
        itemId => state.products.find(
          product => product.id === itemId
        )
      )
    },
    featuredProducts: (state) => {
      return state.products.filter(p => p.featured)
    },
    productsByGender: (state) => (gender) => {
      return state.products.filter(p => p.gender === gender)
    }
  }
});