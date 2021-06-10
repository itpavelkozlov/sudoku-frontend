<template>
  <div class="canvas">
    <h1>Hello sudoku {{ currentSelection }}</h1>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      currentSelection: null,
      ctx: null,
      canvas: null,
    };
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.tabIndex = 1;
    this.canvas.style.outline = "none";
    this.canvas.width = 50 * 9;
    this.canvas.height = 50 * 9;

    this.canvas.addEventListener("click", this.onCanvasClick, false);
    this.canvas.addEventListener("keydown", this.onCanvasKeydown, false);
    this.drawBasicLayout();
  },
  methods: {
    drawBasicLayout() {
      let posX = 0;
      let posY = 0;
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
          if (i % 3 === 0 && j % 3 === 0) {
            this.ctx.strokeStyle = "#000000";
            this.ctx.strokeRect(posX, posY, 50 * 3, 50 * 3);
            this.ctx.font = "48px serif";
            this.ctx.fillText(i + 1, posX + 14, posY + 42);
            this.ctx.strokeStyle = "rgba(0,0,0,0.2)";
          }
          this.ctx.strokeRect(posX, posY, 50, 50);
          posX += 50;
        }
        posX = 0;
        posY += 50;
      }
    },
    fillRect() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawBasicLayout(this.ctx);

      if (this.currentSelection != null) {
        this.ctx.fillStyle = "rgba(0,200,0,0.5)";
        this.ctx.fillRect(
          this.currentSelection[0],
          this.currentSelection[1],
          50,
          50
        );
        this.ctx.fillStyle = "rgba(0,0,0,1)";
      }
    },
    onCanvasClick(e) {
      if (
        this.currentSelection !== null &&
        e.offsetY - (e.offsetY % 50) === this.currentSelection[1] &&
        e.offsetX - (e.offsetX % 50) === this.currentSelection[0]
      ) {
        this.currentSelection = null;
        this.fillRect()
        return;
      }
      this.currentSelection = [
        e.offsetX - (e.offsetX % 50),
        e.offsetY - (e.offsetY % 50),
      ];
      this.fillRect();
    },
    onCanvasKeydown(e) {
      if (this.currentSelection != null) {
        switch (e.keyCode) {
          case 39:
            this.currentSelection[0] += 50;
            if (this.currentSelection[0] + 50 > 450) {
              this.currentSelection[0] = 0;
            }
            this.fillRect();
            break;
          case 37:
            this.currentSelection[0] -= 50;
            if (this.currentSelection[0] < 0) {
              this.currentSelection[0] = 400;
            }
            this.fillRect();
            break;
          case 38:
            this.currentSelection[1] -= 50;
            if (this.currentSelection[1] < 0) {
              this.currentSelection[1] = 400;
            }
            this.fillRect();
            break;
          case 40:
            this.currentSelection[1] += 50;
            if (this.currentSelection[1] + 50 > 450) {
              this.currentSelection[1] = 0;
            }
            this.fillRect();
            break;
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            console.log(e.key);
        }
      }
    },
  },
};
</script>