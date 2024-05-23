import ContactList from '../ContactList/ContactList'
import './App.css'
import Error from '../Error/Error';
import ContactForm from '../ContactForm/ContactForm';
import Loader from '../Loader/Loader';
import SearchBox from '../SearchBox/SearchBox';
import { selectLoading } from '../../redux/contactsSlice';
 import { selectError } from '../../redux/contactsSlice';
import { fetchContacts } from "../../redux/contactsOps"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function App() {
 const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchContacts())
},[dispatch])
  
  return ( 
    <div>
  <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
            {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
  <ContactList  />
</div>
  )
  
}

export default App
