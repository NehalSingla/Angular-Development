var mod=angular.module("app1",[]);
   mod.controller("myctrl",function($scope)
{
    
   $scope.items=["html","css","js"];
   $scope.newItem="";

   $scope.additem=function()
   {
   	if($scope.newItem!="")
   	  $scope.items.push( $scope.newItem);
       $scope.newItem="";
   }
   $scope.removeitem=function(index)
   {
   	$scope.items.splice(index,1);
   }

});