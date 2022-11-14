// 基础类型
// null, undefined, symbol, boolean, void
const year: number = 123

// 对象类型
class Person {}

const tao: Person = new Person()

const stu: {
    name: string
    age: number
} = {
    name: 'tao',
    age: 20,
}

const arr: number[] = [1, 2, 3]

const fn: () => string = () => {
    return 'fn'
}
