/* <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=..."> </script> */

const url = `https://static.zdassets.com/ekr/snippet.js?key=${key}`
const script = document.createAttribute('script')

script.id = 'ze-snippet'
script.src = url

document.head.appendChild(script)

