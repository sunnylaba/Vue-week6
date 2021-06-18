<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ modalProduct.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid" :src="modalProduct.imageUrl" alt="" />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">{{ modalProduct.category }}</span>
              <p>商品描述：<br>{{ modalProduct.description }}</p>
              <p>商品內容：<br>{{ modalProduct.content }}</p>
              <del>原價 NTD {{ modalProduct.origin_price }} 元</del>
              <div>
                現在只要 NTD <span class="h5">{{ modalProduct.price }}</span> 元
              </div>
              <div>
                <div class="input-group">
                  <input type="number" class="form-control" v-model.number="qty" min="1" />
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="$emit('add-cart', modalProduct.id, qty)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    product: {},
  },
  data() {
    return {
      modal: '',
      modalProduct: {},
      qty: 1,
    };
  },
  watch: {
    product() {
      this.modalProduct = this.product;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  methods: {
    modalOpen() {
      this.modal.show();
    },
    modalHide() {
      this.modal.hide();
    },
  },
};
</script>
