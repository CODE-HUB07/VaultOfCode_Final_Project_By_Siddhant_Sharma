import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Lightbulb,
  BookOpen,
  User,
  Users,
  MessageSquare,
  ClipboardCheck,
  FileText,
  RssIcon
} from "lucide-react";
import Header from "@/components/Header";
import type { LucideIcon } from "lucide-react";

interface Developer {
  name: string;
  age: number;
  role: string;
  responsibilities: string[];
  idealSkills?: string[];
  tagline: string;
  photoUrl?: string;
  icon: LucideIcon;
}

const developers: Developer[] = [
  {
    name: "Siddhant Sharma",
    age: 19,
    role: "Project Manager & Backend Developer",
    responsibilities: [
      "Task delegation and milestone planning, ensuring timely project progression.",
      "Backend logic implementation and seamless AI integration for core functionality.",
      "Managing browser-based data storage (LocalStorage) for persistent user data.",
      "Coordinating overall project direction and functionality, aligning with objectives."
    ],
    idealSkills: ["Leadership", "Communication", "Planning", "Better understanding of web dev"],
    tagline: "Leading with vision, building with precision.",
    icon: Users
  },
  {
    name: "Yash Bajpai",
    age: 19,
    role: "Frontend Developer",
    responsibilities: [
      "Design and implement user interface using HTML, CSS, JavaScript",
      "Ensure responsive design",
      "Handle cross-browser compatibility",
      "Implement UI/UX best practices"
    ],
    idealSkills: ["Creative thinking", "UI/UX understanding", "Proficiency in frontend tech"],
    tagline: "Crafting beautiful, intuitive interfaces.",
    icon: Code
  },
  {
    name: "Varun Sharma",
    age: 19,
    role: "Quality Assurance (QA) / Tester",
    responsibilities: [
      "Test web application for bugs",
      "Write and execute test cases",
      "Ensure smooth user experience",
      "Performance testing"
    ],
    idealSkills: ["Attention to detail", "Testing methodologies", "Problem-solving"],
    tagline: "Ensuring excellence through thorough testing.",
    icon: ClipboardCheck
  },
  {
    name: "Aryan Yadav",
    age: 19,
    role: "Content Writer / Copywriter",
    responsibilities: [
      "Write and edit website content",
      "Create engaging headings and descriptions",
      "Maintain consistent tone of voice",
      "Develop blog posts and documentation"
    ],
    idealSkills: ["Writing", "Creativity", "Content Strategy"],
    tagline: "Words that inspire, content that connects.",
    icon: MessageSquare
  },
  {
    name: "Bhavesh Sahu",
    age: 19,
    role: "Documentation Lead",
    responsibilities: [
      "Prepare technical documentation",
      "Maintain API documentation",
      "Create user manuals",
      "Document data flow and architecture"
    ],
    idealSkills: ["Technical writing", "Documentation", "Organization"],
    tagline: "Documenting success, one page at a time.",
    icon: FileText
  },
  {
    name: "Sibtain Raza",
    age: 20,
    role: "Research Assistant",
    responsibilities: [
      "Identify useful libraries, tools, and APIs",
      "Find relevant code examples and templates",
      "Analyze similar projects for feature ideas",
      "Share organized findings with the team"
    ],
    idealSkills: ["Research", "Basic web knowledge", "Communication"],
    tagline: "Finding the tools that power the code.",
    icon: RssIcon
  }
];

const DeveloperCard = ({ developer }: { developer: Developer }) => (
  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
    <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
    <CardContent className="pt-6">
      <div className="text-center mb-4">
        <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
          {developer.photoUrl ? (
            <img
              src={developer.photoUrl}
              alt={developer.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <developer.icon className="w-10 h-10 text-primary" />
          )}
        </div>
        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
          {developer.name}
        </h3>
        <div className="text-sm font-medium text-primary/80 mt-1">
          {developer.role}
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 text-sm">Responsibilities:</h4>
          <ul className="space-y-2">
            {developer.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-sm flex items-start">
                <div className="mr-2 mt-1">•</div>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {developer.idealSkills && (
          <div className="flex flex-wrap gap-2">
            {developer.idealSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg italic text-center">
          "{developer.tagline}"
        </div>
      </div>
    </CardContent>
  </Card>
);

const Developers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/80">
      <Header />
      <main className="flex-1 container py-12 px-4 sm:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
            Meet Our Amazing Team
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The talented minds behind CareerCompass AI, working together to help you discover your perfect career path.
          </p>
        </div>

        {/* 🔧 Fixed layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((developer, index) => (
            <div
              key={developer.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DeveloperCard developer={developer} />
            </div>
          ))}
        </div>

        <div className="mt-16 glass p-8 rounded-lg animate-fade-in bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-primary" />
            Our Journey
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Building CareerCompass AI has been an incredible learning experience. Our team collaborated
              seamlessly to create an innovative solution that helps people find their ideal career paths.
            </p>
            <p>
              Each team member brought unique skills and perspectives, making this project a true reflection
              of collaborative success and technical excellence.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-6 flex items-center">
            <BookOpen className="mr-2 h-6 w-6 text-primary" />
            Acknowledgments
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We extend our heartfelt gratitude to our mentors at S.A.T.I. College for their invaluable guidance
              throughout this project. Special thanks to our department faculty for their unwavering support.
            </p>
            <p>
              We're also grateful to our friends and families who encouraged us during challenging moments
              and celebrated our successes.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 mb-8">
          <p className="text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
            Made with
            <span className="text-red-500">❤</span>
            in Vidisha, by future tech innovators
          </p>
        </div>
      </main>
    </div>
  );
};

export default Developers;
