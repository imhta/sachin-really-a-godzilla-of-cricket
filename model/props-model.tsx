export interface HeadProps {
  sm: string;
  b: string;
  reverse: boolean;
}

export interface ContentProps {
  p_title: string;
  h_title: string;
  learn_more_link: {
    url: string,
    title_text: string;
  }
}
export interface CardsProps {
  cards: {
    p_title1: string,
    h_title: string,
    p_title2: string
  }[];
  footer_text: string;
  isEnd: boolean;
}