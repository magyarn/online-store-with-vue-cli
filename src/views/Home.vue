<template>
  <div class="home wrapper">
    <ul class="featured-items">
      <li v-for="product in featuredProducts" :key="product.id" class="featured-items__item">
        <router-link :to="{ name: 'product', params: { id: product.id}}">
          <img class="product-image" :src="makeImagePath(product)" alt="">
          <p class="product-title">{{ product.name }}</p>
          <p><em>${{ product.price }}</em></p>
        </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'
// @ is an alias to /src

export default {
  name: "home",
  mixins: [imagePath],
  computed: {
    products: function() {
      return this.$store.state.products
    },
    featuredProducts: function() {
      return this.$store.getters.featuredProducts.slice(0,3)
    }
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 33%;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}
</style>
