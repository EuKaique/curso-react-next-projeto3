import { LogoLink } from '.';

export default {
    title: 'LogoLink',
    component: LogoLink,
    args: {
        text: 'LogoLink',
        image: '',
        link: 'http://localhost'
    },
    argTypes: {
        children: { type: 'string' },
    },
}

export const ImageOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    )
}

export const TextOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    )
}

TextOnly.args = {
    image: ''
}
