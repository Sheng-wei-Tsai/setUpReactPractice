// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let musicsDB = [
  'Jazz',
  'KPop',
  'Tango'
]

// {} in react is just like string interpolation
// let user = 'alice'
// console.log(`lalala ${user}`)

const ItemInput = props => {
  let [music, setMusic] = useState('')
  let [disabled, setDisabled] = useState('disabled')

  let isDisabled = n => (n >= 5) ? '' : 'disabled'

  return (
    <div>
      <input type="text" 
             value={music} 
             onChange={ evt => {
               setMusic(evt.target.value) 
               setDisabled(isDisabled(evt.target.value.length))
              }
             } />
      <button onClick={() => {
                props.addMusic(music)
                setMusic('')
              }}
              disabled={disabled}
      >Add music</button>
    </div>
  )
}

const ItemList = ({musics}) => (
  musics.map(m => <Item music={m}/>)
)
const Item = ({music}) => (
  <li onClick={() => {console.log(music)}}>{music}</li>
)

let appStyle = { color: 'red', fontSize: 20 }
const App = (props) => {
  const [musics, setMusic] = useState(musicsDB)

  const appendMusic = newMusic => {
    setMusic([...musics, newMusic])
  }
  return (
  <div>
    <h1 onClick={clickHandler} style={appStyle}>Hello {props.name}!</h1>
    <h2 className="lalala">{props.hehehe}</h2>
    <ItemList musics={musics} />
    <ItemInput addMusic={appendMusic} />
  </div>
  )
}
function clickHandler() {
  alert('lalala')
}

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="5xReact" hehehe="hehehe" />,
    document.getElementById('container')
  )
})
