document.addEventListener('alpine:init', () => {
  Alpine.data('counter', () => ({
    count: 0,
    name: 'Virgiawan',
    logCount() {
      console.log(this.count);
    },
  }));
});
