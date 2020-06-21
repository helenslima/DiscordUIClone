import React from 'react';
import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="geraldinho" />
            <ChannelButton channelName="tech_dojo" />
            <ChannelButton channelName="artattack" />
            <ChannelButton channelName="bot" />
            <ChannelButton channelName="tático" />
        </Container>
    );
};

export default ChannelList;