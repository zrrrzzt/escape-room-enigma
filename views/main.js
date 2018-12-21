var html = require('choo/html')

var TITLE = 'Enigma'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="container mx-auto py-8">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onsubmit=${handleSubmit}>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
              Suggestion
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="suggestion" type="text" placeholder="Enter your suggestion">
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Check
            </button>
          </div>
        </form>
        <div>
          ${state.message}
        </div>
      </div>
    </body>
  `

  function handleSubmit (e) {
    e.preventDefault()
    const suggestionField = document.getElementById('suggestion')
    const suggestion = suggestionField.value
    emit('suggestion:submit', suggestion)
    suggestionField.value = ''
  }
}
