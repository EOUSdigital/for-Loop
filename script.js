//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 02.01: for Loop


//TODO 📝 Step 1: Theoretical Aspects

//* 📘 A. In-Depth Exposition

//? 🔹 What is a for loop?
//  A "for" loop is a control structure that allows you to repeat a block of code a specific number of times. It's ideal when:
//  • You know exactly how many times you need to repeat something.
//  • You are working with arrays or iterable data where indexes matter.

//? 🔹 Syntax Breakdown:
//  The for loop contains three parts inside parentheses:
//  1. Initialization (e.g., let i = 0);
//  2. Condition (e.g., i < 5);
//  3. Final Expression (e.g., i++).

//  Together, these define the loop's lifecycle:
//  • Initialize → Check condition → Run block → Update → Repeat

//* 📚 B. Contextual Understanding

//? 🔸 Why use for loops?
//  • To traverse arrays when index-based logic is needed.
//  • To perform repeated calculations or tasks like rendering UI elements, checking values, or logging information.
//  • They are especially useful when performance and low-level control are priorities.

//? 🔸 When not to use a for loop:
//  • When you want functional, declarative code (.map(), .filter() are often preferred for clarity).
//  • When the operation doesn’t depend on an index (then for...of or .forEach() might be better).

//* 🕰️ C. Historical Perspective

//  • The for loop has been a core feature of JavaScript since its inception.
//  • It’s inherited from C-like languages and remains widely used in systems where deterministic control and efficiency are critical.
//  • While modern JavaScript offers expressive alternatives, for loops are still essential in many frameworks and performance-intensive scenarios.

//* ✅ D. Best Practices and Pitfalls

//? ✔ Best Practices:
//  • Use let for the loop counter (let i = 0) to avoid leaking variables into the outer scope.
//  • Keep the loop body small and focused — minimize side effects.
//  • Use break or return strategically to exit early when necessary.

//? ⚠ Common Pitfalls:
//  • Forgetting to increment the counter — leads to infinite loops.
//  • Using var — can cause scope confusion due to function-level scoping.
//  • Looping beyond the bounds of an array — causes undefined errors.

//* 🔄 E. Real-World Analogies
//? Concept                             Analogy
//  for loop                            Repeating a recipe step 5 times
//  Initialization                      Setting the oven temperature
//  Condition                           Checking the timer has not run out
//  Final Expression                    Moving on to the next tray or page
//  The "for" loop structure mirrors task repetition in everyday routines.

//* 🧩 F. Segmented Learning (Subtopics in this Lesson)
//  1. Basic "for" loop syntax and flow
//  2. Index-controlled iteration over arrays
//  3. Nested "for" loops for matrix/grid traversal
//  4. Use of break and continue inside loops
//  5. Comparisons with other loop types


//TODO  🔍 Step 2: Inquiry & Application

//* 🧠 1. Guided Inquiry-Based Learning
//  Let’s deepen your understanding of the for loop by working through some conceptual prompts. Reflect on your reasoning, not just the syntax.

//? 🔎 Exploration Prompts:

//  • Why might you choose a for loop over .map() or .forEach() when working with arrays?
//! Answer: We use a "for" loop to avoid leaking variables into the outer scope. minimize side effects and and is much easier to read the index.
//  • need to manipulate or skip specific indices
//  • plan to exit early (break, return)
//  • need performance tuning

//  • How do the three parts of a for loop (initialization, condition, update) interact logically to form the loop’s flow?
//! Answer: The "for" loop can lead to infinite loops if the developer forgets to increment the counter and uses break or return strategically to exit early when necessary.
//  • Initialization: sets the starting point
//  • Condition: is checked before each loop run
//  • Update: adjusts the loop state after each iteration
// When mismanaged, these can lead to runaway loops or skipped logic.

//  • What happens if you accidentally place the increment outside the loop block?
//! Answer: Looping beyond the bounds of an array causes undefined errors, infinite loops or skipped elements. Also, if I am working with arrays, it could lead to out-of-bound errors or performance bugs. 

//? ⚖️ Critical Thinking Scenario:

//  Imagine this situation: You are building a web app that paginates items and displays 10 products per page. You want to loop through the correct segment of an array based on the current page number.
//* Question:   How might a "for" loop offer better control here than .map() or .forEach()?
//! Answer:     The main difference between a "for" loop and the map() method is that a for loop allows for more control over the iteration process. In contrast, the map() method provides a more concise and functional way to transform elements of an array into a new array.
//  • .map() always touches every item
//  • for loop gives precise start and stop control, ideal for slicing arrays into visible chunks
//  When working with pageIndex, item limits, or lazy loading, for loops shine.

//? 🎯 Practical Thinking Prompt:

//  You are building a quiz app. You want to loop over a set of questions and stop once the user gets one wrong.
//* Question:   How can the "for" loop be adapted to exit early in such a case? (Hint: think about the break keyword.)
//! Answer:     I might already know this, but a "for" loop can be stopped using the break keyword. If using a "for" loop to iterate over an array until I can find a specific item or a certain number of iterations have run, I can stop the loop by executing break in the loop.

//* 💡 2. Hands-On Reflection Prompts

//  Here are some “think-before-you-code” exercises to prepare you for implementation:
//  1. Loop Planning Thought Exercise:
//  • Design a loop that logs all even numbers from 2 to 20. What will your initialization, condition, and update look like?
//! Answer: 

for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);;
    }
}

//  2. Nested Loop Thinking:
//  Question:   Imagine you are rendering a 5x5 grid for a game board. How many loops do you need? What are the outer and inner loops responsible for?
//! Answer:  To render a 5x5 grid for a board game, I need 2 nested loops.
//  • One to iterate over rows (outer loop)
//  • One to iterate over columns within each row (inner loop)
//  💡 Use this rule of thumb: 1 loop per dimension → A 2D grid = 2 loops.

//  3. Performance Awareness Prompt:
//  Question:   How would you optimize a "for" loop if it is processing a massive array (e.g., 1 million elements)?
//! Answer: Since the loop variable i is manually handled, the memory overhead is minimal. The length of the array (arr.length) is calculated on each iteration, which can be slightly inefficient in cases where the array length is large and remains constant throughout the loop. However, storing arr.length in a variable before the loop can mitigate this problem.
//  • Avoid unnecessary recalculations inside the loop
//  • Minimize memory reads
//  • Use let len = arr.length; before the loop when .length won't change

//* 🧠 3. Solo Discussion Reflection

//  Consider talking through:
//  Question: What surprised you about how for loops behave?
//! Answer: The fact that if someone forget to include in the code break or return the program will leads to infinite loops. While break and return are not required in every for loop, forgetting to update the loop variable or writing a condition that never becomes false is what leads to infinite loops.

//  Question: What kind of bugs could happen if you misplace the condition or increment?
//! Answer: If we misplaced the condition or increment can causes undefined errors.
//  • If a loop goes beyond the array’s bounds, will get undefined values.
//  • If accidentally increment incorrectly, the loop might:
//      • Skip elements
//      • Miss the stopping condition
//      • Or trigger unexpected output
//  Best practice: always double-check loop boundaries when iterating over arrays.

//  Question: Can I explain how a "for" loop works to someone without showing them code?
//! Answer: At this moment is not so easy for me to explain the code, because I do not have enough knowledge and experience. A "for" loop is like a recipe step that runs multiple times. First, I set a starting point. Then, decide when to stop. Each time, I must prepare for the next round.


//TODO  ✅ Step 3: Assessment & Feedback

//? 📋 1. Mini Quiz (10 Questions)

//  🧠 Instructions:
//  • Answer without writing or running any code.
//  • Select only one correct answer per question.
//  • Focus on what the question is asking, especially loop behavior, control, and logic.

//* 1. What is the purpose of the initialization statement in a for loop?
//  A. It ends the loop.
//  B. It sets the number of iterations.
//  C. It declares and sets the starting value for the loop control variable.
//  D. It checks if the loop should continue.

//! Answer: C

//* 2. Which part of a for loop determines when the loop stops running?
//  A. Initialization
//  B. Loop body
//  C. Condition
//  D. Final expression

//! Answer: C

//* 3. What happens if the loop condition never becomes false?
//  A. The loop runs once.
//  B. The loop throws an error.
//  C. The loop exits silently.
//  D. The loop runs indefinitely.

//! Answer: D

//* 4. Which keyword allows you to skip the rest of the current iteration and jump to the next?
//  A. break
//  B. return
//  C. continue
//  D. skip

//! Answer: C

//* 5. Which keyword is used to exit a for loop immediately?
//  A. exit
//  B. stop
//  C. break
//  D. next

//! Answer: C

//* 6. What is the output of this loop?

for (let i = 0; i < 3; i++) {
    console.log(i);
}

//  A. 1 2 3
//  B. 0 1 2
//  C. 0 1 2 3
//  D. 1 2

//! Answer: B

//* 7. Why might a for loop be preferred over .map() in some cases?

//  A. It is faster in every situation.
//  B. It can modify the original array.
//  C. It provides full control over iteration and allows early exit.
//  D. It is more readable than .map().

//! Answer: C

//* 8. Which part of this for loop updates the loop control variable?

for (let i = 0; i < 5; i++) { }

//  A. let i = 0
//  B. i < 5
//  C. i++
//  D. {...}

//! Answer: C

//* 9. What is the main risk of forgetting to include the increment step?

//  A. The loop will run too few times.
//  B. The loop will never run.
//  C. The loop might overwrite your array.
//  D. The loop may become infinite.

//! Answer: D

//* 10. Which scenario best fits a for loop instead of .map()?

//  A. Formatting every string in an array
//  B. Adding all numbers in an array
//  C. Looping through elements until you hit a specific value
//  D. Converting all numbers to strings

//! Answer: C


//? 🧠 2. Feedback Prompts Review (Short Reflection)

//  Please answer these reflection prompts after the quiz:
//  • What was the easiest question for you and why?
//! Answer: Question 1 stood out to me because I was able to clearly grasp and visualize the purpose of the initialization statement in a for loop.

//  • Which one made you stop and think?
//! Answer: Question 7 prompted me to pause and evaluate the scenarios in which I should choose a for loop over .map(), and to consider the reasons behind making that choice.

//  • Do you feel more confident using a for loop after this lesson? Why or why not?
//! Answer: With each lesson I study, my skills improve. However, I cannot say that I am more confident yet, because I know that true confidence comes from gaining experience by writing code and solving problems.


//TODO  🔁 Step 4: Reflection & Discussion

//  🎯 Goal: Deepen understanding through introspection and real-world thinking.

//* 🗣️ 1. Instructor-Guided Reflection Prompts
//  Please reflect on or respond to the following questions in your own words:

//? 🔹 A. When is a "for" loop more appropriate than other loops or array methods like .map()?
//  Hint: Consider cases where precise control, early exit, or index logic matters.
//! Answer: A "for" loop is more appropriate when I know exactly how many times the code should repeat something, and once the condition is met, the code will stop. When I need index access, performance tuning, or conditional breaking — "for" is the most flexible option.

//? 🔹 B. Have you encountered a real-life scenario (in a project or tutorial) where a "for" loop made more sense than other tools?
//  If not, imagine one where you are filtering or paginating content based on user input.
//! Answer: A for loop can be used for a countdown for a rocket. 10 . . . 0 "Rocket has liftoff!". Countdowns are precise, index-based, and require clear exit conditions. This shows an actively applying logic to practical tasks.

//? 🔹 C. What do you still feel unsure about regarding the structure or behavior of for loops?
//  This helps identify where to focus in the next lesson or practice session.
//! Answer: I feel unsure about the condition of the loop. I do not know what and when to include inside the "for" loop to function properly. 

//* 📓 2. Journal Reflection Prompt

//? Feel free to answer aloud, in writing, or as a mental walkthrough:
//  • If you had to teach a younger version of yourself how a for loop works, how would you describe it without using code?
// Try using an analogy — like checking lockers, taking steps, flipping pages, etc.
//! Answer: You have a basket with 7 apples. You decide to eat an apple a day and put a sticker on each one, starting from the first and stopping after the seventh. What you are doing is repeating the same action several times, but you are also: 
//  • Know how many times you need to do it (7 apples),
//  • Have a starting point (apple #1),
//  • And move in order (apple #1, #2, #3, etc.).
//  That Repetition with a Set Rule — That’s a "for" Loop!
//  A "for" loop is like giving the instructions:
//  • For each apple in the basket, from the first to the last, do this one thing.”
//  You set the rule once, and it carries out the action automatically for each step until it completes.


//TODO  🧩 Step 5: Exercises – Progressive Skill Building


//* 🟢 1. Starter Exercises

//  These will help you master basic control flow and loop construction.

//  Exercise 1: Log Numbers from 1 to 10
//  Prompt: Write a loop that prints numbers from 1 to 10.
//  🧠 Think about: Where does your loop start? What’s the stopping condition?

//  Exercise 2: Print All Even Numbers Between 1 and 50
//  Prompt: Only print even numbers. Use the `for` loop’s condition or an internal check.

//  Exercise 3: Print Numbers Backward from 10 to 1
//  Prompt: Instead of counting up, try counting down. Adjust your loop structure.

//? Pseudocode 1

//  FOR let i = 1; i <= 10; i++
//  PRINT i

//! Solution 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//  🧠 Reinforcement Tip:
//  Just used a classic counting pattern. This structure is useful in scenarios like:
//  • Repeating animations
//  • Step-by-step user onboarding
//  • Countdown timers (reversed)

//? Pseudocode 2

// FOR let j = 1; j <= 50; j++
//     IF j % 2 === 0
//         PRINT j

//! Solution 2

for (let j = 1; j <= 50; j++) {
    if (j % 2 === 0) {
        console.log(j);
    }
}

//  🧠 Reinforcement Tip:
//  This structure is ideal when filtering items during iteration — like:
//  • Showing only even-numbered rows
//  • Filtering data in UI
//  • Generating predictable patterns (e.g., steps of 2)

//? Pseudocode 3

//  FOR let k = 10; k >= 1; k--
//      PRINT k

//! Solution 3

for (let k = 10; k >= 1; k--) {
    console.log(k);
}

//  🧠 Use Case Awareness:
//  Reverse loops are powerful in:
//  • Countdowns
//  • Reversing data in arrays
//  • Iterating from end to start for cleanup, animation steps, or reverse traversal


//* 🟡 2. Intermediate Exercises

//  These involve logic inside the loop and working with arrays.

//  Exercise 4: Sum All Numbers from 1 to 100
//  Prompt: Use a `for` loop to add all numbers from 1 to 100. Store the result in a variable.

//  Exercise 5: Log Items in an Array
//  Prompt: Given an array of fruits, print each fruit with its position (e.g., “1. Apple”).

//  Exercise 6: Print Every Third Number from 3 to 30
//  Prompt: Design your loop to increment by 3 steps. (e.g., 3, 6, 9, ...)

//? Pseudocode 4

//  SET sum equal TO 0
//  FOR let h = 1; h <= 100; h++
//      sum += h
//  PRINT sum

//! Solution 4

let sum = 0;
for (let h = 1; h <= 100; h++) {
    sum += h;
}

console.log(sum);

//  🧠 Application Insight:
//  This type of loop is perfect for:
//  • Running totals
//  • Scoring systems in games
//  • Processing totals in datasets or transactions

//? Pseudocode 5

//  SET fruits TO an array  
//  SET count TO 1

//  FOR let w = 0; w < fruits.length; w++
//      PRINT `${count++}. ${fruits[w]}`

//! Solution 5

const fruits = ["apples", "bananas", "oranges", "strawberries", "grapes", "pears"];
let count = 1;

for (let w = 0; w < fruits.length; w++) {
    console.log(`${count++}. ${fruits[w]}`);
}

//  🧠 Professional Tip:
//  This approach mimics:
//  • Numbered lists in UI
//  • Log file entries
//  • User-facing data formatting (e.g., ranking, positions)

//? Pseudocode 6

//  FOR let q = 3; q <= 30; q++
//      IF q % 3 === 0
//          PRINT q

//! Solution 6

for (let q = 3; q <= 30; q++) {
    if (q % 3 === 0){
        console.log(q);
    }
}

//  🧠 Optimization Opportunity:
//  Since you know the pattern is in steps of 3, you can simplify:

for (let q = 3; q <= 30; q += 3) {
    console.log(q);
}


//* 🔴 3. Advanced Challenges

//  These are intended to prepare you for real-world scenarios.

//  Exercise 7: Loop Until a Specific Value is Found
//  Prompt: You have an array of numbers. Loop through the array and stop when you find the number `42`. Print all numbers until that point.

//  Exercise 8: Nested Loop Grid Logger
//  Prompt: Use a nested `for` loop to simulate a 3x3 grid. Log output like:

//* Row 1 - Column 1
//* Row 1 - Column 2
//* ...

//  Exercise 9: Build a Simple Multiplication Table
//  Prompt: Create a multiplication table from 1 to 5 using nested `for` loops.

//? Pseudocode 7

//  FOR let v = 1; v <= 100; v++
//      IF v === 42
//          PRINT `The number requested is: ${v}`
//          BREAK

//! Solution 7

for (let v = 1; v <= 100; v++) {
    if (v === 42) {
        console.log(`The number requested is: ${v}`);
        break;
    }
}

//  🧠 Why This Pattern Matters:
//  Searching for a specific value in a dataset
//  • Cancelling long operations when a match is found
//  • Avoiding unnecessary iterations (performance optimization)


//? Pseudocode 8

// FOR row from 1 to 3
//     FOR col from 1 to 3
//         PRINT `Row ${row} - Column ${col}`


//! Solution 8

for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log(`Row ${row} - Column ${col}\n`);
    }
}

//  🧠 This Pattern Is Used In:
//  • Rendering grids, tables, matrices
//  • Games (like tic-tac-toe, Sudoku)
//  • Layout generators and UI components

//  ✅ Implementation:
//  • Thinking in rows and columns
//  • Correctly used loop nesting
//  • Used string construction to build output (💡 nice formatting practice)

//? Pseudocode 9

//  SET multiplier TO 5

//  FOR let t = 1; t <= 5; t++
//      PRINT ${multiplier} x ${t} = ${multiplier * t}

//! Solution 9

let multiplier = 5

for (let t = 1; t <= 5; t++) {
    console.log(`${multiplier} x ${t} = ${multiplier * t}`);
}

//  🧠 Why This Is Valuable:
//  • Teaches pattern recognition and iteration
//  • Reinforces use of string interpolation and arithmetic
//  • Useful in basic UI, CLI tools, or math apps


//  💎 Bonus: Real-World Scenario
//  Exercise 10: Paginate Items
//  Prompt: You have an array of 100 items and a current page number. Write logic to display only 10 items for the current page using a `for` loop.


//? Pseudocode 10

//  SET items TO Array(100).fill().map((_, p) => p + 1)
//  SET itemsPerPage TO 10
//  SET totalPages TO Math.ceil(items.length / itemsPerPage)

//  SET currentPage TO 1

//  SET startIndex TO (currentPage - 1) * itemsPerPage
//  SET endIndex TO startIndex + itemsPerPage

//  FOR let p = startIndex; p < endIndex && p < items.length; p++
//      PRINT items[p]

//! Solution 10

const items = Array(100).fill().map((_, p) => p + 1);
const itemsPerPage = 10;
const totalPages = Math.ceil(items.length / itemsPerPage);

let currentPage = 1;

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

for (let p = startIndex; p < endIndex && p < items.length; p++) {
    console.log(items[p]);
}

//  🧠 Real-World Application:
//  • Displaying search results or products in pages
//  • Lazy-loading or infinite scroll systems
//  • Batch-processing large datasets

//  ✅ Implementation:
//  • Used Array(100) generator pattern effectively
//  • Defensive programming with p < items.length
//  • Fully adaptable for any currentPage or itemsPerPage
//  • Clean structure that’s ready for real projects


//TODO  🛠️ Step 6: Project Integration

//  🔗 Goal: Apply for loop logic to real functionality inside a project

//* ✅ Full Access to All 30+ Project Ideas
//  From the list, here are just a few that can be directly connected to for loop logic:

//? 🎯 Great Matches for for Loop Integration:
//  1. Countdown Timer → for loop for countdown display logic
//  2. Form Validation Page → Loop through fields and validate each one
//  3. BMI Calculator → Loop through preset BMI ranges for messaging
//  4. Digital Clock → Loop through digits or time segments
//  5. Typing Animation/Typewriter Effect → Loop through characters one by one
//  6. Flashcard App → Loop through a deck of cards with next/prev logic
//  7. Quiz App → Loop through questions, allow early exit on wrong answer
//  8. Character Counter for Textarea → Loop through string characters (e.g., check for emojis or spaces)
//  9. Weather App (API-based) → Loop through forecast data days
//  10. Grocery List App → Loop through items and highlight those with low stock

//? 🔧 What You Can Do Next
//  ✅ Step 1: Choose any project that interests you from your full list.
//  ✅ Step 2: Describe one feature or use case where you'd like to use a for loop.
//  ✅ Step 3: Write pseudocode for that logic.
//  I’ll guide you from there — and help you implement and scale the feature into your actual app logic if you’d like.

//? ✅ My Recommendation: Flashcard App
//  Here’s why:
//  🔹 Why It’s Right for You Right Now:
//  • Not trivial, but doesn’t require complex UI or async logic.
//  • You can focus on loops, logic, and conditionals.
//  • It reinforces iteration, arrays, condition checking, and event responses — all things you’ve already practiced.
//  • Visually and mentally rewarding — you can see progress as you "flip" cards.


//TODO  🧾 Step 7: Exit Ticket Questions

//  🎯 Goal: Check understanding, reinforce concepts, and identify next steps for learning
//  Please answer the following prompts in your own words:

//* 1. What’s one thing about "for" loops that finally makes sense to you now?
//! Answer: One key insight that often finally makes sense about "for" loops is that they are designed to repeat a specific block of code a known number of times, controlled by a loop variable that "takes on" each value in a predefined sequence or collection.

//* 2. What still feels unclear or confusing about "for" loops?
//! Answer: One thing about "for" loops in JavaScript that may finally make sense is that all three parts of the for loop header—the initialization, condition, and increment expressions—are optional. 

//* 3. If someone asked you to explain how a "for" loop works, how would you explain it in plain language without using code?_
//! Answer: Imagine you have a task, like checking every item on a list or counting from 1 to 10, and you want to do the same action repeatedly. Instead of doing it manually over and over, you set up a for loop to handle it automatically.
