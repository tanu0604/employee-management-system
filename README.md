


# 🏢 Employee Management System

A simple full-stack **Employee Management System** using **Spring Boot**, **MySQL**, and **React**.  
🚀 Supports CRUD operations to **Create**, **Read**, **Update**, and **Delete** employee records.

---

## ✨ Features
✅ View a list of employees  
✅ Add a new employee  
✅ Update employee details  
✅ Delete an employee  
✅ Uses **MySQL** as the database  
✅ REST APIs with **Spring Boot**  

---

## 🛠 Tech Stack
**Backend:** ⚙️ Spring Boot | MySQL | JPA | Spring Data REST  
**Frontend:** 🎨 React | Axios | Tailwind CSS *(if used)*  
**Database:** 🗄 MySQL  

---

## 🚀 Setup Instructions  

### 🔹 1. Backend (Spring Boot)  
#### Prerequisites:
📌 **Java 17+**  
📌 **MySQL installed and running**  

#### Steps:
1️⃣ Clone the repository:  
   ```sh
   git clone https://github.com/your-username/employee-management-system.git
   cd employee-management-system/backend
   ```
2️⃣ Configure **MySQL database** in `application.properties` (or `application.yml`):  
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/employees_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```
3️⃣ Run the backend:  
   ```sh
   mvn spring-boot:run
   ```

---

### 🔹 2. Frontend (React)  
#### Prerequisites:
📌 **Node.js installed**  

#### Steps:
1️⃣ Navigate to the frontend:  
   ```sh
   cd ../frontend
   ```
2️⃣ Install dependencies:  
   ```sh
   npm install
   ```
3️⃣ Start the React app:  
   ```sh
   npm start
   ```

---

## 📡 API Endpoints  
| Method | Endpoint          | Description          |
|--------|------------------|----------------------|
| 🟢 **GET**    | `/employees`       | Get all employees   |
| 🟢 **GET**    | `/employees/{id}`  | Get employee by ID  |
| 🟡 **POST**   | `/employees`       | Create new employee |
| 🔵 **PUT**    | `/employees/{id}`  | Update employee     |
| 🔴 **DELETE** | `/employees/{id}`  | Delete employee     |

---

## 📜 License  
🔓 This project is open-source and available under the [MIT License](LICENSE).  

---

### 🌟 Show Some Love  
If you found this useful, ⭐ **star** the repository!  
Made with ❤️ by **Tanushree Paul**  

---

