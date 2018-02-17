# systemctl

This simple node module allows you to control system services using the systemctl command easily and asynchronously.

## Usage

```
import systemctl from 'node-systemctl';
// start stop restart .....
systemctl('start','my-service-name').then(output=>console.log)

systemctl.isEnabled('service-name') => true false
```

