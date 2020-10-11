export const shap = (data: string) => {
  const dataArray:string[] = data.split('&')
  const map:Map<string, string> = new Map()
  for (const val of dataArray) {
    const mapData:string[] = val.split('=')
    map.set(mapData[0], decodeURIComponent(mapData[1]))
  }
  const text = map.get('text')
  return text
}
