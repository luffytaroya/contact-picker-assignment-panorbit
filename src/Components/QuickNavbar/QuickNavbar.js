import './index.css'

const QuickNavbar = props => {
  const {contactDetails, contactList} = props
  const updatedContactsList = []
  contactList.map(each => updatedContactsList.push(each.name))
  updatedContactsList.sort()

  const index = updatedContactsList.indexOf(contactDetails.name)
  let value
  if (index > 0) {
    value = updatedContactsList[index - 1][0] === updatedContactsList[index][0]
  }
  return (
    <li>
      <a className="navbar-link" href={`#${contactDetails.name[0]}`}>
        {value ? (
          ''
        ) : (
          <li id={contactDetails.name[0]}>{contactDetails.name[0]}</li>
        )}
      </a>
    </li>
  )
}
export default QuickNavbar
