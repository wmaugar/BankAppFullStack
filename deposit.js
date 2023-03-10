function Deposit (){

    const { useState } = React;
    const [status, setStatus] = useState('');
    const [deposit, setDeposit] = useState('');
    const ctx = React.useContext(UserContext);
    const [balance, setBalance] = useState(ctx.users[0].balance);
    
    function validate(){
        console.log('validate called')
        // aqui falaria la validación de que sea un número
        if(!deposit) {
            setStatus('Error: invalid deposit');
            setTimeout(()=> setStatus(''), 3000);
            return false
        }
        
        else if(deposit<0){
            setStatus('Error: invalid deposit');
            setTimeout(()=> setStatus(''), 3000);
            return false
        }
        else return true;
    }
    
    
    function handleDeposit(){
        console.log('submit pressed')
        if(!validate()) return;
        let balance = (ctx.users[0].balance);           
        let newBalance = Number(balance) + Number(deposit);
        ctx.users[0].balance = newBalance;
        setBalance(newBalance);
        setStatus('Succesful deposit');
        setTimeout(()=> setStatus(''), 1000);
    }
    
    return (
        <Card
            bgcolor="success"
            header="Deposit"
            status={status}
            body={
                <>
                    Deposit<br />
                    <div>Balance       {balance}</div><br/>
                    Deposit Amount
                    <input type="number" className="form-control" id="deposit"
                        placeholder="Deposit Amount" value={deposit} onChange={(e) => setDeposit(e.currentTarget.value)} /><br />
                    <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                </>
                }
        />
    )
}
