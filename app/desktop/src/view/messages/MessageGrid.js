Ext.define('ExtMail.view.messages.MessageGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.messages-MessageGrid',


    columns: [
        {
            dataIndex: 'fullName',
            minWidth: 250,
            header: false,
            tdCls: 'full-name',
        }, 
        {
            dataIndex: 'subject',
            flex: 1,
            header: false
        },

        {
            xtype: 'datecolumn',
            dataIndex: 'date',
            width: 100,
            header: false,
            align: 'red',
            format: 'j M \ y"'

        }
    ]
})