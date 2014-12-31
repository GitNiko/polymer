"use strict";
angular.module('app', ['ngMaterial'])
  .controller('AppCtrl', function ($scope) {
    var tabs = [
      { title: '星期日', content: "Tabs will become paginated if there isn't enough room for them."},
      { title: '星期一', content: "You can swipe left and right on a mobile device to change tabs."},
      { title: '星期二', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
      { title: '星期三', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
      { title: '星期四', content: "If you remove a tab, it will try to select a new one."},
      { title: '星期五', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
      { title: '星期六', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."}
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.announceSelected = announceSelected;
    $scope.announceDeselected = announceDeselected;
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      for (var j = 0; j < tabs.length; j++) {
        if (tab.title == tabs[j].title) {
          $scope.tabs.splice(j, 1);
          break;
        }
      }
    };
    function announceDeselected(tab) {
      $scope.farewell = 'Goodbye ' + tab.title + '!';
    }
    function announceSelected(tab) {
      $scope.greeting = 'Hello ' + tab.title + '!';
    }
});
