# systemctl

This simple node module allows you to control system services using the systemctl command easily and asynchronously.

The commands are natively run using sudo, so either the script should be run as root or the user running the script should have sudo access to the systemctl command.

## Requirements

- Archlinux or another OS which uses the systemctl command

## Usage

Use the main module with ES6:
```
import systemctl from 'systemctl'

// Start a service
systemctl.start('service-name').then(output => console.log)

// Check if a service is enabled
systemctl.isEnabled('service-name').then(enabled => {
    console.log((enabled ? 'Enabled' : 'Not enabled'));
})
```

Import and use the "run" command directly with ES6:
```
import systemctl from 'systemctl/run'

systemctl.run('start', 'service-name').then(output => console.log)
```
