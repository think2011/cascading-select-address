var app = angular.module('app', []);

/**
 * 下拉输入地址
 * @directive
 * @param {scope} p 省份
 * @param {scope} a 区域
 * @param {scope} c 县级
 * @param {scope} d 地址
 * @example
 * <cascading-address p="p" a="a" c="c" d="d"></cascading-address>
 */
app.directive('cascadingAddress', function ($http) {
    return {
        restrict: 'E',
        scope: {
            p: '=p',
            a: '=a',
            c: '=c',
            d: '=d'
        },
        replace: true,
        templateUrl: 'cascading-address/city.html',
        link: function (scope, elment, attrs) {
            // 初始化数据
            $http.get('cascading-address/city.min.js').success(function (data) {
                scope.provinces = data;
                init();
            });

            function init() {
                // 选中
                scope.set = {
                    p: function (p) {
                        scope.p = p;
                        scope.c = '';
                        scope.a = '';
                        scope.d = '';
                    },
                    c: function (c) {
                        scope.c = c;
                        scope.a = '';
                        scope.d = '';
                    },
                    a: function (a) {
                        scope.a = a;
                        scope.d = '';
                    }
                };

                // 重置
                scope.clear = function () {
                    scope.p = '';
                    scope.c = '';
                    scope.a = '';
                    scope.d = '';
                };

                // 显示或者关闭
                scope.open = function (action) {
                    action === 'show' ? scope.show = true : scope.show = false;
                };

                // 根据选中的 p(省份) 值更新 cities(城市列表)
                scope.$watch('p', function (newValue) {
                    if(newValue) {
                        var result = scope.provinces.filter(function (v) {
                            return v.p === newValue;
                        });

                        scope.cities = result[0].c;
                    } else {
                        scope.cities = [];
                    }
                });

                // 类似以上
                scope.$watch('c', function (newValue) {
                    if(newValue) {
                        var result = scope.cities.filter(function (v) {
                            return v.n === newValue;
                        });

                        scope.dists = result[0].a;
                    } else {
                        scope.dists = [];
                    }
                });

                // 任何数据变动都更新完整地址
                scope.$watch(function () {
                    var address = (scope.p + ' ' + scope.c + ' ' + scope.a + ' ' + scope.d);
                    scope.all = address.replace(/undefined *|   /g,'');
                });
            }
        }
    }
});

app.controller('appCtrl', function ($scope, $http) {
    $scope.p = '广东';
    $scope.c = '广州';
    $scope.a = '白云区';
    $scope.d = '磨刀南街71号';
});

angular.bootstrap(document, ['app']);