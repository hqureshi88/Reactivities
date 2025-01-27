import { Button, Form, FormInput, FormTextArea, Segment } from "semantic-ui-react";
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityForm() {
    const {activityStore} = useStore();
    const {selectedActivity, closeForm, createActivity, updateActivty, loading} = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        activity.id ? updateActivty(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <FormInput placeholder='Title' value={activity.title} onChange={handleInputChange} name='title'/>
                <FormTextArea placeholder='Description' value={activity.description} onChange={handleInputChange} name='description'/>
                <FormInput placeholder='Category' value={activity.category} onChange={handleInputChange} name='category'/>
                <FormInput type='date' placeholder='Date' value={activity.date} onChange={handleInputChange} name='date'/>
                <FormInput placeholder='City' value={activity.city} onChange={handleInputChange} name='city'/>
                <FormInput placeholder='Venue' value={activity.venue} onChange={handleInputChange} name='venue'/>
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})