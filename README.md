/******* SETUP *********/
Get a Key from http://www.omdbapi.com/ then just put your API Key in the fetchData call. Ready to go!!!


### Requirements

1: API from the open movie database 🎥
2: Bulma CSS
3: Axios
4: Fontawesome

### CHALLENGES

1: Fetch Movie Data from API
2: Build an autocomplete widget
3: Style the App

### Default State

1: Empty
2: User starts typing
3: User finishes typing and finds matching Movie
4: User presses enter
5: User uses Widget for dropdown to define search
6: User decides to abandon search and closes menu

### Create API Call

1: Get response from API
2: Create a callback function for Debounce / Limit api calls
3: Structure API call to get elements required
4: Build Autocomplete Widget =

> autocomplete div
> handle input
> do search
> add HTML for menu
> add options for menu

5: Remove Widget when deselecting a movie
6: When movie selected update the input text to reflect movie title
7: Close menu
8: Render Movie data

### Follow Up Request

1: Get movie id response from API:heavy_check_mark:
2: Build the HTML MovieTemplate for the properties to display

### Refactor Codebase

1: All code touches everything 👎
2: Autocomplete Widget to be reusable =

> Autocomplete has knowledge of what movie Object is
> Autocomplete has knowledge of what to show for each option
> Autocomplete has knowledge of what to do when movie is clicked
> Global variables that refer to specific elements - hard to show second autocomplete

3: Create autocomplete file to make createAutoComplete function
4: Refactor Option part of autocomplete with render option and select option
5: Remove references to movie and movies. Autocomplete is now reusable! 👍

### Compare Statistics

1: Create variables for movies on both sides
2: Find the article for each movie add a data value and run Comparison
3: Apply styling to article element
