import { observer } from 'mobx-react-lite'
import React from 'react'
import {
    Segment, 
    Header, 
    Comment, 
    Form, 
    Button, 
    CommentGroup, 
    CommentAvatar, 
    CommentContent, 
    CommentAuthor, 
    CommentMetadata, 
    CommentText, 
    CommentActions, 
    CommentAction} from 'semantic-ui-react'

export default observer(function ActivityDetailedChat() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{border: 'none'}}
            >
                <Header>Chat about this event</Header>
            </Segment>
            <Segment attached>
                <CommentGroup>
                    <Comment>
                        <CommentAvatar src='/assets/user.png'/>
                        <CommentContent>
                            <CommentAuthor as='a'>Matt</CommentAuthor>
                            <CommentMetadata>
                                <div>Today at 5:42PM</div>
                            </CommentMetadata>
                            <CommentText>How artistic!</CommentText>
                            <CommentActions>
                                <CommentAction>Reply</CommentAction>
                            </CommentActions>
                        </CommentContent>
                    </Comment>

                    <Comment>
                        <CommentAvatar src='/assets/user.png'/>
                        <CommentContent>
                            <CommentAuthor as='a'>Joe Henderson</CommentAuthor>
                            <CommentMetadata>
                                <div>5 days ago</div>
                            </CommentMetadata>
                            <CommentText>Dude, this is awesome. Thanks so much</CommentText>
                            <CommentActions>
                                <CommentAction>Reply</CommentAction>
                            </CommentActions>
                        </CommentContent>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button
                            content='Add Reply'
                            labelPosition='left'
                            icon='edit'
                            primary
                        />
                    </Form>
                </CommentGroup>
            </Segment>
        </>

    )
})