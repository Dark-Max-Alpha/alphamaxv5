/* Copyright (C) 2021 HIRUWA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
T-REX HIRUWA
*/

function successfullMessage(msg) {
    return "ALPHA*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "ALPHa*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "ALPHA*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
