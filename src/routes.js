const express = require('express')

// const BuyController = require('./controllers/BuyController');
// const CardBuyController = require('./controllers/CardBuyController');
// const CardController = require('./controllers/CardController');
// const DashboardController = require('./controllers/DashboardController');
// const FuelController = require('./controllers/FuelController');
// const LaborController = require('./controllers/LaborController');
// const MaintenenceController = require('./controllers/MaintenenceController');
// const SessionController = require('./controllers/SessionController');
// const VehicleController = require('./controllers/VehicleController');
// const CategorieController = require('./controllers/CategorieController');
const dbGetAllMunicipios = require('./controllers/dbGetAllMunicipios');
const dbGetPorte = require('./controllers/dbGetPorte');
const dbGetSetores = require('./controllers/dbGetSetores');

const routes = express.Router();

routes.get('/all_municipios', dbGetAllMunicipios.getMunicipios);

routes.get('/setores', dbGetSetores.getSetores);

routes.get('/porte', dbGetPorte.getPorte);

// routes.get('/buys', BuyController.show);
// routes.post('/buy/:categ_id/createBuy', BuyController.store);
// routes.delete('/buy/:buy_id', BuyController.delete);
// //routes.post('/updateBuy', BuyController.update);

// routes.post('/cardBuy/:categ_id/createCardBuy', CardBuyController.store);
// //routes.post('/updateCardBuy', CardBuyController.update);

// routes.get('/cards', CardController.show);
// routes.post('/createCard', CardController.store);
// //routes.post('/updateCard', CardController.update);

// routes.get('/fuels/:vehicle_id', FuelController.show);
// routes.post('/fuel/:vechicle_id/createFuel', FuelController.store);
// routes.delete('/fuel/:fuel_id', FuelController.delete);
// //routes.post('/updateFuel', FuelController.update);

// routes.post('/maintenence/:vehicle_id/:card_id/:labor_id/createMaintence', MaintenenceController.store);
// //routes.post('/updateMaintence', MaintenenceController.update);

// routes.post('/labor/:card_id/createLabor', LaborController.store);
// //routes.post('/updateLabor', LaborController.update);

// routes.get('/vehicles', VehicleController.show);
// routes.post('/createVehicle', VehicleController.store);
// routes.delete('/vehicle/:vehicle_id', VehicleController.delete);
// //routes.post('/updateVehicle', VehicleController.update);

// routes.get('/categories', CategorieController.show);
// routes.post('/createCategorie', CategorieController.store);


// routes.post('/createUser', SessionController.store);
// routes.post('/login', SessionController.login);

module.exports = routes;