import './index.css'

const Contacts = props => {
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
      {value ? (
        ''
      ) : (
        <li id={contactDetails.name[0]} className="contact-section-notation">
          {contactDetails.name[0]}
        </li>
      )}

      <li className="contact-name">{contactDetails.name}</li>
    </li>
  )
}
export default Contacts
