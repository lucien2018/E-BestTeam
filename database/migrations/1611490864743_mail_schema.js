'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MailSchema extends Schema {
  up () {
    this.create('mail', (table) => {
      table.increments()
      table.string('nom', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('sujet', 80).notNullable()
      table.string('messages', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('mail')
  }
}

module.exports = MailSchema
