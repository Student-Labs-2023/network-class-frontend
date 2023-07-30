export const Create = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const API = import.meta.env.VITE_API;
    console.log(API);
}
