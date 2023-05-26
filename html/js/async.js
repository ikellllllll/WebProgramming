// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 3000);
// console.log("3");

// let promise = new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   //     resolve("done");
//   //   }, 3000);

//   setTimeout(() => {
//     reject(new Error("Whoops!"));
//   }, 3000);
// });

// promise.then((value) => {
//     console.log(value);
// })

// promise.then(console.log).catch(console.log);

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(console.log);

// Promise.allSettled([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 5000)),
// ]).then(console.log);

// f = async () => {
//     return 1; // promise를 반환
// }

// f().then(alert);

// f = async () => {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("완료!"), 1000);
//     });
  
//     let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
//     // await는 promise 앞에만 사용 가능!!!
  
//     alert(result); // "완료!"
//   };
  
//   f();

async function showAvatar() {
    // JSON 읽기
    let response = await fetch("/article/promise-chaining/user.json");
    let user = await response.json(); // github 사용자 정보 읽기
  
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json(); // 아바타 보여주기
  
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img); // 3초 대기
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    img.remove();
    return githubUser;
  }
  showAvatar();
  