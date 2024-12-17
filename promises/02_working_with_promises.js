import requestToServer from '../utils/requestToServer'

export function handlePromisesInDifferentFiles () {
  const url = 'api.boolean.cl/student/1/grades'

  // Nos faltan cosas importantes acá
  return requestToServer.get(url)
    .then(function (response) {
      console.log('List of grades', response)
      return response
    })
}
