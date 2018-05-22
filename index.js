'use strict';

var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory('homebridge-instance-dummy', 'DummyPlugin', DummyPlugin);
};

function DummyPlugin(log, config, api) {

  //HB
  this.config = config;
  this.log = log;
  this.api = api;

  //BASE
  this.name = config['name'] || 'Dummy';

}

DummyPlugin.prototype = {

  getServices: function() {

    this.informationService = new Service.AccessoryInformation()
      .setCharacteristic(Characteristic.Name, this.name)
      .setCharacteristic(Characteristic.Identify, this.name)
      .setCharacteristic(Characteristic.Manufacturer, 'SeydX')
      .setCharacteristic(Characteristic.Model, 'Dummy Plugin')
      .setCharacteristic(Characteristic.SerialNumber, '1234567890');
      
    return [this.informationService];

  },

  identify: function(callback) {
    this.log(this.name + ': Identified!');
    callback();
  }

};
