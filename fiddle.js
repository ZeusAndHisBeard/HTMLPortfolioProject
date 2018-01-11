let users = [
  {login: "Sam", admin: false },
  {login: "Brook", admin: true },
  {login: "Tyler", admin: true },
];

let admin = users.find(function(user) {
  return user.admin;
});

console.log(admin);
