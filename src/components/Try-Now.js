import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bgImage from '../assets/videobg.mp4';
import Navbar from './Navbar.jsx';
import { Select, MenuItem, Button, Paper, Typography } from '@mui/material';
import { Textarea } from '@mui/joy';
import axios from 'axios';

const authorsData = [
  { id: 1, name: 'William Shakespeare' },
  { id: 2, name: 'Anna Todd' },
  { id: 3, name: 'William Wordsworth' },
  { id: 4, name: 'Charles Dickens' },
  { id: 5, name: 'Jane Austen' },
];

const prioritiesData = [
  { id: 1, name: 'High' },
  { id: 2, name: 'Medium' },
  { id: 3, name: 'Low' },
];

const AppContainer = styled.div`
  position: relative;
`;

const VideoBackground = styled.video`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(15%);
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10%;
`;

const LeftContainer = styled.div`
  width: 50%;
  margin-left: 10%;
  color: antiquewhite;
  margin-top: 5%;
`;

const RightContainer = styled.div`
  margin-right: 10%;
  width: 50%;
  margin-left: 10%;
  margin-top: 3%;
`;

const TextInputLabel = styled.label`
  margin-top: 6px;
`;

const TextareaContainer = styled.div`
  margin-bottom: 16px;
`;

const AuthorsDropdown = styled.div`
  border-radius: 4px;
  margin-top: 40px;
`;

const StyledSelect = styled(Select)`
  & .MuiSelect-outlined {
    background-color: #fff;
    color: #000;
    font-family: 'cursive';
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #000;
  }

  &:focus {
    & .MuiOutlinedInput-notchedOutline {
      border-color: #86b7fe;
    }
  }
`;

const ArrowButton = styled(Button)`
  margin-bottom: 16px;
  margin-top: 35px;
  color: white;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const OutputInfoContainer = styled(Paper)`
  font-family: 'Helvetica Neue';
  font-size: 20px;
  padding: 16px;
  margin-bottom: 16px;
  max-height: 300px;
  max-width: 500px;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 10px;
  opacity: 0.8;
`;

const OutputInfoText = styled(Typography)`
  padding-left: 50px;
  padding-right: 40px;
  padding-bottom: 20px;

  
`;

const TryNow = () => {
  const [outputInfo, setOutputInfo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userText, setUserText] = useState('');
  const [prediction, setPrediction] = useState('');
  const [flag, setFlag] = useState(false);
  const [inputText, setInputText] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  const handlePredict = async () => {
    console.log(userText);
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        text: userText,
        author: selectedAuthor,
        tone: selectedPriority,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      console.log(response.data);
      setPrediction(response.data);
      setFlag(true);
      handleOP(flag);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const nearNavbar = window.scrollY < 50;
      // Handle the scroll logic here or remove it if not needed.
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAuthorChange = (authorId) => {
    setSelectedAuthor(authorId);
    generateOutputInfo(inputText, authorId);
  };

  const handleTextChange = (text) => {
    setInputText(text);
    setErrorMessage('');
    setUserText(text);
    generateOutputInfo(text, selectedAuthor);
  };

  function handleOP(flag) {
    if (flag) {
      return (
        <>
          <p>{prediction}</p>
        </>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  const handleSubmit = () => {
    if (!inputText || !selectedAuthor) {
      alert('Please fill in both the text area and select an author before submitting.');
      return;
    }

    const author = authorsData.find((author) => author.id.toString() === selectedAuthor);
    const authorName = author ? author.name : '';
    setOutputInfo(`Text submitted: ${inputText} by ${authorName}`);
  };

  const generateOutputInfo = (text, authorId) => {
    const author = authorsData.find((author) => author.id.toString() === authorId);
    const authorName = author ? author.name : '';
    // setOutputInfo(`Story: ${text} by 
    //   <span style="color: ${author ? '#4CAF50' : 'black'};">${authorName}</span>`
    // );
  };

  return (
    <>
      <Navbar />
      <AppContainer>
        <FlexContainer>
          <LeftContainer>
            <TextareaContainer>
              <TextInputLabel style={{ color: 'white' }} id="labels">Enter Text</TextInputLabel>
              <br />
              <Textarea
                style={{ marginTop: '20px' }}
                area-label="maximum height"
                name="Soft"
                variant="soft"
                size="lg"
                placeholder="Enter Text"
                required
                type="text"
                minRows={3}
                maxRows={5}
                value={inputText}
                onChange={(e) => handleTextChange(e.target.value)}
                sx={{
                  opacity: 0.8,
                }}
              />
            </TextareaContainer>
            <AuthorsDropdown>
              <TextInputLabel style={{ color: 'white' }}>Authors</TextInputLabel>
              <br />
              <StyledSelect
                style={{ marginTop: '20px' }}
                value={selectedAuthor}
                onChange={(e) => handleAuthorChange(e.target.value)}
                displayEmpty
                required
                sx={{
                  opacity: 0.8,
                }}
              >
                <MenuItem value="" disabled>
                  <em>Select an author</em>
                </MenuItem>
                {authorsData.map((author) => (
                  <MenuItem key={author.id} value={author.id}>
                    {author.name}
                  </MenuItem>
                ))}
              </StyledSelect>
            </AuthorsDropdown>

            {/* Priority dropdown */}
            <AuthorsDropdown>
              <TextInputLabel style={{ color: 'white' }}>Priority</TextInputLabel>
              <br />
              <StyledSelect
                style={{ marginTop: '20px' }}
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                displayEmpty
                required
                sx={{
                  opacity: 0.8,
                }}
              >
                <MenuItem value="" disabled>
                  <em>Select a priority</em>
                </MenuItem>
                {prioritiesData.map((priority) => (
                  <MenuItem key={priority.id} value={priority.id}>
                    {priority.name}
                  </MenuItem>
                ))}
              </StyledSelect>
            </AuthorsDropdown>

            <ArrowButton type="submit" onClick={handlePredict} style={{ color: 'white', margin: '5%', marginLeft: '0%' }} variant="text">
              Submit
            </ArrowButton>
            {errorMessage && <ErrorMessage className="error-message">{errorMessage}</ErrorMessage>}
          </LeftContainer>
          <RightContainer>
            <Typography style={{ color: 'white', paddingLeft: '32%', paddingTop: '2%', paddingBottom: '2%' }} variant="h6">
              Output Information
            </Typography>
            <OutputInfoContainer elevation={3} className="info-box">
              <OutputInfoText dangerouslySetInnerHTML={{ __html: outputInfo }} />
              <div dangerouslySetInnerHTML={{ __html: prediction }} />
            </OutputInfoContainer>
          </RightContainer>
          <VideoBackground autoPlay muted loop>
            <source src={bgImage} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoBackground>
        </FlexContainer>
      </AppContainer>
    </>
  );
};

export default TryNow;