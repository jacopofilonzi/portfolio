export function toggleDarkmode() {
    const htmlTag = document.getElementsByTagName('html')[0];

    if (htmlTag) {
        if (htmlTag.dataset.theme === 'dark') {
            htmlTag.dataset.theme = 'light';
        } else {
            htmlTag.dataset.theme = 'dark';
        }
    }
}