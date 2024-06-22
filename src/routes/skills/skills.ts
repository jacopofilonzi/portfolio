import img_javascript from "$lib/images/logos/Javascript.png";
import img_python from "$lib/images/logos/Python.png";

export enum SkillLevel {
    Beginner = 1,
    Intermediate = 2,
    Advanced = 3,
    Expert = 4
}

export type skillItem = {
    name: string;
    image: string;
    level: SkillLevel;
    description?: string;
}

export type skillMergeItem = {
    title: string;
    skills: skillItem[];
}


export const LanguageSkills: skillItem[] = [
    {
        name: "Typescript",
        image: "Typescript",
        level: 3,
        description: "Typescript is a superset of Javascript, it adds static typing to the language, making it easier to debug and mantain, i've been using it for a while in some of my projects to being more confident with it."
    },
    {
        name: "Javascript",
        image: "Javascript",
        level: 3,
        description: "Javascript was mainly born to be used in a web browser, but i had my first approach with it in the NodeJS framework, i've started using it with the ExpressJS library to create simple web servers, but as the time passed i'm moved to Typescript."
    },
    {
        name: "C#",
        image: "CSharp",
        level: 3,
        description: "My first approach to C# was in my high school as it was they're main language, i've used it to create simple desktop applications wich interfaces with a SQL database and in the third year they let us made a game in pair, i've chosed battleship and it ended up being a really fun project."
    },
    {
        name: "HTML",
        image: "HTML",
        level: 3
    },
    {
        name: "php",
        image: "php",
        level: 2,
        description: "My first approach to php was when i was 15, i've made two projects wich i go really proud of, the first one was a library that stores my films and tv series while the second on was a file manager that alows you to download, upload, rename, move and delete files all from a web UI, it was born for necessity as i was in high school and they're network was denying me to use the SAMBA protocol to connect to my home NAS and i decided to find a way out. We then reapproached php in the last year of high school to see the web development, we used simple php to create some basic apps wich interacts with a MySQL database and a final project called 'Giorno Libero' wich was needed inside of the school to manage the professors free days request."
    },
    {
        name: "CSS",
        image: "CSS",
        level: 2
    },
    {
        name: "SQL",
        image: "SQL",
        level: 2
    },
    {
        name: "Python",
        image: "Python",
        level: 1
    },
    {
        name: "Assembly",
        image: "Assembly",
        level: 1,
        description: "I've approached to Assembly in the third year of high school, we used it to understand how a high level language is translated into machine code, we used it to create some simple programs like a calculator and a simple game like the snake."
    },
    {
        name: "Java",
        image: "Java",
        level: 1,
        description: "I've never been a real fan of Java, we have used it just in the forth year of high school with blueJ to explore it with some simple projects and we managed to see with it the resource management with stoplights method."
    },
        
]

export const FrameworkSkills: skillItem[] = [
    {
        name: "NodeJS",
        image: "NodeJS",
        level: 3,
        description: "NodeJS is a runtime environment that allows to run Javascript code outside the browser, i've started using it to create simple web servers as my first approach to the IT world as an older friend of mine suggested me to start with it, and i'm really happy that i did it as it brought me where i am now."
    },
    {
        name: "Bootstrap",
        image: "Bootstrap",
        level: 2,
        description: "This site has been mainly styled using Bootstrap."
    },
    {
        name: "Svelte",
        image: "Svelte",
        level: 1,
        description: "I started using Svelte beacouse i was curious about these new js frameworks and this, at the first look seemed to be the best compromised between semplicity to use and what i can do with it, this site is made using Svelte, and i'm really happy with the result."
    },
    {
        name: "React",
        image: "React",
        level: 1
    },
    {
        name: "Electron",
        image: "Electron",
        level: 1,
        description: "Electron is a framework that allows to create desktop applications using web technologies, i've used it to create a simple desktop application just to explore it."
    },


]

export const HypervisorSkills: skillItem[] = [
    {
        name: "Docker",
        image: "Docker",
        level: 2,
        description: "I've used Docker for a while now, Docker is a platform that allows to create, deploy and run applications inside containers wich is less resource intensive as a virtual machine beacouse it shares the host OS kernel wich makes it faster and lighter. I've used it to host some of my projects inside of my Raspberry Pi4 and this site too."
    },
    {
        name: "VirtualBox",
        image: "Virtualbox",
        level: 2
    }
]


export const SkillMerge: skillMergeItem[] = [
    {
        title: "Developing Languages",
        skills: LanguageSkills
    },
    {
        title: "Frameworks",
        skills: FrameworkSkills
    },
    {
        title: "Hypervisors",
        skills: HypervisorSkills
    }
]