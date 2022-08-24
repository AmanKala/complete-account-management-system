# Account Management System

## Description :
- A Fully Functional `Account Management System With Receipt Generation`.
- Developed with `React-Typescript` and `Laravel` which are integrated with the help of `Inertia.js`.
- `Tailwind CSS` has been used for styling.
- It consists of an `Authentication System` for for registration and login functionalities.
- Errors are shown under the respective feilds if the user violetes the rules during registration and login. 
- After a successful login/register thte user is redirected to the Home page.
- Only after a succesfull login/registration the user will be able to create the transaction and access the transation listing.
- Created transactions can be `Edited` and `Deleted` by selectting the respective operations form the Transaction listing page itself.
- A `Receipt` can also be generated for a transaction by clicking the `Generate PDF` option provided.
- `jsPDF` has been used for PDF generation in react.

**Resources Referred:**
- Laravel important commands : https://blog.quickadminpanel.com/list-of-21-artisan-make-commands-with-parameters/
- Rect-TypeScript : https://www.youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK
- Inertia : https://inertiajs.com/server-side-setup
- Tailwind CSS : https://tailwindcss.com/docs/guides/create-react-app

**Installation Steps:**
1. Install WamppServer : https://sourceforge.net/projects/wampserver/
2. Install Composer : https://getcomposer.org/
3. Insatll Laravel : https://laravel.com/docs/9.x (preferred version is v8 )
4. Clone the repository by adding this link : https://github.com/AmanKala/complete-account-management-system.git
5. For Creating the project manually you can make a laravel app with `composer` as mentioned in the above blog and then install `inertia.js` to integrate `React.js`
    - https://inertiajs.com/server-side-setup
    - to install react in laravel : https://www.youtube.com/watch?v=qnTMyUEgaNE
    
## Screenshots of Working :

**Register Page:**
![image](https://user-images.githubusercontent.com/73444046/185043960-bfa9fb56-587d-42e4-a90a-dafd45a6c2b7.png)

**Login Page:**
![image](https://user-images.githubusercontent.com/73444046/185044042-c248eb15-2641-4b7e-b732-3324a1ad5062.png)

**Create Transaction Page:**
![image](https://user-images.githubusercontent.com/73444046/185044134-7f6f0bf5-cdcd-4d32-a17a-5e1184a60583.png)

**Transaction Listing Page:**
![image](https://user-images.githubusercontent.com/73444046/185044252-63ca50fc-22c7-4b94-993a-f4e303bdfaeb.png)

**Receipt Generated:**
![image](https://user-images.githubusercontent.com/73444046/185044394-c171aa53-6a79-4d53-ba5f-eb829d6feb1a.png)

**Downloaded Receipt PDF:** 
[Receipt (3).pdf](https://github.com/AmanKala/complete-account-management-system/files/9356727/Receipt.3.pdf)

