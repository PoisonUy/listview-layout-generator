﻿(function () {
    "use strict";

    // The items contains the following information
    // { id , itemClass , itemWidth , itemHeight, deleteItem } 
    var items = new WinJS.Binding.List();

    function addItem(itemToInsert) {
        var currentKey = items._currentKey;
        var newItem = {
            itemClass: itemToInsert.itemClass,
            itemWidth: itemToInsert.itemWidth,
            itemHeight: itemToInsert.itemHeight,
            deleteItem: function () {
                deleteItem((currentKey + 1).toString());
            }
        }

        return items.dataSource.insertAtEnd(null, newItem);
    }

    function deleteItem(itemKey) {
        items.dataSource.remove(itemKey);
    }

    function getItemStyles(itemGroup, itemIndex) {
        // TODO: add group index functionality
        var itemToReturn = { itemWidth: '', itemHeight: '' };

        items.forEach(function (item, index) {
            if (item.itemClass == 'item' + itemIndex) {
                itemToReturn.width = item.itemWidth + 'px';
                itemToReturn.height = item.itemHeight + 'px';
            }
        });

        return itemToReturn;
    }

    WinJS.Namespace.define("ItemStylesRepository", {
        dataSource: items.dataSource,
        addItem: addItem,
        getItemStyles: getItemStyles,
    });
})();