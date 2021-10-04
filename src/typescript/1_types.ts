// Boolean
const isFetching: boolean = true
const isLoading: boolean = false

// Number
const integer: number = 43
const float: number = 12.2
const num: number = 3e12

// String
const message: string = 'Hello Typescript!'

// Array
const numberArray: number[] = [1, 2, 3, 4]
const numberObject: Array<object> = [{ name: 'Fido' }]
const stringArray: Array<string> = ['TS']

// Tupple
const contact: [string, number] = ['Hello', 1]
// Any
let variable: any = 42
variable = 'String'
variable = {}
variable = []

// function
function sayMyName (name: string): void {
  console.log(name)
}
sayMyName('Heisenberg')

function sum (num1: number, num2: number): number {
  return num1 + num2
}

const result: any = sum(123, 322)

// Never
function throwError (message: string): never {
  throw new Error(message)
}

function infinite (): never {
  while (true) {}
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 123
const id2: ID = '123'

type SomeType = string | null | undefined

const lastMessage: SomeType = undefined

export const types: string = 'Types!'
