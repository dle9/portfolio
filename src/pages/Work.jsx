import * as React from 'react';
import { Typography, Button, Box, IconButton, useTheme } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { MachineWrapper } from '../styles/templates.jsx';
import {Bold} from '../styles/textStyle.jsx'

const screens = [
  { title: 'Malware Analysis Lab', description: 'Conducted malware analysis in a secure environment using FlareVM and Remnux. Tools used: Ghidra, IDA, x64dbg, Wireshark, and more.',link:'https://docs.google.com/document/d/16t379RAujg53cBQ-gbBr9gMfZgKMCISOQAbjxpQoioo/edit?usp=sharing' },
  { title: 'Virtual Homelab', description: 'Learned the basics of networking and network security using virtual machines. Tools used: Virtualbox, OPNSense, Suricata, Wazuh, Samba, Apache',link:'https://github.com/dle9/virtual-homelab' },
];

export default function Work() {
  const theme=  useTheme();
  const [currentScreen, setCurrentScreen] = React.useState(0);

  const handleNext = () => {
    setCurrentScreen((prevScreen) => (prevScreen + 1) % screens.length);
  };

  const handlePrevious = () => {
    setCurrentScreen((prevScreen) => (prevScreen - 1 + screens.length) % screens.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrevious();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const { title, description, link } = screens[currentScreen];

  return (
    <MachineWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="body3" component="h1" sx={{ mt: 25 }}>
          {title}
        </Typography>
        <Typography variant="body3" component="h1" sx={{ mt: 5 }}>
          {description}
        </Typography>
        <Typography 
          variant="body3" 
          sx={{ mt: 5, mb:15 }}
        >
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: theme.palette.highlight.bold }}
          >
            Link
          </a>
        </Typography>
        <Box sx={{ mt: 'auto', mb:15 }}>
          <IconButton onClick={handlePrevious} aria-label="Previous screen" sx={{ color:theme.palette.highlight.main, scale:"2" }}>
            <ArrowLeftIcon />
          </IconButton>
          <IconButton onClick={handleNext} aria-label="Next screen" sx={{ color:theme.palette.highlight.main,scale: "2" }}>
            <ArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
    </MachineWrapper>
  );
}

