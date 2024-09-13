# Simple API Product
**Date**: 1403-06-22, 2024-09-12<br>
**Description**: This is a simple API simulator for storing products in the database.
All API path
    1. `/api/products/`
    2. `/api/products/${ID}/`

Database: using `json file`

Methods
    1. GET
    2. POST
    3. OPTION
    4. DELETE
    5. PUT

Data Structure: ([data reference](https://github.com/benoitvallon/100-best-books/blob/master/books.json))
```json
[
    {
        "author": "Virginia Woolf",
        "country": "United Kingdom",
        "imageLink": "images/to-the-lighthouse.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
        "pages": "209",
        "title": "To the Lighthouse",
        "year": "1927",
        "id": "43939d7d-a4ea-4604-ad78-40e3138459ee"
    },
    {},
    {}
]
```