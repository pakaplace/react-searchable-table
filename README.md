# Pair programming exercise: Reactive table

## Goal

The goal of this exercise is to display tabular data interactively using React.

### Sample output

#### CSV data

```csv
First name,Last name,Phone,Address
Moose,Paksoy,123,SF
Edward,Lando,345,NYC
Darwish,Gani,678,Philly
Abhi,Ramesh,910,Philly
Lane,Rettig,333,NYC
```

#### Page layout

![](img/layout.png)

#### Page layout (sorted)

![](img/layout-sort.png)

#### Page layout (Search)

With no query:

![](img/layout-search.png)

With query:

![](img/layout-search2.png)

### User interaction flow

1. User clicks the file picker and chooses a CSV file
1. (Optional) If the provided file is not a CSV file, page displays error.
1. Page reads the contents of the file via JavaScript and parses it using the
   `csv-parse` npm package
1. Page displays and HTML table representing the contents of the CSV file.
   Use the first line of the file as column headings
1. User clicks column heading to sort table by contents of that column
1. User clicks the column heading again to reverse the direction of the
   sort
1. User clicks "Clear Sort" button to revert the data to it's original format
1. User types in the "Search" box, which filters down table contents
   using simple string matching with `string.indexOf(query) > -1`

## Instructions

For this exercise you will have a single React component that renders the
whole page. Tomorrow we're going to learn how to split React applications
into components that talk to each other. We don't need that today.

### Step 0: Running your app

Start your app with `npm start` and visit
[localhost:3000](http://localhost:3000/) to view it.

Your app comes preconfigured `webpack` hot module reloader so you don't
have to use nodemon to restart after making changes.

Your React code goes in `reactive-table/client/index.js` and your
HTML code goes in `index.html`.

Bootstrap has been included for you. You can add more CSS files in
`reactive-table/css`.

### Step 1: Read file data in JavaScript

Add a file picker to the page and `console.log()`  contents of any file
that the user selects.

Use the provided `FileInput` component to display a file picker on the page.
This component has an `onChange` event handler that is called with the contents
of the file after it has been read.

```jsx
function log(data) {
  console.log(data);
}

... Stuff left out here ...

<FileInput className="form-control" onChange={log} />
```

### Step 2: Parse CSV file data

1. Use the `csv-parse` library to parse the data from the user specified file
   into JavaScript arrays.

  ```javascript
  var parse = require('csv-parse');
  parse(data, {}, function(err, data) {
    if (err) {
      console.log('error parsing', err);
    } else {
      // data is an array of arrays
      console.log('data', data);
    }
  });
  ```

1.

### Credits

Boilerplate code courtesy of
[React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate)
