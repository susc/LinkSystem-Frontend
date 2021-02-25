const ERRORS = require('./errors')

module.exports = {
    install: function(Vue, options) {
        Vue.parseError = (errorCode) => {
            return (errorCode in ERRORS) ? ERRORS[errorCode] : errorCode
        }
    }
}