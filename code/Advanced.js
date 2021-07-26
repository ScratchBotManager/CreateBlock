//http request
Blockly.Blocks['http'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("http")
        .appendField(new Blockly.FieldDropdown([["GET","get"], ["POST","post"], ["DELETE","delete"]]), "type")
        .appendField(new Blockly.FieldTextInput("URL"), "url");
    this.setOutput(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['http'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var text_url = block.getFieldValue('url');
  const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
  // TODO: Assemble JavaScript into code variable.
  var code = Http.open(dropdown_type.toString(), text_url);;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
