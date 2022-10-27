"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRouter = void 0;
const http = require('http');
const axios = require('axios');
exports.createUserRouter = axios;
axios.post('http://localhost:3002/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
    console.log(response);
})
    .catch(function (error) {
    console.log(error);
});
//# sourceMappingURL=createuser.js.map