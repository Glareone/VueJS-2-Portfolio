export const mixin = {
  filters: {
    reverseText(text) {
      return [...text].reverse().join('');
    }
  },
  computed: {
    reversedText() {
      return [...this.componentTestText].reverse().join('');
    },
    counter() {
      return `${ this.componentTestText } (${ this.componentTestText.length })`;
    }
  }
};