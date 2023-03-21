/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class fabcar extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const lands = [
            {
                price: '5000',
                commercial: 'Yes',
                Urban: 'Yes',
                owner: 'Om',
                Tal :'Rajgurunagar',
                district:'Pune'
            },
            {
                price: '11000',
                commercial: 'no',
                Urban: 'Yes',
                owner: 'Sujal',
                Tal :'Dhule',
                district:'Dhule'
            },{
                price: '1000',
                commercial: 'Yes',
                Urban: 'no',
                owner: 'Divesh',
                tal :'Mulund',
                district:'Mumbai'
            }
        ];

       
            
    

        for (let i = 0; i < lands.length; i++) {
            lands[i].docType = 'land';
            await ctx.stub.putState('land' + i, Buffer.from(JSON.stringify(lands[i])));
            console.info('Added <--> ', lands[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryland(ctx, landNumber) {
        const landAsBytes = await ctx.stub.getState(landNumber); // get the land from chaincode state
        if (!landAsBytes || landAsBytes.length === 0) {
            throw new Error(`${landNumber} does not exist`);
        }
        console.log(landAsBytes.toString());
        return landAsBytes.toString();
    }

    async createland(ctx, landNumber, commercial, Urban, price, owner, tal, district) {
        console.info('============= START : Create land ===========');

        const land = {
            price:price,
            docType: 'land',
            commercial:commercial,
            Urban:Urban,
            owner:owner,
            tal:tal ,
            // AllOwnerList[len-1]
            AllOwnerList: [],
            district:district
        };

        await ctx.stub.putState(landNumber, Buffer.from(JSON.stringify(land)));
        console.info('============= END : Create land ===========');
    }

    async queryAllLands(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async changeLandOwner(ctx, landNumber, newOwner) {
        console.info('============= START : changeLandOwner ===========');

        const landAsBytes = await ctx.stub.getState(landNumber); // get the land from chaincode state
        if (!landAsBytes || landAsBytes.length === 0) {
            throw new Error(`${landNumber} does not exist`);
        }
        const land = JSON.parse(landAsBytes.toString());
            
        land.owner = newOwner;

        await ctx.stub.putState(landNumber, Buffer.from(JSON.stringify(land)));
        console.info('============= END : changeLandOwner ===========');
    }

}

module.exports = fabcar;































// /*
//  * Copyright IBM Corp. All Rights Reserved.
//  *
//  * SPDX-License-Identifier: Apache-2.0
//  */

// 'use strict';

// const { Contract } = require('fabric-contract-api');

// class FabCar extends Contract {

//     async initLedger(ctx) {
//         console.info('============= START : Initialize Ledger ===========');
//         const cars = [
//             {
//                 color: 'blue',
//                 make: 'Toyota',
//                 model: 'Prius',
//                 owner: 'Tomoko',
//             },
//             {
//                 color: 'red',
//                 make: 'Ford',
//                 model: 'Mustang',
//                 owner: 'Brad',
//             },
//             {
//                 color: 'green',
//                 make: 'Hyundai',
//                 model: 'Tucson',
//                 owner: 'Jin Soo',
//             },
//             {
//                 color: 'yellow',
//                 make: 'Volkswagen',
//                 model: 'Passat',
//                 owner: 'Max',
//             },
//             {
//                 color: 'black',
//                 make: 'Tesla',
//                 model: 'S',
//                 owner: 'Adriana',
//             },
//             {
//                 color: 'purple',
//                 make: 'Peugeot',
//                 model: '205',
//                 owner: 'Michel',
//             },
//             {
//                 color: 'white',
//                 make: 'Chery',
//                 model: 'S22L',
//                 owner: 'Aarav',
//             },
//             {
//                 color: 'violet',
//                 make: 'Fiat',
//                 model: 'Punto',
//                 owner: 'Pari',
//             },
//             {
//                 color: 'indigo',
//                 make: 'Tata',
//                 model: 'Nano',
//                 owner: 'Valeria',
//             },
//             {
//                 color: 'brown',
//                 make: 'Holden',
//                 model: 'Barina',
//                 owner: 'Shotaro',
//             },
//         ];

//         for (let i = 0; i < cars.length; i++) {
//             cars[i].docType = 'car';
//             await ctx.stub.putState('CAR' + i, Buffer.from(JSON.stringify(cars[i])));
//             console.info('Added <--> ', cars[i]);
//         }
//         console.info('============= END : Initialize Ledger ===========');
//     }

//     async queryCar(ctx, carNumber) {
//         const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
//         if (!carAsBytes || carAsBytes.length === 0) {
//             throw new Error(`${carNumber} does not exist`);
//         }
//         console.log(carAsBytes.toString());
//         return carAsBytes.toString();
//     }

//     async createCar(ctx, carNumber, make, model, color, owner) {
//         console.info('============= START : Create Car ===========');

//         const car = {
//             color,
//             docType: 'car',
//             make,
//             model,
//             owner,
//         };

//         await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
//         console.info('============= END : Create Car ===========');
//     }

//     async queryAllCars(ctx) {
//         const startKey = '';
//         const endKey = '';
//         const allResults = [];
//         for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
//             const strValue = Buffer.from(value).toString('utf8');
//             let record;
//             try {
//                 record = JSON.parse(strValue);
//             } catch (err) {
//                 console.log(err);
//                 record = strValue;
//             }
//             allResults.push({ Key: key, Record: record });
//         }
//         console.info(allResults);
//         return JSON.stringify(allResults);
//     }

//     async changeCarOwner(ctx, carNumber, newOwner) {
//         console.info('============= START : changeCarOwner ===========');

//         const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
//         if (!carAsBytes || carAsBytes.length === 0) {
//             throw new Error(`${carNumber} does not exist`);
//         }
//         const car = JSON.parse(carAsBytes.toString());
//         car.owner = newOwner;

//         await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
//         console.info('============= END : changeCarOwner ===========');
//     }

// }

// module.exports = FabCar;
