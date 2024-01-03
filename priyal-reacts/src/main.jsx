import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <>
        <h1>Priyal Reacts!</h1>
      </>
    )
}

const ReactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
    <a href='https://www.google.com' target='_blank'>Go to Google</a>
)
const anotherUser = "Pokluu"


const ReactElementOptimised = React.createElement(
    'a',
    {
        href: 'https://www.google.com', 
        target: '_blank'
    },
    'Click me to visit Google: ',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // MyApp()
    // <MyApp />
    ReactElementOptimised

)
