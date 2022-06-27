import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/slice';
// import { PropTypes } from 'prop-types';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    // console.log(contacts);
    return (
        // <>
        // <div>{contacts[0]}</div>
        //     <div>{contacts[1]}</div>
        //     </>
        <ul className={s.list}>
            {contacts.map(contact => <li key={contact.id} className={s.item}>
                <p>{contact.userName}: {contact.userNumber}</p>
                <button className={s.btn} onClick={() => dispatch(removeContact(contacts.id))} type="button">Delete</button>
            </li>)}
            
    </ul>
)
} 

// ContactList.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// }
