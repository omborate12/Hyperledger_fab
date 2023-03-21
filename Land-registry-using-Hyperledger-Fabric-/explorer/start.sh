#First run the test network so that the organisations folder is created 
sudo docker-compose down -v
sudo ../fabric-samples/test-network/network.sh down
sudo ../fabric-samples/test-network/network.sh up createChannel -c mychannel -ca -s couchdb
# sudo ../fabric-samples/test-network/network.sh deployCC -ccn secured -ccp ../asset-transfer-secured-agreement/chaincode-go/ -ccl go -ccep "OR('Org1MSP.peer','Org2MSP.peer')"



code .
sudo rm -r organizations
echo "Remove "
sudo cp -r ../fabric-samples/test-network/organizations .
echo "Copied"
sudo chmod 777 organizations

sudo ls organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/ >> ./connection-profile/test-network.json 

code ./connection-profile/test-network.json

sleep 35s

echo "Welcome Back, running in 10s"

sleep 10s

export EXPLORER_CONFIG_FILE_PATH=./config.json
export EXPLORER_PROFILE_DIR_PATH=./connection-profile
export FABRIC_CRYPTO_PATH=./organizations

sudo docker network ls

sudo docker system prune 
sudo docker volume prune
sudo docker-compose up