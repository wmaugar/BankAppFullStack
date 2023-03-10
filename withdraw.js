function Withdraw (){

    const { useState } = React;
    const [status, setStatus] = useState('');
    const [withdraw, setWithdraw] = useState('');
    const ctx = React.useContext(UserContext);
    const [balance, setBalance] = useState(ctx.users[0].balance);
    
    function validate(){
        console.log('validate withdraw....')
        console.log('intenta retirar: ' + withdraw)
        // aqui falaria la validación de que sea un número
        if(!withdraw) {
            setStatus('Error: invalid deposit');
            setTimeout(()=> setStatus(''), 3000);
            return false
        }        
        else if(withdraw<0){
            setStatus('Error: invalid deposit');
            setTimeout(()=> setStatus(''), 3000);
            return false
        }
        else if(withdraw>balance){
            setStatus(`Error: Dont't have enough funds`);
            setTimeout(()=> setStatus(''), 3000);
            return false
        }
        else return true;
    }
    
    
    function handleWithdraw(){
        console.log('submit pressed');
        if(!validate()) return;
        console.log('valid withdraw');
        // leer directamente el valor contenido en la variable de estado balance
                
        let newBalance = Number(balance) - Number(withdraw);
        ctx.users[0].balance = newBalance;
        setBalance(newBalance);
        setStatus('Succesful withdraw');
        setTimeout(()=> setStatus(''), 1000);
    }
    
    return (
        <Card
            bgcolor="info"
            header="Withdraw"
            status={status}
            body={
                <>
                    Withdraw<br />
                    <div>Balance       {balance}</div><br/>
                    Withdraw Amount
                    <input type="number"  className="form-control" id="withdraw"
                        placeholder="Withdraw Amount" value={withdraw} onChange={(e) => setWithdraw(e.currentTarget.value)} /><br />
                    <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                </>
                }
        />
    )
}
