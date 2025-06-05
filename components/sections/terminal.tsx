"use client";
import React, { useState, useRef, useEffect } from 'react';
import { commandsAnswers } from "@/data";

export default function TerminalSection() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let response = '';

    if (command === '') {
      response = '';
    } else if (command === 'clear') {
      setOutput([]);
      setInput('');
      return;
    } else if (command === 'help') {
      response = commandsAnswers.help;
    } else if (command in commandsAnswers) {
      response = commandsAnswers[command as keyof typeof commandsAnswers];
    } else {
      response = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    setOutput(prev => [...prev, `~$ ${cmd}`, response]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[800px] w-full mb-8">
      <h1 className="mb-2 text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        ~ terminal
      </h1>
      <p className="text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
        Welcome! For a list of available commands, type `help`
      </p>

      <div className="text-sm overflow-auto w-full max-w-4xl h-[600px] bg-[#2A2A2A] p-6 rounded-lg shadow-lg border border-gray-700">
        <div className="text-[#FF8E00] font-mono">
          {output.map((line, i) => (
            <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
          ))}
        </div>
        <div className="flex items-center mt-2">
          <span className="text-white mr-2">~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent text-red-500 outline-none flex-1 font-mono"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
