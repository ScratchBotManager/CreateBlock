/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : false, 
	comments : false, 
	disable : false, 
	maxBlocks : Infinity, 
	trashcan : false, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : true, 
	oneBasedIndex : true
};

/* Inject your workspace */ 
var workspace = Blockly.inject(/* TODO: Add ID of div to inject Blockly into */, options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Object representing a workspace.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Workspace');

/** @suppress {extraRequire} */
goog.require('Blockly.ConnectionChecker');
goog.require('Blockly.Events');
goog.require('Blockly.IASTNodeLocation');
goog.require('Blockly.Options');
goog.require('Blockly.registry');
goog.require('Blockly.utils');
goog.require('Blockly.utils.math');
goog.require('Blockly.VariableMap');

goog.requireType('Blockly.Block');
goog.requireType('Blockly.ConnectionDB');
goog.requireType('Blockly.Events.Abstract');
goog.requireType('Blockly.IConnectionChecker');
goog.requireType('Blockly.utils.toolbox');
goog.requireType('Blockly.VariableModel');
