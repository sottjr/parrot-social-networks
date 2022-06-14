import React from 'react';
import * as S from "./styled";

const Container = ({children}:{children:React.ReactNode}) => {
    return <S.Container>{children}</S.Container>;
}

export default Container;