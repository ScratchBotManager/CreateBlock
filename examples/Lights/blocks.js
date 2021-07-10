Blockly.Blocks['lightingcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldColour("#ffcc66"), "lightcolor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['lightingcolor'] = function(block) {
  var colour_lightcolor = block.getFieldValue('lightcolor');
  // TODO: Assemble JavaScript into code variable.
  document.getElementById("dot").style.BackgroundColor = colour_lightcolor;
  var code = alert("Changed Color")
  return code;
};
