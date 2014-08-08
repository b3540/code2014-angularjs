/// <reference path="scripts/angular.js" />
/// <reference path="scripts/angular-resource.js" />

var app = angular.module('SampleApp', ['ngResource']);

app.controller('SampleController', function ($scope, $resource) {

    var webapi = $resource('http://code2014-angular-sampleapi.azurewebsites.net/api/bookmarks/:id', { id: '@Id' });
    $scope.bookmarks = webapi.query();

    $scope.newbookmark = { Title: "", URL: "", Rating: 0 };

    $scope.addBookmark = function () {
        $scope.bookmarks.push($scope.newbookmark);
        webapi.save($scope.newbookmark);
        $scope.newbookmark = { Title: "", URL: "", Rating: 0 };
    };

    $scope.removeBookmark = function (index) {
        if (!confirm('sure?')) return;
        var bookmark = $scope.bookmarks[index];
        $scope.bookmarks.splice(index, 1);
        bookmark.$remove();
    };
});