({
	createItem : function(component, newItem) {
		var createEvent = component.getEvent("c.addItem");
        
        createEvent.setParams({
            "item" : newItem
        }); 
        
        createEvent.fire();
        
        component.set("v.newItem", {'sobjectType': 'Camping_Item__c',
                                    'Name': '',
                                    'Quantity__c': 0,
                                    'Price__c': 0,
                                    'Packed__c': false
                                   });
        /*
        action.setCallback(this, function(response){
            var state = action.getState();
            
            if(state === "SUCCESS"){
                var items = component.get("v.items");
                
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }else{
                console.log("Failed with state: " + state);
            }
        });
        
        // Send action off to be executed
        $A.enqueueAction(action);
        */
	}
})