(function() {
  'use strict';

  angular
    .module('starter.healthStats', ['ionic', 'ionic-material', 'nvd3'])
    .controller('HealthStatsCtrl', HealthStatsCtrl);
  HealthStatsCtrl.$inject = ['$scope', '$state'];

  function HealthStatsCtrl($scope, $state) {
    /*----------  Fake Adderall Side Effects ----------*/
    $scope.adderallLabels = ["Dry Mouth", "Stomach Pain", "Dizziness", "Trouble Sleeping"];
    $scope.adderall = [
      [10, 0, 10, 0]
    ];

    /*----------  Fake Synthroid Side Effects ----------*/
    $scope.synthroidLabels = ["fever", "Stomach Pain", "Dizziness", "Trouble Sleeping"];
    $scope.synthroid = [
      [1, 6, 1, 8]
    ];

    /*----------  Fake Compliance Data ----------*/
    $scope.complianceLabels = ["Missed", "Taken"];
    $scope.compliance = [1, 3];
  }

})();
