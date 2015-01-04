crewApp.constant('crewUrl', 'http://api.duckduckgo.com/?q=star+trek+deep+space+nine+characters&format=json&pretty=1');

    crewApp.factory('crewService', function ($http, crewUrl) {
        return  {
            showAll: function () {
                return $http.get(crewUrl);
            },
        };
    });

