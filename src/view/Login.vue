<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-5">
          <img src="../../image/logo.png" alt class="logo" />
          <h2 class="text-center mt-4">
            Đăng nhập bằng tài khoản Zalo
            <br />
            <b>chat.zalo.me</b>
          </h2>
        </div>
      </div>
      <div class="container login-form">
        <div class="row">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >Với số điện thoại</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >Với mã QR</a>
            </li>
          </ul>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-12 login-form-layout">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-mobile-alt"></i>
                    </span>
                  </div>
                  <input
                    v-model="username"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    v-model="password"
                    type="text"
                    class="form-control"
                    placeholder="Mật khẩu"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <img src="../../image/qr-code.png" alt class="qr-code" />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <button
            v-bind:class="{ active: isActive }"
            type="button"
            class="btn bg-primary text btn-outline-secondary text-light button-submit"
          >Đăng nhập ngay</button>
          <button
            v-bind:class="{ Notactive: notActive }"
            type="button"
            class="btn bg-primary text btn-outline-secondary text-light button-signup"
            style
          >Đăng kí tài khoản</button>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      username: "",
      password: "",
      isActive: false,
      notActive: false
    };
  },
  methods: {},
  watch: {
    username: function() {
      if (this.username == "") {
        this.isActive = false;
        this.notActive = false;
      } else {
        this.isActive = true;
        this.notActive = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 20px;
  font-weight: 200;
}
h2 b {
  font-weight: 700;
  font-size: 17px;
  line-height: 3.5rem;
}
.logo {
  max-width: 25%;
  display: block;
  margin: 0 auto;
}
.login-form div.input-group-prepend {
  width: 40px;
}
.login-form span.input-group-text {
  width: 100% !important;
}
.button-submit {
  opacity: 0.3;
  font-size: 13px;
  display: block;
  margin: 0 auto;
}
.button-signup {
  opacity: 1;
  font-size: 13px;
  display: block;
  margin: 0 auto;
}
input:focus {
  outline: none;
}
.nav-tabs .nav-link {
  border: none;
  color: black;
  font-weight: 200;
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  color: blue;
}
.nav-tabs .nav-link.active {
  background: transparent;
  border: none;
  font-weight: 500;
}
.nav-tabs .nav-link:hover {
  border: none;
  
}
.login-form {
  padding: 20px 40px;
  max-width: 30%;
  box-shadow: 0 8px 24px rgba(21, 48, 142, 0.14);
  border-radius: 10px;
}
.login-form-layout {
  margin: 10px;
}
.qr-code {
  max-width: 90%;
  max-height: 150px;
  margin: 0 auto;
  display: block;
}
.Notactive {
  opacity: 0.3;
}
.active {
  opacity: 1;
}


</style>