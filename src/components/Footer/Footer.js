import React, {Component} from "react";
import {
  StyledAppleStoreBadge,
  StyledAppStoreBadgeWrapper,
  StyledContainerGridColumn,
  StyledCopyRight,
  StyledDivider,
  StyledEmailContent,
  StyledFooterWrapper,
  StyledGooglePlayBadge,
  StyledHeader,
  StyledInfoGridRow,
  StyledListItem,
  StyledListItemContact,
  StyledListWrapper,
  StyledSocialMediaButton,
  StyledSocialMediaContainer
} from "./styles";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Icon, Image} from "semantic-ui-react";
import List from "semantic-ui-react/dist/commonjs/elements/List";
import strings from "../../res/strings";
import {Link} from "react-router-dom";
import google_play from '../../res/images/google_play_badge.png';
import apple_store from '../../res/images/apple_store_badge.svg';
import wave_icon from '../../res/images/wave_icon.png'

class Footer extends Component {
  render() {
    return (
      <StyledFooterWrapper>
        <Grid relaxed='very'>

          <StyledContainerGridColumn computer={4} tablet={8} mobile={16}>
            <Image src={wave_icon} size='tiny'/>
            <StyledInfoGridRow>
              <StyledHeader>{strings.footer.aboutUs}</StyledHeader>
              <div>{strings.footer.aboutUsDescription}</div>
            </StyledInfoGridRow>
          </StyledContainerGridColumn>

          <StyledContainerGridColumn computer={4} tablet={8} mobile={16}>
            <StyledHeader>{strings.footer.companyTitle}</StyledHeader>
            <StyledListWrapper>
              <StyledListItem as={Link} to='/about'>{strings.footer.aboutUs}</StyledListItem>
              <StyledListItem as={Link} to='/faq'>{strings.footer.faq}</StyledListItem>
            </StyledListWrapper>
          </StyledContainerGridColumn>

          <StyledContainerGridColumn computer={4} tablet={8} mobile={16}>
            <StyledHeader>{strings.footer.contact}</StyledHeader>
            <StyledListWrapper>
              <StyledListItemContact>
                <List.Icon name='users'/>
                <List.Content>{strings.footer.companyName}</List.Content>
              </StyledListItemContact>
              <StyledListItemContact>
                <List.Icon name='map marker alternate'/>
                <List.Content>{strings.footer.location}</List.Content>
              </StyledListItemContact>
              <StyledListItemContact>
                <List.Icon name='mail'/>
                <StyledEmailContent href='mailto:lindahqr@gmail.com'>{strings.footer.email}</StyledEmailContent>
              </StyledListItemContact>
            </StyledListWrapper>
          </StyledContainerGridColumn>

          <StyledContainerGridColumn computer={4} tablet={8} mobile={16}>
            <StyledHeader>{strings.footer.products}</StyledHeader>
            <StyledAppStoreBadgeWrapper>
              <StyledGooglePlayBadge
                src={google_play}
                size='small'
                href='http://google.com'
                target='_blank'
              />
              <StyledAppleStoreBadge
                src={apple_store}
                size='small'
                href='http://google.com'
                target='_blank'
              />
            </StyledAppStoreBadgeWrapper>
          </StyledContainerGridColumn>
        </Grid>
        <StyledDivider/>
        <StyledSocialMediaContainer>
          <StyledSocialMediaButton
            circular
            icon
            href='https://github.com/lindaayangg/Wave-Web'
            target='_blank'
          >
            <Icon name="github"/>
          </StyledSocialMediaButton>
          <StyledCopyRight>{strings.footer.copyRight}</StyledCopyRight>
        </StyledSocialMediaContainer>
      </StyledFooterWrapper>
    )
  }
}

export default Footer;