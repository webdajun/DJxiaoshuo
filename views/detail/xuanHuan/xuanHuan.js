/**
 * Created by hxsd on 2016/8/5.
 */
angular.module("myapp").controller("xuanHuanCtrl",function($scope,$http,$ionicScrollDelegate) {
    $scope.products = [
        {title: "谁的青春不迷茫", author: "刘同",type:"青春，是迷茫的，是青涩的，谁都会在这朦胧而又青涩的时光里爱上一个不会在一起的人......",status:"连载中", img: "images/shuidqcbmm.jpg"},
        {title: "诛仙", author: "萧鼎",type:"天地不仁，以万物为刍狗......",status:"已完结", img: "images/zhuxian.jpg"},
        {title: "神墓", author: "辰东",type:"一个平凡的青年死去万载岁月之后，从远古神墓中复活而出，如林的神魔墓碑令他感到异常震撼......",status:"连载中", img: "images/shenmu.jpg"},
        {title: "大主宰", author: "天蚕土豆",type:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊......",status:"已完结", img: "images/dzz.jpg"},
        {title: "绝世唐门", author: "唐家三少",type:"这里没有魔法，没有斗气，没有武术，却有武魂。唐门创立万年之后的斗罗大陆上，唐门式微......",status:"连载中", img: "images/jstm.jpg"},
        {title: "斗破苍穹", author: "天蚕土豆",type:"这里是属于斗气的世界,没有花俏艳丽的魔法,有的,仅仅是繁衍到巅峰的斗气!新书等级制度......",status:"连载中", img: "images/dpcq.jpg"},
        {title: "斗罗大陆", author: "唐家三少",type:" 唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却来到了另一个世界......",status:"已完结", img: "images/dldl.jpg"},
        {title: "致我们逝去的青春", author: "辛夷坞",type:"因为我爱他 所以即使要再次揭开伤疤 也要将我们之间的一切全部记录......",status:"连载中", img: "images/sqdqc.jpg"}
    ];

    //下拉刷新
    $scope.refresh=function(){
        //向服务器请求数据。替换现有数据
        $http.get("json/data.json").success(function(data){
            $scope.products=data;
        }).finally(function(){
            //通知框架。刷新结束。停止显示图标
            $scope.$broadcast("scroll.refreshComplete");
        });
    };

    //无限滚动---------------------
    $scope.loadMore=function(){
        //向服务器请求一页新的数据，追加现有数据之后
        $http.get("json/data.json").success(function(data){
            //使用Array的原型方法 push  。等价于 $scope.products.push(data)
            Array.prototype.push.apply($scope.products,data);
        }).finally(function(){
            //通知框架。刷新结束。停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };

    //--------- Top------------------------------
    $scope.toTop=function(){
        $ionicScrollDelegate.scrollTop(true);
    };

});