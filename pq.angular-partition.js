'use strict';

(function() {
    angular.module('pqAngularPartition', []).filter('partition', function() {
        return _.memoize(function(arr, columns) {
            if (arr) {
                var divided = [],
                    i,
                    j,
                    rows = Math.ceil(arr.length / columns);


                    var result = _.groupBy(arr, function(item, i) {
                        return Math.ceil(i / columns);
                    });
                    return _.values(result);
     
            }

        });
    });


})();