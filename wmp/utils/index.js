/**
 * 防抖 - 延迟执行
 * @param {Function} handle
 * @param {Number} wait
 * @param {Boolean} immediate
 * @returns
 */
export const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const context = this;
    const args = [...arguments];
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
};

/**
 * 节流 - 间隔执行
 * @param {Function} handle 回调函数
 * @param {Number} interval 执行间隔
 * @returns
 */
export const throttle = (handle, interval = 1000 / 60) => {
  var lastTime = 0;
  return function () {
    var nowTime = new Date().getTime();
    if (nowTime - lastTime >= interval) {
      handle.apply(this, arguments);
      lastTime = nowTime;
    }
  };
};





