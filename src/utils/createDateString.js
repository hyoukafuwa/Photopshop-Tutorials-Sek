// this functions created the date string for the article
function createDateString(articleDate) {

  const months = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ]

  console.log(articleDate.getMonth(), articleDate.getFullYear())

  return `${articleDate.getDate()}, ${months[articleDate.getMonth()]}, ${articleDate.getFullYear()}`
}

export default createDateString