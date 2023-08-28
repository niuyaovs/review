// 在delay秒后执行fn，若在n秒内重复触发则重新计时
function debounce(fn, delay = 500) {
  console.log(fn)
  let timer;
  return function () {
    let context = this;
    let arg = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(context, arg);
    }, delay);
  };
}
export default debounce;
