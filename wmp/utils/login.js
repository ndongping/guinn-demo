export const fetchLoginDefault = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("success-----");
      resolve(12313);
    }, 5000);
  });
};
