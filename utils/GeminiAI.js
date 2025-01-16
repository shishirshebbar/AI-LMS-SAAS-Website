const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "generate a study material for java having level of difficulty as easy.list each chapter with a short summary under it.list of topicsin each chapter in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a study material outline for Java, geared towards beginners (easy difficulty), with chapter summaries and a JSON format list of topics for each chapter.\n\n**Study Material: Introduction to Java Programming (Easy Level)**\n\nThis material is designed to guide you through the fundamentals of Java programming. It assumes no prior programming experience.\n\n**Chapter 1: Getting Started with Java**\n\n*   **Summary:** This chapter introduces you to the world of Java and its importance. You'll learn what Java is, why it's used, and how to set up your development environment to start writing Java code.\n\n    * **Topics:**\n        ```json\n        {\n           \"topics\": [\n                {\"name\": \"What is Java?\", \"description\":\"Introduction to the Java programming language\"},\n                {\"name\":\"Why Use Java?\",\"description\":\"Applications and use cases of Java.\"},\n                {\"name\": \"Setting Up the Environment\", \"description\":\"Installing JDK and configuring your development environment.\"},\n                 {\"name\":\"First Java Program\",\"description\": \"Writing your first Hello World program\"}\n             ]\n        }\n        ```\n\n**Chapter 2: Understanding the Basics**\n\n*   **Summary:** This chapter dives into the fundamental building blocks of Java. You'll learn about data types, variables, operators, and how to perform simple calculations.\n\n    * **Topics:**\n        ```json\n        {\n            \"topics\": [\n                 {\"name\": \"Data Types\", \"description\":\"Understanding primitive data types (int, float, char, boolean, etc.).\"},\n                {\"name\": \"Variables\", \"description\":\"Declaring and initializing variables.\"},\n                {\"name\": \"Operators\", \"description\":\"Arithmetic, assignment, comparison, and logical operators.\"},\n                {\"name\": \"Basic Calculations\", \"description\":\"Performing simple mathematical calculations.\"}\n             ]\n         }\n        ```\n\n**Chapter 3: Control Flow**\n\n*   **Summary:** Here, you'll learn how to control the execution flow of your programs. You'll explore conditional statements (if-else) and looping structures (for, while).\n\n    * **Topics:**\n        ```json\n        {\n           \"topics\":[\n                {\"name\": \"Conditional Statements (if-else)\", \"description\":\"Making decisions in your program.\"},\n               {\"name\":\"Looping (for and while)\", \"description\":\"Repeating blocks of code using loops.\"}\n            ]\n        }\n        ```\n\n**Chapter 4: Working with Strings**\n\n*  **Summary:** This chapter focuses on how to work with text in Java. You will learn how to create, manipulate and compare strings and perform basic string operations.\n\n    * **Topics:**\n          ```json\n          {\n             \"topics\":[\n                  {\"name\": \"Creating Strings\", \"description\":\"Declaring and initializing strings.\"},\n                 {\"name\": \"String Concatenation\", \"description\":\"Joining strings together.\"},\n                  {\"name\":\"String Manipulation\",\"description\":\"Common operations like length, substring, uppercase and lowercase.\"},\n                  {\"name\":\"Comparing Strings\",\"description\":\"Checking for equality between strings\"}\n              ]\n          }\n          ```\n\n**Chapter 5: Arrays**\n\n*   **Summary:** Arrays allow you to store multiple values of the same type. In this chapter, you'll learn how to declare, initialize, and access elements in arrays.\n\n    * **Topics:**\n        ```json\n        {\n            \"topics\":[\n                {\"name\":\"Declaring Arrays\", \"description\":\"Creating arrays in Java.\"},\n                {\"name\":\"Initializing Arrays\", \"description\":\"Assigning values to array elements.\"},\n                {\"name\":\"Accessing Array Elements\",\"description\":\"Retrieving elements from an array using their index.\"},\n                {\"name\":\"Looping through arrays\",\"description\":\"Using loops to iterate over array elements.\"}\n                ]\n        }\n        ```\n\n**Chapter 6: Introduction to Methods**\n\n*   **Summary:** Methods are blocks of reusable code. This chapter introduces the concept of methods, how to define them, and how to call them from other parts of your program.\n\n     * **Topics:**\n        ```json\n        {\n             \"topics\":[\n                {\"name\": \"Defining Methods\", \"description\":\"Creating your own methods.\"},\n                {\"name\": \"Calling Methods\", \"description\":\"Using methods in your code.\"},\n                {\"name\": \"Method Parameters and Return Values\",\"description\":\"Passing data into and receiving data from methods.\"}\n             ]\n        }\n        ```\n\n**Chapter 7: Simple Input and Output**\n\n*   **Summary:** This chapter focuses on how to interact with the user. You'll learn how to display output to the console and how to receive input from the user.\n\n    * **Topics:**\n        ```json\n        {\n            \"topics\":[\n                  {\"name\": \"Printing Output (System.out.println)\", \"description\":\"Displaying information to the console.\"},\n                 {\"name\": \"Getting Input (Scanner)\", \"description\":\"Reading input from the user.\"}\n                ]\n         }\n        ```\n\n**Chapter 8: Practice and Problem Solving**\n\n*   **Summary:** This is a practice chapter where you will solve some basic programming problems using the concepts learned in the previous chapters. This will solidify your understanding.\n\n    * **Topics:**\n        ```json\n        {\n            \"topics\":[\n                 {\"name\":\"Practice Exercises\",\"description\":\"Solving simple coding problems.\"},\n                {\"name\":\"Debugging\",\"description\":\"Learn how to identify and fix issues in code.\"}\n             ]\n        }\n        ```\n\n**Important Notes:**\n\n*   **Hands-on Practice:** This material emphasizes hands-on coding. After each concept, try writing and running your own code.\n*   **Online Resources:** Use online Java tutorials, documentation, and forums for additional learning.\n*   **Patience:** Programming requires practice. Be patient and persistent, and you'll make progress.\n\nThis structure should provide a solid foundation for a beginner learning Java. Let me know if you have any other questions.\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "generate a study material for java having level of difficulty as easy.list each chapter with a short summary under it.list of topicsin each chapter in JSON format..iprovide full result in json format(summary,chapter_tilte,topics)"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"studyMaterial\": {\n    \"title\": \"Introduction to Java Programming (Easy Level)\",\n    \"description\": \"This material is designed to guide you through the fundamentals of Java programming. It assumes no prior programming experience.\",\n    \"chapters\": [\n      {\n        \"chapter_title\": \"Chapter 1: Getting Started with Java\",\n        \"summary\": \"This chapter introduces you to the world of Java and its importance. You'll learn what Java is, why it's used, and how to set up your development environment to start writing Java code.\",\n        \"topics\": {\n          \"topics\": [\n            { \"name\": \"What is Java?\", \"description\": \"Introduction to the Java programming language\" },\n            { \"name\": \"Why Use Java?\", \"description\": \"Applications and use cases of Java.\" },\n            {\n              \"name\": \"Setting Up the Environment\",\n              \"description\": \"Installing JDK and configuring your development environment.\"\n            },\n            { \"name\": \"First Java Program\", \"description\": \"Writing your first Hello World program\" }\n          ]\n        }\n      },\n      {\n        \"chapter_title\": \"Chapter 2: Understanding the Basics\",\n        \"summary\": \"This chapter dives into the fundamental building blocks of Java. You'll learn about data types, variables, operators, and how to perform simple calculations.\",\n        \"topics\": {\n          \"topics\": [\n            {\n              \"name\": \"Data Types\",\n              \"description\": \"Understanding primitive data types (int, float, char, boolean, etc.).\"\n            },\n            { \"name\": \"Variables\", \"description\": \"Declaring and initializing variables.\" },\n            {\n              \"name\": \"Operators\",\n              \"description\": \"Arithmetic, assignment, comparison, and logical operators.\"\n            },\n            {\n              \"name\": \"Basic Calculations\",\n              \"description\": \"Performing simple mathematical calculations.\"\n            }\n          ]\n        }\n      },\n      {\n        \"chapter_title\": \"Chapter 3: Control Flow\",\n        \"summary\": \"Here, you'll learn how to control the execution flow of your programs. You'll explore conditional statements (if-else) and looping structures (for, while).\",\n        \"topics\": {\n          \"topics\": [\n            {\n              \"name\": \"Conditional Statements (if-else)\",\n              \"description\": \"Making decisions in your program.\"\n            },\n            {\n              \"name\": \"Looping (for and while)\",\n              \"description\": \"Repeating blocks of code using loops.\"\n            }\n          ]\n        }\n      },\n      {\n        \"chapter_title\": \"Chapter 4: Working with Strings\",\n        \"summary\": \"This chapter focuses on how to work with text in Java. You will learn how to create, manipulate and compare strings and perform basic string operations.\",\n        \"topics\": {\n          \"topics\": [\n            { \"name\": \"Creating Strings\", \"description\": \"Declaring and initializing strings.\" },\n            {\n              \"name\": \"String Concatenation\",\n              \"description\": \"Joining strings together.\"\n            },\n            {\n              \"name\": \"String Manipulation\",\n              \"description\": \"Common operations like length, substring, uppercase and lowercase.\"\n            },\n            {\n              \"name\": \"Comparing Strings\",\n              \"description\": \"Checking for equality between strings\"\n            }\n          ]\n        }\n      },\n      {\n        \"chapter_title\": \"Chapter 5: Arrays\",\n        \"summary\": \"Arrays allow you to store multiple values of the same type. In this chapter, you'll learn how to declare, initialize, and access elements in arrays.\",\n        \"topics\": {\n          \"topics\": [\n            { \"name\": \"Declaring Arrays\", \"description\": \"Creating arrays in Java.\" },\n            {\n              \"name\": \"Initializing Arrays\",\n              \"description\": \"Assigning values to array elements.\"\n            },\n            {\n              \"name\": \"Accessing Array Elements\",\n              \"description\": \"Retrieving elements from an array using their index.\"\n            },\n            {\n              \"name\": \"Looping through arrays\",\n              \"description\": \"Using loops to iterate over array elements.\"\n            }\n          ]\n        }\n      },\n       {\n        \"chapter_title\": \"Chapter 6: Introduction to Methods\",\n        \"summary\": \"Methods are blocks of reusable code. This chapter introduces the concept of methods, how to define them, and how to call them from other parts of your program.\",\n        \"topics\": {\n          \"topics\": [\n            { \"name\": \"Defining Methods\", \"description\": \"Creating your own methods.\" },\n            { \"name\": \"Calling Methods\", \"description\": \"Using methods in your code.\" },\n            {\n              \"name\": \"Method Parameters and Return Values\",\n              \"description\": \"Passing data into and receiving data from methods.\"\n            }\n          ]\n        }\n      },\n      {\n        \"chapter_title\": \"Chapter 7: Simple Input and Output\",\n        \"summary\": \"This chapter focuses on how to interact with the user. You'll learn how to display output to the console and how to receive input from the user.\",\n        \"topics\": {\n          \"topics\": [\n            {\n              \"name\": \"Printing Output (System.out.println)\",\n              \"description\": \"Displaying information to the console.\"\n            },\n            {\n              \"name\": \"Getting Input (Scanner)\",\n              \"description\": \"Reading input from the user.\"\n            }\n          ]\n        }\n      },\n       {\n        \"chapter_title\": \"Chapter 8: Practice and Problem Solving\",\n        \"summary\": \"This is a practice chapter where you will solve some basic programming problems using the concepts learned in the previous chapters. This will solidify your understanding.\",\n        \"topics\": {\n          \"topics\": [\n            {\n              \"name\": \"Practice Exercises\",\n              \"description\": \"Solving simple coding problems.\"\n            },\n             {\n              \"name\": \"Debugging\",\n              \"description\": \"Learn how to identify and fix issues in code.\"\n            }\n\n          ]\n        }\n      }\n    ]\n  }\n}\n```\n"},
          ],
        },
      ],
    });
  

    export const chaptercontent = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate study material for each chapter ,include all topics in the content,provide output in HTML format(do not include any tags such as head,body) the chapters:{\n      \"chapter_title\": \"Chapter 1: Advanced State Management\",\n      \"summary\": \"This chapter explores advanced state management patterns beyond basic useState and useContext hooks. It covers the use of Redux, Zustand, or Recoil for complex application state, middleware for handling asynchronous operations, and strategies for state normalization.\",\n      \"topics\": [\n        \"Redux Toolkit\",\n        \"Zustand\",\n        \"Recoil\",\n        \"Middleware\",\n        \"State Normalization\",\n        \"Immutable Data Structures\"\n      ]\n    },\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```html\n    <div>\n        <h2>Chapter 1: Advanced State Management</h2>\n        <p><strong>Summary:</strong> This chapter explores advanced state management patterns beyond basic useState and useContext hooks. It covers the use of Redux, Zustand, or Recoil for complex application state, middleware for handling asynchronous operations, and strategies for state normalization.</p>\n\n        <h3>Topics:</h3>\n        \n        <h4>Redux Toolkit</h4>\n        <ul>\n            <li><strong>What is Redux Toolkit?</strong> Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies common Redux patterns.</li>\n            <li><strong>Key Concepts:</strong>\n                <ul>\n                    <li><strong><code>configureStore</code>:</strong> Simplifies store creation with sensible defaults.</li>\n                    <li><strong><code>createSlice</code>:</strong> Creates reducers, actions, and action creators automatically.</li>\n                    <li><strong><code>createAsyncThunk</code>:</strong> Handles asynchronous logic in Redux actions.</li>\n                    <li><strong>Immutability:</strong> Encourages working with immutable data structures.</li>\n                </ul>\n            </li>\n             <li><strong>Study Points:</strong>\n                 <ul>\n                  <li>Understand the benefits of using Redux Toolkit over vanilla Redux.</li>\n                    <li>Learn to set up a Redux store using <code>configureStore</code>.</li>\n                     <li>Practice creating slices with <code>createSlice</code> for different parts of your application state.</li>\n                    <li>Understand how to dispatch actions and use selectors to access the store.</li>\n                     <li>Learn how to manage asynchronous actions with <code>createAsyncThunk</code> and handle loading and error states.</li>\n                 </ul>\n            </li>\n        </ul>\n        \n          <h4>Zustand</h4>\n        <ul>\n            <li><strong>What is Zustand?</strong> Zustand is a small, fast and scalable bearbones state-management solution using simplified flux principles.</li>\n            <li><strong>Key Concepts:</strong>\n                <ul>\n                    <li><strong>Centralized Store:</strong> Creates a single store to hold application state.</li>\n                    <li><strong>Simple API:</strong> Uses a simple hook-based API for accessing and updating state.</li>\n                     <li><strong>No Boilerplate:</strong>  Minimal configuration and boilerplate code.</li>\n                </ul>\n            </li>\n             <li><strong>Study Points:</strong>\n                 <ul>\n                    <li>Understand the basic concepts and principles of Zustand.</li>\n                    <li>Learn to create a Zustand store with initial state.</li>\n                    <li>Practice reading and updating the state using the Zustand hook.</li>\n                    <li>Understand the concept of slices in Zustand, even if not explicitly named like in Redux.</li>\n                 </ul>\n            </li>\n        </ul>\n        \n        <h4>Recoil</h4>\n        <ul>\n            <li><strong>What is Recoil?</strong> Recoil is a state management library created by Facebook/Meta specifically for React applications, known for its atomic state management approach.</li>\n            <li><strong>Key Concepts:</strong>\n                 <ul>\n                     <li><strong>Atoms:</strong> Represent units of state that components can subscribe to.</li>\n                     <li><strong>Selectors:</strong> Derive data from atoms in a reactive manner.</li>\n                    <li><strong>Component-Centric:</strong> State and logic is closely tied to React components.</li>\n                </ul>\n            </li>\n            <li><strong>Study Points:</strong>\n                  <ul>\n                    <li>Understand the concepts of Atoms and Selectors in Recoil.</li>\n                    <li>Practice creating and consuming Recoil atoms in React components.</li>\n                   <li>Learn how to derive data from atoms using selectors and improve the re-rendering process</li>\n                    <li>Learn best practices for Recoil state management including writing functions that can change the value of the atoms.</li>\n                 </ul>\n            </li>\n        </ul>\n\n       <h4>Middleware</h4>\n       <ul>\n           <li><strong>What is Middleware?</strong> Middleware provides a way to intercept and modify actions or requests before they reach the reducer or the data.</li>\n           <li><strong>Key Concepts:</strong>\n               <ul>\n                   <li><strong>Asynchronous Operations:</strong> Middleware handles asynchronous actions like API calls.</li>\n                   <li><strong>Logging and Debugging:</strong> Middleware can be used to log actions or debug application flow.</li>\n                   <li><strong>Action Transformation:</strong> Middleware can modify actions before they reach the reducer.</li>\n               </ul>\n           </li>\n           <li><strong>Study Points:</strong>\n               <ul>\n                   <li>Understand the role of middleware in a state management context.</li>\n                   <li>Learn how to create custom middleware functions for different state management libraries (Redux Thunk, Redux Saga or custom).</li>\n                   <li>Implement middleware for actions that performs API calls and handles loading and error states.</li>\n                   <li>Understand the different approaches and patterns to middleware (e.g. Thunk vs Saga).</li>\n               </ul>\n           </li>\n       </ul>\n\n        <h4>State Normalization</h4>\n        <ul>\n            <li><strong>What is State Normalization?</strong> State normalization is a technique used to structure complex, nested data in a more efficient and manageable way.</li>\n             <li><strong>Key Concepts:</strong>\n                 <ul>\n                    <li><strong>Entities:</strong>  Data is organized by type, like 'users', 'posts', etc.</li>\n                    <li><strong>IDs:</strong>  Each entity is assigned a unique ID and stored in a lookup table.</li>\n                    <li><strong>References:</strong> Relationships between entities are represented by storing IDs.</li>\n                 </ul>\n            </li>\n            <li><strong>Study Points:</strong>\n                <ul>\n                    <li>Understand the benefits of state normalization in complex data structures, especially when state changes frequently.</li>\n                    <li>Practice organizing nested data into normalized forms using IDs and lookup tables.</li>\n                    <li>Learn to retrieve data from normalized state using selectors.</li>\n                    <li>Practice using functions that can read data from the store in a normalized way to display in the UI.</li>\n                </ul>\n            </li>\n        </ul>\n\n        <h4>Immutable Data Structures</h4>\n        <ul>\n             <li><strong>What are Immutable Data Structures?</strong> Immutable data structures are structures that cannot be modified after creation. Instead, new versions are created when changes are made, this prevents unexpected side effects and bugs.</li>\n            <li><strong>Key Concepts:</strong>\n                 <ul>\n                    <li><strong>Persistence:</strong>  Existing structures are not modified and a new one is returned with the desired modification.</li>\n                    <li><strong>Performance:</strong> Can improve performance for large datasets and frequent changes.</li>\n                    <li><strong>Simplicity:</strong>  Can simplify debugging and reduce unintended side effects.</li>\n                 </ul>\n            </li>\n            <li><strong>Study Points:</strong>\n                <ul>\n                    <li>Understand the concept of immutability in state management.</li>\n                   <li>Learn how to create and update objects and arrays immutably using methods such as the spread operator and immutability helpers.</li>\n                    <li>Learn how using immutable updates simplifies state management.</li>\n                    <li>Learn how state management libraries handle immutability.</li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n```\n"},
          ],
        },
      ],
    });

   export  const GenerateStudyType = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "generate the flashcards on the topic:Data Science in JSON format with front back content maximum 15"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"front\": \"What is Data Science?\",\n    \"back\": \"An interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.\"\n  },\n   {\n    \"front\": \"Name the key steps in the Data Science process.\",\n    \"back\": \"1. Problem Definition\\n2. Data Collection\\n3. Data Cleaning & Preprocessing\\n4. Exploratory Data Analysis (EDA)\\n5. Model Building\\n6. Model Evaluation\\n7. Deployment & Monitoring\"\n  },\n   {\n    \"front\": \"What is Machine Learning?\",\n    \"back\": \"A subset of AI that allows computers to learn from data without explicit programming, enabling predictions or decisions.\"\n  },\n  {\n    \"front\": \"Differentiate between supervised and unsupervised learning.\",\n    \"back\": \"Supervised learning uses labeled data, while unsupervised learning uses unlabeled data to find patterns.\"\n   },\n    {\n      \"front\":\"What is Deep Learning?\",\n      \"back\":\"A subfield of machine learning using artificial neural networks with multiple layers to extract complex patterns.\"\n    },\n   {\n    \"front\": \"What is Feature Engineering?\",\n    \"back\": \"The process of selecting, transforming, and creating relevant features from raw data to improve model performance.\"\n    },\n   {\n    \"front\": \"Define Exploratory Data Analysis (EDA).\",\n    \"back\": \"The process of using visualizations and summary statistics to explore data, discover patterns, and identify anomalies.\"\n   },\n  {\n    \"front\": \"What is the purpose of Data Visualization?\",\n    \"back\": \"To communicate data insights effectively through charts, graphs, and other visual representations.\"\n    },\n  {\n     \"front\": \"What is a Confusion Matrix?\",\n    \"back\": \"A table that summarizes the performance of a classification model by showing the counts of true positives, true negatives, false positives, and false negatives.\"\n  },\n  {\n    \"front\": \"Name two common Python libraries for Data Science.\",\n    \"back\": \"Pandas (for data manipulation) and NumPy (for numerical computation)\"\n  },\n  {\n     \"front\": \"What is a regression problem?\",\n     \"back\":\"A type of supervised learning problem where the goal is to predict a continuous numerical value.\"\n  },\n  {\n    \"front\": \"What is a classification problem?\",\n    \"back\": \"A type of supervised learning problem where the goal is to predict a categorical label or class.\"\n  },\n  {\n    \"front\": \"What is overfitting?\",\n    \"back\": \"When a model learns the training data too well, including noise, and performs poorly on unseen data.\"\n   },\n  {\n      \"front\":\"What is cross-validation?\",\n      \"back\":\"A technique for evaluating a model's performance by splitting the data into multiple folds and training/testing iteratively.\"\n   },\n    {\n     \"front\":\"What is Data Wrangling?\",\n     \"back\":\"The process of transforming and mapping data from one raw data format to another format for ease of use.\"\n    }\n\n]\n```\n"},
          ],
        },
      ],
    })
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

  