import styled from "styled-components";


export const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;

display: flex;
flex-direction: column;
gap: 50px;

@media screen and (min-width: 768px) {
flex-direction: row;
flex-wrap: wrap;
gap: 30px;
}
`;

export const ListItem = styled.li`
padding: 0;
border: solid black;
border-radius: 10px;
flex: 1 1 100%; 

@media screen and (min-width: 768px) {
flex: 1 1 calc()(50% - 15px);
}
@media screen and (min-width: 1024px) {
flex: 1 1 calc()(33.33% - 20px)
}
`;