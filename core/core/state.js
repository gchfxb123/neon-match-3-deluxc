const State = {
  score: 0,
  combo: 1,
  paused: false,
  selected: null,

  reset() {
    this.score = 0;
    this.combo = 1;
    this.selected = null;
  }
};
