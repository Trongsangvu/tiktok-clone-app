# 🚀 TikTok Clone App

This project is a TikTok-style web application built with React (Create React App), using Yarn 4 for package management.

---

## 📦 Requirements

- Node.js >= 18
- Yarn 4 (Berry)

---

## ⚙️ Setup Project

### 1. Clone repository

```bash
git clone https://github.com/Trongsangvu/tiktok-clone-app.git
cd tiktok-clone-app/tiktok-ui
```

---

### 2. Enable Yarn 4

If you don’t have Yarn 4 yet:

```bash
corepack enable
corepack prepare yarn@stable --activate
```

Check version:

```bash
yarn -v
```

---

### 3. (Recommended) Use node_modules instead of PnP

```bash
yarn config set nodeLinker node-modules
```
or
```
Create .yarnrc.yml file with nodeLinker: node-modules
```

---

### 4. Install dependencies

```bash
yarn install or yarn
```

---

## 🔐 Environment Variables

Create a `.env` file in root:

```env
REACT_APP_BASE_URL=http://localhost:5000
or
API Public: https://tiktok.fullstack.edu.vn/api
```

---

## ▶️ Run Project

```bash
yarn start
```

App will run at:

```
http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
yarn build
```

Output will be in:

```
/build
```

---

## ⚠️ Notes

- This project uses **Create React App (CRA)** → some warnings (like Sass deprecation) can be ignored.
- If you encounter issues with dependencies, try:

  ```bash
  yarn install --force
  ```

- If using alias (`~` or `@`), ensure bundler config matches.

---

## 📌 Tech Stack

- React (CRA)
- SCSS Modules
- Axios
- Yarn 4

---

## 📈 Future Improvements

- Migrate to Vite for better performance
- Add video upload & streaming
- Implement authentication & social features

---
