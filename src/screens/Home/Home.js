import React, {Component} from "react";
import {Image} from "semantic-ui-react";
import {StyledComponentWrapper} from "../../res/styles";
import {
  StyledAppStoreBadgeWrapper,
  StyledGooglePlayBadge,
  StyledGridLeftColumn,
  StyledGridRightColumn,
  StyledGridWrapper,
  StyledSubTitleText,
  StyledTitleText
} from "./styles";
import strings from "../../res/strings";
import apple_store from '../../res/images/apple_store_badge.svg';
import google_play from '../../res/images/google_play_badge.png';
import wave_landing from '../../res/images/wave_landing.png';

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <StyledComponentWrapper>
        <StyledGridWrapper columns={2}>
          <StyledGridLeftColumn computer={7} tablet={16} verticalAlign='middle'>
            <StyledTitleText>{strings.homeScreen.title}</StyledTitleText>
            <StyledSubTitleText>{strings.homeScreen.subtitle}</StyledSubTitleText>
            <StyledAppStoreBadgeWrapper>
              <StyledGooglePlayBadge
                src={google_play}
                size='small'
                href='http://google.com'
                target='_blank'
              />
              <Image
                src={apple_store}
                size='small'
                href='http://google.com'
                target='_blank'
              />
            </StyledAppStoreBadgeWrapper>
          </StyledGridLeftColumn>
          <StyledGridRightColumn computer={9} tablet={16} verticalAlign='middle'>
            <Image src={wave_landing}/>
          </StyledGridRightColumn>
        </StyledGridWrapper>
      </StyledComponentWrapper>
    )
  }
}

export default Home;