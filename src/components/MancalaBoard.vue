<script setup lang="ts">
const store1 = ref(0);
const store2 = ref(0);
const p = ref(true);

const board = ref([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);

const timeout = (n: number) => new Promise((r) => setTimeout(r, n));

const seed = async (place: number) => {
  const b = board.value;

  let i = place;

  while (b[place] !== 0) {
    b[place]--;

    if (i == 0) {
      b[i]++;
      i = 12;
    } else if (i == 11) {
      b[i]++;
      i = 13;
    } else if (i == 12) {
      store1.value++;
      i = 6;
    } else if (i == 13) {
      store2.value++;
      i = 5;
    } else if (i <= 5) {
      b[i]++;
      i--;
    } else {
      b[i]++;
      i++;
    }

    board.value = b;
    await nextTick();
    await timeout(200);
  }

  if ((i === 12 && p.value) || (i === 13 && !p.value)) {
    return;
  } else if ((i <= 5 && p.value && b[i] === 1) || (i >= 6 && !p.value && b[i] === 1)) {
    const ii = i <= 5 ? i + 6 : i - 6;

    let s = store1;

    if (p.value) {
      s = store2;
    }

    while (b[i]) {
      b[i]--;
      s.value++;

      await nextTick();
      await timeout(100);
    }
    while (b[ii]) {
      b[ii]--;
      s.value++;

      await nextTick();
      await timeout(100);
    }
  }
  p.value = !p.value;
};
</script>

<template>
  <p v-if="p" class="absolute top-1">----</p>
  <p v-else class="absolute bottom-1">----</p>
  <div
    class="bg-amber-800 w-11/12 h-5/6 rounded-3xl grid grid-cols-8 gap-5 p-5 shadow-lg img-bg board"
  >
    <MancalaHole>
      <Pebble v-for="_ in store1" />
    </MancalaHole>
    <div class="grid grid-cols-6 col-span-6 gap-y-10 gap-x-5">
      <MancalaHole v-for="(p, i) in board" @click="() => seed(i)">
        <Pebble v-for="_ in p" />
      </MancalaHole>
    </div>
    <MancalaHole>
      <Pebble v-for="_ in store2" />
    </MancalaHole>
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
    -64px 64px 64px 0px rgb(0 0 0 / 0.2), -32px 32px 32px 0px rgb(0 0 0 / 0.2),
    -16px 16px 16px 0px rgb(0 0 0 / 0.2), -8px 8px 8px 0px rgb(0 0 0 / 0.2),
    -4px 4px 4px 0px rgb(0 0 0 / 0.2), -2px 2px 2px 0px rgb(0 0 0 / 0.2),
    64px -64px 64px 0px rgba(var(--bg), var(--op)),
    32px -32px 32px 0px rgba(var(--bg), var(--op)),
    16px -16px 16px 0px rgba(var(--bg), var(--op)),
    8px -8px 8px 0px rgba(var(--bg), var(--op));
}
</style>
