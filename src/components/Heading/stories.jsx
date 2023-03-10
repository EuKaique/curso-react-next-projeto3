import {Heading} from './index.jsx';

export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'O texto está escuro',
    },
    argTypes: {
        children: {type: 'string'},
    },
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
}

export const Dark = (args) => <Heading {...args} />
export const Light = (args) => <Heading {...args} />

Light.parameters = {
    backgrounds: {
        default: 'light'
    }
}

Dark.args = {
    children: 'O texto está claro',
    colorDark: false
}