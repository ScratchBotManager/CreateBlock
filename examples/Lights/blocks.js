{
  "type": "light",
  "message0": "Lights %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Color",
      "options": [
        [
          "Red",
          "R"
        ],
        [
          "Green",
          "G"
        ],
        [
          "Blue",
          "B"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.JavaScript['light'] = function(block) {
  var dropdown_color = block.getFieldValue('Color');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
