var Promise = require('bluebird')
var exec = require("child-process-promise").exec

/*****************************************************************************\
    Enable or disable services with systemctl
\*****************************************************************************/
module.exports = {
    is_enabled: _is_enabled,
    enable: _enable,
    disable: _disable,
    start: _start,
    stop: _stop,
    restart: _restart,
    daemon_reload: _daemon_reload,
    exec: _exec
}

function _enable(service_name) {
    return _exec("enable " + service_name);
}

function _disable(service_name) {
    return _exec("disable " + service_name);
}

function _start(service_name) {
    return _exec("start " + service_name);
}

function _stop(service_name) {
    return _exec("stop " + service_name);
}

function _restart(service_name) {
    return _exec("restart " + service_name);
}

function _daemon_reload() {
    return _exec("daemon-reload");
}

function _is_enabled(service_name) {
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
