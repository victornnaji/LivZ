const [query, setQuery] = useState("")

useEffect(() => {
    socket.on('message', ({username, message, alert, userIdentity}) => {
        let query = {
            name: username,
            message: alert ? `${username} ${message}` : message,
            alert,
            useri
        }
        setQuery(query);
        console.log(query);
    });
}, []);

useEffect(() => {
    // console.log(username);
        let side ="";
        if(userIdentity=== identity){
            side = "right";
        }else{
            side = "left";
        }

    let queryy = query; 
        
        setMessages(() => ([...messages, queryy]));
        mesRef.current.scrollTop = mesRef.current.scrollHeight;
}, [query]);
