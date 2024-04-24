import { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  const [emalis, setEmails] = useState(initialEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>

      <main className="emails">
        {emalis.map((email) => {
          console.log(email.starred)
          let liClassName = 'email '
          const unreadClassName = 'unread '

          let starClassName = 'star-checkbox '
          const staredClassName = 'checked'
          if(!email.read) {
            liClassName += unreadClassName
          }
          if(email.starred){
            starClassName += staredClassName
          }
          return(
            <li key={email.id} className={liClassName}>
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  value={email.read}
                />
              </div>  
              <div className="star">
                <input
                  className={starClassName}
                  type="checkbox"
                  value={email.starred}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          )
        })}
      </main>
    </div>
  )
}

export default App
