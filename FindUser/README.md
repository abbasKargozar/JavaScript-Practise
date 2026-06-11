## User Data Processor

### Description
A JavaScript function `processUsers` that takes an array of raw user objects and processes the data based on specific business rules.

### Project Requirements
1. **Filter Users:** Keep only users who are 18 or older (`age >= 18`) and have an active account (`isActive: true`).
2. **Format Name (Title Case):** Format the names so that the first letter of each word is capitalized and the rest are lowercase (e.g., "JOHN DOE" becomes "John Doe").
3. **Generate Username:** Create a new `username` property for each user, extracted from their `email` address (the part before the `@` symbol) and converted to lowercase.
4. **Remove Email:** Exclude the `email` property from the final output objects.
