/**
 * Created by hxsd on 2016/8/3.
 */
var myapp=angular.module("myapp",["ionic"]);
//
//console.log(myapp);
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");

    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    });

   // console.log($stateProvider,$urlRouterProvider);
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,//抽象的
        templateUrl:"views/tabs/tabs.html"
    });
    $stateProvider.state("tabs.collect",{
        url:"/collect",
        views:{"tab-collect":{templateUrl:"views/collect/collect.html",controller:"collectCtrl"}}
    });
//-------------分类-----------------------------
    $stateProvider.state("tabs.classify",{
    url:"/classify",
        views:{"tab-classify":{templateUrl:"views/classify/classify.html" /*controller:"classifyCtrl"*/}}
    });
    $stateProvider.state("tabs.xuanHuan",{
        url:"/xuanHuan",
        views:{"tab-classify":{templateUrl:"views/detail/xuanHuan/xuanHuan.html",controller:"xuanHuanCtrl"}}
    });
//----------------搜索---------------------------------
    $stateProvider.state("tabs.seek",{
        url:"/seek",
        views:{"tab-seek":{templateUrl:"views/seek/seek.html", controller:"seekCtrl"}}
    });
//-----------------------我的个人页---------------------------------
    $stateProvider.state("tabs.me",{
        url:"/me",
        views:{"tab-me":{templateUrl:"views/me/me.html"}}
    });
    $stateProvider.state("tabs.xiaoxi",{
        url:"/xiaoxi",
        views:{"tab-me":{templateUrl:"views/me/xiaoxi.html"}}
    });
    $stateProvider.state("tabs.huati",{
        url:"/huati",
        views:{"tab-me":{templateUrl:"views/me/huati.html"}}
    });
    $stateProvider.state("tabs.huatAA",{
        url:"/huatAA",
        views:{"tab-me":{templateUrl:"views/me/huatAA.html"}}
    });

//--------------------------------------------------------
    $urlRouterProvider.otherwise("/tour");

});










