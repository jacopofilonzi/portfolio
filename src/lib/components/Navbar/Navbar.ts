export type navItem = {
    title: string;
    link: string;
    exact: boolean;
    disabled: boolean;
};



export const navProps: navItem[] = [
    {
        title: "Home",
        link: "/",
        exact: true,
        disabled: false,
    },
    {
        title: "Skills",
        link: "/skills",
        exact: true,
        disabled: false,
    },
    {
        title: "PCTO",
        link: "/pcto",
        exact: true,
        disabled: false,
    },
    {
        title: "Educazione Civica",
        link: "/#",
        exact: true,
        disabled: true,
    },
    {
        title: "Materie Scolastiche",
        link: "/#",
        exact: true,
        disabled: true,
    },
    {
        title: "Contattami",
        link: "/contacts",
        exact: true,
        disabled: false,
    }
]