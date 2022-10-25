<script>
var app=angular.module("myApp",[])
app.controller('myController',function($scope,$http){

    $http.get('Pretest.json').then(function(response){
    $scope.list=response.data.menuList
  })
  })
</script>