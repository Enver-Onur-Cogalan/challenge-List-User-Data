# ListUserData App

This project demonstrates how to fetch and display user data from an API in a mobile application using React Native.  
The data is retrieved from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

---

## 🚀 Technologies Used

- React Native
- JavaScript
- Axios (for the Axios version)
- Fetch API (for the Fetch version)
- FlatList (React Native)
- ActivityIndicator (React Native)

---

## 📦 Features

- Fetch user data from an external API
- Display a loading animation during data fetching
- Render users in a scrollable list
- Manual reload option with a "Reload" button
- Simulated 3-second delay to enhance loading animation visibility
- Proper error handling and user-friendly design

---

## 🛤️ Branch Information

### 🔹 `api/fetch-version`
- Fetch API is used to retrieve user data.
- Native JavaScript `fetch()` method is used.
- Basic error handling with `try-catch-finally` blocks.

### 🔹 `api/axios-version`
- Axios library is used to retrieve user data.
- Axios simplifies HTTP requests and error handling.
- Artificial delay (`setTimeout`) is added to enhance loading UX.

---

## 🛠️ Installation and Running the App

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Enver-Onur-Cogalan/challenge-List-User-Data.git
cd ListUserData
yarn install
cd ios
pod install
yarn ios
```

---

## ✨ Additional Notes

- The project was developed using **React Native 0.79.1** and **React 19.0.0**.
- Axios installation is required for the Axios branch:

```bash
npm install axios
```

- Each branch is self-contained and demonstrates two different approaches for fetching data.

---

## 📄 License

This project is for educational purposes and open for further development and contributions.
