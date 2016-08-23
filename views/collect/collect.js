/**
 * Created by hxsd on 2016/8/4.
 */

angular.module("myapp").controller("collectCtrl",function($scope) {

    $scope.products = [
        {title: "谁的青春不迷茫", author: "刘同",type:"青春",status:"完结", img: "images/shuidqcbmm.jpg"},
        {title: "诛仙", author: "萧鼎",type:"武侠",status:"完结", img: "images/zhuxian.jpg"},
        {title: "神墓", author: "辰东",type:"玄幻",status:"完结", img: "images/shenmu.jpg"},
        {title: "大主宰", author: "天蚕土豆",type:"玄幻",status:"完结", img: "images/dzz.jpg"},
        {title: "绝世唐门", author: "唐家三少",type:"网络玄幻",status:"完结", img: "images/jstm.jpg"},
        {title: "斗破苍穹", author: "天蚕土豆",type:"玄幻",status:"完结", img: "images/dpcq.jpg"},
        {title: "斗罗大陆", author: "唐家三少",type:"玄幻",status:"完结", img: "images/dldl.jpg"},
        {title: "致我们逝去的青春", author: "辛夷坞",type:"青春",status:"完结", img: "images/sqdqc.jpg"}
    ];
    /*$scope.data={
        showDelete:false,
        showReorder:false
    };*/
    //删除item项
    $scope.delete=function(product){
        //找到要删除的元素索引值；
        var index=$scope.products.indexOf(product);
        //删除该索引处的元素
        $scope.products.splice(index,1);
    };
});