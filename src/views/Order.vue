<template>
  <div class="container py-5">
    <div class="row">
      <ol class="form-row text-center pl-0 d-flex" style="list-style: none;">
        <li class="col-md-4">
          <div class="alert alert-dark rounded-pill mb-0 " role="alert">
            1.確認訂購商品
          </div>
        </li>
        <li class="col-md-4">
          <div class="alert alert-info rounded-pill mb-0 " role="alert">
            2.訂購人資訊填寫
          </div>
        </li>
        <li class="col-md-4">
          <div class="alert alert-light rounded-pill mb-0" role="alert">
            3.完成
          </div>
        </li>
      </ol>
      <div class="my-5 row justify-content-center">
        <Form v-slot="{ errors }" class="col-md-6" ref="form" @submit="sendOrder">
          <div class="mb-3">
            <label for="email" class="form-label"
              >Email<span class="text-danger ms-2">(必填)</span></label
            >
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label"
              >收件人姓名<span class="text-danger ms-2">(必填)</span></label
            >
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入 姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label"
              >收件人電話<span class="text-danger ms-2">(必填)</span></label
            >
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入 手機號碼"
              rules="required"
              v-model="form.user.tel"
            ></Field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label"
              >收件人地址<span class="text-danger ms-2">(必填)</span></label
            >
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入 地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-secondary">送出訂單</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    sendOrder() {
      const order = this.form;
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            alert(res.data.message);
            this.$refs.form.resetForm();
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
