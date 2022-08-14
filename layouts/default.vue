<template>
  <div>
    <slot />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');
.title {
  font-family: 'Montserrat', sans-serif;
  font-size: 3em;
}
* {
  font-family: 'Montserrat', sans-serif;
  color: #d2afdd;
}

body {
  background-color: #110e12;
  background-image: url("/blobs.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}

button {
  padding: 0.5em;
  margin: 0.25em;
  font-size: 1.25em;
  background: rgba(0,0,0,0.25);
  outline: 0;
  border: none;
  border-radius: 0.5em;
  transition-duration: 0.25s;
  cursor: pointer;
}
button:hover, .animateHover {
  transform: rotate(-3deg);
  box-shadow: 2px 5px #3f3442, 5px 10px #997ea1;
  transition-duration: 0.25s;
}
button:active {
  transition-duration: 0.25s;
    box-shadow: 2px 2px #3f3442, 4px 4px #997ea1;
}

.footer {
  position: fixed;
  bottom: 1em;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
