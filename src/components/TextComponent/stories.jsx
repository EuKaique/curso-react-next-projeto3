import { TextComponent } from '.';

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Exercitationem quidem corrupti fugit facere eos! Aliquid ratione animi eligendi? 
        Provident, officia? Expedita nam totam temporibus sequi doloremque excepturi iusto 
        facere qui.`,
    },
    argTypes: {
        children: { type: 'string' },
    },
}

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    )
}