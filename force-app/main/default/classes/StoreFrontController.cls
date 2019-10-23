public class StoreFrontController {
    
    // Instance Variable
    List<DisplayMerchandise> products;
    Map<String, DisplayMerchandise> shoppingCart = new Map<String, DisplayMerchandise>();
    
    // Action Method to handle purchasing process
    public PageReference addToCart() {
        for(DisplayMerchandise p : products) {
            if(0 < p.qtyToBuy) {
                shoppingCart.put(p.Name, p);
            }
        }
        return null; // stay on the same page
    }
    
    // Properties
    public List<DisplayMerchandise> getProducts() {
        if(products == null) {
            products = new List<DisplayMerchandise>();
            
            for(Merchandise__c item : [SELECT Id, Name, Description__c, Price__c, Total_Inventory__c FROM Merchandise__c]) {
                products.add(new DisplayMerchandise(item));
            }
        }
        return products;
    }
    
    public String getCartContents() {
        if(0 == shoppingCart.size()) {
            return '(empty)';
        }
        
        String msg = '<ul>\n';
        for(DisplayMerchandise p : shoppingCart.values()) {
            msg += '<li>';
            msg += p.name + ' (' + p.qtyToBuy + ')';
            msg += '</li>\n';
        }
        msg += '</ul>';
        return msg;  
    }
    
    // Inner class to hold online store details for items
    public class DisplayMerchandise {
        private Merchandise__c merchandise;
        
        public DisplayMerchandise(Merchandise__c item) {
            this.merchandise = item;
        }
        
        // Properties for use in the Visualforce View
        public String name {
            get { return merchandise.Name; }
        }
        
        public String description {
            get { return merchandise.Description__c; }
        }
        
        public Decimal price {
            get { return merchandise.Price__c; }
        }
        
        public Boolean inStock {
            get { return (0 < merchandise.Total_Inventory__c); }
        }
        
        public Integer qtyToBuy { get; set; }
    }
}