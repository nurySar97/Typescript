export function add (a: number, b: number): number {
  return a + b
}

function toUpperCase (str: string): string {
  return str.trim().toUpperCase()
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position (): MyPosition
function position (a: number): MyPositionWithDefault
function position (a: number, b: number): MyPosition

function position (a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }

  if (a && !b) {
    return { x: a, y: b, default: a.toString() }
  }

  return { x: a, y: b }
}

;[
  ['Empty: ', position()],
  ['One param: ', position(1)],
  ['Two param', position(1, 2)]
].forEach(item => console.log(...item))
