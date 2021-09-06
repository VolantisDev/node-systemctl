# systemctl-cmd

This simple node module allows you to control system services using the systemctl command easily and asynchronously.

This is a fork of VolantisDev's systemctl, because he isn't accepting pull requests.

## Requirements

- Archlinux or another OS which uses the systemctl command

## Usage

There are two ways to use systemctl depending on your needs:

### 1. Utilize the helper functions
```
// For ES6:
import systemctl from 'systemctl-cmd'
// For ES5:
var systemctl = require('systemctl-cmd')

// Start a service
systemctl.start('service-name').then(output => console.log)

// Start a service with sudo
systemctl.start('service-name', true).then(output => console.log)

// Check if a service is enabled
systemctl.isEnabled('service-name').then(enabled => {
    console.log((enabled ? 'Enabled' : 'Not enabled'));
})
```

### 2. Utilize the systemctl/run module for lower-level access
```
// For ES6:
import systemctl from 'systemctl/run'
// For ES5:
var systemctl = require('systemctl/run')

// Start a service
systemctl('start', 'service-name').then(output => console.log)
```
