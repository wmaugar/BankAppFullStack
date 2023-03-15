function CreateAccount() {
    const { useState } = React;
    const [show, setShow] = useState('true');
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if(!field) {
            setStatus('Error: ' + label);
            setTimeout(()=> setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(name, email, password);
        if(!validate(name, 'name'))     return;
        if(!validate(email, 'email'))     return;
        if(!validate(password, 'password'))     return;
        //ctx.users.push({name, email, password, balance: 100});
        const url = `/account/create/${name}/${email}/${password}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
        })(); 
        setShow(false);
    }
    
    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function CreateMsg(){
        return(
            <>
                <h5>Success</h5>
                <button type="submit" 
                className="btn btn-primary" 
                onClick={clearForm}>Add another account</button>
            </>
        )
    }

    function CreateForm(){

    return(
        <>
            Name<br />
            <input type="input" 
            className="form-control" id="name"
                placeholder="Enter name" value={name} onChange={(e) => setName(e.currentTarget.value)} /><br />
            Email address<br />
            <input type="input" className="form-control" id="email"
                placeholder="Enter email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} /><br />
            Password<br />
            <input type="input" className="form-control" id="password"
                placeholder="Enter password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} /><br />
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
        </>
    )

    }

    return (
            <Card
                bgcolor="primary"
                header="Create Account"
                status={status}
                body={show ? 
                    <CreateForm/> : 
                    <CreateMsg/>}
            />
            )
    }       
            
                