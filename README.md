# 🦸‍♂️ Hero IO

A simple and responsive app store–style web application built to practice modern React concepts like routing, state management, search, and data visualization.

---

## 📖 Description

**Hero IO** is a mini app marketplace where users can explore apps, view detailed information, and manage installations. The project focuses on building a smooth user experience with features like live search, sorting, local storage handling, and dynamic routing.

This project was created as part of an assignment to strengthen understanding of React ecosystem tools and real-world UI patterns.

---

## 🚀 Features

* 🏠 **Home Page**

  * Clean banner with CTA buttons
  * Top apps showcase
  * Quick navigation

* 📱 **All Apps Page**

  * Real-time filtering
  * Displays all available apps

* 📊 **App Details Page**

  * Detailed app information
  * Install functionality with toast feedback
  * Review visualization using charts

* 📥 **My Installation Page**

  * View installed apps
  * Uninstall apps with instant UI update
  * Persistent data using localStorage

* 🔍 **Sorting**

  * Sort apps by rating and size count (High → Low / Low → High)

* ⚡ **User Experience**

  * Loading animations for navigation & search
  * Custom error page for invalid routes
  * Fully responsive design for all devices

---

## 🛠️ Technologies Used

* React
* React Router
* Context API (State Management)
* Tailwind CSS

---

## 📦 Data Structure

Each app follows this structure:

```js
{
  image: string,
  title: string,
  companyName: string,
  id: number,
  description: string,
  size: number,
  reviews: number,
  ratingAvg: number,
  downloads: number,
  ratings: [
    { name: "1 star", count: number },
    { name: "2 star", count: number },
    { name: "3 star", count: number },
    { name: "4 star", count: number },
    { name: "5 star", count: number }
  ]
}
```

## 💡 Goal of This Project

The main goal was to practice:

* React Router (including loaders & navigation)
* State management patterns
* UI structuring from design (Figma)
* Handling real-world features like search, sort, and persistence

---

## Author
Lingkon Dash

## 📌 Final Note

This is a learning-focused project, so the UI is simple but the core logic and functionality are the main focus.

---
