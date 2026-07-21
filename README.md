# 📋 React Hook Form Practice

A practice project demonstrating how to build and validate forms using **React Hook Form**. This repository showcases efficient form handling, validation, error management, and improved user experience with minimal re-renders.

---

## 🚀 Features

- 📝 Form creation with React Hook Form
- ✅ Client-side validation
- ⚡ High-performance form state management
- ❌ Error handling and validation messages
- 🔄 Controlled and uncontrolled inputs
- 📱 Responsive user interface
- 🎯 Clean and reusable components

---

## 🛠 Tech Stack

- React
- TypeScript / JavaScript
- React Hook Form
- Vite
- Tailwind CSS

---

## 📂 Project Structure

```
react-hook-form/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── App.jsx / App.tsx
│   └── main.jsx / main.tsx
│
├── public/
├── package.json
└── README.md
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/manishchettrikarki/react-hook-form.git

cd react-hook-form
```

Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

---

## ▶️ Running the Project

Start the development server

```bash
npm run dev
```

or

```bash
pnpm dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 📚 Concepts Covered

- `useForm()`
- `register()`
- `handleSubmit()`
- Form Validation
- Error Messages
- Default Values
- Form Reset
- Watching Form Values
- Controlled Components
- Custom Validation Rules

---

## 💡 Example

```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const onSubmit = (data) => console.log(data);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input
      {...register("name", {
        required: "Name is required",
      })}
    />

    {errors.name && <p>{errors.name.message}</p>}

    <button type="submit">Submit</button>
  </form>
);
```

---

## 🎯 Learning Objectives

This project was created to practice:

- Efficient form management in React
- Form validation techniques
- Error handling
- Building reusable form components
- Improving user experience with React Hook Form

---

## 🔮 Future Enhancements

- Multi-step forms
- Dynamic field arrays
- File uploads
- API integration
- Zod/Yup validation
- Authentication forms
- Advanced custom validation

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Manish Karki**

GitHub: https://github.com/manishchettrikarki

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
