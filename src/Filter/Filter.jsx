import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/contactsActions';

export default function Filter() {
const value = useSelector(state => state.contacts.filter);
const dispatch = useDispatch();

const filterChange = (evt) => {
dispatch(actions.filterContaсts(evt.currentTarget.value))
}
    return (
    <label className={s.label}>Find contacts by name
        <input className={s.input} type="text" name='filter' value={value} onChange={filterChange} />
    </label>
);
} 
