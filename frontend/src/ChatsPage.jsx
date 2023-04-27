import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return( 
        <div style = {{height:"100vh"}}>
            <PrettyChatWindow
                projectId="1b2df3a4-4aa0-4929-826f-fa53391bf523"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )

}
export default ChatsPage