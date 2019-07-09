# VSCountryJsonEditor
Simple HTML/JS webpage that will provide an easy to use UI for managing country data. Exports changes/config as a JSON file. No internal store.

**WIP (Remove me after first release/tag)**

# Acceptance Criteria:
1. JSON Import  
	Given I have an existing JSON file  
	When I import the JSON file  
	Then the view is hydrated with the data from the file  
	
2. JSON Export  
	Given I have updated some data  
	When I export the JSON file  
	Then I expect the browser to start downloading a JSON file with my data  

	Given I have some data on the site  
	And I have input some invalid values  
	When I click 'Export JSON'  
	Then a notification will pop-up indicating I have some invalid values  

	Given the Invalid Values Export notification is on the view  
	When I click 'Export Anyway'  
	Then my invalid values are saved and exported as JSON  

	Given the Invalid Values Export notification is on the view  
	When I click 'Cancel'  
	Then my data is not exported and the notification goes away  

3. Dynamic Property Hydration  
	Given I have imported a JSON file  
	When I view the data on the site  
	Then I expect all of my properties to be displayed in a tree-like view  

	Given I have imported a JSON file with a schema defined  
	When I view the data on the site  
	Then I expect the controls to represent the schema (drop-downs for enums, required fields noted)  

	Given I have imported a JSON file with a schema defined  
	When I attempt to edit the data  
	Then I expect the input to be validated against the schema  

4. JSON schema Fetch  
	Given I have imported a JSON file  
	And the schema declaration is a URL  
	When I view the data on the site  
	Then I expect the schema to have been fetched from the URL and applied to the view  

5. JSON edit values  
	Given I have some data on the site  
	When I view a property  
	Then it should be displayed as a value inside of an input element  

	Given I have some data on the site  
	When I view a property with an enum  
	Then it should be displayed as a value inside of a drop-down element  
	
	Given I have some data on the site  
	When I input a value that is not valid with the schema  
	Then the input should highlight red  
	And display a message that reveals the validation rules for the field  

6. Search in Arrays  
	Given I have an array of data  
	When I view the array object  
	Then I see a search bar at the parent level of the Array  

	Given I have an array of data  
	When I type a value into the array search bar  
	And click 'Search'  
	Then I see a list of all the objects that have a matching property value  


# FUTURE ACs - updating the schema
1. Add a Property  
	Given I have some data in the view  
	When I view any level of the data  
	Then I should see a button 'Add Property'  

	Given I have some data in the view  
	When I click 'Add Property'  
	Then I am prompted with a modal that gives me options for adding a property at this level in the structure  

2. Add Property Modal  
	Given the Add a Property modal is on the view  
	And the 'Apply to sibling objects' checkbox is pre-selected  
	When I click 'Add Property' button  
	Then my property is added to the current object and all of it's siblings  

	Given the Add a Property modal is on the view  
	And the 'Apply to sibling objects' checkbox is unselected  
	When I click 'Add Property' button  
	Then my property is added to the current object only  
	And none of the sibling objects are updated  

	Given the Add a Property modal is on the view  
	When I open the 'type' dropdown  
	Then my available options are 'string', 'number', 'boolean', 'null/empty', 'object', 'array'  

	Given the Add a Property modal is on the view  
	When 'Apply to sibling objects' checkbox is selected  
	Then I see an input for 'Default Value'  

	Given default value is empty  
	When I click 'Add Property' button  
	Then sibling objects are populated with the default value of null  

	Given the Add a Property modal is on the view  
	When I click 'Add Property' button  
	Then my property is added with all of my selected options  

3. Remove a Property  
	Given I have some data in the view  
	When I view any level of the data  
	Then I should see a button next to each property to delete it  

	Given I have some data in the view  
	When I click the delete icon/button  
	Then I should see that property removed from this object and all its siblings  

	Given I have clicked the delete icon/button  
	When the property is removed  
	Then I should see a message in its place that says: "This property has been removed from this object and all of its siblings! _Undo_"  

	Given I have deleted a property  
	When I click the 'Undo' link inside the delete message  
	Then the property that was removed should be re-added to the data with it's original values.  
	
	Given I have deleted a property  
	When I preform another action on the data  
	Then I should no longer see the delete message in place of the property  