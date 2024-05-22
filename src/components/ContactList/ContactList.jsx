import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../redux/contactsSlice";

export default function ContactList() {
   const contacts = useSelector(selectVisibleTasks);

    return <ul className={css.list} >
      {contacts.map(({id, name, number}) => (
        <li className={css.item} key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
}
