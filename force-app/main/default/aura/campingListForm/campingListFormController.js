({
	clickCreateItem : function(component, event, helper) {
        
        // Takes the Input Component of an Array, and Reduces the Array to a single value
        // that's captured by validSoFar variable
        var validItem = component.find('campinglistform').reduce(function(validSoFar, inputCmp){
            
            // Displays an error message for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            
            // ValidSoFar remains true until it finds an invalid value
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if(validItem){   
            helper.createItem(component);
        }
	}
})