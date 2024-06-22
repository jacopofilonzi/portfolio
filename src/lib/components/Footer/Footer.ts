export type footerItem = {
    label: string;
    icon: string;
    link: string;
    disabled: boolean;
};

export const footerProps: footerItem[] = [
    {
        label: "Instagram",
        icon: "bi bi-instagram",
        link: "https://www.instagram.com/jacofiloo",
        disabled: false,
    },
    {
        label: "Footer",
        icon: "bi bi-github",
        link: "https://github.com/jacopofilonzi/",
        disabled: false,
    },
]