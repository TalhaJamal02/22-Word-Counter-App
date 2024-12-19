"use client"

import React, { useState, ChangeEvent } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function WordCounter() {

  const [text, setText] = useState<string>("");

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const clearText = () => {
    setText("")
  };

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  const charCount = text.length;

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gray-100">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center justify-center items-center flex flex-col">
          <CardTitle className=' text-xl'>Text Analysis</CardTitle>
          <CardDescription>
            Enter text and see the word and character count.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            id="text-input"
            placeholder="Type your text here..."
            className="h-32 resize-none border border-gray-400"
            value={text}
            onChange={handleChangeText}
          />
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <span id="word-count">{wordCount}</span> words,{" "}
              <span id="char-count">{charCount}</span> characters
            </div>
            <Button onClick={clearText}>Clear</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default WordCounter