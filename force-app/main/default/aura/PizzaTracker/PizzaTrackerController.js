({
    doInit : function(component, event, helper) {
		helper.doInit(component, event, helper) ;
        
        component.set('v.steps', [
            { label: 'Contacted', value: 'step-1' },
            { label: 'Open', value: 'step-2' },
            { label: 'Unqualified', value: 'step-3' },
            { label: 'Nurturing', value: 'step-4' },
            { label: 'Closed', value: 'step-5' },
        ]);
	}
    
    /*
    init : function(component, event, helper) {
        component.set("v.percentDone", 50); // sets process to 50% done.
        
        component.set('v.steps', [
            { label: 'Contacted', value: 'step-1' },
            { label: 'Open', value: 'step-2' },
            { label: 'Unqualified', value: 'step-3' },
            { label: 'Nurturing', value: 'step-4' },
            { label: 'Closed', value: 'step-5' },
        ]);
	}
    */
})