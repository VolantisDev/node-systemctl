var exec = require("child-process-promise").exec

module.exports = function run(cmd, service_name, sudo = false) {
    var command = `${(sudo) ? 'sudo ' : ''}systemctl ${cmd} ${service_name}`;

    return exec(command);
}
