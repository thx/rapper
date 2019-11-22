const StringUtility = {
  short(str: string, limit: number) {
    return str.length > limit ? str.substring(0, limit - 3) : str
  },
}

export default StringUtility
