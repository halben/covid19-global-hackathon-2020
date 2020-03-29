const processImg = (bits) => `data:image/jpeg;base64, ${btoa(bits)}`

const isValidFileType = () => [''].indexOf() < 0

export {
  processImg,
  isValidFileType
}
