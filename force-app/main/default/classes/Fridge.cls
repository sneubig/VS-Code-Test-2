public class Fridge implements KitchenUtility {
    
    // Member Variables
	private String modelNumber;
    private Integer numberInStock;
    
    // Static Variables
    public static Integer stockThreshold = 5;  // Can reference this variable by calling Fridge.stockThreshold or update it by calling Fridge.stockThreshold = 4
    public static final Integer stockThresholdConstant = 5; // Can be referenced but not updated
    
    // Properties (Read and/or Write Access of a variable)
    public void setModelNumber(String theModelNumber) {
        modelNumber = theModelNumber;
    }
    
    public String getModelNumber() {
        return modelNumber;
    }
    
    // The properties setter checks for negative ecoRatings, and adjusts them to 0
    public Integer ecoRating {
        get { return ecoRating; }
        
        set { ecoRating = value; if(ecoRating < 0) ecoRating = 0; }
    }
    
    // Constructors
    public Fridge() {
        modelNumber = 'XX-XX';
        numberInStock = 0;
    }
    
    public Fridge(String theModelNumber, Integer theNumberInStock) {
        modelNumber = theModelNumber;
        numberInStock = theNumberInStock;
    }
    
    // Class Method
    public void updateStock(Integer justSold) {
        numberInStock = numberInStock - justSold;
    }
    
    // Static Method - Call it by Fridge.toDebug(myFridge)
    public static void toDebug(Fridge aFridge) {
        System.debug('ModelNumber = ' + aFridge.modelNumber);
        System.debug('Number in Stock = ' + aFridge.numberInStock);
    }
    
    
}