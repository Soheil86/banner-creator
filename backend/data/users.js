import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Soheil Ghanbari',
    email: 'soheil@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Arezoo Mirza',
    email: 'arezoo@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
