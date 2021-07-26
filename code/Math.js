//Randomize
Blockly.Blocks['randomize'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Array")
        .appendField("Randomize")
        .appendField(new Blockly.FieldVariable("Output"), "output");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['randomize'] = function(block) {
  var variable_output = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('output'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
