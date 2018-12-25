var html = require('choo/html')

var TITLE = 'Enigma'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="container mx-auto py-8">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onsubmit=${handleSubmit}>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="code">
              Enter code
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="code" type="text" placeholder="Enter code">
          </div>
          <div class="flex items-center justify-between">
            <button class="flex-1 bg-white hover:bg-grey-lightest text-grey-darkest font-semibold my-2 py-4 px-4 border border-grey-light rounded shadow" type="submit">
              Decrypt
            </button>
          </div>
        </form>
        <div class="py-2 font-bold">
          ${state.message}
        </div>
      </div>
    </body>
  `

  function handleSubmit (e) {
    e.preventDefault()
    const suggestionField = document.getElementById('code')
    const suggestion = suggestionField.value
    emit('code:submit', suggestion)
    suggestionField.value = ''
  }
}
