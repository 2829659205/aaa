//时间插件
angular.module('mc.datetimepicker', [])

.directive('mcdatepicker', function() {
    return {
        restrict: 'EA',
        require : 'ngModel',
        scope: {
        	format : "@",
        },
        link : function (scope, element, attrs, ngModelCtrl) {
        	if(!angular.isDefined(scope.format)){
        		scope.format="yyyy/mm/dd";
        	}
        	var dateOption={};
    		var isExist={};
    		isExist.year = scope.format.indexOf("yyyy")>=0 ? true : false;
    		isExist.month = scope.format.indexOf("mm")>=0 ? true : false;
    		isExist.day = scope.format.indexOf("dd")>=0 ? true : false;
    		isExist.hour = scope.format.indexOf("HH")>=0 ? true : false;
    		isExist.mintue = scope.format.indexOf("ii")>=0 ? true : false;
    		isExist.second = scope.format.indexOf("ss")>=0 ? true : false;
    		//console.log(isExist);
    		
    		//api地址：http://www.bootcss.com/p/bootstrap-datetimepicker/
    		dateOption.format=scope.format;
    		dateOption.autoclose=1;
    		dateOption.forceParse=0;
    		
    		if( isExist.year){
    			dateOption.weekStart=1;
    		}
    		if( isExist.day){
    			dateOption.todayBtn=1;
    			dateOption.todayHighlight=1;
    		}
    		if( !isExist.year && !isExist.month && !isExist.day){
    			dateOption.startView=1;//format: HH:ii:ss OR format: HH:ii ……
    			dateOption.maxView=1;
    			dateOption.minView=0;
    		}
    		if( !isExist.hour && !isExist.mintue && !isExist.second && isExist.year && isExist.month && isExist.day){
    			dateOption.startView=2;//format:yyyy/mm/dd
				dateOption.minView=2;
    		}
    		if( !isExist.hour && !isExist.mintue && !isExist.second && isExist.year && isExist.month && !isExist.day){
    			dateOption.startView=3;//format:yyyy/mm
    			dateOption.minView=3;
    		}
    		
    		//console.log(dateOption);
        	$(function(){
        		element.datetimepicker(dateOption);
        	});

        }
    }
});
 