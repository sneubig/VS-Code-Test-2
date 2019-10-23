({
    saveAccount : function(component, event, helper) {
    	var recordEditor = cmp.find("recordEditor");
        
        recordEditor.saveResult($A.getCallback(function(saveResult) {
            if(saveResult.state === 'ERROR') {
                var errMsg = "";
                
                for(var i = 0; i < saveResult.error.length; i++) {
                    errMsg += saveResult.error[i].message + "\n";
                }
                
                cmp.set("v.recordSaveError", errMsg);
            } else {
                cmp.set("v.recordSaveError", "");
            }
        }));
    },
    
	handleRecordUpdated : function(component, event, helper) {
		var eventParams = event.getParams();
        
        if(eventParams.changeType === "CHANGED") {
            var changedFields = eventParams.changedFields;
            console.log('The fields that were changed are: ' + JSON.stringify(changedFields));
            
            // Display Results
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Saved",
                "message": "The record was updated."
            });
            
            // Fire the toast
            resultsToast.fire();
        } else if(eventParams.changeType === "LOADED") {
            // record is loaded in the cache
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted and removed from the cache
        } else if(eventParams.changeType === "ERROR") {
            console.log('Error: ' + component.get("v.error"));
        }
	}
})