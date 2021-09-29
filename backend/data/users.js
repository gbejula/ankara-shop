import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12356', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('12356', 10),
  },
  {
    name: 'Bisi Doe',
    email: 'bisi@example.com',
    password: bcrypt.hashSync('12356', 10),
  },
];

export default users;
