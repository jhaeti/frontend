import { useField } from 'formik';

const MySelect = (props) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <select {...field} {...props} />
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
        </div>
    );
};

export default MySelect;
