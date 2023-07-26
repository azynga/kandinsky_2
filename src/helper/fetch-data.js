export const fetchData = async () => {
    const data = await fetch(
        'https://azynga.github.io/kandinsky_data/content-hierarchy.json'
    );
    const json = await data.json();
    return json;
};
