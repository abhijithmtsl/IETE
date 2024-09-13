<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h2>Welcome to IETE</h2>
        <h1>
          The Institution of <span class="highlight">Electronics</span><br />
          and <span class="highlight">Telecommunication</span><br />
          Engineers
        </h1>
        <p>
          India's leading recognized professional society devoted to the
          advancement of Science and Technology of Electronics, Telecommunication & IT.
          Founded in 1953.
        </p>
        <button class="btn-know-more">KNOW MORE</button>
      </div>
      <div class="team-image">
        <img src="@/assets/banners.png" alt="IETE Team Photo" />
        <div class="carousel-controls">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    </section>
    <footer class="footer">
      <marquee class="marquee-text">
        Platinum Discount on Membership Fee | Note of Attention related to IETE Journal of Education | Revised Aims and Scope for IETE Journal of Research | Call for Nominations: Main
      </marquee>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Hero Section Styling */
.hero-section {
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #f5f5f5;
}

.hero-content {
  width: 50%;
}

.hero-content h2 {
  font-size: 18px;
  color: #666;
}

.hero-content h1 {
  font-size: 36px;
  font-weight: bold;
}

.hero-content .highlight {
  color: #ff5a3c; /* Orange highlight color */
}

.hero-content p {
  font-size: 16px;
  color: #888;
  margin: 20px 0;
}

.hero-content .btn-know-more {
  padding: 10px 20px;
  background-color: #001744;
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
}

.hero-image {
  position: relative;
  width: 50%;
}

.hero-image img {
  width: 100%;
  border-radius: 5px;
}

.carousel-controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.carousel-controls .dot {
  height: 10px;
  width: 10px;
  background-color: #888;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
}

/* Footer Styling */
.footer {
  background-color: #2c2e54;
  padding: 10px;
  color: #fff;
  text-align: center;
}

.marquee-text {
  color: #ffffff;
  font-size: 14px;
}
</style>
