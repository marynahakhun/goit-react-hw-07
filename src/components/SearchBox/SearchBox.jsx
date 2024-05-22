import { Formik, Form } from "formik";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { search } from "../../redux/filtersSlice";
import { selectTextFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectTextFilter)
   

    const handleSearch = (evt) => {
        const keyword = evt.currentTarget.value.trim();
        dispatch(search(keyword));
    };

    return (
        <Formik
            initialValues={{ search: nameFilter }}
            onSubmit={() => {}}
        >
            {({  handleChange }) => (
                <Form className={css.form}>
                    <p className={css.label}>Search by name</p>
                    <input
                        type="text"
                        name="search"
                        value={nameFilter}
                        onChange={(e) => {
                            handleChange(e);
                            handleSearch(e);
                        }}
                    />
                </Form>
            )}
        </Formik>
    );
}
