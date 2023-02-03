# Mern eStore

# Learnings

1. Create React App
2. Create Git Repository

3. List Products

   1. create products array
   2. add product images
   3. render products
   4. style products

4. Add routing

   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen

5. Create Node.Js Server

   1. run NPM init in root folder
   2. Update package.json set type: module
   3. add .js to imports
   4. npm i express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start

6. Fetch Products from Backend

   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook

7. Manage State By Reducer Hook

   1. define reducer
   2. update fetch data
   3. get state from useReducer

8. Add bootstrap UI Framework

   1. npm install react-bootstrap bootstrap
   2. update App.js

9. Create Product and Rating Component

   1. create rating component
   2. create product component
   3. use rating component in product component

10. Create Product Details Screen

    1. fetch product from backend
    2. create 3 columns for image, info and action

11. Create Loading and Message Component

    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function

12. Implement Add To Cart

13. create react context
14. define reducer
15. create store provider
16. implement add to cart button click handler

17. Complete Add To Cart

18. check exist item in the cart
19. check count in stock in backend

20. Create Cart Screen

21. create 2 columns
22. display items list
23. create action column

24. Complete Cart Screen

    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout

25. Create Signin Screen
26. create sign in form
27. add email and password
28. add signin button

29. Connect To MongoDB Database
30. create atlas mongodb database
31. install local mongodb database
32. npm install mongoose
33. connect to mongodb database

34. Seed Sample Data
35. create Product model
36. create User model
37. create seed route
38. use route in server.js
39. seed sample product

40. Seed Sample Users
41. create user model
42. seed sample users
43. create user routes

44. Create Signin Backend API
45. create signin api
46. npm install jsonwebtokens
47. define generateToken function

48. Complete Signin Screen
49. handle submit screen
50. save token in store and local storage
51. show user name in header

52. Create Shipping Screen
53. create form inputs
54. handle save shipping address
55. add checkout wizard bar

56. Create Sign Up Screen
57. create input forms
58. handle submit
59. create backend api

60. Implement Select Payment Method Screen
61. create input forms
62. handle submit

63. Create Place Order Screen
64. show cart items, payment and address
65. handle place order action
66. create order create api

67. Implement Place Order Action

    1. handle place order action
    2. create order create api

68. Create Order Screen

    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 columns

69. Pay Order By Paypal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
