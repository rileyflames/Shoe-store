# Shoe-store

# Shoe Store API – Project Roadmap

A professional, full-stack Node.js project using Express, MongoDB (Mongoose), and modern architecture patterns. Follows clean coding, testing, and project structuring best practices.

---

## 🧠 Phase 1: Setup & Architecture

### ✅ Project Structure
- `/src/app.js` → Sets up Express app
- `/src/server.js` → Starts server + DB connection
- `/src/config/db.js` → Handles MongoDB connection

### ✅ .env Setup
- PORT
- MONGO_URI

---

## 👟 Phase 2: Shoe Resource Design

### ✅ Shoe Schema Fields
- `name` (String, required)
- `brand` (String, required)
- `size` (Array of numbers, required)
- `price` (Number, required)
- `inStock` (Boolean, required)
- `color` (String, optional)
- `category` (String, optional)
- `createdAt` (Date, default)

### ✅ API Endpoints (RESTful)
| Method | Endpoint        | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/shoes`     | Get all shoes            |
| GET    | `/api/shoes/:id` | Get a shoe by ID         |
| POST   | `/api/shoes`     | Create a new shoe        |
| PUT    | `/api/shoes/:id` | Update an existing shoe  |
| DELETE | `/api/shoes/:id` | Delete a shoe            |

---

## 🧱 Phase 3: Implement Shoe Feature

### 1. Create Shoe Model
- File: `/models/Shoe.js`
- Mongoose schema setup

### 2. Create Controller
- File: `/controllers/shoeController.js`
- Logic for each endpoint (CRUD)

### 3. Define Routes
- File: `/routes/shoeRoutes.js`
- Connect endpoints to controller

### 4. Register Routes
- Add route to `/src/app.js`

---

## 🧪 Phase 4: Testing (Optional for Now)
- Configure Jest + Supertest
- Write tests for each endpoint
- Use `src/app.js` for test server booting

---

## 🔧 Phase 5: Improvements
- Validation (Mongoose + express-validator)
- Error handling middleware
- Modular services layer (if needed)
- Pagination, filtering, sorting
- File uploads (for product images)

---

## 📂 Suggested Folder Structure

