function debounce(fn, delay = 500, immdiate) {
  let timer;
  return function() {
    let context = this;
    let arg = arguments;
    if(timer) clearTimeout(timer);
    if(immdiate) {
      let callNow = !timer;
      timer = setTimeout(()=>{
        timer = null;
      },delay)
      if(callNow) {
        fn.apply(context,arg)
      }
    } else {
      timer = setTimeout(()=>{
        timer = null;
        fn.apply(context, arg);
      }, delay)
    }
  }
} 