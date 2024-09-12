# Simple API Product
**Date**: 1403-06-22, 2024-09-12<br>
**Description**: This is a simple API simulator for storing products in the database.
- All API path:
    1. `/api/products/`
    2. `/api/products/${ID}/`

- Database: using `json file`

- Methods
    1. GET
    2. POST
    3. OPTION
    4. DELETE
    5. PUT

- Data Structure
```json
{
    info: {},
    products: [
        {
            id: 0,
            name: '',
            description: '',
            price: 00.00
        },
        {
            id: 0,
            name: '',
            description: '',
            price: 00.00
        }
    ]
}
```