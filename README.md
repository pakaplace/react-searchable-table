# Pair programming exercise: Reactive table

## Goal

The goal of this exercise is to display tabular data interactively using React.

## Instructions

For this exercise you will have a single React component that renders the
whole page. Tomorrow we're going to learn how to split React applications
into components that talk to each other. We don't need that today.

### Running your app

TODO

### Flow

1. User clicks the file picker and chooses a CSV file
1. (Optional) If the provided file is not a CSV file, page displays error.
1. Page reads the contents of the file via JavaScript and parses it using the
   `csv-parse` npm package
1. Page displays and HTML table representing the contents of the CSV file.
   Use the first line of the file as column headings
   ![](img/layout.png)
1. User clicks column heading to sort table by contents of that column
   ![](img/layout-sort.png)
1. User clicks the column heading again to reverse the direction of the
   sort
1. User clicks "Clear Sort" button to revert the data to it's original format

### The view

There should be a single file picker on the page.

Sample CSV file

```csv
First name,Last name,Phone,Address
Moose,Paksoy,123,SF
Edward,Lando,345,NYC
Darwish,Gani,678,Philly
Abhi,Ramesh,910,Philly
Lane,Rettig,333,NYC
```

### Credits

Boilerplate code courtesy of
[React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate)
