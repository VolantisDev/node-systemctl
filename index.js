var exec    = require("child_process").exec;

/*****************************************************************************\
    Enable or disable services with systemctl
\*****************************************************************************/
module.exports = {
    enable:        _enable,
    disable:       _disable,
    start:         _start,
    stop:          _stop,
    restart:       _restart,
    daemon_reload: _daemon_reload,
    exec:          _exec
}

function _enable(service_name, callback) {
    _exec("enable " + service_name, callback);
};

function _disable(service_name, callback) {
    _exec("disable " + service_name, callback);
};

function _start(service_name, callback) {
     _exec("start " + service_name, callback);
};

function _stop(service_name, callback) {
    _exec("stop " + service_name, callback);
};

function _restart(service_name, callback) {
    _exec("restart " + service_name, callback);
};

function _daemon_reload(callback) {
    _exec("daemon-reload", callback);
}

function _exec(command, callback) {
    exec("sudo systemctl " + command, callback);
}
