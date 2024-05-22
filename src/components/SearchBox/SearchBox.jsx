import { Formik, Form } from "formik";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { search } from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const filterValue = useSelector((store) => store.filter.name);
   

    const handleSearch = (evt) => {
        const keyword = evt.currentTarget.value.trim();
        dispatch(search(keyword));
    };

    return (
        <Formik
            initialValues={{ search: filterValue }}
            onSubmit={() => {}}
        >
            {({ values, handleChange }) => (
                <Form className={css.form}>
                    <p className={css.label}>Search by name</p>
                    <input
                        type="text"
                        name="search"
                        value={values.search}
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
