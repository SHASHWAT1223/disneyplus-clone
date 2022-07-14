import styled from 'styled-components';

const Login = (props) => {
return(
    <Container>
        <Content>
            <CTA>
                <CTAlogoOne src = "/images/images/cta-logo-one.svg" alt = "" />
                <SignUp>GET ALL THERE!</SignUp>
                <Description>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</Description>
                <CTAlogoTwo src = "/images/images/cta-logo-two.png" alt = "" />
            </CTA>
            <BgImage/>
        </Content> 
    </Container>
);
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no repeat;
background-image: url("/images/images/login-background.jpg");
position: absolute;
top : 0;
right: 0;
left: 0;
z-index: -1;
`;

const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`;

const CTAlogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-width: 1px;
display: block;
width: 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 2px;
font-size: 22px;
padding: 16px 0px;
border: 1px solid transparent;
border-radius: 4px;

&:hover{
    background-color: #0483ee;
}
`;

const Description  = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`

const CTAlogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`;

export default Login;
