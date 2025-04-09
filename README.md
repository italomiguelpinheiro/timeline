# 🕒 Interactive Timeline - React

An Intuitive timeline interface built with **React**, **Material UI**, and **Framer Motion**, designed to organize and visualize events seamlessly.

---

## 💡 What I like about this implementation

- ✅ **Clean and intuitive UI** using Material UI and modern React best practices.  
- 🎨 **Consistent styling** with a defined color palette (`constantsColors`), and thoughtful spacing.  
- 🧩 **Reusable components** like `RoundedTextField` and `TimelineFeaturesInfo`, making the code more modular and maintainable.  
- 🧠 **Animated experience** with Framer Motion to create smooth transitions and enhance user engagement.  
- 🔍 **Feature-rich Timeline** component with zoom, filters, labels toggle, hover previews, and in-place editing.  

---

## 🔁 What I would change if I were going to do it again

- ⚙️ Improve the **top-up behavior**. Due to time constraints, it wasn’t fully optimized and could definitely be more fluid and precise.  
- ➕ Add a **feature to create new events** directly through the interface. This was part of the original plan but had to be left out due to time limitations.
- 🏗️ Refactor the timeline rendering logic to use a **virtualized list** for better performance with large datasets.  
- 🎛️ Introduce **configurable themes** and internationalization (i18n) support.  
- 🧪 Add **unit and integration tests** using tools like Jest and React Testing Library.  
- 💾 Implement **persistent state** (e.g., local storage or backend sync) so filters and preferences aren’t lost on reload.  

---

## 🧭 Design Decisions

### 🎨 UI/UX Design

Took inspiration from:

- **Videos editors**
- **Google Calendar**  
- **Notion's timeline view**  

To enable intuitive interactions like:
- Hover-based information preview  
- Click-to-edit behavior  
- Zoom and pan gestures  

### ⚙️ Tech Stack

- **React** with hooks  
- **Material UI** for responsive design  
- **Framer Motion** for animations  
- **Custom components** like `RoundedTextField` for consistency  

---

## 🧪 How I would test this with more time

- ✅ **Unit Tests**: For individual components like `Timeline`, `TimelineItem`, `RoundedTextField`.  
- 🔄 **Integration Tests**: Simulate real-world workflows such as filtering, editing, and zooming.  
- 👀 **Visual Regression Testing**: Using tools like Percy or Chromatic.  
- 📱 **Responsive Testing**: Using Cypress or Playwright to test across devices.  
- 🧩 **Accessibility Testing**: Ensuring keyboard navigation and screen reader compatibility with `axe-core`.  

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm start
