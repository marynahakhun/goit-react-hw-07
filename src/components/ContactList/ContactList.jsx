import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((store) => store.contacts.items)
  const filter = useSelector((store)=> store.filter.name)
  
 const filteredItems = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()))

    return <ul className={css.list} >
      {filteredItems.map(({id, name, number}) => (
        <li className={css.item} key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
}
