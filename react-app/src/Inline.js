function Mailbox(props) {
    console.log(props)
    const unreadMessages = props.unreadMessages;
    console.log('Length:'+unreadMessages)
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&        <h2>          You have {unreadMessages.length} unread messages.        </h2>      }    </div>
    );
  }
  


  export default Mailbox;