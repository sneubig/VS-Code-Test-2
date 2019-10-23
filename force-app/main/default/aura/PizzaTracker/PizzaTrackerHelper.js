({
	doInit : function(component, event, helper)  {
        helper.computeProgress(component, event, helper);
        
	},
    computeProgress : function(component, event, helper)  {
        var totalVal = component.get("v.totalProgress");
        var actualVal = component.get("v.actualProgress"); 
        
        if(totalVal && actualVal && !isNaN(parseInt(totalVal)) && isFinite(totalVal) && !isNaN(parseInt(actualVal)) && isFinite(actualVal)){
           //parameter is number 
            var percVal = parseInt(actualVal) / parseInt(totalVal) ;
            var progressVal = parseInt(  percVal * 360  ) ;
            
            component.set("v.cirDeg" , progressVal );
            component.set("v.perText" , parseInt(percVal * 100)  +'%' ); 
        }else if(actualVal){
            helper.callApexMethod(component, event, helper, totalVal, actualVal);
        }
    }
})