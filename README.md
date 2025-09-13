#  Color Guess Game

A fun and interactive color guessing game built with **React**, **TypeScript**, and **Vite**!  
Test your color recognition skills by matching the displayed HEX color to its visual representation.  
Score points for correct guesses and challenge yourself to improve!

---

##  Features

- Random HEX color generation
- RGB hint for each round
- Score tracking
- Responsive, modern UI
- Built with React 19, TypeScript, and Vite

---

##  How to Play

1. **Target Color:**  
   The game shows a HEX color code (e.g. `#A1B2C3`) and its RGB hint.

2. 🟦🟥🟩 **Choose a Color:**  
   Three colored boxes appear. Click the box that matches the target color.

3. ✅ **Correct Guess:**  
   Your score increases!  
   ❌ **Wrong Guess:**  
   Your score decreases.

4.  **Next Round:**  
   A new color challenge appears automatically.

---


##  Installation

```sh
git clone https://github.com/your-username/color-guess-game.git
cd color-guess-game
npm install
```

---

##  Usage

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Example

1. The game displays a target HEX color (e.g. `#A1B2C3`) and its RGB hint.
2. Three color boxes appear. Click the box that matches the target color.
3. Correct guess: Score increases!  
   Wrong guess: Score decreases.
4. A new round starts automatically.

```tsx
import CheckColor from "./components/CheckColor";

function App() {
  return (
    <>
      <CheckColor />
    </>
  );
}

export default App;
```

---

##  Project Structure

```
src/
  components/
    CheckColor.tsx   # Main game logic & UI
  App.tsx            # App entry point
  main.tsx           # React root
  index.css          # Global styles
public/
  vite.svg           # Logo
```
---

##  Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
