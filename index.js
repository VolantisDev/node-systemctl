var Promise = require('bluebird')
var exec = require("child-process-promise").exec

/*****************************************************************************\
    Enable or disable services with systemctl
\*****************************************************************************/
module.exports = {
    isEnabled: isEnabled,
    enable: enable,
    disable: disable,
    start: start,
    stop: stop,
    restart: restart,
    daemon_reload: daemonReload,
    exec: _exec
}

function enable(service_name) {
    return _exec("enable " + service_name);
}

function disable(service_name) {
    return _exec("disable " + service_name);
}

function start(service_name) {
    return _exec("start " + service_name);
}

function stop(service_name) {
    return _exec("stop " + service_name);
}

function restart(service_name) {
    return _exec("restart " + service_name);
}

function daemonReload() {
    return _exec("daemon-reload");
}

function isEnabled(service_name) {
    return new Promise((resolve, reject) => {
        _exec('is-enabled ' + service_name)
            .then((result) => {
                resolve(result.stdout.indexOf('enabled') != -1)
            })
            .catch(reject)
    })
}

function _exec(command) {
    return exec("sudo systemctl " + command);
}
