export class Typescript {
  version: string

  constructor (version: string) {
    this.version = version
  }

  info (name: string): string {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel:string){
//         this.model = theModel
//     }
// }

class Car {
  readonly numberOfWheels: number = 4
  constructor (readonly theModel: string) {}
}

class Animal {
  voice: string
  // Just can use inside of class and in child class
  protected protectedColor: string = 'protected'
  // can use everywhere
  public publicColor: string = 'public'
  // just here we can use
  private privateColor: string = 'private'
}

class Cat extends Animal {
  public setVoice (voice: string): string {
    return (this.voice = voice)
  }

  getPrivateColor (): object {
    return {
      value: '',
      message: 'Sorry,we can not give privateColor'
    }
  }

  getPublicColor (): object {
    return {
      value: this.publicColor,
      message: 'publicColor can be taken by everyone'
    }
  }

  getProtectedColor (): object {
    return {
      value: this.protectedColor,
      message: 'protectedColor only can be taken with getProtectedColor method'
    }
  }
}

const cat = new Cat()
console.log(cat.getPrivateColor())
console.log(cat.getProtectedColor())
console.log(cat.getPublicColor())

abstract class Component {
  abstract render (): void
  abstract info (): string
}

class AppComponent extends Component {
  render (): void {}

  info (): string {
    return `This is info`
  }
}
