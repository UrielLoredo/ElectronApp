// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var appAnglr = angular.module("taskList", []); 
appAnglr.controller("taskCtrl", ["$scope", function($scope) {
    $scope.tasks = [
        {
            "id": 0,
            "title": "item1",
            "description": "descripcion corta",
            "team": "John Doe"
        },{
            "id": 1,
            "title": "item2",
            "description": "descripcion corta",
            "team": "John Doe"
        }
      ]
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addTitleTask) {return;}
        if ($scope.tasks.indexOf($scope.addTitleTask) == -1) {
            $scope.tasks.push({
                title: $scope.addTitleTask,
                description: $scope.addDescriptionTask,
                team: $scope.addTeamTask
            });
            $scope.addTitleTask = "";
            $scope.addDescriptionTask = "";
            $scope.addTeamTask = "";
        } else {
            $scope.errortext = "Este producto ya se encuentra en tu lista.";
        }
    }
    $scope.removeItem = function (task) {
        $scope.errortext = "";
        $scope.tasks.splice(task, 1);
    } 
}]);