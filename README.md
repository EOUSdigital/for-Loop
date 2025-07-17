# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 02.02: for Loop - Challenge

## 🛠️ Step 6: Project Integration Plan: Flashcard App (Loop Integration)

This document outlines the integration of the `for` loop into a real-world JavaScript project as part of **Module 06 – Lesson 02** on iteration and control structures.

---

### 🎯 Objective

Use a `for` loop to iterate through a set of flashcards and stop the loop once a card marked as `"mastered"` is found.

---

### 🧠 Use Case

You are building a **Flashcard App**. Each flashcard contains:
- A question
- An answer
- A status: either `"learning"` or `"mastered"`

---

### 🔄 Loop Logic

The loop should:
1. Go through each flashcard in order
2. Log the question to the console
3. Stop and display a message as soon as a `"mastered"` card is found

---

### ✅ Sample Pseudocode

```javascript
SET flashcards TO an array of 10 cards
Each card has a question and a status (e.g., "mastered" or "learning")

FOR let i = 0; i < flashcards.length; i++
    SET card TO flashcards[i]
    IF card.status === "mastered"
        PRINT "A mastered card has been found."
        BREAK
    ELSE
        PRINT card.question
```

---

### 💻 Final JavaScript Implementation

```js
const flashcards = [
    { question: "What is the capital city of France?", answer: "Paris", status: "learning" },
    { question: "What is the formula for the area of a triangle?", answer: "(base × height) ÷ 2", status: "learning" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare", status: "learning" },
    { question: "What is the powerhouse of the cell?", answer: "The mitochondrion", status: "learning" },
    { question: "Who discovered gravity when an apple fell on his head?", answer: "Sir Isaac Newton", status: "mastered" },
    { question: "What is 9 x 8?", answer: "72", status: "learning" },
    { question: "What planet is known as the Red Planet?", answer: "Mars", status: "learning" },
    { question: "What language is primarily spoken in Brazil?", answer: "Portuguese", status: "learning" },
    { question: "What gas do plants absorb from the atmosphere during photosynthesis?", answer: "Carbon dioxide (CO₂)", status: "learning" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci", status: "mastered" },
];

for (let i = 0; i < flashcards.length; i++) {
    const card = flashcards[i];
    if (card.status === "mastered") {
        console.log("A mastered card has been found.");
        break;
    } else {
        console.log(card.question);
    }
}
```

---

### 🔍 Code Review:

✅ Implementation:

### 📈 1. Structured Data

```javascript
const flashcard = [ { question: "...", answer: "...", status: "..." } ];

//  ✔️ I used an array of objects, which is exactly how data is modeled in real-world applications.
//  ✔️ Each object is clear, descriptive, and follows best practices.
```

### 📝 2. Clear Loop with Early Exit

```javascript
for (let i = 0; i < flashcards.length; i++) {...}
```
- ✔️ This loop is efficient, easy to follow, and readable.
- ✔️ I used "early exit logic (`break`)" to stop when a mastered card is found — this shows understanding of "control flow".

### 📔 3. Conditional Display

```javascript
if (card.status === "mastered") {
    console.log("A mastered card has been found.");
    break;
} else {
    console.log(card.question);
}
```
- ✔️ Log only the questions before the mastered one.
- ✔️ Not just looping — but building meaningful logic based on user data.

### 🔍 Sample Output (Partial):

```javascript
What is the capital city of France?
What is the formula for the area of a triangle?
Who wrote 'Romeo and Juliet'?
What is the powerhouse of the cell?
A mastered card has been found.
```
- 🧠 This is exactly the kind of output logic in a study or review app.

### 🪴 Growth Note
What was built is a "functional slice of a flashcard app" — with:
- Structured data
- Controlled iteration
- Condition-driven behavior
- That is real programming, not beginner practice.

---

### 🧭 Next Step

Future steps may include:
- Looping through all cards and marking progress
- Flipping cards with a button (DOM interaction)
- Scoring or tracking performance over time
