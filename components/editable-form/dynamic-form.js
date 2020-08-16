import React, {useState, useRef} from 'react';
import FormField from "../common/form-field";
import EditLabel from "../common/edit-label";
import {
    Row,
    Col,
    FormControl,
    FormGroup,
    InputGroup,
    ToggleButtonGroup,
    ToggleButton
} from "react-bootstrap";


function DynamicForm(props) {
    const [cards, setCards] = useState(props.items);
    const [prev, setPrev] = useState(1);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();
    const labelValue = useRef();

    const handelDragStart = (e, index) => {
        console.log("Drag starting", index);
        dragItem.current = index;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handelDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0)
    };

    const handelDragEnter = (e, index) => {
        console.log("Entering drag", index);
        const curretItem = dragItem.current;
        if (index !== dragItem.current) {
            console.log("Target is not the same");
            setCards(oldCards => {
                let newCards = JSON.parse(JSON.stringify(oldCards));
                newCards.splice(index, 0, newCards.splice(curretItem, 1)[0]);
                dragItem.current = index;
                return newCards;
            })
        }
    };

    const handelDragEnd = () => {
        console.log("drag end");
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handelDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    };

    const changeEditMode = (i, currentLabel) => {
        console.log("changeEditMode ", currentLabel);
        let newCards = JSON.parse(JSON.stringify(cards));
        let item = newCards[i];
        item.isInEditMode = true;
        item.oldLabel = currentLabel;
        newCards[i] = item;
        console.log("before edit item ", item);
        setCards(newCards);
        console.log("after edit item ", cards[i]);
        console.log("after edit cards ", cards);
    };

    const getStyles = (index) => {
        if (index === dragItem.current) {
            return "current sc-form-group form-group col"
        }
        return "sc-form-group form-group col"
    };

    const setLabel = (i, value) => {
        let newCards = JSON.parse(JSON.stringify(cards));
        let item = newCards[i];
        item.label = value;
        newCards[i] = item;
        setCards(newCards);
    };

    const cancelEditMode = (i) => {
        let newCards = JSON.parse(JSON.stringify(cards));
        let item = newCards[i];
        item.isInEditMode = false;
        item.label = item.oldLabel;
        newCards[i] = item;
        console.log("before edit item ", cards[i]);
        setCards(newCards);
        console.log("after edit item ", cards[i]);
        console.log("after edit cards ", cards);
    };

    const updateLabelValue = (i) => {
        let newCards = JSON.parse(JSON.stringify(cards));
        let item = newCards[i];
        item.isInEditMode = false;
        newCards[i] = item;
        setCards(newCards);
    };

    const handelShowHide = (i, value) => {
        let newCards = JSON.parse(JSON.stringify(cards));
        let item = newCards[i];
        item.showThis = value;
        newCards[i] = item;
        setCards(newCards);
    };

    const renderToggleButton = (value, i) => {
        return (<ToggleButtonGroup type="checkbox"
                                   value={value}
                                   onChange={(value, e) => {
                                       handelShowHide(i, e.target.value)
                                   }}>
            <ToggleButton value={1}>Show</ToggleButton>
            <ToggleButton value={0}>Hide</ToggleButton>
        </ToggleButtonGroup>)
    };

    const renderPreview = (cards) => {
        return cards.map((card, i) => {
            if (card.showThis == 1) {
                return (<FormGroup
                    key={i}
                    className={"sc-form-group form-group col"}
                    as={Col}>
                    <FormField card={card}/>
                </FormGroup>)
            } else {
                return (<div></div>);
            }
        })
    };

    const renderEditMode = (cards) => {
        return cards.map((card, i) => (
            <FormGroup
                key={i}
                draggable
                onDragStart={(e) => {
                    handelDragStart(e, i)
                }}
                onDragEnter={dragging ? (e) => handelDragEnter(e, i) : null}
                className={dragging ? getStyles(i) : "sc-form-group form-group col"}
                as={Col}>
                <EditLabel
                    card={card}
                    i={i}
                    changeEditMode={changeEditMode}
                    setLabel={setLabel}
                    updateLabelValue={updateLabelValue}
                    cancelEditMode={cancelEditMode}
                />

                <InputGroup>
                    {card.isRequired == 0 ? renderToggleButton(card.showThis, i) : ''}
                    {card.showThis == 1 ? (<FormControl type={"text"} placeholder={card.placeholder}/>) : ''}
                </InputGroup>
            </FormGroup>
        ))
    };

    return (
        <div>
            <Row className="justify-content-md-center">
                <ToggleButtonGroup type="checkbox"
                                   value={prev}
                                   onChange={(value, e) => {
                                       setPrev(e.target.value)
                                   }}>
                    <ToggleButton value={1}>Preview</ToggleButton>
                    <ToggleButton value={0}>Edit</ToggleButton>
                </ToggleButtonGroup>
            </Row>
            {prev == 1 ? renderPreview(cards) : renderEditMode(cards)}
        </div>
    )
}

export default DynamicForm;