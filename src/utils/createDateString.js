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

  return `${articleDate.getDate()}, ${months[articleDate.getMonth()]}, ${articleDate.getFullYear()}`
}

export default createDateString