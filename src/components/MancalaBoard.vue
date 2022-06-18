<template>
  <div
    class="bg-amber-800 w-11/12 h-5/6 rounded-3xl grid grid-cols-8 gap-5 p-5 shadow-lg img-bg board"
  >
    <MancalaHole />
    <div class="grid grid-cols-6 col-span-6 gap-y-10 gap-x-5">
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
      <MancalaHole />
    </div>
    <MancalaHole />
  </div>
</template>

<style>
.img-bg {
  background: url("https://media.istockphoto.com/photos/laminate-wooden-floor-texture-background-picture-id1083302826?b=1&k=20&m=1083302826&s=170667a&w=0&h=ePdma8I7u7KHs2YbehQSVcCX9qay5iPr3wynsWnzFZ0=");
  background-size: cover;
}

.board {
	--bg: 146, 64, 14;
	--op: 0.08;

  box-shadow: inset 2px -3px 4px 0 rgb(0 0 0 / 0.3),
    inset -2px 3px 4px 0 rgb(255 255 255/ 0.3),

    -64px 64px 64px 0px rgb(0 0 0 / 0.2),
    -32px 32px 32px 0px rgb(0 0 0 / 0.2),
    -16px 16px 16px 0px rgb(0 0 0 / 0.2),
    -8px 8px 8px 0px rgb(0 0 0 / 0.2),
    -4px 4px 4px 0px rgb(0 0 0 / 0.2),
    -2px 2px 2px 0px rgb(0 0 0 / 0.2),

    64px -64px 64px 0px rgba(var(--bg) , var(--op)),
    32px -32px 32px 0px rgba(var(--bg) , var(--op)),
    16px -16px 16px 0px rgba(var(--bg) , var(--op)),
    8px -8px 8px 0px rgba(var(--bg) , var(--op));
}
</style>
