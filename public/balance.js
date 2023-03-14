function Balance (){

    const { useState } = React;
    const [status, setStatus] = useState('');
    const ctx = React.useContext(UserContext);
    const [balance, setBalance] = useState(ctx.users[0].balance);
    const userName = ctx.users[0].name;
    
       
    return (
        <Card
            bgcolor="secondary"
            header="Balance"
            status={status}
            body={
                <>
                    Balance<br />
                    User name:  <strong>{userName}</strong><br /><br />
                    <div>Balance       {balance}</div><br/>                   
                </>
                }
        />
    )
}
