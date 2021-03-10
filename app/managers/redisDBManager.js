const
    config = require('config')
;
// Десь тут можна вказати параметри конекшина до redis-а
// config.redis.port


module.exports = {
    /**
     * Get all records from memory DB
     * @return {Promise}
     */
    getAll: function getAllFromDb() {
    },
    /**
     * Get record by id from memory DB
     * @param id
     * @return {Promise}
     */
    getById: function getIdFromDb(id) {
    },
    /**
     * Add new record to memory DB
     * @param name
     * @return {Promise}
     */
    setNewId: function setNewIdToDb(name) {
    },
    /**
     * Update record into memory DB
     * @param id
     * @param name
     * @return {Promise}
     */
    updateId: function updateIdToDb(id,name) {
    },

    /**
     * Remove record from memory DB
     * @param id
     * @return {Promise}
     */
    removeId: function removeIdInDb(id) {
    }
}