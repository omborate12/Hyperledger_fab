# sudo ./networkDown.sh


# sudo docker ps

# sudo docker stop

# sudo system prunes


# sudo ./startFabric.sh javascript

sudo ../test-network/network.sh deployCC -ccn fabcar -ccv 1 -cci initLedger -ccl javascript -ccp ../chaincode/fabcar/javascript

cd javascript/

sudo rm -r wallet

node enrollAdmin.js
sleep 5s

node registerUser.js

node invoke.js

node query.js

node app.js

