Blockly.Blocks['light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lights")
        .appendField(new Blockly.FieldDropdown([["Red","R"], ["Green","G"], ["Blue","B"]]), "Color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['light'] = function(block) {
  var dropdown_color = block.getFieldValue('Color');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_color==="R") {
  var code = "document.getElementById('dot').style.BackgroundColor=red;"
  }
    if (dropdown_color==="G") {
  var code = "document.getElementById('dot').style.BackgroundColor=green;"
  }
    if (dropdown_color==="B") {
  var code = "document.getElementById('dot').style.BackgroundColor=blue;"
  }
  return code;
};
