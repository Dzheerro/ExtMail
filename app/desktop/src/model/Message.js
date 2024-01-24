Ext.define('ExtMail.model.Message', {
    extend: 'Ext.data.Model',

    identifier: 'uuid',

    requires: [
        'Ext.data.identifier.Uuid'
    ],

    fields: [
        {
            name: 'firstName'
        },
        {
            name: 'lastName'
        },
        {
            name: 'fullName',
            calculate: function(data) {
                var firstName = data.firstName || '';
                var lastName = data.lastName || '';

                return Ext.String.trim(firstName + ' ' + lastName);
            }
        },
        {
            name: 'email'
        },
        {
            name: 'date',
            type: 'date',
            dateFormat: 'c'
        },
        {
            name: 'subject'
        },
        {
            name: 'message'
        },
        {
            name: 'labels', // an array of ExtMail.enums.Labels
            type: 'auto',
            defaultValue: []
        },
        {
            name: 'unread',
            type: 'boolean'
        },
        {
            name: 'draft',
            type: 'boolean'
        },
        {
            name: 'outgoing',
            type: 'boolean'
        },
        {
            name: 'sent',
            type: 'boolean'
        },
        {
            name: 'starred',
            type: 'boolean'
        }
    ],

    hasLabel: function(labelId) {
        return this.labels().findExact('labelId', labelId) >= 0;
    },
    
    addLabel: function(labelId) {
        var labels = this.get('labels') || [];

        labels.push(labelId);

        this.set('labels', Ext.clone(labels)); // clone so it triggers an update on the record

        this.labels().add({
            messageId: this.getId(),
            labelId: labelId
        });
    },

    
    removeLabel: function(labelId) {
        var labels = this.get('labels') || [];

        labels = Ext.Array.remove(labels, labelId);

        this.set('labels', Ext.clone(labels)); // clone so it triggers an update on the record

        var index = this.labels().findBy(function(rec) {
            return rec.get('messageId') === this.getId() && rec.get('labelId') === labelId;
        }, this);

        this.labels().removeAt(index);
    }
})