export const shap = (data: string) => {
  const dataArray = data.split('&')
  const map = new Map()
  for (const val of dataArray) {
    const mapData = val.split('=')
    map.set(mapData[0], decodeURIComponent(mapData[1]))
  }
  const text = map.get('text')
  return text
}
