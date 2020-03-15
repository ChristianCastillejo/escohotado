import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 3rem 2rem;
  max-width: 75rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;

export const ShareButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  justify-items: start;
  grid-gap: 0 3rem;

  h3 {
    grid-column: 1/3;
  }

  h5 {
    margin: 0;
  }
`;
export const ShareButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  align-content: start;
  justify-items: start;
`;

const facebookStyle = css`
  background-color: #4267b2;
`;

const twitterStyle = css`
  background-color: #38a1f3;
`;

const youtubeStyle = css`
  background-color: #c4302b;
`;

const instagramStyle = css`
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
`;
const getButtonStyles = props => {
  switch (props.color) {
    case "facebook":
      return facebookStyle;
    case "twitter":
      return twitterStyle;
    case "youtube":
      return youtubeStyle;
    case "instagram":
      return instagramStyle;
    default:
      return facebookStyle;
  }
};

export const SocialButton = styled.a`
  display: grid;
  align-items: center;
  justify-content: center;
  color: white;
  min-width: 10rem;
  min-height: 2.5rem;
  border: none;
  border-radius: 0.8rem;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0.4rem 1.5rem 0 rgba(0, 0, 0, 0.15);
  }

  ${getButtonStyles};

  @media (max-width: 50rem) {
    min-width: 8rem;
    min-height: 2.5rem;
  }
`;
