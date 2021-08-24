function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />);
}

function UserInfo(props) {
    return (
        <div className="UserInfo">      <Avatar user={props.user} />      <div className="UserInfo-name">        {props.user.name}      </div>    </div>);
}


function Comment(props) {
    console.log(props)
    console.log(props.props)
    return (
        <div className="Comment">
            <UserInfo user={props.author} />

            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                <h2>Date here</h2>
                {props.date.toLocaleTimeString()}
            </div>
        </div>
    );
}


export default Comment