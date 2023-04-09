import { SectionContainer } from '.';

export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                   Rem nulla ducimus illum explicabo sunt nemo voluptate natus cum voluptatem nisi?
                </p>
            </div>
        ),
    },
    argTypes: {
        children: { type: '' },
    },
}

export const Template = (args) => {
    return (
        <div>
            <SectionContainer {...args} />
        </div>
    )
}
