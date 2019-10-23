({
	packItem : function(component, event, helper) {
        var isPackedButton = event.getSource();                     // Get Button
		var isPackedToggle = isPackedButton.get("v.Packed__c");		// Get Button Checked Value
        console.log('Button is Checked?: ' + isPackedToggle);       
        
        component.set("v.item.Packed__c", true);	// Set 'Packed' toggle to true
        isPackedButton.set("v.disabled", true);		// Disable 'Packed' button
	}
})