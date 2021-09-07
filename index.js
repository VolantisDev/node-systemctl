var Promise = require('bluebird')
var run = require('./run')

function daemonReload() {
    return run("daemon-reload");
}

function disable(serviceName) {
    return run("disable", serviceName);
}

function enable(serviceName) {
    return run("enable", serviceName);
}

function isEnabled(serviceName) {
    return new Promise((resolve, reject) => {
        run('is-enabled', serviceName)
            .then((result) => {
                resolve(result.stdout.indexOf('enabled') != -1);
            })
            .catch(function (err) {
                resolve(false);
            })
    })
}

function isActive(serviceName) {
    return new Promise((resolve, reject) => {
        run('is-active', serviceName)
            .then((result) => {
                if(result.stdout.indexOf('active') != -1 && result.stdout.indexOf('inactive')==-1)
                  resolve(true);
                else
                  resolve(false);
            })
            .catch(function (err) {
                resolve(false);
            })
    })
}

function restart(serviceName, sudo=false) {
    return run("restart", serviceName, sudo);
}

function start(serviceName, sudo=false) {
    return run("start", serviceName, sudo);
}

function stop(serviceName, sudo=false) {
    return run("stop", serviceName, sudo);
}

function mask(serviceName, sudo=false) {
    return run("mask", serviceName, sudo);
}

function unmask(serviceName, sudo=false) {
    return run("unmask", serviceName, sudo);
}

module.exports.run = run;
module.exports.daemonReload = daemonReload;
module.exports.disable = disable;
module.exports.enable = enable;
module.exports.isEnabled = isEnabled;
module.exports.restart = restart;
module.exports.start = start;
module.exports.stop = stop;
module.exports.mask = mask;
module.exports.unmask = unmask;
