import {
  DescriptionWrapper,
  TitleWrapper,
  MainWrapper,
  ContentWrapper,
  Title,
  Content,
} from './index.styles';

function Description() {
  return (
    <DescriptionWrapper>
      <TitleWrapper>
        <Title>Mandalart</Title>
      </TitleWrapper>
      <MainWrapper>
        <Content>Manda(본질의 깨달음)</Content> +<Content>la(달성 및 성취)</Content> +
        <Content>art(기술)</Content>
      </MainWrapper>
      <ContentWrapper>본질을 깨닫는 기술, 목적을 달성하는 기술을 뜻합니다.</ContentWrapper>
      <ContentWrapper>
        가장 큰 주제 및 목표를 세우고 이에 대한 해결법, 아이디어, 생각 들을 확산해 나가는 형태로,
        <br />
        생각을 더욱 쉽게 정리하고 한 눈에 조합하여 확인할 수 있습니다.
      </ContentWrapper>
    </DescriptionWrapper>
  );
}

export default Description;
