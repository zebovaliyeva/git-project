// const myPromise = new Promise((resolve, reject) => {
//     const success = true; // Misol uchun holat

//     if (success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed.");
//     }
// });

// myPromise
//     .then((message) => {
//         console.log(message); // "Operation was successful"
//     })
//     .catch((error) => {
//         console.log(error); // "Operation failed"
//     })

//     .finally(() => {
//         console.log("Funksiya tugadi");
//     })
//1
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((responsive) => {
//         if (!responsive.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return responsive.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// console.error("Xatolik");
// console.warn("Ogohlantirish");
//2
//name
//street
//phone
//3
// const arr = [
//     { username: "name" }, //1
//     { username: "name2" }, //2
// ];
// const arr2 = arr.map((item) => {
//     return {
//         name: item.username,
//     };
// });
// console.log(arr2);

// const data2 = data.map((item) => {
//     return {
//         name: item.name,
//         email: item.email,
//         street: item?.address?.street,
//     };
//     innerHTML = `${userData.name}`;
// });
// console.log(data2);

fetch("https://jsonplaceholder.typicode.com/users")
    .then((responsive) => {
        if (!responsive.ok) {
            throw new Error("Network response was not ok");
        }
        return responsive.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
