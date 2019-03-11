<template>
  <div class="wrapper">
    <h1>Cart</h1>
    <div class="flex-col">
      <ul class="cart-list">
        <li
          v-for="item in cartItems"
          :key="item.id"
          class="flex-col cart-list__item">
          <img :src="makeImagePath(item)" class="thumbnail" alt="">
          <div class="flex-col cart-list__item__details">
            <div>
              <p>{{ item.name }}</p>
              <p>Size: {{ item.size }}</p>
              <p>Color: {{ item.color }}</p>
            </div>
            <p>${{ item.price }}</p>
            <button
              @click="removeFromCart(item.id)"
              class="btn cart-list__btn-remove">
              Remove
            </button>
          </div>
        </li>
      </ul>
      <section class="total-section">
        <ul class="total-section-list">
          <li class="total-section__item">
            <p class="total-section__item__label">{{ cartItemsCount }} items</p>
            <p>{{ itemsSubtotal }}</p>
            </li>
          <li class="total-section__item">
            <p class="total-section__item__label">Shipping</p>
            <select v-model="selectedShippingOption">
              <option disabled value="">Please select an option</option>
              <option
                v-for="option in shippingOptionsArray"
                :key="option.text"
                :value="option.rate">
                {{ option.text }} (${{ option.rate }})
              </option>
            </select>
          </li>
          <li class="total-section__item">
            <p class="total-section__item__label">Subtotal</p>
            <p>{{ subtotal }}</p>
          </li>
          <li class="total-section__item">
            <p class="total-section__item__label">Tax ({{ salesTaxPercentage }})</p>
            <p>{{ salesTaxApplied }}</p>
          </li>
          <li class="total-section__item">
            <p class="total-section__item__label">Total</p>
            <p>{{ total }}</p>
          </li>
        </ul>
        <button
          :disabled="!this.selectedShippingOption"
          class="btn btn--grey total-section__checkout-button">
            Check out
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
export default {
  name: 'cart',
  mixins: [imagePath],
  data() {
    return {
      salesTax: 0.06,
      selectedShippingOption: '',
      shippingOptionsArray: [
        {
          text: 'One day',
          rate: 20,
        },
        {
          text: 'Two days',
          rate: 15,
        },
        {
          text: 'Three to five days',
          rate: 10,
        },
        {
          text: 'One week or more',
          rate: 5,
        },
      ],
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
    itemsSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    subtotal() {
      if (this.selectedShippingOption && this.cartItemsCount > 0) {
        return Number(this.itemsSubtotal) + Number(this.selectedShippingOption);
      }
      return '---';
    },
    salesTaxPercentage() {
      return `${this.salesTax * 100}%`;
    },
    salesTaxApplied() {
      if (this.selectedShippingOption && this.cartItemsCount > 0) {
        return (this.subtotal * this.salesTax).toFixed(2);
      }
      return '---';
    },
    total() {
      if (this.selectedShippingOption && this.cartItemsCount > 0) {
        return Number(this.subtotal) + Number(this.salesTaxApplied);
      }
      return '---';
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch('removeFromCart', itemId);
    },
  },
};
</script>

<style>
.cart-list {
  width: 70%;
  margin-right: 1rem;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__item__details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-list__btn-remove {
  margin-top: .5rem;
  &:hover {
    color: red;
  }
}
.thumbnail {
  max-width: 50px;
  margin-top: .5rem;
}
.total-section {
  background: #FAFAFA;
  padding: 0 1rem 1rem;
}
.total-section-list {
  margin: 0;
}
.total-section__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-section__item__label {
  font-weight: bold;
  margin-right: 1rem;
}
.total-section__checkout-button {
  width: 100%;
}
</style>