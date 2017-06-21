var exec    = require("child_process").exec;

/*****************************************************************************\
    Enable or disable services with systemctl
\*****************************************************************************/
module.exports = function() {

    _enable = function (service_name, callback) {
        _exec("enable " + service_name, callback);
    };

    _disable = function (service_name, callback) {
        _exec("disable " + service_name, callback);
    };

    _start = function (service_name, callback) {
        _exec("start " + service_name, callback);
    };

    _stop = function (service_name, callback) {
        _exec("stop " + service_name, callback);
    };

    _restart = function (service_name, callback) {
        _exec("restart " + service_name, callback);
    };

    _daemon_reload = function (callback) {
        _exec("daemon-reload", callback);
    }

    _exec = function (command, callback) {
        exec("sudo systemctl " + command, callback);
    }

    return {
        enable:        _enable,
        disable:       _disable,
        start:         _start,
        stop:          _stop,
        restart:       _restart,
        daemon_reload: _daemon_reload,
        exec:          _exec
    };
}
