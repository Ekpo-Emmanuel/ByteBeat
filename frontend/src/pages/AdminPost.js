import {React, useState} from 'react'
import { VscSend } from "react-icons/vsc";
import MultiSelectTag from '../components/MultiSelectTag';
// import TextEditor from '../components/TextEditor';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const AdminPost = () => {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');

    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');
    const [tagsError, setTagsError] = useState('');
    const [fileError, setFileError] = useState('');


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setTitleError('');
    };
    const handleTagsChange = (selectedTags) => {
        if (selectedTags.length === 0) {
            setTagsError('Enter Tags');
            return;
        }
        setTagsError('');
        setTags(selectedTags);
    };
    const handleContentChange = (e) => {
        setContent(e.target.value);
        setContentError('');
    }
    const validateForm = () => {
        let isValid = true;
    
        if (title.trim() === '') {
            setTitleError('Enter Title');
            isValid = false;
        } else {
            setTitleError('');
        }
    
        if (content.trim() === '') {
            setContentError('Enter Content');
            isValid = false;
        } else {
            setContentError('');
        }
    
        if (tags.length === 0) {
            setTagsError('Enter Tags');
            isValid = false;
        } else {
            setTagsError('');
        }

        if (file === null) {
            setFileError('Enter Display Image');
            isValid = false;
        } else {
            setFileError('');
        }
    
        return isValid;
    };
    const handleFileChange = async (e) => {
        try {
            const file = e.target.files[0];
            setFile(file);
            setFileError('');
    
            const base64Data = await convertToBase64(file);
            // console.log(base64Data); 
            setImage(base64Data);
        } catch (error) {
            console.error('Error converting file to base64:', error);
        }
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }
    function calculateAverageReadingTime(totalWordCount, averageReadingSpeed) {
        const readingTime = totalWordCount / averageReadingSpeed;
        return readingTime;
    }

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        const isValid = validateForm();
        if (isValid && tags.length > 0 && title && content) {
            // Get current date 
            const currentDate = new Date();

            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; 
            const day = currentDate.getDate();
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();

            const exactDate = `${year}-${month}-${day}`;
            const exactTime = `${hours}:${minutes}:${seconds}`;

            //get average reading time
            const averageMinutesRead = calculateAverageReadingTime(content.split(' ').length, 150);

            try {
                const response = await axios.post('http://localhost:5000/api/posts', {
                    title: title, 
                    date: exactDate, 
                    time: exactTime, 
                    read: averageMinutesRead,
                    content: content, 
                    // image: image,
                    tags: tags
                });
                console.log(response);
                navigate('/');
            } catch (error) {
            console.error('Error creating post:', error);
            }
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };
  return (
    <section className='over-all' style={{ padding: '100px 0' }}>
    <div className="container">
        <div className="row gy-5 justify-content-center">
            <div className="">
                <h2 className="h3 mb-4">Create Post</h2>
                <form className="row g-4" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <span style={{fontSize: '14px', color: 'red'}}>{titleError}</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="name"
                            value={title}
                            onChange={handleTitleChange}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                    {/* <div className='col-md-12' style={{ maxHeight: '500px', overflow: 'auto'}}>
                        <TextEditor value={content} onChange={handleContentChange} onKeyPress={handleKeyPress}/>
                    </div> */}
                    <div className='col-md-12'>
                        <span style={{fontSize: '14px', color: 'red'}}>{contentError}</span>
                        <textarea
                            className="form-control"
                            placeholder="Start writing..."
                            name="content"
                            value={content}
                            rows="12" 
                            onChange={handleContentChange}
                            onKeyPress={handleKeyPress}
                        >

                        </textarea>
                    </div>
                    <div className="col-md-12">
                        <span style={{fontSize: '14px', color: 'red'}}>{fileError}</span>
                        <input
                             type="file"
                             accept='image/*'
                             className="form-control"
                             name="display_image"
                             placeholder="Choose Display Image"
                             onChange={handleFileChange}
                             onKeyPress={handleKeyPress}
                        />
                        {image === '' || image === null ? null :  <img style={{marginTop: '10px', borderRadius: '10px', width: '205px', height: 'auto'}} src={image} alt="displayImage"/>}
                    </div>
                    <div className="col-12">
                        <span style={{fontSize: '14px', color: 'red'}}>{tagsError}</span>
                        <MultiSelectTag selectedTags={tags} onChange={handleTagsChange} onKeyPress={handleKeyPress} />
                    </div>
                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            aria-label="Send Message"
                            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}
                        >
                            Post Blog <VscSend />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default AdminPost