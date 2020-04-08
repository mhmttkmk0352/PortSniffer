const net = require("net");
d = {port: 7777}
client = new net.Socket();



tumu = () => {
    istemci = (tcpSocket) => {
        client.connect(process.argv[3], process.argv[2], () => {
            console.log("Bağlandı");
            console.log("");
        });
        
        client.on("data", data => {
            //console.log( "clientData: " );
            //console.log( data.toString() );  

            tcpSocket.write(data);

        });
        
        client.on("error", error => {
            //console.log( error );
        });
        
        client.on("end", () => {
           // console.log( "END olayı gerçekleşti" );
        });
        client.on("close", ()=>{
            //console.log( "CLOSE olayı gerçekleşti ");
        });
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    server = net.createServer(tcpSocket => {
        istemci(tcpSocket);
        tcpSocket.on("data", data => {
            console.log( {serverData:data, str:data.toString()} );
            setTimeout( () => {
                client.write(data);
            }, process.argv[4] );
        });
        
    });
    
    
    server.listen(d.port, ()=>{
        console.log( d.port+" portu dinlemede" );
    });
    
    
}




if ( process.argv[2] && process.argv[3] && process.argv[4] ){
    tumu();
}
else{
    console.log( "" );
    console.log( "############################################" );
    console.log( "" );
    console.log( "ListeningPort :* "+d.port );
    console.log(  );
    console.log( "Usage: nodemon portForwarding.js 192.168.2.12 8888 5000(seconds)" );
    console.log( "" );
    console.log( "############################################" );
    console.log( "" );
    
}
