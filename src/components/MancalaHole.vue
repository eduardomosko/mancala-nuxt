<template>
  <div class="rounded-2xl overflow-hidden shadow-inner-round">
    <div class="shadow-inner-sq inner-shine w-full h-full p-3">
      <div class="w-full h-full grid grid-cols-4 gap-2 place-content-center place-items-center" >
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.shadow-inner-sq {
  --sb-blur: 4px;
  --sb-displace: 20px;
  --sb-opacity: 0.15;

  --sb-c-displace: calc(var(--sb-displace) + var(--sb-blur));
  box-shadow: inset 0px var(--sb-c-displace) var(--sb-blur)
      calc(-1 * var(--sb-blur)) rgb(0 0 0 / var(--sb-opacity)),
    inset calc(-1 * var(--sb-c-displace)) 0px var(--sb-blur)
      calc(-1 * var(--sb-blur)) rgb(0 0 0 / var(--sb-opacity)),
    inset 0px calc(var(--sb-c-displace) / 1.5) var(--sb-blur)
      calc(-1 * var(--sb-blur)) rgb(0 0 0 / var(--sb-opacity)),
    inset calc(-1 * var(--sb-c-displace) / 1.5) 0px var(--sb-blur)
      calc(-1 * var(--sb-blur)) rgb(0 0 0 / var(--sb-opacity)),
    inset 0px calc(var(--sb-c-displace) / 2.25) var(--sb-blur)
      calc(-1 * var(--sb-blur)) rgb(0 0 0 / var(--sb-opacity)),
    inset calc(-1 * var(--sb-c-displace) / 2.25) 0px var(--sb-blur)
      calc(-1 * var(--sb-blur)) rgb(0 0 0 / var(--sb-opacity)),
    inset 0px calc(var(--sb-c-displace) / 5) var(--sb-blur)
      calc(-1 * var(--sb-blur)) rgb(0 0 0 / var(--sb-opacity)),
    inset calc(-1 * var(--sb-c-displace) / 5) 0px var(--sb-blur)
      calc(-1 * var(--sb-blur)) rgb(0 0 0 / var(--sb-opacity));
}

.shadow-inner-round {
  --sb-blur: 5px;
  --sb-displace: 2px;
  --sb-opacity: 0.1;

  --sb-c-displace: calc(var(--sb-displace) + var(--sb-blur));

  box-shadow: inset 0px var(--sb-c-displace) var(--sb-blur) 1px
      rgb(0 0 0 / var(--sb-opacity)),
    inset calc(-1 * var(--sb-c-displace)) 0px var(--sb-blur) 1px
      rgb(0 0 0 / var(--sb-opacity)),
    inset 3px -2px 1px -2px rgb(255 255 255 / 0.1),
    -3px 2px 3px 0px rgb(255 255 255 / 0.2),
    inset 1px -1px 1px -1px rgb(255 255 255 / 0.7),
    -1px 1px 1px -1px rgb(255 255 255 / 0.7), 2px -1px 2px 0 rgb(0 0 0 / 0.6);
}

.inner-shine {
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 5%,
      rgba(255, 255, 255, 0.1) 15%,
      rgba(255, 255, 255, 0.02) 35%,
      rgba(0, 0, 0, 0) 40%
    ),
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 5%,
      rgba(255, 255, 255, 0.06) 10%,
      rgba(255, 255, 255, 0.02) 20%,
      rgba(0, 0, 0, 0) 25%
    ),
    radial-gradient(
      circle at 15% 10%,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(0, 0, 0, 0) 10%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(0, 0, 0, 0) 10%
    ),
    radial-gradient(
      circle at 40% 90%,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(0, 0, 0, 0) 10%
    ),
    radial-gradient(
      circle at 20% 90%,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(0, 0, 0, 0) 10%
    ),
    rgb(0 0 0 / 0.08);
}
</style>
