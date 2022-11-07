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
