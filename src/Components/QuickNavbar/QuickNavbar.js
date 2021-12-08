import './index.css'

const QuickNavbar = props => {
  const {contactDetails, contactList, id} = props
  const index = contactList.indexOf(contactDetails)
  let value
  if (index > 0) {
    value = contactList[index - 1][0] === contactList[index][0]
  }
  return (
    <li>
      <a className="navbar-link" href={`#${contactDetails[0]}`}>
        {value ? '' : <li id={contactDetails[0]}>{contactDetails[0]}</li>}
      </a>
    </li>
  )
}
export default QuickNavbar
