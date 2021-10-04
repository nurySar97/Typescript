interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

export let rectangle: Rect = {
  id: '1',
  size: {
    width: 100,
    height: 50
  }
}

rectangle.color = '#fff'

rectangle = {
  id: '2',
  size: {
    width: 20,
    height: 30
  }
}

rectangle.color = '#000'

const rectangle2 = {} as Rect
const rectangle3 = <Rect>{}

interface RectWithArea extends Rect {
  getArea: () => number
}

const rectangle4: RectWithArea = {
  id: '4',
  size: {
    width: 12,
    height: 21
  },
  color: '#ccc',
  getArea (): number {
    const { width, height } = this['size']
    return height * width
  }
}

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime (date: Date): void {
    this.time = date
  }
}

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '.5rem',
  color: 'lightblue'
}
