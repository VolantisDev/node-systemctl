var exec = require("child-process-promise").exec

module.exports = function run(cmd, service_name) {
    var command = 'systemctl ' + cmd

    if (service_name) {
        command = command + ' ' + service_name
    }

    return exec(command)
}
