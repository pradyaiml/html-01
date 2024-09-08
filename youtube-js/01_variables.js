const accountId = 144553;
let accountEmail = "prady@google.com";
var accountPassword = "123456";
accountCity = "Bangalore";
let accountState;

// accountId = 2  //this is not allowed

accountEmail = "hc@hc.com";
accountPassword = "223344";
accountCity = "Delhi";

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

