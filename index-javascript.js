// V8 engine

let users = [];

function main() {
  console.log('------- Adding a user -------');
  const jimmy = {
    name: 'Jimmy',
    age: 26,
  }

  users = null;

  users.map(p => console.log(p));

  console.log(users);
}

function addUserIntoArray(user, users) {
  return users.concat(user);
}

function addDevicesToUser() {
  // TODO: live demo
}

main();