var Promise = require('bluebird')
var run = require('./run')

function daemonReload() {
    return run("daemon-reload")
}

function disable(serviceName) {
    return run("disable", serviceName)
}

function enable(serviceName) {
    return run("enable", serviceName)
}

function isEnabled(serviceName) {
    return new Promise((resolve, reject) => {
        run('is-enabled', serviceName)
            .then((result) => {
                resolve(result.stdout.indexOf('enabled') != -1)
            })
            .catch(function (err) {
                resolve(false)
            })
    })
}

function restart(serviceName) {
    return run("restart", serviceName)
}

function start(serviceName) {
    return run("start", serviceName)
}

function stop(serviceName) {
    return run("stop", serviceName)
}

module.exports.run = run
module.exports.daemonReload = daemonReload
module.exports.disable = disable
module.exports.enable = enable
module.exports.isEnabled = isEnabled
module.exports.restart = restart
module.exports.start = start
module.exports.stop = stop
