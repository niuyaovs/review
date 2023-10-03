function throttle(fn, delay = 500) {
  let timer;
  return function () {
    let context = this;
    let arg = arguments;
    if (timer) {
      timer = setTimeout(() => {
        fn.apply(context,arg);
        timer = null;
      }, delay)
    }
  }
}