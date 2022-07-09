type Device = (Camera | Bridge);

type User = {
  name: string,
  age: number,
  edition: 'Standard' | 'Pro' | 'Business',
  dateJoined: Date,
  devices?: Device[]
};

type Hardware = {
  name?: string,
  type: string,
};

type Camera = Hardware & {
  aperture: number,
  canZoom: boolean,
}

type Bridge = Hardware & {
  connected: boolean,
}

let users: User[] = [];

function main() {
  console.log('------- Adding a user -------');
  let jimmy: User = {
    name: 'Jimmy',
    age: 26,
    edition: 'Pro',
    dateJoined: new Date(),
  };
  users = addUserIntoArray(jimmy, users);
  console.log(users);

  console.log('------- Adding a device to user -------');
  const device = {
    type: 'camera',
    aperture: 13,
    canZoom: false,
  };
  jimmy = addDevicesToUser(device, jimmy);
  console.log(jimmy);
}

function addUserIntoArray(user: User, users: User[]): User[] {
  return users.concat(user);
}

function addDevicesToUser(device: Device, user: User): Required<User> {
  return {
    ...user,
    devices: (user.devices ? user.devices : []).concat(device)
  }
}

main();