interface Person {
  name: string
  surname: string
  age: number
}

type PersonKeys = keyof Person

let myName: PersonKeys = 'name'

myName = 'age'
myName = 'surname'
myName = 'name'

type User = {
  _id: number
  name: string
  email: string
  createAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createAt'>

let user1: UserKeysNoMeta = 'email'
user1 = 'name'

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>
