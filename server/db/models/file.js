const Sequelize = require('sequelize')
const db = require('../db')

const File = db.define('file', {
  fileUpload: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['.csv', '.txt']]
    }
  },
  companyId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  companyName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  sharePriceDate: {
    type: Sequelize.DATEONLY,
    unique: true,
    allowNull: false
  },
  sharePrice: {
    type: Sequelize.DECIMAL,
    unique: true,
    allowNull: false
  },
  comments: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = File
