const SignIn = {
  async render() {
    return `
    <div class="container-signin">
      <div class="left-side">
          <div class="box-signin">
              <h3>Halo, Apa Kabar ?</h3>
              <p>silakan berikan informasi untuk <br>
                  mendaftarkan Akun
              </p>
              <p>Belum memiliki Akun? <a href="#/sign-up">Daftar sekarang</a></p>
              <input type="button" value="Daftar" onclick="location.href='#/sign-up';">
              <p><br>ingin karya anda dikenal banyak orang?<br>ayo bergabung menjadi bagian dari <b>RuangJahit</b></p>
              <input type="button" value="Daftar Penjahit" onclick="location.href='#/sign-up-tailor';">
          </div>
      </div>

      <div class="right-side">
          <img src="./assets/logo-ruangjahit.png" class="" alt="Logo RuangJahit">
          <div class="container-input">
            <form action="#" class="signin-input" id="form-login">
                <h3>Masuk</h3>
                <div class="input-field">
                    <input type="text" id="username" name="username" placeholder="Nama Pengguna" required>
                </div>
                <div class="input-field">
                    <input type="password" id="password" name="password" placeholder="Kata Sandi" required>
                </div>
                <a href="#">Lupa kata sandi ?</a>
                <input type="button" class="btn-masuk" id="btn-login" name="btn-login" onclick="Login()" value="Masuk">
            </form>
          </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    document.querySelector('app-bar').style.display = 'none';
    document.querySelector('footer-bar').style.display = 'none';
  },
};

export default SignIn;
