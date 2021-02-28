<template>
  <div>
    <section id="home">
        <h1>We make people more valuable to brands</h1>
        <video width="100%" height="100%" poster="assets/videos/video-poster.jpg" autoplay="true" loop="true" muted="true" playsinline="true" webkit-playsinline="true">
            <source src="assets/videos/video.mp4" type="video/mp4">
        </video>
        <a class="arrow_down" v-scroll-to="'#how-we-do-it'"></a>
    </section>

    <section id="how-we-do-it">
        <h4 class="subtitle_h4">how we do it</h4>
        <h2>We use data-driven creativity to solve business problems</h2>
        <div class="paragraph-wrap">
            <img src="assets/img/how-we-do-it.png" alt="how-we-do-it.png">
            <div class="para">By harnessing powerful insights and smart targeting, we’re able to create behavior-changing ideas and experiences that deliver value to brands. Supported by our proprietary <a>Creative Intelligence process</a>, <a>unique tools</a> and <a>global partners</a>, we are able to put data at the heart of everything we do to orchestrate experiences that deliver creativity with precision and purpose.</div>
        </div>
    </section>

    <section id="business-problems-solved">
        <h4 class="subtitle_h4">business problems we've solved</h4>
        <div class="card-wrap">
            <div class="card">
                <h3>Can a love story double as a hearing test?</h3>
                <a href="#">Find out here</a>
            </div>
            <div class="card">
                <h3>How close to an AFL player can you get?</h3>
                <a href="#">Find out here</a>
            </div>
        </div>
        <a href="#" class="view_work">View our work</a>
    </section>

    <a id="return_to_top" v-scroll-to="'#home'">Return to top</a>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {}
  },
  
  methods: {},
  
  mounted() {}
}
</script>

<style scoped></style>