import React from "react";
import { useTranslation } from "react-i18next";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import Fade from "react-reveal/Fade";

import {
  SocialMediaContainer,
  Container,
  SocialButton,
  ShareButtonsContainer,
  ShareButtons
} from "./socialMedia.styles";

const SocialMedia = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t("home.networks")}</h1>
      <Fade bottom cascade>
        <SocialMediaContainer>
          <div>
            <h3>Twitter</h3>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="aescohotado"
              theme="dark"
              options={{ height: "50vh" }}
            />
            <TwitterFollowButton screenName="aescohotado" />
          </div>
          <ShareButtonsContainer>
            <h3>{t("home.follow")}</h3>
            <ShareButtons>
              <h5>Antonio Escohotado</h5>
              <SocialButton
                href="https://www.facebook.com/AEscohotado/"
                color="facebook"
                target="_blank"
              >
                Facebook
              </SocialButton>
              <SocialButton
                href="https://twitter.com/AEscohotado"
                color="twitter"
                target="_blank"
              >
                Twitter
              </SocialButton>
              <SocialButton
                href="https://www.instagram.com/escohotado/"
                color="instagram"
                target="_blank"
              >
                Instagram
              </SocialButton>
              <SocialButton
                href="https://www.youtube.com/channel/UCks2FdxaBZZFl4PTBAGz4Jw"
                color="youtube"
                target="_blank"
              >
                Youtube
              </SocialButton>
            </ShareButtons>
            <ShareButtons>
              <h5>La Emboscadura</h5>
              <SocialButton
                href="https://www.facebook.com/emboscadura/"
                color="facebook"
                target="_blank"
              >
                Facebook
              </SocialButton>
              <SocialButton
                href="https://twitter.com/la_emboscadura"
                color="twitter"
                target="_blank"
              >
                Twitter
              </SocialButton>
            </ShareButtons>
          </ShareButtonsContainer>
        </SocialMediaContainer>
      </Fade>
    </Container>
  );
};
export default SocialMedia;
