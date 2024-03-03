const accountId = 1215931;
let accountEmail = "aniket@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;
// accountId = 121212; // Not allowed TypeError: Assignment to constant variable.

accountEmail = "chakor@facebook.com"
accountPassword = "54321"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
   Mostly we are not using var for declaring variables because of issue in block scope and functional scope
*/