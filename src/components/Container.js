
import styled from "styled-components";


const Container = styled.div`
      border: ${({ noBorder }) => (noBorder ? "0" : "1px solid  #282c3484")};
      display: flex;
      flex-flow: wrap;
      margin: 10px 10%;
      justify-content: center;
      padding: 1.5em;
      
`
export default Container;