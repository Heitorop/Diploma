<script setup></script>

<template>
  <div class="info">
    <div class="info-beginning">
      <div></div>
      <p>Початкий рівень захисту</p>
    </div>
    <div class="info-current">
      <div></div>
      <p>Поточний рівень захисту</p>
    </div>
    <div class="info-red">
      <div></div>
      <p>Зона високого ризику</p>
    </div>
    <div class="info-yellow">
      <div></div>
      <p>Зона допустимого ризику</p>
    </div>
    <div class="info-green">
      <div></div>
      <p>Зона низького ризику</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  z-index: 1;
  

  &-beginning,
  &-current,
  &-red,
  &-yellow,
  &-green {
    display: flex;
    flex-wrap: nowrap;
    div {
      width: 40px;
      height: 20px;
      background-color: black;
    }

    p {
      padding-left: 5px;
    }
  }

  &-beginning {
    div {
      background-color: #008efb6f;
      border: 1px solid #008ffb;
    }
  }

  &-current {
    div {
      background-color: #00e3977a;
      border: 1px solid #00e396;
    }
  }

  &-red {
    div {
      background-color: #ff6e40;
    }
  }

  &-yellow {
    div {
      background-color: #ffff8d;
    }
  }

  &-green {
    div {
      background-color: #81c784;
    }
  }

  @media (width < 1024px) {
    flex-direction: column;
    row-gap: 10px;
    margin-top: -60px;
  }
}
</style>
