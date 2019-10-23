({
    doInit : function(component, event, helper) {
        // Load items from Salesforce
        var action = component.get("c.getItems");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state === "SUCCESS"){
                var items = component.get("v.items");
                
                items.push(response.getReturnValue());
				component.set("v.items", items);				
            }
        });
        
        $A.enqueueAction(action);
    },
    
    handleAddItem: function(component, event, helper) {
		// Call the saveItem method in the Apex Controller tied to the Component
        var action = component.get("c.saveItem"); 
        
        var item = component.get("v.item");
                
        action.setParams({"item": item});
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if(state === "SUCCESS"){
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                
                component.set("v.items", items);
            }
        })
        
        
        
        
        
        items.push()
         
    }
    
	
})