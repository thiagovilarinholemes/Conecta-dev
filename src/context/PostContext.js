import React, { createContext, useState } from 'react';

export const PostContext = createContext();
    
export function PostProvider({children}){
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [markdownText, setMarkdownText] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.currentTarget.value);
    }

    const handleTagsChange = (event, values) => {
        setTags(values)
    }

    const handleMarkdownChange = (event) => {
        setMarkdownText(event.currentTarget.value);
    }

    return (<PostContext.Provider 
        value ={{
            image,
            setImage,
            title, 
            setTitle: handleTitleChange,
            tags, 
            setTags: handleTagsChange,
            markdownText, 
            setMarkdownText: handleMarkdownChange
        }}>
        {children}
    </PostContext.Provider>)
}

// export function usePost() {
//     const ctx = useContext(PostContext);
//     const {
//       title,
//       setTitle,
//       image,
//       setImage,
//       tags,
//       setTags,
//       markdownText,
//       setMarkdownText,
//     } = ctx;
  
//     return {
//       title,
//       setTitle,
//       image,
//       setImage,
//       tags,
//       setTags,
//       markdownText,
//       setMarkdownText,
//     };
// }