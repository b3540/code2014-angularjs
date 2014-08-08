/// <reference path="scripts/angular.js" />
/// <reference path="scripts/angular-resource.js" />

var app = angular.module('SampleApp', []);

app.controller('SampleController', function ($scope) {
    $scope.bookmarks = [
        { Title: "Twitter", URL: "https://twitter.com", Rating: 5 },
        { Title: "facebook", URL: "https://facebook.com", Rating: 1 }
    ];

    $scope.newbookmark = { Title: "", URL: "", Rating: 0 };

    $scope.addBookmark = function () {
        $scope.bookmarks.push($scope.newbookmark);
        $scope.newbookmark = { Title: "", URL: "", Rating: 0 };
    };

    $scope.removeBookmark = function (index) {
        if (!confirm('sure?')) return;
        $scope.bookmarks.splice(index, 1);
    };
});