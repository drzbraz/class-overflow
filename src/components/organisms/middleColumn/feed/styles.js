import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: 1px solid hsl(210deg 4% 26%);
`
export const LeftColumn = styled.div`
  width: 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--theme-dark-text);
  font-size: 1rem;
`
export const RightColumn = styled.div`
  width: 100%;
  height: auto;
  color: hsl(206deg 100% 60%);
  h3 {
    color: hsl(210deg 11% 89%);
  }
`
export const Gap = styled.div`
  height: 10ṕx;
  width: 100px;
  background-color: red;
`
export const Badges = styled.div`
  display: flex;
  max-width: 500px;
  height: auto;
  justify-content: space-between;
`

export const Badge = styled.div`
  width: 80px;
  height: 20px;
  background-color: hsl(205deg 14% 28%);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(205deg 47% 74%);
  font-size: 0.9rem;
`
export const Content = styled.div`
  height: 600px;
  width: 100%;
`

export const FeedPost = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  padding: 20px;
  border: 1px solid hsl(210deg 4% 26%);
`

export const Title = styled.p`
  font-size: 1.5rem;
  word-wrap: break-word;
`
export const PostContent = styled.div`
display: grid;
width: 916px;
height: 120px;
justify-content: center;
align-items: center;
padding: 32px 32px 32px 32px;
position: fixed;
top: 50px;
margin-bottom:100px;
background-color: hsl(0deg 0% 22%);
`
export const PublishPost = styled.div`
display: flex;
width: 916px;
padding: 0px 32px 0px 32px;


`
export const TagContent = styled.div`
  width: 916px; 
  font-size: 16px;
  color: black;
  top: 350px;
  --rti-bg: #fff;
    --rti-main: #3182ce;
    --rti-radius: 0.375rem;
    --rti-s: 0.5rem;
    --rti-tag: #edf2f7;
    --rti-tag-remove: #e53e3e;
    align-items: center;
    bg: var(--rti-bg);
    border-radius: var(--rti-radius);
    gap: var(--rti-s);
    line-height: 1.4;
    padding: var(--rti-s);
    background-color: hsl(0deg 0% 22%);
`