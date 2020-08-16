import React, {useCallback, useState} from 'react';
import {Container} from "react-bootstrap";
import DynamicForm from "./dynamic-form";


function EditableForm(props) {
    const [cards, setCards] = useState([
        {
            id: 1,
            type:'textInput',
            label: 'First Name',
            placeholder : 'Purushotam',
            isInEditMode: false,
            oldLabel: '',
            isRequired: 1,
            showThis: 1
        },
        {
            id: 2,
            type:'textInput',
            label: 'Last Name',
            placeholder : 'Thakur',
            isInEditMode: false,
            oldLabel: '',
            isRequired: 1,
            showThis: 1
        },
        {
            id: 3,
            type:'textInput',
            label: 'Designation',
            placeholder : 'Software Engineer',
            isInEditMode: false,
            oldLabel: '',
            isRequired: 0,
            showThis: 1
        },
        {
            id: 4,
            type:'textInput',
            label: 'Organization',
            placeholder : 'ABC Technology',
            isInEditMode: false,
            oldLabel: '',
            isRequired: 0,
            showThis: 0
        },
        {
            id: 5,
            type:'textInput',
            label: 'Country',
            placeholder : 'India',
            isInEditMode: false,
            oldLabel: '',
            isRequired: 0,
            showThis: 1
        },
        {
            id: 6,
            type:'textInput',
            label: 'State',
            placeholder : 'Delhi',
            isInEditMode: false,
            oldLabel: '',
            isRequired: 0,
            showThis: 1
        },
    ]);

    return (
        <Container className="themed-container" fluid={true}>
            <DynamicForm
                items={cards}
            />
        </Container>
    );
}

export default EditableForm;