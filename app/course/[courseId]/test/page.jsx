"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Progress from "../_components/Progress";
import Testitem from "./_components/Testitem";

function Test() {
  const { courseId } = useParams();
  const [testdata, settestdata] = useState(null);
  const [test, settest] = useState([]);
  const [count, setcount] = useState(0);
  const [correctAnswer, setcorrectAnswer] = useState(null);
  const [corrans, setcorrans] = useState("");

  useEffect(() => {
    if (courseId) Gettest();
  }, [courseId]);

  const Gettest = async () => {
    try {
      const result = await axios.post("/api/material-type", {
        courseId: courseId,
        studyType: "test",
      });
      console.log("Test Data Response:", result.data);
      settestdata(result.data?.content || null);
      settest(result.data?.content?.questions || []); // Safely handle missing data
    } catch (error) {
      console.error("Error fetching test data:", error);
    }
  };

  const checkAnswer = (userAnswer, currentQuestion) => {
    const userAnswerKey = userAnswer?.charAt(0); // Extract the key (e.g., "b")
    console.log("Correct Answer:", currentQuestion?.correctAnswer);
    console.log("User Answer:", userAnswerKey);

    if (userAnswerKey === currentQuestion?.correctAnswer) {
      setcorrectAnswer(true);
      setcorrans(currentQuestion?.correctAnswer); // Set correct answer for correct choice
    } else {
      setcorrectAnswer(false);
      setcorrans(currentQuestion?.correctAnswer); // Set correct answer for incorrect choice as well
    }
  };

  const handleQuestionChange = (newCount) => {
    // Reset the correctAnswer state when moving to the next question
    setcorrectAnswer(null);
    setcount(newCount);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">{testdata?.quizTitle || "Test"}</h2>
      <Progress data={test} count={count} setcount={handleQuestionChange} />
      <div>
        {test && test[count] ? (
          <Testitem
            test={test[count]}
            userselectedoption={(e) => checkAnswer(e, test[count])}
          />
        ) : (
          <h3 className="text-gray-500">Loading or no questions available...</h3>
        )}
      </div>
      {correctAnswer === false && (
        <div className="border p-3 border-red-700 bg-red-200 rounded-lg">
          <h2 className="font-bold text-lg text-red-600">Incorrect</h2>
          <p className="text-red-600">Correct answer is: {corrans}</p>
        </div>
      )}
      {correctAnswer === true && (
        <div className="border p-3 border-green-700 bg-green-200 rounded-lg">
          <h2 className="font-bold text-lg text-green-600">Correct</h2>
          <p className="text-green-600">Your entered answer is correct</p>
        </div>
      )}
    </div>
  );
}

export default Test;
