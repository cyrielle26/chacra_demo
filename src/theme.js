import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button, Modal } = chakraTheme.components;

const components = {
    Button,
    Modal,
};

const fonts = {
    fonts: {
        heading: `'Noto Sans KR', sans-serif`,
        body: `'Noto Sans KR', sans-serif`,
      },
}

const _theme = extendBaseTheme({
    components,
    fonts,
    
});

export default _theme;
