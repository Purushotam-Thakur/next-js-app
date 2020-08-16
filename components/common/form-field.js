import React from 'react';
import {FormLabel, FormControl} from "react-bootstrap";

function FormField(props) {
    const card = props.card;
    if(card.type=='textInput'){
        return (
            <div>
                <FormLabel className="sc-form-label">{card.label}</FormLabel>
                <FormControl type={"text"} placeholder={card.placeholder}/>
            </div>
        );
    } else if(props.card.type=='selectInput'){

    }
}

export default FormField;