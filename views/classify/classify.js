/**
 * Created by hxsd on 2016/8/4.
 */
angular.module("myapp").controller("classifyCtrl",function($scope){
    $scope.slideChanged=function(index){
        console.log("index:"+index);
    };
    //作为一个原则： 数据绑定的时候。尽可能绑定到对象上面
    $scope.data={
        page:0
    };
    $scope.pagerClick=function(index){
        $scope.page=index;
    };

});