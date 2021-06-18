<template>
  <div class="container py-5">
    <div class="row">
      <ol class="text-center pl-0 d-flex" style="list-style: none;">
        <li class="col-md-4">
          <div class="alert alert-info rounded-pill mb-0 " role="alert">
            1.確認訂購商品
          </div>
        </li>
        <li class="col-md-4">
          <div class="alert alert-light rounded-pill mb-0 " role="alert">
            2.訂購人資訊填寫
          </div>
        </li>
        <li class="col-md-4">
          <div class="alert alert-light rounded-pill mb-0" role="alert">
            3.完成
          </div>
        </li>
      </ol>
    </div>
  </div>
  <h2 class="text-center mb-5">購物車列表</h2>
  <loading :active="isLoading"></loading>
  <div class="text-end">
    <button class="btn btn-outline-danger" type="button" @click="delCart">清空購物車</button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
        <th class="text-end">小計</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cart.carts" :key="item.id">
        <td>
          <button type="button" class="btn btn-outline-danger btn-sm" @click="delItem(item.id)">
            X
          </button>
        </td>
        <td>{{ item.product.title }}</td>
        <td>
          <div class="input-group input-group-sm ">
            <input
              type="number"
              min="1"
              @change="updateCart(item)"
              v-model.number="item.qty"
              class="form-control"
            />
            <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
          </div>
        </td>
        <td>{{ item.product.price }}</td>
        <td class="text-end">{{ item.total }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4" class="text-end h6">總計</td>
        <td class="text-end h6">{{ cart.total }}</td>
      </tr>
    </tfoot>
  </table>
  <div class="d-flex justify-content-end">
    <button type="button" class="btn btn-primary" @click="toOder">確認訂購</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
            this.isLoading = false;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delItem(id) {
      this.isLoading = true;
      this.$http
        .delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            alert(res.data.message);
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delCart() {
      this.isLoading = true;
      this.$http
        .delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            alert(res.data.message);
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCart(item) {
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.$http
        .put(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`, {
          data: cart,
        })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toOder() {
      if (this.cart.carts.length === 0) {
        alert('購物車不能是空的！');
        setTimeout(() => {
          this.$router.push('/products');
        }, 1000);
        return;
      }
      this.$router.push('/order');
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
