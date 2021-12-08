import {Component} from 'react'

import {BsFillCaretDownFill, BsFillCaretUpFill} from 'react-icons/bs'

import Contacts from './Components/Contacts/Contacts'

import QuickNavbar from './Components/QuickNavbar/QuickNavbar'

import './App.css'

const contactsList = [
  {
    id: 1,
    name: 'Charlie',
  },
  {
    id: 2,
    name: 'Daniel',
  },
  {
    id: 3,
    name: 'Diego',
  },
  {
    id: 4,
    name: 'Dean',
  },
  {
    id: 5,
    name: 'James',
  },
  {
    id: 6,
    name: 'Jakson',
  },
  {
    id: 7,
    name: 'Jayden',
  },
  {
    id: 8,
    name: 'Jordan',
  },
  {
    id: 9,
    name: 'Justus',
  },
  {
    id: 10,
    name: 'Kevin',
  },
  {
    id: 11,
    name: 'Kayden',
  },
  {
    id: 12,
    name: 'Kyrie',
  },
  {
    id: 13,
    name: 'Mia',
  },
  {
    id: 14,
    name: 'Madison',
  },
  {
    id: 15,
    name: 'Maria',
  },
  {
    id: 16,
    name: 'Noah',
  },
  {
    id: 17,
    name: 'Nolan',
  },
  {
    id: 18,
    name: 'Nora',
  },
]

class App extends Component {
  state = {
    displayContactsList: false,
    searchInput: '',
    contactDetailsList: contactsList,
  }

  toDisplayContactsList = () => {
    this.setState(prevState => ({
      displayContactsList: !prevState.displayContactsList,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {displayContactsList, searchInput, contactDetailsList} = this.state

    const updatedContactsList = []
    contactDetailsList.map(each => updatedContactsList.push(each.name))
    updatedContactsList.sort()

    const searchResults = updatedContactsList.filter(eachContact =>
      eachContact.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const toNotDisplayClassName = displayContactsList ? 'close-contacts' : ''
    return (
      <div className="bg">
        <div className="all-contacts-container">
          <h1 className="all-contacts-heading">All Contacts</h1>
          <button
            onClick={this.toDisplayContactsList}
            className="toggle-button"
            type="button"
          >
            {displayContactsList ? (
              <BsFillCaretDownFill className="toggle-icon" />
            ) : (
              <BsFillCaretUpFill className="toggle-icon" />
            )}
          </button>
        </div>
        <div className="contacts-navbar-container">
          <div className={`contacts-container ${toNotDisplayClassName}`}>
            <div className="search-container">
              <input
                className="search-bar"
                placeholder="Search"
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <div className="list-and-navbar-container">
              <ul className="list-container">
                {searchResults.map(each => (
                  <Contacts
                    key={each.id}
                    contactList={updatedContactsList}
                    contactDetails={each}
                  />
                ))}
              </ul>
              <ul className={`navbar ${toNotDisplayClassName}`}>
                {searchResults.map(each => (
                  <QuickNavbar
                    key={each.id}
                    contactList={updatedContactsList}
                    contactDetails={each}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
