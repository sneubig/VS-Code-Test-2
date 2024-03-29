public with sharing class CampingListController {
	
    @AuraEnabled 
    public static List<Camping_Item__c> getItems(){
        
        // Check to make sure all fields are accessible to this user
        String[] fieldsToCheck = new String[] {
            'Id', 'Name'
        };
            
        Map<String, Schema.SObjectField> fieldDescribeTokens = Schema.SObjectType.Camping_Item__c.fields.getMap();
        
        for(String field : fieldsToCheck){
            if(!fieldDescribeTokens.get(field).getDescribe().isAccessible()){
                throw new System.NoAccessException();
            }
        }
        
        return [SELECT Id, Name FROM Camping_Item__c];
    }
    
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c campingItem){
        // Perform isUpdateable() checking first, then 
        List<String> fieldsToCheck = new List<String> {
            'Name'
        };
            
        Map<String, Schema.SObjectField> fieldDescribeTokens = Schema.SObjectType.Camping_Item__c.fields.getMap();
        
        for(String field : fieldsToCheck){
            if(!fieldDescribeTokens.get(field).getDescribe().isUpdateable()){
                throw new System.NoAccessException();
            }
        }
        
        
        upsert campingItem;
        return campingItem;
    }
}