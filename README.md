# homebridge-instance-dummy
Homebridge dummy plugin without any functions

As the name says, this plugin only acts lik a plugin. It has no functions and offers no "accessories". It was created for multiple homebridge instances with the new option "-X" to run "test instances" without a proper plugin

## Installation instructions

After [Homebridge](https://github.com/nfarina/homebridge) has been installed:

-  ```sudo npm install -g SeydX/homebridge-instance-dummy```
OR
-  ```sudo npm install -g --save https://github.com/SeydX/homebridge-instance-dummy```

## Example Config

```
{
 "bridge": {
     ...
 },
 "accessories": [
    {
      "accessory": "DummyPlugin",
      "name": "Dummy"
    }
 ]
}
```
