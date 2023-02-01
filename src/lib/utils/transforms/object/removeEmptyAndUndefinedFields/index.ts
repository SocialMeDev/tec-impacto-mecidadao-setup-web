type IndexesObject = {
  [index: string]: string
}

export function removeEmptyAndUndefinedFields(object: IndexesObject): object {
  if (!object) return {}

  const newObject: IndexesObject = {}

  for (const key in object) {
    if (object[key] !== undefined && object[key] !== null && object[key] !== '') {
      newObject[key] = object[key]
    }
  }

  return newObject
}
