function Recieve(string) {
  if text_callstring == text_reciever {
  var code = statements_recieveinput
  }
  else {
   alert("Failed") 
  }
}

Blockly.Blocks['call'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Call")
        .appendField(new Blockly.FieldTextInput("call1"), "callstring");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['recieve'] = {
  init: function() {
    this.appendStatementInput("RecieveInput")
        .setCheck(null)
        .appendField("Recieve")
        .appendField(new Blockly.FieldTextInput("call1"), "Reciever");
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['call'] = function(block) {
  var text_callstring = block.getFieldValue('callstring');
  // TODO: Assemble JavaScript into code variable.
  return code;
};

Blockly.JavaScript['recieve'] = function(block) {
  var text_reciever = block.getFieldValue('Reciever');
  var statements_recieveinput = Blockly.JavaScript.statementToCode(block, 'RecieveInput');
  // TODO: Assemble JavaScript into code variable.
  return code;
};
