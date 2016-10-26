$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.getEnergyUsage());
  }

  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature(1);
    updateTemperature();
  });


  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchOn()
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });








})
