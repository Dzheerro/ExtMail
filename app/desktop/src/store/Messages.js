Ext.define('ExtMail.store.Store', {
    extend: 'Ext.data.Store',

    alias: 'store.Messages',

    model: 'ExtMail.model.Messages',

    autoLoad: 'true',

    sorters: [
        {
            property: 'date',
            direction: 'DESC',
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'data/messages.json',
        reader: {
            type: 'json'
        }
    }
})