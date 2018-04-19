var exec = require("child-process-promise").exec

module.exports = function run(cmd, service_name) {
    return exec(`systemctl ${cmd} ${service_name}`)
}
