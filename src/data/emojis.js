export default {
  all: [
    "🙊",
    "🐵",
    "🦊",
    "🦁",
    "🐶",
    "🐺",
    "🦓",
    "🐱",
    "🐯",
    "🐷",
    "🐹",
    "🐭",
    "🐼",
    "🐨",
    "🐔",
    "🦖",
    "🐄",
    "🐻",
    "🐸",
    "🐊",
    "🐢",
    "🐍",
    "🐠",
    "🦋",
    "🐌"
  ],

  getRandom() {
    return this.all[Math.floor(Math.random() * this.all.length)];
  }
};
