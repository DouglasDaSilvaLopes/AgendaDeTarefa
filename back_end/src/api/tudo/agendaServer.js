const AgendaRestful = require('./agenda')

AgendaRestful.methods(['get','post','put','delete'])
AgendaRestful.updateOptions({ new: true, runValidators: true})

module.exports = AgendaRestful
