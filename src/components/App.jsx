import Section from '../Section';
import ContactForm from 'ContactForm';
import ContactList from 'ContactList';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  // console.log(contacts);
// const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts])

//  const addContact = (userName, userNumber) => {
//     const contact = {
//       id: nanoid(),
//       userName,
//       userNumber,
//     }
//     if (contacts.find(
//       contact => contact.userName.toLowerCase() === userName.toLowerCase()
//     )) {
//       return alert(`${userName} is already in contacts`);
//     } else {
//       setContacts(prevState => [...prevState, contact])
//     }
//  }
  
//   const filterContactsByName = () => {
//     const normalizedStr = filter.toLocaleLowerCase();
//     return contacts.filter(contact => contact.userName.toLocaleLowerCase().includes(normalizedStr))
//   }

//   const deleteContact = (ContactId) => {
//      setContacts(prevState => prevState.filter(contact => contact.id !== ContactId))
//   }

//   const changeFilter = (evt) => {
//     setFilter(evt.currentTarget.value)
//   }
  
//     const visibleContacts = filterContactsByName();

  return (
    <div>
      
      <Section title="Phonebook">
        <ContactForm />
        {/* onSubmitAdd={addContact} */}
</Section>
      <Section title="Contacts">
        {contacts && <ContactList />}
        
        {/* contacts={visibleContacts} onDeleteContact={deleteContact} */}
{/* <Filter value={filter} onChange={changeFilter} />
         {visibleContacts.length !== 0 && <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />}  */}
        </Section>
    </div>
  );
};
