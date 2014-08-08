function greetingController($scope) {
    $scope.bookmarks = [
        { Title: "Twitter", URL: "https://twitter.com", Rating: 5 },
        { Title: "facebook", URL: "https://facebook.com", Rating: 1 }
    ];

    $scope.newbookmark = { Title: "", URL: "", Rating: 0 };

    $scope.addBookmark = function () {
        $scope.bookmarks.push($scope.newbookmark);
        $scope.newbookmark = { Title: "", URL: "", Rating: 0 };
    }
}