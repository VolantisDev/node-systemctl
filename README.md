# systemctl

This simple node module allows you to control system services using the systemctl command easily and asynchronously.

## Requirements

- Archlinux or another OS which uses the systemctl command

## Usage

There are two ways to use systemctl depending on your needs:

### 1. Utilize the helper functions
```
// For ES6:
import systemctl from 'systemctl'
// For ES5:
var systemctl = require('systemctl')

// Start a service
systemctl.start('service-name').then(output => console.log)

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
