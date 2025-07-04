export const safeLog = (data: any) => {
    console.log(JSON.parse(JSON.stringify(data, (key, value) => {
      return typeof value === 'function' ? undefined : value
    })))
}