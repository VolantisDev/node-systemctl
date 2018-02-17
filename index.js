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

// enable, disable, link, start, stop ...
function run(cmd,service_name) {
    return exec(`systemctl ${cmd} ${service_name}`);
}

function isEnabled(service_name) {
    return _exec('is-enabled ' + service_name)
        .then((result) => {
            return (result.stdout.indexOf('enabled') != -1)
         })
}
