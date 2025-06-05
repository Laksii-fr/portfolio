declare module 'react-console-emulator' {
  interface TerminalProps {
    commands: Record<string, {
      fn: () => string;
      description: string;
    }>;
    promptLabel?: string;
    contentStyle?: React.CSSProperties;
    promptLabelStyle?: React.CSSProperties;
    inputTextStyle?: React.CSSProperties;
  }
  
  const Terminal: React.FC<TerminalProps>;
  export default Terminal;
} 