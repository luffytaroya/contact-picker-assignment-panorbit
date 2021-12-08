import './index.css'

const Contacts = props => {
  const {contactDetails, contactList} = props
  const index = contactList.indexOf(contactDetails)
  let value
  if (index > 0) {
    value = contactList[index - 1][0] === contactList[index][0]
  }

  return (
    <li>
      {value ? (
        ''
      ) : (
        <li id={contactDetails[0]} className="contact-section-notation">
          {contactDetails[0]}
        </li>
      )}

      <li className="contact-name">{contactDetails}</li>
    </li>
  )
}
export default Contacts
