import React from 'react';
import {Button, FormControl, FormLabel, InputGroup} from "react-bootstrap";

function EditLabel(props) {
    const card = props.card;

    const changeEditMode = (i,label) => {
        props.changeEditMode(i, label)
    }

    const setLabel = (i,value) => {
        props.setLabel(i, value)
    }

    const updateLabelValue = (i) => {
        props.updateLabelValue(i)
    }

    const cancelEditMode = (i) => {
        props.cancelEditMode(i)
    }

    const renderDefaultView = (label, i) => {
        return (<FormLabel
            className="sc-form-label"
            onDoubleClick={(e) => {
                changeEditMode(i, label)
            }}
        >{label}
        </FormLabel>)
    };

    const renderEditView = (label, i) => {
        return (
            <InputGroup>
                <FormControl
                    type={"text"}
                    value={label}
                    onChange={e => setLabel(i, e.target.value)}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={e => updateLabelValue(i)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                        </svg>
                    </Button>
                    <Button variant="outline-secondary" onClick={e => cancelEditMode(i)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd"
                                  d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                        </svg>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        )
    };

    if(card.isInEditMode) {
        return renderEditView(card.label, props.i)
    } else {
        return renderDefaultView(card.label, props.i);
    }
}

export default EditLabel;