Blockly.Blocks['valuetoblock'] = {
  init: function() {
    this.appendValueInput("blocks")
        .setCheck(null)
        .appendField("Block");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blockvalue'] = {
  init: function() {
    this.appendStatementInput("value")
        .setCheck(null)
        .appendField("Block");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['valuetoblock'] = function(block) {
  var value_blocks = Blockly.JavaScript.valueToCode(block, 'blocks', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_blocks;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blockvalue'] = function(block) {
  var statements_value = Blockly.JavaScript.statementToCode(block, 'value');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
