import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { RefreshCcw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Card({ item, content, course, refreshData }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  // Debugging logs
  console.log("Card Component - Item Type:", item.type);
  console.log("Card Component - Content for Type:", content?.[item.type]);

  const GenerateCard = async () => {
    toast({
      description: "Generating content",
    })
    setLoading(true);
    let chapters = '';
    course?.courseLayout.chapters.forEach((chapter) => {
      chapters = chapter.chapter_title + ',' + chapters;
    });

    const result = await axios.post('/api/study-type', {
      courseId: course?.courseId,
      type: item.type,
      chapters: chapters,
    });

    setLoading(false);
    console.log("Generate Card Result:", result);
    refreshData(true); // Refresh parent content
    toast({
      description: "Content is  ready to view",
    })
    
  };

  // Check if content exists and has items
  const hasContent = (() => {
    const typeContent = content?.[item.type];
    if (!typeContent) return false; // No content for this type
    if (item.type === "cards") {
      // Handle cards: Check nested `content` array
      return Array.isArray(typeContent.content) && typeContent.content.length > 0;
    } else {
      // Handle other types (e.g., notes): Check if it's an array
      return Array.isArray(typeContent) && typeContent.length > 0;
    }
  })();

  return (
    <Link  href={'/course/'+course?.courseId+item.route}>
    <div
      className={`border shadow-md rounded-lg p-5 flex flex-col items-center mt-5 ${
        !hasContent && 'grayscale'
      }`}
    >
      {hasContent ? (
        <h2 className="p-1 px-5 text-white bg-yellow-500 rounded-full text-[10px] mb-2">Prepare</h2>
      ) : (
        <h2 className="p-1 px-5 text-white bg-red-500 rounded-full text-[10px] mb-2">Generate</h2>
      )}

      <Image src={item.image} alt={item.title} width={100} height={100} />
      <h2 className="font-medium">{item.title}</h2>
      <p className="text-gray-500 text-sm text-center">{item.description}</p>

      {hasContent ? (
        <Button className="mt-3 w-full">View</Button>
      ) : (
        <Button className="mt-3 w-full" onClick={GenerateCard}>
          {loading ? <RefreshCcw className="animate-spin" /> : 'Generate'}
        </Button>
      )}
    </div>
    </Link>
  );
}

export default Card;
