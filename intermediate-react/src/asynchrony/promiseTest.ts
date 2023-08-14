/* eslint-disable @typescript-eslint/no-unused-vars */
async function test() {
  // function threeSecondPromise() {
  //   console.log('Initial:', new Date().getSeconds());

  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 3000);
  //   });
  // }
  // If I leave this, variable is a Promise<unknow>
  // const variable = threeSecondPromise()
  // console.log(variable);

  // So I have to use
  // const variable = threeSecondPromise().then((value) => {
  //   console.log('Finished:', new Date().getSeconds());
  //   console.log(value);
  //   return value;
  // });

  // But variable is still Promise if i leave it like this!
  // console.log('variable after then:', variable);

  // So here is where async is really useful
  // If I know whick type will be the return value, i can define it like this
  // Here i'm telling that threeSecondPromise is a type Promise that returns a string
  function threeSecondPromise(): Promise<string> {
    console.log('Start:', new Date().getSeconds());

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('done');
      }, 3000);
    });
  }

  // Now thanks to TS i can Know that these Promises return string value when hovering on x,y,z
  // const x = await threeSecondPromise();
  // const y = await threeSecondPromise();
  // const z = await threeSecondPromise();

  // to be able to print this clg, i have to wait for them all to finish, so it'd be 9 secs
  // console.log(x, y, z);

  // But to avoid waiting for all promises to resolve, i can use Promise.allSettled and pass an
  // Promise arrray. This calls all promises concurrently and helps me to improve performance
  const x = threeSecondPromise();
  const y = threeSecondPromise();
  const z = threeSecondPromise();

  // Now instead of waiting 9 seconds, wait time goes down to 3 seconds
  // and if I hover on l it tells me that when all promises are solved it returns an string array
  const [x1, y1, z1] = await Promise.all([x, y, z]).then((l) => {
    console.log('Finished:', new Date().getSeconds());
    return l;
  });

  console.log(x1, y1, z1);
}

test();
