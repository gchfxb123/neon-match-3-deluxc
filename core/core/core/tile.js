class Tile {
  constructor(col, row, type) {
    this.col = col;
    this.row = row;
    this.type = type;
    this.y = row * CONFIG.SIZE;
  }

  draw(ctx) {
    ctx.fillStyle = `hsl(${this.type * 60},100%,60%)`;
    ctx.fillRect(
      this.col * CONFIG.SIZE + 2,
      this.y + 2,
      CONFIG.SIZE - 4,
      CONFIG.SIZE - 4
    );
  }
}
