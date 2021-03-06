const { cypressConfigResolver } = require("../config/cypress-config-resolver");
const pluginExecuteCommand = require("./plugin-execute-command");
const cucumber = require("cypress-cucumber-preprocessor").default;

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  on("task", {
    pluginExecuteCommand,
  });
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // load env from os env or from config cypress json
  let cypressConfig = cypressConfigResolver();
  return cypressConfig;
};
