/*
  Las Funciones en Javascript pueden ser tratadas como cualquier tipo de dato. Por ejemplo pueden ser parte de un arreglo.
*/

export function useCallbacksAsDataType () {
  const chainProcesses = function (callbacks) {
    let word = ''

    for (let index = 0; index < callbacks.length; index++) {
      const actualProcess = callbacks[index]
      word += actualProcess()
    }

    return word
  }
  const processes = [
    function () {
      return 'Callbacks'
    },
    function () {
      return 'are'
    },
    function () {
      return 'powerful'
    }
  ]
  return chainProcesses(processes)
}

/*
    🚨🚨  ALERTA 🚨🚨

    Los Callbacks son uno de los conceptos más importantes de Javascript. Una vez que los entiendes, puedes aprovechar el máximo el potencial de este lenguaje.

    Revisa la siguiente información:
    https://javascript.boolean.cl/main/docs/01-fundamentos/05-funciones.html#caso-de-estudio-callbacks
*/

// forEach ... sirve para iterar un array pero no hacer modificaciones en él
export function forEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    // algo falta acá. la idea de delegar esta operación es que la función tenga disponible los argumentos necesarios para llevar a cabo su responsabilidad.
    var actualValue
    var actualIndex
    callback(actualValue, actualIndex)
  }
}
