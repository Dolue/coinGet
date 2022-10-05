const Configstore = require('configstore');
const pkg = require('../package.json')


class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set('APIKEY', key);
        return key;
    }

    getKey() {
        const key = this.conf.get('APIKEY');

        if(!key) {
            throw new Error('No keys baba');
        }

        return key;
    }

    deleteKey() {
        const key = this.conf.get('APIKEY');

        if(!key) {
            throw new Error('No keys baba');
        }

        this.conf.delete('APIKEY')

        return;
    }
}

module.exports = KeyManager;