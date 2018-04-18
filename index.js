var exec = require("child-process-promise").exec

// enable, disable, link, start, stop ...
module.exports = function run(cmd,service_name) {
    return exec(`systemctl ${cmd} ${service_name}`);
}
