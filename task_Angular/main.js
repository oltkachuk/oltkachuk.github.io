var app = angular.module('app', []);
app.controller('myCtrl', function($scope) {
    $scope.title = 'Premission'
    $scope.listgroups = [
        {
            id: 0,
            name: 'Calendar',
            view: 'View',
            edit: 'Edit',
            remove: 'Remove'
        },
        {
            id: 1,
            name: 'Profile',
            view: 'View',
            edit: 'Edit',
            remove: 'Remove'
        },
        {
            id: 2,
            name: 'Property',
            view: 'View',
            edit: 'Edit',
            remove: 'Remove'
        },
        {
            id: 3,
            name: 'Contacts',
            view: 'View',
            edit: 'Edit',
            remove: 'Remove'
        }
    ]
    $scope.selected = [
        {
            sections: {
                name: 'Calendar'
            },
            premissions: {
                view: false,
                edit: false,
                remove: false
            }
        },
        {
            sections: {
                name: 'Profile'
            },
            premissions: {
                view: false,
                edit: false,
                remove: false
            }
        },
        {
            sections: {
                name: 'Property'
            },
            premissions: {
                view: false,
                edit: false,
                remove: false
            }
        },
        {
            sections: {
                name: 'Contacts'
            },
            premissions: {
                view: false,
                edit: false,
                remove: false
            }
        },
        
    ]

    //   ------ click all Items -----

    $scope.clickAllViews = function() {
        angular.forEach($scope.listgroups, function(item) {
          item.SelectedView = $scope.selectAllViews;
        });
        angular.forEach($scope.selected, function(category){
            if (category.premissions.view) {
                return
            } else {
                category.premissions.view = !category.premissions.view
            } 
        })
    };
    $scope.clickAllEdits = function() {
        angular.forEach($scope.listgroups, function(item) {
          item.SelectedEdit = $scope.selectAllEdit;
        });
        angular.forEach($scope.selected, function(category){
            if (category.premissions.edit) {
                return 
            } else {
                category.premissions.edit = !category.premissions.edit
            } 
        })
    };
    $scope.clickAllRemoves = function() {
        angular.forEach($scope.listgroups, function(item) {
          item.SelectedRemove = $scope.selectAllRemove;
        });
        angular.forEach($scope.selected, function(category){
            if (category.premissions.remove) {
                return 
            } else {
                category.premissions.remove = !category.premissions.remove
            } 
        })
    };

    //   ------ click Item -----

    $scope.clickView = function(category) {     
        $scope.selected[category.id].premissions.view = !$scope.selected[category.id].premissions.view
        $scope.selectAllViews = $scope.listgroups.every(function(item) {
          return item.SelectedView == true
        })
    };
    $scope.clickEdit = function(category) {
        $scope.selected[category.id].premissions.edit = !$scope.selected[category.id].premissions.edit
        $scope.selectAllEdit = $scope.listgroups.every(function(item) {
          return item.SelectedEdit == true
        })
    };
    $scope.clickRemove = function(category) {
        $scope.selected[category.id].premissions.remove = !$scope.selected[category.id].premissions.remove
        $scope.selectAllRemove = $scope.listgroups.every(function(item) {
          return item.SelectedRemove == true
        })
    };

    // ---- Save to Local storage -----

    $scope.saveResult = function() {
        localStorage.setItem('result', JSON.stringify($scope.selected))
    }
});
