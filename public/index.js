function Spa (){
    return (
    <HashRouter>
        <Navbar/>
        <UserContext.Provider value={
                    {users: [{name:'abel', email: 'abel@mit.edu', password: 'secret', balance: 100}],
                    activeUser: 'Any'}}>
            <Route path="/" exact component={Home}/>         
            <Route path="/createAccount/" component={CreateAccount}/>
            <Route path="/login/" component={Login}/>
            <Route path="/deposit/" component={Deposit}/>
            <Route path="/withdraw/" component={Withdraw}/>
            <Route path="/balance/" component={Balance}/>
            <Route path="/alldata/" component={AllData}/>
        </UserContext.Provider>
    </HashRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Spa/>);
