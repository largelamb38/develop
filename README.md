# Development

### Link to Deployed Website
https://largelamb38.github.io/develop/

### Goal and Value of the Application
The goal of this application is to be an online tennis shop displaying different categories of items like racquets, clothes, shoes, and balls. Moreover, it displays items of different brands. It provides a quick and easy way for users to filter and sort through items according to their own personal categories. The value of this application is that it allows users to quickly find the items they want by using the sort and filter functions. It saves users a lot of times by reducing search costs.

### Usability Principles Considered
I made add to cart and remove to cart buttons for each card so that users can easily add and remove items they want/don't want. I also show a cart total so users can easily see how much they are spending. I label out all the items in the cart so users know which items cost what. I made the sorting feature a sorting that is based on price as that is the most important thing consumers consider. The brand and category filters help users reduce the time they spend scrolling through the page as they can quickly click their criteria. I made it highlighted whenever the filter was applied

### Organization of Components
App.js is set up so that it shows the basic title at the top "Providence Classic Tennis Shop". Then the filters (brand and category) are displayed with their respective button filters. This is followed by the sorting butons so consumers can sort by price. After, I have the cart which lists out total price and cart contents on the left. On the right I have all the item cards displayed. These are all organized through flexboxes.

How filtering works: Once a filter button is clicked, a select filter function is applied so it is added to the states which contains the filters (type or category). Then, we filter the data according to the selected filters.

How sorting works: with the filtered data, we sort it according to price depending if the user wants it to be ascending or descending. Sorting criteria is applied through clicking one of the sort buttons which causes the data to be sorted according to the criteria.

Once the data is filtered and sorted, we map each item to shopItem.js

In ShopItem.js which contains the code to create an "item card". It follows a very standard format that many ecommerce websites use which is displaying the name of the item at the top, followed by a picture of the item. Then, I put the category and brnad of the item so consumers can easily see what the category/brand is. At the bottom of each card, I have a add to cart and a remove from cart button which changes the contents of the cart.

### How Data is Passed Down Through Components
All my data is stored in shopData.json. It contains the title, brand, category, image address, uid, price, and description of each item. The data is intially stored as a state in App.js. App.js checks to see if any of the filter buttons are clicked. If any filters are clicked, the filters will be applied on the data to see if each piece of data matches the filtered criteria. Then, after the data is filtered, it checks if any sorting function is applied, if so, the data will be sorted according to their price (low to high or high to low) or even by (uid) which is the original state. Once the data is filtered and sorted, the data is mapped according to the shopItem.js card so each remaining data is displayed as a card on the webpage.


### How the User Triggers State Changes
State changes mainly occur through useEffect which is a hook. Essentially, it runs my filterArr function every time I render. This is great because everytime I click a new filter/sort button, I want it to rerender the whole page to display the new list of cards that match the filtered criteria.
