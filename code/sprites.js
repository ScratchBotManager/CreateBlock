// Create Sprite
Blockly.Blocks['createsprite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Sprite")
        .appendField(new Blockly.FieldTextInput("Name"), "spritename")
        .appendField(new Blockly.FieldTextInput("src"), "spriteimg")
        .appendField(new Blockly.FieldTextInput("x"), "spritex")
        .appendField(new Blockly.FieldTextInput("y"), "spritey");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Creates A New Sprite.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['createsprite'] = function(block) {
  var text_spritename = block.getFieldValue('spritename');
  var text_spriteimg = block.getFieldValue('spriteimg');
  var text_spritex = block.getFieldValue('spritex');
  var text_spritey = block.getFieldValue('spritey');
  // TODO: Assemble JavaScript into code variable.
  var img = document.createElement('img')
  img.style.cssText = 'position:relative;bottom:' + text_spritey 'px;left:' + text_spritex 'px;'
  img.id = text_spritename
  var code = img.src = text_spriteimg;
  return code;
};
