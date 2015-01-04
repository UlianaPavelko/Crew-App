crewApp.controller('crewCtrl', function ($scope, crewService)
{
    $scope.currentCrew = [];
    $scope.possibleCrew = [];

    $scope.addToCurrentCrew = function (selectedCrew) {
        angular.forEach(selectedCrew, function (member) {
            $scope.currentCrew.push(member);
            var memberId = $scope.possibleCrew.indexOf(member);
            $scope.possibleCrew.splice(memberId, 1);
        });
        $scope.selectedCrew = [];
    }

    $scope.clearCurrentCrew = function () {
        $scope.currentCrew = [];
        $scope.selectedCrew = [];
        $scope.getPosibleCrew();
    }

    $scope.getPosibleCrew = function () {
        var crew = crewService.showAll();
        crew.success(function (data) {
            $scope.possibleCrew = data.RelatedTopics;
        });
        crew.error(function (error) {
            $scope.error = error;
        });
    }
    $scope.getPosibleCrew();
});