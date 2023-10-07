function throttle(fn, delay = 500) {
  let oldTime = Date.now();
  return function() {
    let context = this;
    let arg = arguments;
    let now = Date.now();
    if(now - oldTime > delay) {
      oldTime = Date.now();
      fn.apply(context, arg)
    }
  }
}