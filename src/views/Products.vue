<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6 col-lg-3 mb-3" v-for="item in products" :key="item.id">
        <div class="d-flex justify-content-center">
          <div class="card" style="width: 18rem;">
            <div class="image" @click="getProduct(item.id)">
              <img
                :src="item.imageUrl"
                class="card-img-top img-fluid"
                alt=""
                style="background-position: center center"
              />
              <div class="overlay">
                <div class="text">
                  查看更多
                </div>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <del>原價 NTD{{ item.origin_price }}元</del>
              <div class="h5">
                現在只要 NTD<span style="color: red">{{ item.price }}</span
                >元
              </div>
              <button type="button" class="btn btn-primary" @click="addCart(item.id)">
                <span class="h6">加入購物車</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <UserProductModal
    ref="userProductModal"
    :product="product"
    @add-cart="addCart"
  ></UserProductModal>
</template>

<style>
.image {
  position: relative;
}

.image:hover .overlay {
  opacity: 0.5;
  cursor: pointer;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s ease-in;
  background-color: #000;
}

.text {
  color: white;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
}
</style>
<script>
import UserProductModal from '@/components/UserProductModal.vue';

export default {
  data() {
    return {
      products: [],
      product: {},
      isLoading: false,
    };
  },
  components: {
    UserProductModal,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.isLoading = false;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProduct(id) {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.isLoading = false;
            this.$refs.userProductModal.modalOpen();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addCart(id, qty = 1) {
      this.isLoading = true;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, { data: cart })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            this.$refs.userProductModal.modalHide();
            this.isLoading = false;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
