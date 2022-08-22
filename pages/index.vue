<template>
  <div style="margin-bottom: 3em">
    
    <!--   Header   -->
    <section style="text-align: center;">
      <div  style="display: inline-block; text-align: left;">
        <h1 class="title">Caìo,<br>i'm <span class="highlight">&lt;Lucy/&gt;</span></h1>
      </div>
      <p>I'm a self-taught web developer, software engineer & UX designer from New Jersey!</p>
    </section>

    <!--   Links   -->
    <section>
      <div style="margin-top: 5em; text-align: center;">
        <h1>Links</h1>
        <div style="display: flex; justify-content: center; flex-wrap: wrap; padding: 0 1em 0 1em;">
          <div v-for="item in links">
            <NuxtLink :to="'/redirect?url='+item.url">
              <button>
                <img class="buttonImage" :src="`/icons/home/${item.name}.svg`" />
                {{ item.name }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!--   Contact   -->
    <section>
      <div style="margin-top: 5em; text-align: center;">
        <h1>Contact Me</h1>
        <p><b>Discord</b> Lucyyy#7205</p>
      </div>
    </section>

    <!--   Note   -->
    <section>
      <div style="margin-top: 5em; text-align: center;">
        <h1>Work</h1>
        <p style="padding: 0 25% 0 25%">I sometimes accept commission work. If you wish to discuss, please contact me via Discord. However, this isn't frequent as I'm still in highschool, have a full time job and I'm duel-enrolled in college.</p>
      </div>
    </section>

    <center style="margin-top: 2em;">
        <div style="opacity: 0.25; font-size: 0.8em;">&copy;Lucy Mason 2021-{{ new Date().getFullYear() }}</div>
    </center>
  </div>
</template>

<style scoped>
.highlight {
  background: rgba(0,0,0,0.25);
  padding: 0.1em;
  border-radius: 0.5em;
}

.buttonImage {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  filter: invert(1) brightness(0.5) sepia(100%) hue-rotate(240deg);
}
</style>

<script>
export default {
  data() {
    return {
      links: [
        { name: "GitHub",  url: "https://github.com/Queen-O-Hearts" },
        { name: "Reddit",  url: "https://reddit.com/u/Lucyyy04" },
        { name: "YouTube", url: "https://youtube.com/channel/UCPNUkoT2mf8wXoG9fZ9GePQ" },
        { name: "Spotify", url: "https://open.spotify.com/user/uxw50ny7okl0l4fyn45qhxzzy" },
        { name: "Steam", url: "https://steamcommunity.com/id/queen-ofhearts/" },
      ]
    }
  }
}
</script>
