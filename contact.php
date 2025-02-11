<?php
require 'functions.php';
// konfirmasi submit
if( isset($_POST["submit"]) ) {

  // data masuk/tidak
  if( insert($_POST) > 0 ) {
    echo "
          <script>
                alert('data berhasil ditambahkan');
                document.location.href = 'contact.php';
          </script>
          ";
  } else {
    echo "
          <script>
                alert('data gagal ditambahkan');
                document.location.href = 'contact.php';
          </script>
          ";
  }
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/logo2.png" />
    <title>THE DAYS COFFEE</title>

    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Freeman&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,700;1,800&display=swap"
      rel="stylesheet"
    />

    <!-- feather icons -->
    <script src="https://unpkg.com/feather-icons"></script>

    <!-- my style -->
    <link rel="stylesheet" href="style.css" />

  </head>
  <body>
    <!-- nav start -->
    <nav class="navbar">
      <div class="nav-logo">
        <a href="#">
          <img src="img/logo2.png" />
        </a>
      </div>
      <div class="navbar-nav">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="products.html">Products</a>
        <a class="kontak" href="contact.php">Contact Us</a>
      </div>

      <div class="navbar-extra">
        <a href="#" id="search-button"><i data-feather="search"></i></a>
        <a href="cart-empty.html" id="shopping-cart"
          ><i data-feather="shopping-cart"></i
        ></a>
        <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
      </div>

      <!-- search form start -->
      <div class="search-form">
        <input type="search" id="search-box" placeholder="search here..." />
        <!-- <label for="search-box"><i data-feather="search"></i></label> -->
      </div>
      <!-- search form end -->
    </nav>
    <!-- nav end-->

    <!-- contact section start -->

    <section id="contact" class="contact">
      <p>
        Jangan ragu untuk mengirimkan pesan kepada kami melalui formulir di
        bawah ini.
      </p>
      <div class="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.01610843319!2d106.73868267865629!3d-6.230203900125773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0c7d941b667%3A0xa23db89607c3cb9f!2sPetukangan%20Utara%2C%20Kec.%20Pesanggrahan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1715300440580!5m2!1sid!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="map"
        ></iframe>

        <form action="" method="POST">
          <div class="input-group">
            <i data-feather="user"></i>
            <input type="text" name="username" placeholder="username" required/>
          </div>
          <div class="input-group">
            <i data-feather="mail"></i>
            <input type="email" name="email" placeholder="e-mail" required/>
          </div>
          <div class="input-group-textarea">
            <i class="message" data-feather="message-square"></i>
            <textarea name="message" placeholder="message"></textarea>
          </div>
          <button type="submit" name="submit" class="btn">Send message</button>
        </form>
      </div>
    </section>
    <!-- contact section end -->

    <!-- footer start -->
    <footer>
      <div class="socials">
        <a
          href="https://www.instagram.com/the_dayscoffee/?utm_source=ig_web_button_share_sheet"
          ><i data-feather="instagram"></i
        ></a>
        <a href="mailto:thedayscoffee86@gmail.com"
          ><i data-feather="mail"></i
        ></a>
        <a href=https://api.whatsapp.com/send?phone=62857-5695-3895&text=Halo%20The%20Days%20Coffee!%0ASaya%20ingin%20order%20coffee
          ><i data-feather="phone"></i
        ></a>
      </div>

      <!-- <div class="links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact Us</a>
      </div> -->

      <div class="credit">
        <p>
          Created by KELOMPOK 4 | <a href="">THE DAYS COFFEE</a>. | &copy; 2024
        </p>
      </div>
    </footer>
    <!-- footer end -->

    <!--  -->
    <!-- feater icons -->

    <script>
      feather.replace();
    </script>
    <!-- js -->
    <script src="script.js"></script>
  </body>
</html>
