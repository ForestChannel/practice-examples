class Animal {
  constructor(options) {
    this.name = options.name
    this.color = options.color
  }
  voice() {
    console.log(`Base voice from ${this.name}`)
  }
}

const dog = new Animal({
  name: 'Rex',
  color: 'white',
})

class Cat extends Animal {
  constructor(options) {
    super(options)

    this.hasTail = options.hasTail
    this.type = 'cat'
  }
  voice() {
    super.voice()
    console.log(`${this.name} says meow `)
  }
}

const cat = new Cat({
  name: 'Murzik',
  color: '#000',
  hasTail: true,
})

//// Examples

Object.prototype.print = function () {
  console.log(`I am : ${this.name}`)
}

cat.print()

Array.prototype.mapAndLog = function () {
  console.log(`Array to map ${this}`)
  return this.map.apply(this, arguments)
}
console.log([1, 2, 3, 4].mapAndLog((x) => x ** 2))

String.prototype.toTag = function (tagName) {
  return `<${tagName}>${this}</${tagName}>`
}

console.log('eminem'.toTag('strong'))

Number.prototype.toBigInt = function () {
  return BigInt(this)
}

const number = 42
console.log(number.toBigInt())
