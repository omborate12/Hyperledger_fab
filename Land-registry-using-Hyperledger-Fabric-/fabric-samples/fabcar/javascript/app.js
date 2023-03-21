var invoker = require('./invoke.js')
var queryF = require('./query.js')
var express = require('express')
const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');

const { PREFER_MSPID_SCOPE_ALLFORTX } = require('fabric-network/lib/impl/event/defaulteventhandlerstrategies.js')
var app = express()
const port = 4002

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.status(200);
    next();
})

app.get('/',(req,res)=>{
    let inputString = "this is taruns string"
    invoker.mainInvoke(inputString.toString());
    res.send('transaction submitted');
})


app.get('/getQuery/',async(req,res)=>{
    // var result= await queryF.mainQuery().toString();
    // res.send(queryF.mainQuery().toString());
    
    
    // res.send(queryF.mainQuery().toString());
    // console.log(queryF.mainQuery());

    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('fabcar');

        // Evaluate the specified transaction.
        // queryland transaction - requires 1 argument, ex: ('queryland', 'land4')
        // queryAllLands transaction - requires no arguments, ex: ('queryAllLands')
        
        const result = await contract.evaluateTransaction('queryAllLands');
        res.send(`Transaction has been evaluated, result is: ${result.toString()}`)
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);

        // Disconnect from the gateway.
        // return Promise.resolve(  result.toString());
        gateway.disconnect();

        
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
})

app.get('/changeOwner/:landId/:newOwner/',async(req,res)=>{
    // var result= await queryF.mainQuery().toString();
    // res.send(queryF.mainQuery().toString());
    
    invoker.mainInvoke(req.params.landId,req.params.newOwner);
    res.send("success");
    // console.log(queryF.mainQuery());
})


app.get('/create/:landId/:commercial/:isLoan/:assetValue/:ownerName/:taluka/:district/',async(req,res)=>{
    // var result= await queryF.mainQuery().toString();
    // res.send(queryF.mainQuery().toString());
    
    invoker.mainInvoker(req.params.landId.toString(),req.params.commercial.toString(),req.params.isLoan.toString(),req.params.assetValue.toString(),req.params.ownerName.toString(),req.params.taluka.toString(),req.params.district.toString());
    res.send("success");
    // console.log(queryF.mainQuery());
})




app.listen(port,()=>{
    console.log("listening on port: ",port);
})