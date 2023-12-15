import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface Fields {
    [key: string]: string
}

const useFormFields = (
    initialState: Fields
): [Fields, ChangeEventHandler] => {

    const [fields, setFields] = useState(initialState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFields({
            ...fields,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    return [fields, handleChange];
}

export default useFormFields;