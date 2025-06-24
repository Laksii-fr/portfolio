import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Social() {
    return (
       <>
            <a
                href="https://github.com/Laksii-fr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 rounded-full transition-all duration-300 hover:scale-110"
            >
                <Github size={24} />
            </a>
            <a
                href="https://www.linkedin.com/in/lakshay-sharma2653/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 rounded-full transition-all duration-300 hover:scale-110"
            >
                <Linkedin size={24} />
            </a>
            <a
                href="mailto:lakshyash5@gmail.com"
                className="p-3 border border-gray-300 rounded-full transition-all duration-300 hover:scale-110"
            >
                <Mail size={24} />
            </a>
       </>
    )
}