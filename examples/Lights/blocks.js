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
  if (dropdown_color===R) then
  var code = "document.getElementById('dot').style.BackgroundColor='Red';"
  end
    if (dropdown_color===G) then
  var code = "document.getElementById('dot').style.BackgroundColor='Green';"
  end
    if (dropdown_color===B) then
  var code = "document.getElementById('dot').style.BackgroundColor='Blue';"
  end
  return code;
};
