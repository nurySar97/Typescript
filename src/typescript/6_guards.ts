export function strip (x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }

  return x.trim()
}

class MyResponse {
  header: string = 'response header'
  result: string = 'response result'
}

class MyError {
  header: string = 'response header'
  message: string = 'response result'
}

function handle (res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + ' ' + res.result
    }
  }
  return {
    info: res.header + ' ' + res.message
  }
}

const ref = { current: <string>'' }
type AlertType = 'success' | 'danger' | 'warning'
function setAlertType (type: AlertType) {
  ref['current'] = type
}

setAlertType('success')
setAlertType('danger')
setAlertType('warning')
