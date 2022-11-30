class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "sera" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "sera") {
          resolve({ name: "sera", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage(); // class를 생성
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(abc => userStorage.getRoles(abc))
  .then((www) => alert(`Hello ${www.name}, you have a ${www.role} role`))
  .catch(console.log);
