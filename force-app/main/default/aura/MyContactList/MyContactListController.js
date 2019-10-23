({
	myAction : function(component, event, helper) {
        // Set the Columns attribute
        component.set("v.Columns", [
            {label: "First Name", fieldName: "FirstName", type: "text"},
            {label: "Last Name", fieldName: "LastName", type: "text"},
            {label: "Phone", fieldName: "Phone", type: "phone"}
        ]);
        
        // Calls the getContacts method of the Apex controller
		var action = component.get("c.getContacts");
        
        // Passes the recordId of the current Account
        action.setParams({
            recordId: component.get("v.recordId")
        });
        
        // Populates the attribute named "Contacts" with the results
        action.setCallback(this, function(data){
        	component.set("v.Contacts", data.getReturnValue());
        });
    	$A.enqueueAction(action);
	}
})