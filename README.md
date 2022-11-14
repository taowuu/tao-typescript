# tao-typescript
Taowuu 的 TypeScript 全解

## 初始化环境
- `npm install typescript@3.6.4 -g`
- `npm install ts-node@8.4.1 -g`

<<<<<<< HEAD
## TypeScript 全解
- [静态类型](https://github.com/taowuu/tao-typescript/tree/%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B)

- [对象类型](https://github.com/taowuu/tao-typescript/tree/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B)
=======
## 静态类型
```ts
let year: number = 2022

// Type '{}' is not assignable to type 'number'
// 只能赋予同类型的值
// year = {}

// 类型定义后可以自动提示该类型能使用的方法
year.toString

interface Point {
    x: number,
    y: number,
}

const point: Point = {
    x: 1,
    y: 2,
}
// 类型定义后可以自动提示该类型能使用的属性
point.x

// 静态类型意味着变量类型不能修改
// 使用该类型的变量所具备的属性和方法也被确定
```
>>>>>>> 静态类型
