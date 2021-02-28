<template>
  <header :class="{ scroll: scrollPosition > 350}">
        <div class="header-wrap">
            <div class="logo">
                <a href="#" target="_blank"></a>
            </div>
            <div id="toggle-menu" v-if="isMobile" @click="handleMenu">
                <div class="bar" :class="{ open: isMenuOpen }"></div>
            </div>
            <nav class="menu" :class="{ open: isMenuOpen, close: isMobile && !isMenuOpen }">
                <a v-for="link in menulinks" :id="link.id" :href="link.href" :key="link.id">{{ link.title }}</a>
                <div id="lang_selector">
                    <span data-lang="en" :class="{ active: lang == 'en' }" @click="handleLanguage">EN</span>
                    <span data-lang="fr" :class="{ active: lang == 'fr' }" @click="handleLanguage">FR</span>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      lang: null,
      scrollPosition: null,
      isMobile: true,
      isMenuOpen: false,
      menulinks: [ //Todo: API Fetch
          { id: "#about-us", title: "About", href: "#about" },
          { id: "#work", title: "Work", href: "#work" },
          { id: "#latest", title: "Latest", href: "#latest" },
          { id: "#ppl", title: "People & Careers", href: "#people" },
          { id: "#contact", title: "Contact", href: "#contact"}
      ]
    }
  },
  
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    handleMenu() {
      this.isMenuOpen = (this.isMenuOpen) ? false : true;
    },
    handleLanguage(e) {
      this.lang = e.currentTarget.getAttribute('data-lang');
    }
  },

  watch: {
    lang: function () {
      localStorage.lang = this.lang;
      console.log('language: ', this.lang);
      this.isMenuOpen = false;
    }
  },
  
  mounted() {
    this.lang = this.$store.getters.lang;
    window.addEventListener('scroll', this.updateScroll);
    
    this.isMobile = (window.innerWidth < 900) ? true : false;
    window.addEventListener('resize', () => {
      this.isMobile = (window.innerWidth < 900) ? true : false;
    })
  },


}
</script>

<style scoped></style>
