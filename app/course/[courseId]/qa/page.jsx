"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QA() {
    const { courseId } = useParams();
    const [qaData, setQaData] = useState(null);

    useEffect(() => {
        console.log("Course ID:", courseId);
        if (courseId) {
            Getqa();
        }
    }, [courseId]);

    const Getqa = async () => {
        try {
            console.log("Making request to API...");
            const result = await axios.post("/api/material-type", {
                courseId: courseId,
                studyType: "qa",
            });

            console.log("Test Data Response:", result.data);
            setQaData(result.data);
        } catch (error) {
            console.error("Error fetching test data:", error);
            console.error("Error details:", error.response || error.message || error);
        }
    };

    const renderQuestions = () => {
        if (!qaData || !qaData.content || !qaData.content.questions) return null;
        
        return qaData.content.questions.map((question, index) => (
            <div key={index} className="bg-white p-6 mb-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="text-xl font-semibold text-gray-800 mb-4">
                    {index+1}. {question.question}
                </div>

                <div className="text-base text-gray-700 pl-6 bg-opacity-70 bg-white p-4 rounded-md shadow-sm">
                    <strong>Answer:</strong> {question.answer}
                </div>
            </div>
        ));
    };

    return (
        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-10 rounded-lg shadow-xl mt-6">
            {renderQuestions()}
        </div>
    );
}

export default QA;
