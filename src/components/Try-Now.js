import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bgImage from '../assets/videobg.mp4';
import Navbar from './Navbar.jsx';
import { Select, MenuItem, Button, Paper, Typography } from '@mui/material';
import { Textarea } from '@mui/joy';

const authorsData = [
  { id: 1, name: 'William Shakespeare' },
  { id: 2, name: 'Anna Todd' },
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
  filter: brightness(40%);
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
  border: 1px solid #000;
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
  font-size: 15px;
  padding: 16px;
  margin-bottom: 16px;
  max-height: 300px;
  max-width: 500px;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 10px;
`;

const OutputInfoText = styled(Typography)`
  padding-left: 50px;
  padding-right: 40px;
  padding-bottom: 20px;
`;

const TryNow = () => {
  const [inputText, setInputText] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [outputInfo, setOutputInfo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showScrollbar, setShowScrollbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const nearNavbar = window.scrollY < 50;
      setShowScrollbar(!nearNavbar);
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
    generateOutputInfo(text, selectedAuthor);
  };

  const handleSubmit = () => {
    if (!inputText || !selectedAuthor) {
      alert('Please fill in both the text area and select an author before submitting.');
      return;
    }

    const author = authorsData.find((author) => author.id.toString() == selectedAuthor);
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

  return (<>
   <Navbar />
    <AppContainer>
      <FlexContainer>
        <LeftContainer>
          <TextareaContainer>
            <TextInputLabel style={{color:'white'}} id="labels">Enter Text</TextInputLabel>
            <br />
            <Textarea
            style={{marginTop:'20px'}}
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
            />
          </TextareaContainer>
          <AuthorsDropdown>
            <TextInputLabel style={{color:'white'}}>Authors</TextInputLabel>
            <br />
            <StyledSelect style={{marginTop:'20px'}}
              value={selectedAuthor}
              onChange={(e) => handleAuthorChange(e.target.value)}
              displayEmpty
              required
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
          <ArrowButton type="submit" onClick={handleSubmit} style={{color:'white',margin:'5%',marginLeft:'0%'}} variant="text">
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







// const authorsData = [
//   { id: 1, name: 'William Shakespeare' },
//   { id: 2, name: 'Anna Todd' },
// ];

// const Trynow = () => {
//   const [inputText, setInputText] = useState('');
//   const [selectedAuthor, setSelectedAuthor] = useState('');
//   const [outputInfo, setOutputInfo] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [showScrollbar, setShowScrollbar] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const nearNavbar = window.scrollY < 50;
//       setShowScrollbar(!nearNavbar);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleAuthorChange = (authorId) => {
//     setSelectedAuthor(authorId);
//     generateOutputInfo(inputText, authorId);
//   };

//   const handleTextChange = (text) => {
//     setInputText(text);
//     setErrorMessage('');
//     generateOutputInfo(text, selectedAuthor);
//   };

//   const handleSubmit = () => {
//     if (!inputText || !selectedAuthor) {
//       alert('Please fill in both the text area and select an author before submitting.');
//       return;
//     }

//     const author = authorsData.find((author) => author.id.toString() == selectedAuthor);
//     const authorName = author ? author.name : '';
//     setOutputInfo(`Text submitted: ${inputText} by ${authorName}`);
//   };

//   const generateOutputInfo = (text, authorId) => {
//     const author = authorsData.find((author) => author.id.toString() === authorId);
//     const authorName = author ? author.name : '';
//     // setOutputInfo(`Story: ${text} by 
//     //   <span style="color: ${author ? '#4CAF50' : 'black'};">${authorName}</span>`
//     // );
//   };

//   return (
//     <div className="app-container">
//       <div>
//         <Navbar />
//       </div>

//       <div className='flex-container'>
//         <div className="left-container">
//           <div className="text-input">
//             <label sx={{marginTop:'6px'}} id="labels">Enter Text</label>
//             <br />
//             <Textarea
//               area-label="maximum height"
//               name="Soft"
//               variant="soft"
//               size="lg"
//               placeholder="Enter Text"
//               required
//               type="text"
//               minRows={3}
//               maxRows={5}
//               value={inputText}
//               onChange={(e) => handleTextChange(e.target.value)}
//               sx={{
//                 '--Textarea-focusedInset': 'var(--any, )',
//                 '--Textarea-focusedThickness': '0.25rem',
//                 '--Textarea-focusedHighlight': 'rgba(13,110,253,.25)',
//                 '&::before': {
//                   transition: 'box-shadow .15s ease-in-out',
//                 },
//                 '&:focus-within': {
//                   borderColor: '#86b7fe',
//                 },
//                 marginBottom: '16px',
//                 fontFamily:'Helvetica Neue',
//                 fontSize: '18px',
//                 width:'100%',
//                 maxHeight:'200px',
//                 marginTop:'20px'
//               }}
//             />
//           </div>
//           <div className="dropdown" sx={{ border: '1px solid #000', borderRadius: '4px', marginTop: '40px' }}>
//             <label style={{marginTop:'30px'}}>Authors</label>
//             <br></br>
//             <Select style={{marginTop:'25px'}} value={selectedAuthor} onChange={(e) => handleAuthorChange(e.target.value)} displayEmpty
//               required
//               sx={{
//                 '&:focus': {
//                   borderColor: '#86b7fe',
//                 },
//                 '& .MuiSelect-outlined': {
//                   backgroundColor: '#fff',
//                   color: '#000',
//                   fontFamily: 'cursive',
//                 },
//                 '& .MuiOutlinedInput-notchedOutline': {
//                   borderColor: '#000',
//                 },
//               }}
//             >
//               <MenuItem value="" disabled><em>Select an author</em></MenuItem>
//               {authorsData.map((author) => (
//                 <MenuItem key={author.id} value={author.id}>
//                   {author.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </div>
//           <div className="arw">
//             <Button type="submit"  onClick={handleSubmit} variant="text" sx={{ marginBottom: '16px',marginTop:'35px', color: 'white'}}>Submit</Button>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//           </div>
//         </div>
//         <div className="right-container">
//             <div>
//             <Typography style={{color:'white',paddingLeft:'32%',paddingTop:'2%',paddingBottom:'2%'}} variant="h6">Output Information</Typography>
//             </div>
//           <Paper elevation={3} className="info-box" sx={{ fontFamily:"Helvetica Neue",fontSize:'15px', padding: '16px', marginBottom: '16px', maxHeight: '300px', maxWidth: '500px',overflow:'hidden', overflowY: 'scroll' ,overflowX:'hidden',marginTop:'10px'}}>
            
//             {/* <div className="putt"><h1></h1></div> */}
//              <div className='out'>
//               <Typography style={{paddingLeft:'50px',paddingRight:'40px',paddingBottom:'20px'}}  dangerouslySetInnerHTML={{ __html: outputInfo }} />
//             </div>
//             </Paper>
         
//         </div>
//         <video className='background-video' autoPlay muted loop>
//           <source src={bgImage} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default Trynow;
