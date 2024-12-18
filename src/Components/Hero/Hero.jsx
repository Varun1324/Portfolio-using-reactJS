import React from 'react'
import { Button, Pane, Text, Heading, Paragraph } from 'evergreen-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { PhoneIcon, EnvelopeIcon, DocumentOpenIcon, DownloadIcon } from 'evergreen-ui'
import './HeroStyles.css';
import {
    Popover,
    Position,
    Menu
} from 'evergreen-ui';
const Hero = () => {
    return (
        <div>
            <Pane display="flex" alignItems="center" border="1px" height="20rem" justifyContent="center" padding="25px" elevation={0} borderRadius="10px" backgroundColor="blackAlpha.50" className="custom-pane">
                <Pane elevation={1}><img src="https://res.cloudinary.com/durc5ydxo/image/upload/v1731398246/varun_tm8vap.jpg" alt="" width={250} height={250} className="inner-pane" /></Pane>
                <Pane display="flex" flexDirection="column" marginLeft="50px">
                    <Heading size={900} marginTop={10} color="white" id="text">
                        Varun Kodamanchili
                    </Heading>
                    <Text marginTop="5px" size={100} fontWeight="bold" color="white">Aspiring Full stack developer</Text>
                    <Paragraph marginTop={16} color="white" id="para">
                        To work in an environment which encourages me to succeed and grow professionally where I can utilize my skils and knowledge appropriately.
                    </Paragraph>
                    <Pane display="flex" width="50" alignItems="center" marginTop={25} gap="15px">
                        <a href="https://github.com/Varun1324" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareGithub} size="2x" color='white' />
                        </a>
                        <a href="https://www.linkedin.com/in/varun-kodamanchili-01881b23b/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" color='white' />
                        </a>
                        <Popover
                            position={Position.BOTTOM_LEFT}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item
                                            icon={DocumentOpenIcon}>
                                            View
                                        </Menu.Item>
                                        <Menu.Item icon={DownloadIcon}>Download</Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <Button marginRight={16} appearance="primary" intent="success">Resume</Button>
                        </Popover>
                    </Pane>
                    <Pane marginTop={25}>
                        <EnvelopeIcon size={15} color='white' margin="1px" /><Text color='white' id="text">   varunkodamanchili@gmail.com</Text>
                    </Pane>
                    <Pane marginTop={25}>
                        <PhoneIcon size={15} color='white' margin="1px" /><Text color='white' id="text">+91 9392671324</Text>
                    </Pane>
                </Pane>
            </Pane>
        </div >
    )
}

export default Hero