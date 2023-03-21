import { AreaAboutMeContainer, AreaCV, AreaSub, AreaTitle, 
    ButtonCv, 
    LeftCard, MeImage, RightCard, Subtitle, SubtitleColor, 
    TitleMe, TitleMeColor } from "./styled";


import me from '/public/images/me.png'
export function AboutMe() {

    return(

        <AreaAboutMeContainer>
            <LeftCard>
                <AreaTitle>
                    <TitleMe>Olá, tudo bem?!</TitleMe>
                    <TitleMe>Sou <TitleMeColor>Leonardo Cunha Soares</TitleMeColor></TitleMe>  
                </AreaTitle>
                <AreaSub>
                    <Subtitle>Tenho 20 anos, estudante de <SubtitleColor>Analise e desenvolvimento de Sistemas</SubtitleColor> e procuro</Subtitle>
                    <Subtitle>sempre aprender algo novo. Comecei na computação as 17 anos e ao longo da</Subtitle>
                    <Subtitle>minha jornada criei alguns projetos e adquiri um conhecimento que acredito que </Subtitle>
                    <Subtitle>deve ser compartilhado com outros.</Subtitle>
                    <Subtitle>Sou <SubtitleColor>Desenvolvedor Web Full Stack</SubtitleColor>, tenho experiência em Python, ReactJS, </Subtitle>
                    <Subtitle>ReactNative entre outras linguagens e frameworks. Espero que goste</Subtitle>
                </AreaSub>     
                <AreaCV>
                    <ButtonCv>View CV</ButtonCv>
                </AreaCV>             
            </LeftCard>
            <RightCard>
                <MeImage src={me} alt="Minha foto"/>
            </RightCard>
        </AreaAboutMeContainer>
    )
}